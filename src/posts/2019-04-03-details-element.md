---
title: "Getting my Details ducks in a row"
date: 2019-04-03T00:00:00.000Z
heroImage: ../assets/details-post/hero.jpg
description: >-
  Overcoming a quirk in Safari when using the Details element for a discolsure widget
tags:
  - tips
  - html
  - css
---

Photo by [JOSHUA COLEMAN](https://unsplash.com/@joshstyle) on [Unsplash](https://unsplash.com/@joshstyle)

The [Details](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/details) element is great for creating disclosure widgets. You gain show/hide functionality without JavaScript, plus the accessibility benefits of native HTML elements, and it can be styled, except I ran into a quirk in Safari. This is what I found.

When using the Details and Summary elements I needed to hide the arrow, instead displaying an icon to the right. It should look like this:

![Details element with Summary title and custom icon on the right](../assets/details-post/001.png)

[MDN’s Details](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/details) article provides CSS to hide the toggle arrow, making that part straight forward. To display the icon, I opted for a pseudo-element (::after). To position everything, display: flex. The CSS looked like this:

```css
summary {
  display: flex;
  align-items: center;
}summary::after {
  display: block;
  width: 20px;
  height: 20px;
  content: " ";
  background-color: #442F4A;
  margin-left: auto;
}
```

This went smoothly. The end.

OK, not quite. Most browsers behaved as expected. IE/Edge without support for Details display as if they were divs. Chrome and Firefox matched the design and then I tested Safari (12.1).

![Details element with Summary title and custom icon on the right but below the title](../assets/details-post/002.png)

Interesting. The icon sits as if clearing Summary. Debugging commenced but it wasn’t until applying the same styling to a div that it helped me realise the issue. Here’s that same styling applied to a div displayed in Safari:

![Details element with Summary title and custom icon on the right](../assets/details-post/003.png)

Everything is as intended. What’s happening? My best guess is Safari’s Shadow DOM has something that other browsers don’t.

## Fixes
### Span
Turning again to MDN docs we see that Summary can parent [Phrasing content](https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/Content_categories#Phrasing_content), which includes span. If we wrap the contents of the summary and apply the styles to the span, it displays as intended.

```html
<summary><span>Summary title</span></summary>
```

### Float/Absolute Position
You could float or absolute position the pseudo-element. This works without introducing markup. The downside: the pseudo-element is no longer in the document flow, which could make it difficult to position and contain.

### Background image
Depending on your circumstances a background image could work and you position it that way.

## Playground
Here’s a CodePen that shows the different combinations. Best viewed in Safari.

[https://codepen.io/antonjb/pen/OGNZjx](https://codepen.io/antonjb/pen/OGNZjx)

For my needs, I’m happy to absorb extra markup. It’s valid HTML structure and provides greater flexibility.

A quick search of WebKits bugs didn’t surface anything and I’m not sure if this is a bug. If you find yourself stuck in a similar way then I hope this is helpful. If you have more information on why this is the case, please share.
