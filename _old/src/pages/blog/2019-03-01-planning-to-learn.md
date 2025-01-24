---
templateKey: "blog-post"
title: "Planning to Learn"
date: 2019-03-01T00:00:00.000Z
featuredpost: true
featuredimage: /img/planning-to-learn.png
description: >-
  Learning new skills can be a difficult, daunting task. Especially knowing where to start when you haven’t ventured into a topic before. How do you normally begin the learning process? Do you Google…
tags:
  - typescript
  - javascript
  - learning
---

Learning new skills can be a difficult, daunting task. Especially knowing where to start when you haven’t ventured into a topic before. How do you normally begin the learning process? Do you Google and see what you can find? Tweet for ideas? Search for others who have gone down this route before or pickup a book?

That initial phase of learning new topics can feel frustrating and inefficient. At least, I was experiencing those feelings recently learning Typescript. I had started a new job where TypeScript was used across the majority of the codebase.

So I started to dig into the subject of learning and came across an article by [Isabel Nyo](https://twitter.com/eisabai) titled [Common Learning Mistakes That Developers Make And How to Avoid Them](https://hackernoon.com/common-learning-mistakes-that-developers-make-and-how-to-avoid-them-77de2155ce45). I’ll let you read Isabel’s article, but there was one section in particular that stuck out at me: Learning Plans.

Isabel’s article references the saying, “if you fail to plan, you plan to fail”. When I asked above what your approach to learning a new topic or skill is, mine was to dive in and experience a lot of frustration until things start to get clearer as I learn more.

I couldn’t take that approach this time. I needed to be more efficient for various reasons with the big reason being reduced free time due to a new addition to our family.

## What is a learning plan?
Learning Plan can be a broad phase, including training at an organisation level right through to personal learning. For the purpose of this article, the focus is personal Learning Plans, specifically for TypeScript. But these skills are transferable to most anything.

With that in mind, a Learning Plan is a document that is used to plan learning… Right. The title probably gave a lot of that way.

There’s more to it though, a Learning Plan provides a structured approach to for focused, effective learning. That structure takes the following form:

<ul>
	<li>
		<strong>Learning Goals and Timeframe</strong><br>The plan should contain a set of learning goals and time frame to achieve the goal.<br>Learning goals are what you hope to achieve, for example: ‘Gain an understanding of the basic concepts of TypeScript’,
	</li>
	<li>
		<strong>Actions</strong><br>There should be a set of actions to take to achieve your goal. For example: “Understand enums”,
	</li>
	<li>
		<strong>Resources</strong><br>To complete actions, you need resources. If the action is to understand TypeScript enums then you could have links to blogs, videos or books needed to gain that understanding,
	</li>
	<li>
		<strong>Evidence</strong><br>Evidence demonstrates understanding of the goal. Possible evidence includes a mentor, tests or completing tasks that demonstrate understanding.
	</li>
</ul>

It’s important to keep your goal achievable, avoid it becoming overly complex and losing motivation. For example, “Learn everything there is to know about TypeScript” is not an achievable goal, in comparison “Gain an understanding of the basic concepts of TypeScript” gives you a clear, achievable goal.

## TypeScript learning plan
Now we know what a Learning Plan is and what is required for a Learning Plan, I’ll demonstrate the process I used for creating a TypeScript Learning Plan.

### Goal
The goal has been mentioned a few times but lets formalise it. The goal of our learning plan is:

**“Learn and gain a basic understanding of TypeScript”**

Our goal is achievable and trackable, we aren’t attempting to learn every feature in TypeScript but gain enough knowledge to start converting an existing JavaScript project or continue with an existing project.

The timeframe for our Learning Plan is one month. You might want more time or less, it’s not about how long it should take but how long you are giving to the goal. I really want to drive this point home because I believe it’s important, that doesn’t mean you will completely understand and know everything about TypeScript but in a month could be comfortable with the concepts and ready to use and solidify those concepts.

### Actions
It can be difficult to determine actions when you haven’t tackled TypeScript before, I found now is a good time to research a resource that will help outline actions. A great starting place was TypeScript’s handbook. Here is where I created a list of what is considered the basic concepts of TypeScript:

<ul>
	<li>Understand:<br>Basic Types,<br>Interfaces, and<br>Functions</li>
	<li>Understand: Enums</li>
	<li>Understand: Classes</li>
	<li>Understand: Generics</li>
	<li>Understand: Iterators and Generators</li>
	<li>Understand:<br>Type Inference<br>Type Compatibility</li>
	<li>Understand: Advanced Types</li>
	<li>Understand:<br>Modules<br>Namespaces</li>
	<li>Understand: JSX (optional: if using)</li>
</ul>

Great, we know the actions to achieve our goal. Next up is the resources that will make the actions…actionable.

### Resources
Generally there isn’t a lack of resources available but I wanted quality over quantity and continuity. Continuity because when researching Learning Plans the suggestion was to have a mentor, if I could find a resource with continuity than that would be similar to a mentor. Luckily in my work there are also plenty of TypeScript mentors available to help out too. If you do have access to a mentor, then that’s a great first resource.

So there’s the aforementioned TypeScript Handbook which is a great resource. I wanted at least one more resource, I did some Googling to find popular recommendations and one resource that repeatedly came up in my search was [TypeScript Deep Dive](https://basarat.gitbooks.io/typescript/content/docs/getting-started.html) by [Basarat Ali Syed](https://twitter.com/basarat). What was quite fortunate was Basarat’s book sections lined up with each of the actions of the goal.

My process for finding resources was to Google, skim read through to see if it covered the actions of my goal and to see if it made sense. Remember though, no coding at this point, it’s collecting information.

It turns out I wasn’t the only one searching for TypeScript resources. It isn’t hard to find folks tweeting out for the best available resources:

<blockquote class="twitter-tweet" data-lang="en"><p lang="en" dir="ltr">So, I&#39;ve not taken time to learn TypeScript, but it&#39;s hard to ignore at this stage.<br><br>A while back I tried Flow, but that did not go well. <br><br>I&#39;m focusing this afternoon on familiarizing myself with TypeScript and seeing how that goes.<br><br>Are there any resources you recommend?</p>&mdash; Elijah Manor (@elijahmanor) <a href="https://twitter.com/elijahmanor/status/1080924351266865153?ref_src=twsrc%5Etfw">January 3, 2019</a></blockquote>

There are useful links and resources in the threads but the problem is they can be lost, repeated or dated. So it helps to start keep your resources together. Which is what we we tackle next now that we have our trusted resources.

## Putting it together
At this point we have our goal, actions and resources, I organised them in a markdown file, pushing it up to GitHub, that’s where you can find the [TypeScript Learning Plan](https://github.com/antonjb/TypeScript-Learning-Plan). GitHub, or similar, is great place for Learning Plans because it’s open source and available for the community. This line from the Wikipedia article is a good reason for making your Learning Plan open:

> The active development and maintenance of a learning plan can enrich a person’s life and the sharing of learning plans can help to strengthen a community.

To summarise, the Learning Plan doesn’t need to be fancy, we still haven’t coded anything, but make it freely available for everyone to benefit and contribute.

## What worked well
The good side of having a learning plan is focus. I’m not searching for information and I have a plan to follow. All the hard work of planning and research is done. It was just up to working through each of the actions and seeing that progress toward the goal. When you see yourself progressing in your goal, that is incredibly motivating.

If your Learning Plan is open source it becomes a living document. As the language/framework progresses so too does the Learning Plan. If a better resource becomes available then it can be added to the action to help those that come next or when you refresh on a concept.

## What didn’t work
In the “What is a Learning Plan” section, a requirement of Learning Plans was evidence. A way to demonstrate understanding of the action. As I was working through each action I wrote a test, that you then completed, but I found this distracted me from learning. Also someone who just learnt this action may not be the best person to write a test. Instead, I found value in what others had created within the resource examples and attempt to recreate the examples or build upon them without having to reread the section, thus providing myself with the evidence of understanding the action.

## Conclusion
When I started down this path I had one goal; “To learn and gain a basic understanding of TypeScript”. Looking back I feel the Learning Plan helped me accomplish my goal and my next goal will be working on a new Learning Plan to extend my TypeScript knowledge. If you are interested, the [Learning Plan is freely available on GitHub to use!](https://github.com/antonjb/TypeScript-Learning-Plan)

If you found this guide useful and create a Learning Plan then please share it with me. I’m keen to see how other approaches and what you learn too!

## Where to from here?
I would love constructive feedback from the TypeScript community, particular those who have spent time with TypeScript to see whether the order of actions matches your experience with the best way to learn TypeScript. I’d be super keen on seeing if there are more resources available and ways to provide the evidence of understanding the action.

Beyond TypeScript, I’d love to see more Learning Plans available for the community. There are so many great topics that would benefit from something like this. CSS Grid, variable fonts, Unit Testing, React, Hooks and so much more.
