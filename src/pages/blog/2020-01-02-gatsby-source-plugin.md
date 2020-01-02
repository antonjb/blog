---
templateKey: "blog-post"
title: "Handle empty results in a Gatsby source plug-in"
date: 2020-01-02T00:00:00.000Z
featuredpost: true
featuredimage: /img/gatsby-source-plugins.png
description: >-
  How to explicity define GraphQL schemas for use in a GatsbyJS source plug-in
tags:
  - gatsby
---

[Fenders’](https://www.fenders.co/) website uses the [GatsbyJS](https://www.gatsbyjs.org/) static site generator. It’s small but has important information, such as joining the Slack channel, our Code of Conduct and listing upcoming events.

Meetup hosts Fenders’ events but the team added events to the site by amending a local variable. In the interest of automating this process, we wanted to have Gatsby query events itself. The site would be more up-to-date this way, removing an action from the team.

Gatsby sites receive their data from source plug-ins. These plug-ins pull data from local files, API requests, a CMS and so on. I created a source plug-in within the Fenders' code repo. Its job? Pull events from Meetup’s API and add each event as a GraphQL node. Pages then query for which events to display.

This worked well until no events were scheduled. The build failed as the result from the Meetup API was an empty array. The query expected results and the site was now out of date, showing previous events.

When a Gatsby source plug-in creates nodes it attempts to infer the types from the query’s result. As there wasn’t anything to infer the query failed.

I began researching solutions (a.k.a asking on Twitter). I received the [following reply](https://twitter.com/lekoarts_de/status/1206962173555232768) from Lennart ([@lekoarts_de](https://twitter.com/lekoarts_de)). Lennart explains that you can explicitly define the schema along with an example. This was fantastic and set me up to create a custom schema for Meetup events.

<blockquote class="twitter-tweet"><p lang="en" dir="ltr">You can explicitly define the schema in your source plugin, example: <a href="https://t.co/Z2RVnXJZHg">https://t.co/Z2RVnXJZHg</a><br><br>This way the type will be available even if it can&#39;t be inferred (because no data). The query will return &quot;null&quot; then.<br><br>Docs: <a href="https://t.co/yQwYYSfSb5">https://t.co/yQwYYSfSb5</a></p>&mdash; LekoArts (@lekoarts_de) <a href="https://twitter.com/lekoarts_de/status/1206962173555232768?ref_src=twsrc%5Etfw">December 17, 2019</a></blockquote>

Add custom schema to the gatsby-node file of your plug-in. You export the createSchemaCustomization method and create types using the createType method. Here’s what that looks like:
```js
exports.createSchemaCustomization = ({ actions }) => {
  const { createTypes } = actions;

  createTypes(`
    type SchemaExample implements Node {
        id: ID
        name: String
        age: Int
        lat: Float
        admin: Boolean
        created: Date
        photo: File
    }
```

Out of the box, Graphql provides five basic types: String, Int, Float, Boolean and ID. Gatsby extends this with another two types: Date and File.

The next step was looking at Meetup’s documentation, adding types for the returned data. Doing this meant that Graphiql (Graphql’s integrated IDE) knew what types to expect from the query. These types become browseable within the IDE.

Unfortunately, the build was still failing! The query was using a function available to dates called formatString.

```graphql
query EventsQuery {
    allEvent {
        edges {
            node {
                id
                name
                link
                local_date(formatString: "dddd, MMMM D")
            }
        }
    }
}
```

This wasn’t available because the resolver wasn’t added to the type. Resolve this (pardon the pun) by adding `@dateformat` to your type.

```js
exports.createSchemaCustomization = ({ actions }) => {
  const { createTypes } = actions;

  createTypes(`
    type Example implements Node {
        id: ID
        name: String
        age: Int
        lat: Float
        admin: Boolean
        created: Date @dateformat
        photo: File
    }
```

Now the build was succeeding, even when the query returns empty results. The query runs, returning null and the React components handle null properties.

There are a few advantages in explicitly defining the schema:

* Graphiql can map out the schema even without a result
* This serves as a type of documentation for the request
* A null result will mean the build doesn’t fail

Creating a Gatsby source plug-in has been useful in automating a small part of organising a community group. I know that many groups like Fenders use Meetup and so I’m opening sourcing the plug-in. [Gatsby-source-meetup-events](https://www.npmjs.com/package/gatsby-source-meetup-events) now available on NPM. Take a look at the repo for instructions on how to install and use in your Gatsby site.

## Resources
* [https://twitter.com/lekoarts_de/status/1207175450130141185](https://twitter.com/lekoarts_de/status/1207175450130141185)
* [https://github.com/LekoArts/gatsby-source-potterapi/blob/master/package/gatsby-node.js](https://github.com/LekoArts/gatsby-source-potterapi/blob/master/package/gatsby-node.js)
* [https://www.gatsbyjs.org/docs/schema-customization/](https://www.gatsbyjs.org/docs/schema-customization/)
* [https://www.gatsbyjs.org/docs/actions/#createTypes](https://www.gatsbyjs.org/docs/actions/#createTypes)
