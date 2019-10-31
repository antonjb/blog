---
templateKey: "blog-post"
title: "TypeScript Tidbit: Const enums"
date: 2019-01-23T00:00:00.000Z
featuredpost: true
description: >-
  TypeScript Tidbit const enums and how to use them
tags:
  - typescript
  - javascript
  - tips
---

Enums are a useful feature of TypeScript that allow you to define a set of named constants. A use case for enums, that I’m going to borrow straight from TypeScript’s documentation, is defining a direction:

<pre>
enum Direction {
    Up = 1,
    Down,
    Left,
    Right,
}
</pre>

After running the above through the TypeScript compiler you’ll end up with the following JavaScript:

<pre>
var Direction;
(function (Direction) {
    Direction[Direction["Up"] = 1] = "Up";
    Direction[Direction["Down"] = 2] = "Down";
    Direction[Direction["Left"] = 3] = "Left";
    Direction[Direction["Right"] = 4] = "Right";
})(Direction || (Direction = {}));
</pre>

There’s a bit to digest but the purpose of this post isn’t explaining how compiled enums work, but in short, it enables you to lookup the Key or Value of the enum.

<pre>
Direction[“Up”] // 1
Direction[1] // Up
</pre>

Having that lookup means a lot of code is generated that sometimes isn’t needed. I haven’t run into an instance where I have needed lookup functionality, so I didn’t know how much code was being generated for something I wasn’t using.

## Const enums

If you know you won’t need lookup or perhaps your team follows a tight performance budget, then there is a nice tweak you can make.

<pre>
const enum Direction {
    Up = 1,
    Down,
    Left,
    Right,
}
</pre>

What’s new? The addition of the const keyword. What does the TypeScript compiler generate when the const keyword is added?

<pre>// ?</pre>

That isn’t a mistake, there is no code generated. Instead, TypeScript inlines the values when used within code. For example the following TypeScript:

<pre>if (someDirection === Direction.Up) {...}</pre>

Becomes:

<pre>if (someDirection === ‘up’) {...}</pre>

Great. It has saved potentially unnecessary code generation at the cost of the lookup ability. It’s worth considering const enums in your project to start with and then if you require the lookup later down the track, you could remove the const.
