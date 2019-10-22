---
layout: post
title: SFDX for Admins and App Builders
tags: sfdx, git, cicd
---

You're in the flow, building the next big app on the Salesforce Platform. You set up your Custom Objects. You add the specified list of custom fields of with the correct data types. You carefully craft validation rules. Your attention to detail on your page layouts is immaculate. Your process builders and flows will delight your users. It's all coming together into something that will help you help your customers. You don't want to stop every time you create something write down what you just built. But, if you wait until the end, something is bound to get left out when you put together your changeset. What if there were tools that tracked your every change? What if these tools were made for humans and not robots? What if these tools were free for any one to use?

To all the Admins and App Builders out there feeling left out of the SFDX craze, this blog is for you. If you want to leverage cutting edge tools to build the next awesome app on the Salesforce Platform, keep reading. If you know firsthand that changesets are #whyAdminsDrink, your liver will thank you. If you want to do all this using clicks, not code, you're in for a treat. This is a step-by-step guide to getting you out of sandboxes and into scratch orgs. 

There are a few prerequisites. You're going to need a Dev Hub. You can either [sign up](https://developer.salesforce.com/signup) for your own "Developer" edition org, then [enable Dev Hub](https://developer.salesforce.com/docs/atlas.en-us.sfdx_setup.meta/sfdx_setup/sfdx_setup_enable_devhub.htm) from setup. Alternatively, if you have colleagues that are already using SFDX, ask them to hook you up with access. 

Next, you're going to install a bunch of cool tools on your computer.

### Installation Nation

* [SFDX](https://developer.salesforce.com/tools/sfdxcli) 
* [VSCode](https://code.visualstudio.com/Download) 
* [Salesforce Extension Pack for VSCode](https://developer.salesforce.com/tools/vscode/en/getting-started/install)  

There are great installation guides at each of those links. Download the installers and follow the prompts.

### Organization without an Organization

As a Salesforce Admin / App Builder, you think in terms of orgs. You build stuff in an org, you move that stuff between orgs using changesets. With SFDX, you organize your metadata in a project and you move that metadata between orgs by pushing and pulling with SFDX. Under this new paradigm, orgs don't matter as much. They're just a tool to build stuff in. In fact, scratch orgs are specifically designed to be throw away. They only last a day, 30 days max. The metadata is what's important and you can put metadata in any org. SFDX projects allow you to organize your metadata in a group of files and folders. VSCode's explorer tool makes it easy to view these files.

VSCode is going to be our base. It has a handy little widget called the Command Palette. You can access the palette by clicking on the View part of the menu, then selecting Command Palette. It's worth learning the keyboard shortcut for this one. 

![VSCode Command Palette](/images/command-palette.png)

Start typing "SFDX" into the command palette. You'll see a ton of commands. You don't have to memorize all of them. Think of it like the Setup menu in Salesforce. You probably just use the Quick Find search box whenever you need something and you'll treat the command palette the same way. For now, you need to find the "SFDX: Create Project" command. You can arrow down and hit enter or click on it when you see it. You'll be asked to go through a few prompts.

1. Project Template: standard
2. Project Name: call it what you like
3. Select Folder: this is where the project is going to live on your computer. I recommend creating a folder where you store all your sfdx projects and keep them all in there. Where you store it on your computer is entirely up to you.

Once you've selected the folder where this project is going to live, you're brought back to VSCode with your brand new SFDX project. We'll poke around later, but let's move on to the next step.

### Hub Hook Up

Open your command palette in VSCode and find "SFDX: Authorize a Dev Hub". That should open your default browser to the Salesforce Login page. You'll want to log in to the DevHub enabled org you setup way back when. If you skipped that step, that's ok. You only have to do this part once, so go take care of that now. There's a handy link up top.

All the boring, one-and-done stuff is over. If you use this blog as a reference, you can start from here. 

### Scratch That

Time to spin up a fresh instance of Salesforce. You know what to do. Open the command palette and find "SFDX: Create a Default Scratch Org". You'll be asked to go through a few prompts. You can hit enter for all of them, accepting the defaults or tweak them to your desires.

![prompt screen](/images/prompt-screen.png)

1. Template Path
2. Alias
3. Lifetime

Salesforce launches some robots to go create your scratch org. It takes them anywhere from a few seconds to a few minutes. They have a lot of hoops to jump through, red tape to cut, so be patient with them. It's a thankless job.

You should see a little assurance of success down in the right corner of your screen.

![extension success](/images/extension-success.png)

Let's go have a look at our newly minted scratch org. You guessed it. Open the command palette and find "SFDX: Open Default Org". That should open your default browser to the Setup of your fresh new Scratch Org. 

Now, go crazy. Build custom objects. Keep your data clean with Validation Rules. Change it up with Page Layouts. Automate the boring stuff with Process Builder. Delight your users with a new Flow. 

### Bringing Appy Back

You've just built the coolest app to exist on the Salesforce Platform in this scratch org. While this scratch org is ephemeral, your hard work isn't. Let's bring all the metadata from our scratch org into our SFDX Project. To do that, we're going back to VSCode and, drum roll please, opening the command palette. This time find "SFDX: Pull Source from Default Org". 

Along the left-hand side you'll see a few buttons. The top one should be "Explorer" which is pretty much like Finder or File Explorer, but it only shows you the folders and files in your current project. Let's go explore our files. Everything you built in your scratch org is represented in a file under force-app > main > default > (metadata type)

![VSCode Explorer](/images/vscode-explorer.png)

Click around and you'll see how metadata looks in file form. These files are the soul of your Salesforce app. When your scratch org dies and goes to scratch org heaven, the soul of your project lives on and can be pushed into another org. 

### Go on, brush your shoulders off

You've done it! You've created your first SFDX project and pulled your work from a Scratch Org. You didn't have to track a single thing, because SFDX did it for you. And you didn't have to use code or even touch the command line.

For the TL;DR folks here's what you do:

* Install VSCode, SFDX, and SFDX VSCode Extension
* Open the VSCode Command Palette then
  * SFDX: Create Project
  * SFDX: Authorize a Dev Hub
  * SFDX: Create a Default Scratch Org
  * SFDX: Open Default Org
  * SFDX: Pull Source from Default Org






























