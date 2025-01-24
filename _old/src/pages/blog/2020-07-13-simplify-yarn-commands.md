---
templateKey: "blog-post"
title: "Simplifying Yarn Start Commands"
date: 2020-07-13T00:00:00.000Z
featuredpost: true
featuredimage: /img/yarn-start.jpg
description: >-
  We wanted our projects to be quick to install and begin development. The goal was to need nothing more than running yarn and yarn start. Here’s how we simplified starting our mono repo using a couple of open source tools.
tags:
  - yarn
  - npm
---

Photo by [Tara Evans](https://unsplash.com/@taradee) on [Unsplash](https://unsplash.com/@taradee)

We wanted our projects to be quick to install and begin development. The goal was to need nothing more than running yarn and yarn start. This was tricky with our mono repo though. There were a lot of commands to choose from. Here’s how we simplified starting our mono repo using a couple of open-source tools.

The possible commands covered starting The West, PerthNow, 7NEWS, tests, visual regression, delete everything command (we have all been there) and a bunch more. Some of those (delete everything) are rarely needed but starting mastheads are frequently used.

The idea was to show an interactive terminal command when we use yarn start. Similar to what I have seen using tools like create react app, gatsby and the like.

A bit of research brought us to [Inquirer.js](https://github.com/SBoudrias/Inquirer.js#readme). A package built for making interactive command-line commands. In our case we wanted a list of options which you can define like so:

```js
inquirer
    .prompt([
        {
            type: 'list',
            name: 'what',
            message: 'What do you want to start?',
            choices: [
                'Mono',
                'The West',
                'PerthNow',
                'SevenNews',
        		'...’
            ],
        },
])
```

Inquirer.js returns a promise with the choice. At this point we decided on the command we needed to run.

```js
inquirer
    .prompt([{...}])
    .then(({ what }) => {
        let opts = 'start:mono'

            switch (what) {
            case 'The West':
                opts = 'start:thewest'
                break
            case 'PerthNow':
                opts = 'start:perthnow'
                break
            case 'SevenNews':
                opts = 'start:sevennews'
                break
            default:
                break
        }
    })
```

Next problem, how do we start a command? Well a little more searching and we discovered the [execa](https://www.npmjs.com/package/execa) npm package. With the command stored in the opts variable we can execute it with this method:

```js
execa('yarn', [opts]).stdout.pipe(process.stdout)
```

Stdout.pipe is to see the output from running that command. So that was important too. It depends if that’s important to what you’re doing but we see a lot of important messaging from stdout.

Heading back to package.json we assign the script to run when start is used.

```js
start": "node start.js",
```

We now have a nice script for starting our frequently used mono repo commands. It saves a bit of time and mental energy and that’s a nice outcome for just a little bit of work. Hopefully this gives you some ideas for how you can create your interactive CLI commands.

Here’s an abridged version of the script:

```js
const inquirer = require('inquirer')
const execa = require('execa')

inquirer
    .prompt([{
        type: 'list',
        name: 'what',
        message: 'What do you want to start?',
        choices: [
            'Mono',
            'The West',
            'PerthNow',
            'SevenNews',
        ],
    }
    ])
    .then(({ what }) => {
        let opts = 'start:mono'

        switch (what) {
            case 'The West':
                opts = 'start:thewest'
                break
            case 'PerthNow':
                opts = 'start:perthnow'
                break
            case 'SevenNews':
                opts = 'start:sevennews'
                break
            default:
                break
        }

        try {
            execa('yarn', [opts]).stdout.pipe(process.stdout)
        } catch (err) {
            console.log(err)
        }
    })
    .catch(error => {
        console.log(error)
    })
```
