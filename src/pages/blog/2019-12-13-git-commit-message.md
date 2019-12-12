---
templateKey: "blog-post"
title: "Saving history in Git commit messages"
date: 2019-12-13T00:00:00.000Z
featuredpost: true
description: >-
  How can your Git Commit message save you later?
tags:
  - git
  - tips
---

It's highly likely that you're using Git for versioning control in a project you're working on. It often doesn't matter the size of the project, from side project through to large-scale enterprise applications and everything in-between.

When it comes time to commit a feature branch we might not always put the most effort into what that commit message is. It can be the last step in the process and we want to get the code up for review and shipped after all.

Take a look at this commit message to my blog:

> Adds JSON React Layouts article

I get an idea of what I did, there's just no detail as to why. Conversely, this commit when I converted a page to TypeScript and added semantic meaning to the pages:

> Converted page to TypeScript, improved semantic meaning
>
> Missed one of the pages when I did the TypeScript conversion, so the blog
> index is now also TypeScript and simplified.
>
> Converted the blog date to a time element to improve the semantic meaning.
> Added styles to the blog roll items to help that.
>
> Made the post feature image a link into the blog post to make it easier
> to access blog posts

This message provides an introduction and detail about the changes and why they were made.

The structure of the message is:
1. Short summary covering the commit's purpose
2. Detailed explanation about why the change was made

I like the analogy used in [BitBucket's documentation](https://www.atlassian.com/git/tutorials/saving-changes/git-commit)
> It is a common practice to use the first line of the commit message as a subject line, similar to an email. The rest of the log message is considered the body and used to communicate details of the commit change set.

A standard, though not enforced, is 50 characters for the title and around 72 character per line in the body.

Why is this structure useful to commit messages?

## Retaining history
With a short summary used, it's not always clear why we took that action. You have no doubt experienced this upon returning to old code sometimes months (sometimes minutes...) later and not understanding why it's like this.

You can't rely on tickets remaining. If you add a ticket number to the message, there's no guarantee it'll be there later. Project's change systems, you change the way tickets are numbered and they become difficult to track down, relying on another source for your information.

## Quicker Pull Request creation
When using a UI for pull requests, such as GitHub or BitBucket, they understand this format and will automatically take the summary and use that as the title and body. You then don't have to spend time writing information. I'll typically add detail that isn't necessary for the commit message, such as where you might need your team's help or what file to start reviewing.

![Figure 1. GitHub's interface automatically populated with the commit message](/img/git-messages/commit.png)

Here's the git commands to start adding more detail so you can thank yourself later:

```bash
git commit
```

Running the above will open up your default editor, often Vim or similar, though I have changed mine to VSCode. You type in the detail and save and close the editor.

You can also achieve it directly in the commandl ine using the --message (-m) option, with each message becoming a new paragraph.

```bash
git commit --message="Title" --message="Body Paragraph one" --message="Body paragraph two"
```

If you have ever looked back through your commit history and wondered why a change was made or work in a team and need to quickly understand a group of changes then you might really appreciate adopting this approach to Git Commit messages. You might thank yourself later.

### Resources
* https://www.atlassian.com/git/tutorials/saving-changes/git-commit
* https://git-scm.com/docs/git-commit
* https://tbaggery.com/2008/04/19/a-note-about-git-commit-messages.html
