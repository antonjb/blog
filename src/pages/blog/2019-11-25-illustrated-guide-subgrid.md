---
templateKey: "blog-post"
title: "CSS Subgrid Illustrated Guide"
date: 2019-11-25T00:00:00.000Z
featuredpost: true
featuredimage: /img/illustrated-guide/image-001.png
description: >-
  An illustrated guide to how CSS Subgrid can assist with aligning layouts, specifically card layouts for this example
tags:
  - css
---

If code examples are all you need, [check out the Codepen](https://codepen.io/antonjb/pen/rNNgxWV).

If you have ever heard the saying “This is the best thing since sliced bread” and were wondering how that could be used when talking about layout on the web, it would be CSS Grid. Grid is the most powerful layout tool we have and it’s transforming how we approach web layout.

A common layout pattern is multiple cards along a row (Figure 1). Let’s say our cards feature a title, hero image and body text. Card designs often follow the happy path, which is to say, the title is an appropriate line length and the body text too.

![Figure 1: Three cards with header, hero image and body text.](/img/illustrated-guide/image-002.png)

Often however, in production, things go a little differently. Title and body text length can vary wildly between cards. This can ruin the aesthetic of the nice even cards across the row.

![Figure 2: Three cards with header, hero image and body text of differing sizes negatively affecting the card’s alignment.](/img/illustrated-guide/image-003.png)

There are ways around this, you can limit the content that’s allowed to be used, set a min-height or height on elements will keep alignment but these restrict content or can lead to the visual aesthetic being sacrificed.

You might be wondering whether Flexbox is a possible solution. It will get you most of the way there, but you might need to sacrifice design and/or semantics achieving the desired outcome. You could consider nesting grids but the problem is each individually nested grid does not know about the size of the other grids this means the tracks won’t align, much like in the case of Flexbox. So what can we do?

![Figure 3: Three cards with header, hero image and body text of differing sizes but correct alignment.](/img/illustrated-guide/image-004.png)

Enter CSS Subgrid. Subgrid gives nested grid containers the ability to inherit the size of the parent grid tracks. Without inheriting the parent’s grid track size items are independently size-the same behaviour as the Flexbox or nested grid examples mentioned earlier.

Note: A [Grid Track](https://developer.mozilla.org/en-US/docs/Glossary/Grid_Tracks) is the space between two grid lines and can be either vertical or horizontal.

With the parent grid providing the sizes for the three tracks the nested Subgrid will inherit the size of the parent track and resize to the largest grid cell across the entire row. Thus lining up the items!

![Figure 4: Three cards aligned using nested grids and subgrid](/img/illustrated-guide/image-005.png)

With nested grids it can be difficult to visualise just what’s happening but thankfully Firefox has a fantastic Grid Inspector that makes debugging and working with CSS Grid much easier! (see Figure 5) Using our example you can enable the Grid Inspector on each of the grid and see how the grid is interacting and sizing to the parent’s grid track.

![Figure 5: Firefox Developer Tools Grid Inspector](/img/illustrated-guide/ff-grid-inspector.png)

Firefox’s Grid Inspector demonstrates how Subgrid adds the gap between the rows. You can override this with Subgrid by setting the gap property, adjusting the gap size within the nested Subgrid.

![Figure 6: Subgrid overriding the parent grids gap property](/img/illustrated-guide/ff-grid-inspector-gap.png)

As of writing only Firefox Developer Edition supports CSS Subgrid but Mozilla announced Subgrid will be released in version 71. Even though the browser support is looking slim right now, it won’t be long until the other browsers implement subgrid too. Keep an eye on [caniuse: Subgrid](https://caniuse.com/#feat=css-subgrid) to see when more browsers start supporting Subgrid.

If you’re interested in the code for the examples, then [take a look at the CodePen](https://codepen.io/antonjb/pen/rNNgxWV).

CSS Grid is so powerful that even without support for CSS Subgrid you'll be able to do great things. It's at a point where you can reliably use it in production and it's a great experience. While you might run into little gotchas like this it won't be long until there'll be a solution for those too!
