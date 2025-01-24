---
templateKey: "blog-post"
title: "Scroll Snap with CSS"
date: 2021-01-20T00:00:00.000Z
featuredpost: true
description: >-
  Internationalizing comic books with CSS Grid and writing mode to support different reading modes.
tags:
  - css
  - scroll-snap
---

Here’s a great way to achieve scroll snapping that’s native to the browser - no JavaScript required. With [CSS Scroll Snap](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Scroll_Snap) you manage how scroll containers behave as a user scrolls. Let’s look at an example using slides with the goal of each slide taking up the browser’s viewport and snapping when in view.

## Example

If you want to jump straight to the [CodePen example](https://codepen.io/antonjb/pen/bGwjPYJ), feel free.

## The code

```css
.container {
	width: 100vw;
	height: 100vh;
	scroll-snap-type: y mandatory;
	overflow-y: scroll;
}

.container > * {
	width: 100vw;
	height: 100vh;
	scroll-snap-align: start;
}
```

That’s not much code and because it’s native to the browser you can expect great performance.

The width and height of both the container and the children are set to take up the whole width using viewport units. We are also specifying to the browser that we want our container to handle overflow on the y axis by scrolling.

## CSS Scroll Snap

The two properties that achieve that satisfying snap are scroll-snap-type and scroll-snap-align. The snap type is required on the parent and the alignment on the children. Let’s look at each a little more.

### scroll-snap-type [ x | y | block | inline | both ] [ mandatory | proximity ]
This property controls the direction snapping will occur. It can be x, y or even both. Both would be useful for a product grid where user’s scroll in both directions. Check the links below for an example from Adam Argyle.
Mandatory tells browsers we must land on a snap point after scrolling which is what we are after for our slides.

### scroll-snap-align [ none | start | end | center ]
Scroll snap align determines where the browser will snap to the box. The possible values are start, end and center. You can also add two values for block and inline alignment. We will use start for the slides which ensures that the scroll will snap to the top of the container.

There’s more CSS Scroll Snap can do so it’s worth checking out the links below for examples of proximity snapping and for multiple axis scroll snapping. If you find yourself with a need to snap your scrolling then this is a great, native, performant, alternative to JavaScript libraries with relatively wide ranging browser support. Give it a try!

## Links

* [MDN: CSS Scroll Snap](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Scroll_Snap)
* [Scroll Snap Matrix CodePen - Adam Argyle](https://codepen.io/argyleink/pen/MWWpOmz)
* [CSS-Tricks: Practical Scroll Snapping](https://css-tricks.com/practical-css-scroll-snapping/)