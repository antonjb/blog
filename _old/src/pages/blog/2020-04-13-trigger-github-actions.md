---
templateKey: "blog-post"
title: "Trigger GitHub actions with Azure DevOps Pipelines"
date: 2020-04-13T00:00:00.000Z
featuredpost: true
featuredimage: /img/github-actions-azure/github-azure-hero.png
description: >-
  Learn how to trigger GitHub Actions from within your Azure DevOps pipeline using GitHub’s repository dispatch event and Azure’s invoke REST API action.
tags:
  - azure
  - github
  - actions
---

DDDPerth’s website team are in the midst of a site refresh. There are many goals guiding the refresh but a significant one was gaining insight, and improving, our performance and accessibility.

A convenient method to gather these metrics is an automated step within the CD process. There’s a few services to choose from but we opted for Lighthouse-CI. It has a [GitHub Action](https://github.com/treosh/lighthouse-ci-action), making setup quick and easy, and Lighthouse scores provided the desired metrics. With that settled, how would this work in our pipeline?

From GitHub’s documentation:
> You can use this endpoint to trigger a webhook event called repository_dispatch when you want activity that happens outside of GitHub to trigger a GitHub Actions workflow or GitHub App webhook.

Perfect. The POST endpoint is `/repos/:owner/:repo/dispatches`. Replacing `:owner` and `:repo` for your GitHub username and repository name. The endpoint requires an event\_type string parameter, this is the name of the event. There’s also an optional client_payload JSON object parameter if you want to send extra information. Say for configurable Actions.

## Configure the action
The repo’s actions will live in the workflows directory and have a YAML configuration file. Setting the `on` attribute to `repository_dispatch` enables the action to be triggered when the repository dispatch event endpoint is called.

```yaml
on: [repository_dispatch]
```

With the on event defined it’s possible to test at this point by hitting that endpoint in an application like Postman. If successful you should see the Action in the repo’s workflow run page.

## Azure DevOps
DDDPerth’s build pipelines are in Azure DevOps but if you’re able to call a REST endpoint then you’ll be able to achieve the same in other systems.

## Calling a rest endpoint in Azure
Navigate to your build tasks and, if you don’t yet have an agentless job, you’ll need to add one.
Select the three dots and choose “Add an agentless job”.

![Azure DevOps task interface. Drop down menu showing three options. The last being Add an agentless job](/img/github-actions-azure/github-azure-001.png)

Add a task to your agentless job, choosing “Invoke REST API”.

## Configure REST API task
We need to authenticate to the GitHub API. A good way to do this is creating a generic service connection for the GitHub API (https://api.github.com/).

The account that has at least write access to the repository is the username. The password will be a personal access token you create. Read through [GitHub’s documentation for personal access tokens](https://help.github.com/en/github/authenticating-to-github/creating-a-personal-access-token-for-the-command-line). The scope, or permission, of the token needs to be `public_repo`.

The remaining settings set the method to POST, the content-type header as application/json and the body to have the required event\_type parameter.

![Invoke REST API interface showing DDDPerth's setup for calling GitHub dispatch event endpoint](/img/github-actions-azure/github-azure-002.png)

With this task in your pipeline it will now trigger the GitHub action each time the task runs. In the case of DDDPerth that means Lighthouse-ci tests are run during each deployment.

## TL;DR
1. Add GitHub action
2. Action’s on event: `on: [repository_dispatch]`
3. Agentless Job in Azure DevOps build task
4. Invoke REST API task
5. GitHub Access Token with scope `public_repo`
6. POST https://api.github.com/repos/:owner/:repo/dispatches
7. Content-Type: “application/json”
8. Body: { “event\_type”: “EVENT_NAME” }

## Thanks
I did not go into this with experience of Azure DevOps. So thanks to my DDDPerth teammates, [Rob Moore](https://twitter.com/robdmoore) and [Mo Zaatar](https://twitter.com/MZaatar) for pairing with me on the Azure side. And to those that gave valuable input when I asked on Twitter, [Amy Kapers](https://twitter.com/Amys_Kapers) and [Edward Thomson](https://twitter.com/ethomson).

## Resources
* [Invoke HTTP REST API task - Azure Pipelines](https://docs.microsoft.com/en-us/azure/devops/pipelines/tasks/utility/http-rest-api?view=azure-devops)
* [GitHub: Repository Dispatch Event](https://developer.github.com/v3/repos/#create-a-repository-dispatch-event)
* [Creating a personal access token for the command line](https://help.github.com/en/github/authenticating-to-github/creating-a-personal-access-token-for-the-command-line)
