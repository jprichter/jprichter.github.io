---
layout: post
title: WhatsApp on Salesforce
tags: platform-events, lwc, mdt, custom-metadata, twilio, webservices, api, integrations
---

Every day, WhatsApp users send about [65 billion messages](https://www.cnet.com/news/whatsapp-65-billion-messages-sent-each-day-and-more-than-2-billion-minutes-of-calls/). Wouldn't it be cool if Salesforce Customers could get in on this action? This blog explores how we, a fictional company named Hiking Gear Ltd. (HGL), made that a reality. 

Let's say we have a Customer named Joan. She wants to ask us here at HGL how to set up the new tent she bought from us. WhatsApp is her messaging platform of choice. Marcus is an HGL Customer Success rep who loves helping people set up their tents. We're going to put together a custom solution which will allow Marcus to send and receive Joan's WhatsApp messages inside Salesforce. We'll use a bunch of interesting parts of the Salesforce Platform: Platform Events, Custom Metadata Types, Lightning Web Components, a public RESTful API service and a callout to Twilio's APIs. There's a link to a github repo below with a working demo, but before diving head first into code, let's walk through HGL's solution. 

### WhatsApp, brought to you by Twilio

Twilio helps developers sends SMS and now, WhatsApp messages. Since HGL already has a Twilio account which we use to send SMS, we can set up WhatsApp for our business in minutes. 

Twilio uses [Webhooks](https://en.wikipedia.org/wiki/Webhook), a technology that says, "Don't call us, we'll call you." This means we don't have to ask, "Hey, did we get any messages lately?" We just give Twilio an endpoint and they'll hit it with a POST request whenever we do. We just need to setup that endpoint with an [Apex Web Service](https://trailhead.salesforce.com/en/content/learn/modules/apex_integration_services/apex_integration_webservices). The web service takes the parameters from Twilio and creates a TwhatsApp Message, which is a Custom Object we'll use to store our WhatsApp messages in Salesforce.

```
@RestResource(urlMapping='/receive')
global with sharing class TwhatsAppService {
    
    @HttpPost
    global static String doPost() {
        RestRequest req = RestContext.request;
        List<TwhatsAppMessage__c> inserts = new List<TwhatsAppMessage__c>();
        inserts.add(new TwhatsAppMessage__c(
            To__c = req.params.get('To'),
            From__c = req.params.get('From'),
            Body__c = req.params.get('Body'),
            Inbound__c = true
        ));
        insert inserts;
        return 'success';
    }
}
```
We [can expose](https://developer.salesforce.com/blogs/developer-relations/2012/02/quick-tip-public-restful-web-services-on-force-com-sites.html) this RESTful Web Service using Force.com Sites and the class from the snippet above. Make sure you consider the security risks of such a service -- the code in this project does **not**. 

At this point, we have the ability to receive WhatsApp Messages in Salesforce. Progress! We can view them as records in Salesforce, but we can't reply and it's not very chat-like.   

### Lightning Utility 

When Joan contacts us, where will Marcus be monitoring for messages, waiting to reply to every new message? Well, where do Customer Service reps hang out in Salesforce? If you're thinking Lightning Service Console, then you probably know a thing or three about customer service. But where exactly in the Service Console? If you're thinking a Lightning Component on the Utility Bar, then maybe you have ESPN or something. 

Lightning Web Components (`lwc`) are the coolest thing since, well, Lightning Aura Components. However, you can't (yet) put `lwc` directly on a utility bar. A Lightning Aura Component can, so we'll have an aura component interface with the utility bar and `lwc` will take care of the rest. 

```
<aura:component implements="lightning:utilityItem">
    <c:twhatsAppMessaging />
</aura:component>
```

Now we have a component that can send and receive WhatsApp messages in a chat interface. Whenever a message comes in, Marcus just needs to refresh the page and ... wait a second. What?! That's not how chat works. We need a notification so Marcus knows there's a new message without hitting the refresh manually.

### If an Event happens on the Platform...

[Platform Events](https://developer.salesforce.com/docs/atlas.en-us.platform_events.meta/platform_events/platform_events_intro.htm) allow us to do just that. Remember that web service that creates a new TwatsApp Message? We're going to create a trigger on that object which will publish a corresponding TwatsApp Event.

```
trigger TwhatsAppMessage on TwhatsAppMessage__c (after insert) {

    List<TwhatsApp_Message__e> evts = new List<TwhatsApp_Message__e>();
    for (TwhatsAppMessage__c each : Trigger.new) {
        if (each.Inbound__c) {
            evts.add(new TwhatsApp_Message__e(
                Body__c = each.Body__c,
                From__c = each.From__c,
                To__c = each.To__c,
                Inbound__c = each.Inbound__c
            ));
        }
    }

    List<Database.SaveResult> results = EventBus.publish(evts);
}
```

Platform Events allow other parts of the Platform to sit back and listen for when stuff happens, then react accordingly. We don't need to have Marcus banging away on the refresh button waiting for Joan to ask for help. Platform Events will tell him! 

But how, exactly, can a Platform Event interact with a real life human? There are a couple of layers still to go. We're going to use the `lightning/empApi` in our own custom `lwc`. We import the module, subscribe to the right channel, and show a toast whenever a TwhatsApp Message rolls in.

```
import { LightningElement } from 'lwc';
import { subscribe } from 'lightning/empApi';

export default class twhatsAppNotification extends LightningElement {
    channelName = '/event/TwhatsApp_Message__e';

    // auto subscribe
    connectedCallback() {
        // Callback invoked whenever a new event message is received
        const messageCallback = function(response) {
            // show toast code goes here
        };

        // Invoke subscribe method of empApi. Pass reference to messageCallback
        subscribe(this.channelName, -1, messageCallback);
    }
}
```
Here's what it looks like in action. 

![gif of TwhatsApp](/images/twhatsApp-in-action.gif)

### Putting it all together

When Joan sends a WhatsApp message to HGL, Twilio receives that WhatsApp message and sends a POST to HGL's web service. The web service creates a TwhatsApp message in HGL's Salesforce org. That triggers a Platform Event to fire. Marcus, HGL's Customer Service rep, is using Lightning Service Console with the TwhatsApp Messaging lightning component on the Utility bar. Mere milliseconds after Joan sends her message, Marcus sees a toast message, alerting him of Joan's question. He reads her question and writes back explaining it all in easy to digest messages. The messages are sent back via Twilio's APIs to Joan's WhatsApp number and she receives those messages on her phone. Joan is happy. Her new tent will protect her from the elements while she enjoys the great outdoors.

### Takeaways

Webhooks, Platform Events, and JavaScript Events are powerful technologies for developing loosely coupled components. With them, you can develop components that work separately, yet together -- components that leverage each other without becoming dependent. If you want to dig more into the code for the demo project behind this blog, check out the [repo.](https://github.com/jprichter/twhatsapp-sf)

### Epilogue

The project behind this blog was written before the Winter '20 release. With Winter '20, there is a pilot for [WhatsApp as a channel for Messaging](https://releasenotes.docs.salesforce.com/en-us/winter20/release-notes/rn_messaging_service_whatsapp.htm) which makes this whole project outdated before it's even been released. Not that this project was production ready anyhow. It was more about me scratching a few itches on the Salesforce Platform. 
