---
templateKey: "blog-post"
title: "Superhero Layout - CSS Subgrid"
date: 2020-03-10T00:00:00.000Z
featuredpost: true
featuredimage: /img/shl-subgrid/subgrid-hero.png
description: >-
  Combining CSS Grid and comic book layouts in creative ways
tags:
  - css
  - grid
  - super-hero-layout
---

Welcome to the second article in the Superhero Layout CSS Grid series. The first article looked at [creating staggered CSS Grids](https://www.antonball.dev/blog/2020-02-20-super-hero-layout-staggered-grid/), based on the gold, silver and bronze age of comics. This time we look at the Watchmen series and how CSS Subgrid can enable us to recreate some unique aspects of its creation.

Watchmen was known for adhering to a strict 9 panel grid layout (3 rows and 3 columns). Using what we created in the previous article covers the whole series. Even with that strict grid, certain panels in Watchmen manage to do something a little outside the box.

![Watchmen  -  DC Comics](/img/shl-subgrid/watchmen.png)

We could split the artwork in three and place each new image into grid cells to achieve the effect. There’s limitations to that approach though, such as now having three images! Instead let’s challenge ourselves to recreate the effect while maintaining the image. It gives us flexibility, say if we swap the image or when working with responsiveness later.

First we create a grid to house our panels. This is using the same approach from the first article, so I’ll avoid repeating that here.

![Four panel comic layout. An overlap div contains panel 3 in the centre and spans multiple rows.](/img/shl-subgrid/image-1.png)

```css
.comic {
  display: grid;
  grid-template-columns: repeat(2, auto);
  grid-template-rows: repeat(3, auto);
  gap: 16px;
}

.overlap {
  display: grid;
  grid-column: span 2;
  grid-template-columns: subgrid;
}

.panel-3 {
  grid-row: 1;
  grid-column: 1 / span 2;
}
```

Typically grid cells don’t know about the parent grid, only direct children of the CSS Grid container become grid items. Using CSS Subgrid we change this and inherit the rows or columns from the parent element. That’s what happens when we set grid-template-columns to subgrid. Looking at this layout without the images gives us a better idea of what CSS Subgrid is doing.

![Four panel comic layout with outlines showing the parent grid and subgrid in the middle that inherits the columns but sets its own rows.](/img/shl-subgrid/image-2.png)

```css
.overlap {
  display: grid;
  grid-column: span 2;
  grid-template-columns: subgrid;
  grid-template-rows: repeat(3, auto)
}
```

Now that overlap inherits the comic's columns when its columns resize so to will overlap. We aren’t required to inherit the whole grid either. In this example setting three repeating rows gives some difference. Helpful in our comic book context for speech bubbles!

Replacing the graphics, it’s time to achieve the gap. We use a pseudo element, which is great for cosmetic content as it doesn’t become part of the document but does become a grid item. With the pseudo element being a grid item we can position it on top of the panel (I’ll cover overlapping much more in the next article). The last step is setting the outline property to the same size and colour as the grid’s gap. This simulates the gap in the grid. Hooray!

![Five panel comic layout with the centre panel now split into two by the pseudo element](/img/shl-subgrid/image-3.png)

That’s ticked off our goal of maintaining the image while simulating a grid gap. Now is a great time to [take a look at the example’s CodePen](https://codepen.io/antonjb/pen/rgvKrO). I mentioned responsiveness earlier and the advantage of this technique. We can simply drop the pseudo element avoiding repositioning multiple images together.

![Side-by-side of the desktop and mobile versions of the comic. The mobile version doesn’t have the gap in the panel.](/img/shl-subgrid/image-4.png)

Subgrid is a great addition to CSS Grid. Any time you have struggled to align items without setting a height across multiple panels. Say three cards and there’s always that one card with loads of text while the others are almost empty and you’re setting heights hoping it’ll line up. I cover this example more in my [Illustrated Guide to CSS Subgrid article](https://www.antonball.dev/blog/2019-11-25-illustrated-guide-subgrid/).

Sadly, [browser support for CSS Subgrid](https://caniuse.com/#feat=css-subgrid) is not great, yet. Firefox is leading the pack but my prediction is we will see CSS Subgrid in more browsers this year.

While waiting for browser support we can still create this effect with display contents.
Adding display contents to overlap effectively removes overlap from the document, making panel-3 and the pseudo element children of comic. Removing overlap from the DOM means we lose semantic meaning, which is why CSS Subgrid is the better option.

```css
.overlap {
  display: contents;
}

.overlap::after {
  content: ' ';
  outline: 16px solid #fff;
  grid-row: 2;
  grid-column: 1;
}
```

There’s also a [Codepen for this example](https://codepen.io/antonjb/pen/rbKdpE) so you can see how it works in the browser.

There are accessibility concerns with display: contents that might dissuade you from using it. Hidde de Vries [More accessible markup with display: contents](https://hiddedevries.nl/en/blog/2018-04-21-more-accessible-markup-with-display-contents) post gives a great explainer. In short, certain browsers treat every child like it has been removed from the tree. Which is a problem and against the spec. Bugs have been raised and hopefully soon fixed.

That’s our look into CSS Subgrid through Watchmen. We looked at how CSS Subgrid inherits from the parent grid. We used that knowledge to make a unique layout of an image spanning multiple cells and covered possible gotchas with browser support and display contents.

Remember you can see the CodePens for both the [subgrid spanning panel](https://codepen.io/antonjb/pen/rgvKrO) and [display contents spanning panel](https://codepen.io/antonjb/pen/rbKdpE).

That wraps up the second post in Super Hero Layout with CSS Grid. In the next article we will look at how easily we can overlap elements using CSS Grid to make really interesting and unique layouts.

## Posts in the Superhero Layout series
* [Staggered CSS Grid](/blog/2020-02-20-super-hero-layout-staggered-grid/)
* [CSS Subgrid](/blog/2020-03-10-super-hero-layout-css-subgrid/)
