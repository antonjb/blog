---
templateKey: "blog-post"
title: "CSS Property Ordering"
date: 2019-01-11T00:00:00.000Z
featuredpost: true
featuredimage: /img/property-order.jpg
description: >-
  Does CSS property ordering matter?
tags:
  - css
---

Our office conversations are highly academic. Example: is it better to have a bat or a knife during the zombie apocalypse? (It’s bat.) Occasionally we let our hair down and discuss programming, like how best to order CSS Properties. Now, this is in the realm of tabs vs spaces, but fun to explore the two prominent opinions, alphabetical ordering vs property ordering.

Personally, I prefer property ordering, where you group CSS properties based on their relationship to similar properties, grouping positioning, display, box model and rounding out with ‘decorative’ styles. Alphabetical orders based on where the css property would land in the alphabet.

Property ordering looks like this:

`gist:antonjb/2dbd4f908222fa8b2fad0d962fd2138f#property-ordered.css`

With the same code we can order alphabetically:

`gist:antonjb/593bfd97d46b4912394c5743857fbddd#alphabetical-ordered.css`

What does the browser do with these rules? Exactly the same thing, browsers don’t get caught up in discussions like this.

The primary point from team alphabetical: it’s simpler to order the properties. Which is true. There’s less processing power to order alphabetically. No matter your CSS knowledge you can pick this system up. The downside is that it’s an arbitrary ordering system that doesn’t have any relation to CSS bearing no result in the outcome of your styles, similarly if you randomly ordered them.

Whereas by order your properties, you can determine so much about an element simply by looking at the groups of properties. This is useful for debugging and comprehending how an element is rendered.

Take the alphabetical example above. Width and height are related properties. At a glance, you can’t determine that, the order has the height much earlier in the rule than width. There’s a standard within the industry that width is before height. Take a look at applications like Sketch, Photoshop or the screenshot tool. Patterns like this give the ability to quickly process information, meaning you lose that with alphabetical ordering.

Another CSS pattern benefiting from property ordering is border. Typically I would like properties in the same order as the shorthand. Clockwise or Top, Right, Bottom, Left. Alphabetical ordering results in border-bottom, border-left, border-right and border-top. Not as useful when you consider how CSS implements the properties.

`gist:antonjb/d3a8786bea2dce837fff243ad7b37038#alphabetical-border.css`

`gist:antonjb/d3a8786bea2dce837fff243ad7b37038#property-border.css`

There’s a downside to property order, it’s trickier to remember property ordering. Once you get the hang of it though, it helps you see the relationship between CSS properties and you’ll be glad you did, when debugging and comprehension becomes easier. Linting will be your friend here, a really judgy friend but one you like anyway.

Stylelint has rules available via a plugin [https://github.com/hudochenkov/stylelint-order](https://github.com/hudochenkov/stylelint-order) to lint property order. Bootstrap has a nice setup for stylelint rules that you can see here — [https://github.com/twbs/stylelint-config-twbs-bootstrap/blob/master/css/index.js](https://github.com/twbs/stylelint-config-twbs-bootstrap/blob/master/css/index.js). As Bootstrap isn’t using Grid yet, it’s missing properties, but it’s a well thought out starting point.

So which one should you use? Whichever one works for you and your team. This is just my reasoning, but curious to hear what you think.
