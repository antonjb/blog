---
title: "Getting started with JSON React Layouts"
date: 2019-09-11T00:00:00.000Z
heroImage: ../assets/start-here.jpg
description: >-
  Introductory guide to using JSON React Layouts library
tags:
  - react
  - typescript
  - javascript
---

Photo by [Gia Oris](https://unsplash.com/@giabyte) on [Unsplash](https://unsplash.com/@giabyte)

When building React applications that function more like websites than web applications it’s possible to become tangled in a mess of higher-order components, Hooks and helper functions that are required for every page.

[JSON React Layouts](https://github.com/sevenwestmedia-labs/json-react-layouts) is a framework that aims to alleviate issues associated with page based sites. It does this by enabling you to solve cross cutting concerns in a centrally managed way through the use of Compositions and Components that can be registered and rendered throughout your site.

JSON React layout offers several advantages, such as:
* Layouts as JSON Objects, able to be serialised by the server. Opening the option for CMS managed layouts
* Type safety on component definitions

The following post will outline how to get started using JSON React Layouts.

There are three steps involved in JSON React Layouts:

1. Create registrable components/compositions, this step adds some metadata about each component and can be located within the component itself — opening up the possibility of packaged components,
2. Create layout registrations which components and compositions are registered against,
3. Render a JSON layout with the Compositions Renderer.

## What are components and compositions?

### Components
The term components is used extensively in React already and the components in JSON React Layouts are like any other React component, with a few small differences. They can have extra properties when they’re used in a definition and they have access to services (more on this later).

### Compositions
The easiest way to think about Compositions is to think of them as layouts. Within a Composition you will define your content areas. These content areas will play host to Components and even other Compositions that will then be displayed on the page. How they are displayed will depend on how you have set them up and the styles applied.

With that out of the way, let’s look at how we get started with JSON React Layouts.

## getRegistrationCreators
JSON React Layouts exposes getRegistrationCreators which returns createRegisterableComponent and createRegisterableComposition. Both methods will register our components and compositions respectively.

Adding that to our code give us the following:

```typescript
import {
  getRegistrationCreators,
  LayoutRegistration
} from "json-react-layouts";

const {
  createRegisterableComponent,
  createRegisterableComposition
} = getRegistrationCreators<LayoutServices>();
```

Mentioned earlier, each Component has access to services. getRegistrationCreators accepts a generic which defines the interface of the services. Services can be anything from Redux Stores to Feature Toggles or anything else required.

For our example LayoutServices is providing feature toggling with a single feature, showSpecial. We will see how that’s used in just a bit.

```typescript
interface LayoutServices {
  featureState: { showSpecial: boolean };
}
```

With access to JSON React Layout’s two registration creators, let’s create our first registrable component.

## createRegisterableComponent
Components in JSON React Layouts are created using createRegisterableComponent. Registrable Components take two parameters, a type and a render function. The component’s render function receives component props and services, in our case that’s the feature toggle defined earlier.

Here is an example of a Site Header component:

```tsx
export const SiteHeader = createRegisterableComponent(
  "site-header",
  (props: { title: string }, services) => (
    <header>
      <h1>{props.title}</h1>
    </header>
  )
);
```

That’s our first component created. It’s a header component with a title property. We now need a composition to form the layout.

## createRegisterableComposition

Similar to components, registrable compositions need to first be registered. This is done using createRegisterableComposition. This method doesn’t receive any parameters, but there is an important generic which can be seen in the following example:

```tsx
export const SiteComposition = createRegisterableComposition<
  "header" | "content"
>()("site-composition", contentAreas => (
  <div>
    <header>{contentAreas.header}</header>
    <main>{contentAreas.content}</main>
  </div>
));
```

SiteComposition’s generic <"header" | "sidebar"> defines two content areas available when utilising the layout, each content area is accessible within the render function. Similar to components, compositions has a type that will come into play when defining a layout.

We now have everything we need to put a layout together, which is what we will register next, with LayoutRegistration.

## Layout Registration
Registering a layout enables components and compositions to be rendered through the layout component (covered really soon!). Similar to getRegistrationCreators, services are defined as a generic, providing type safety within the layout.

**Important: components must be registered before compositions.**

Here’s our layout registration in code, with an extra component and composition we will see in the demo.

```typescript
const Layout = new LayoutRegistration<LayoutServices>()
  .registerComponents(registrar =>
    registrar
      .registerComponent(SiteHeader)
      .registerComponent(ContentBox)
  )
  .registerCompositions(registrar =>
    registrar
      .registerComposition(SiteComposition)
      .registerComposition(SplitComposition)
  );
```

We have everything we need now to start render components to the page. Lets do that now.

## Layout Composition
With each component and composition registered we define the structure of our layout as a JSON object. The composition uses the type name defined when it was registered and the content areas can take each component or even more compositions.

```typescript
const definition = Layout.composition({
  type: "site-composition",
  props: {},
  contentAreas: {
    header: [
      {
        type: "site-header",
        props: {
          title: "Main title"
        }
      }
    ],
    content: [
      {
        type: "content-box",
        props: {
          content: "Content that will appear in this content box"
        }
      }
    ]
  }
});
```

We now have a layout defined, with all the required properties that can be rendered onto the page.

That is done with Layout.Compositionsrenderer

```tsx
<Layout.CompositionsRenderer
  services={{ featureState: { showSpecial: true } }}
  compositions={[definition]}
/>
```

Rendering with React displays the full, rendered layout, including each composition and component. Notice that Layout.Compositionsrenderer has a services prop which receives the current feature state. A more advanced version might keep this in a Redux store.

Take a look at the code for the ContentBox component, which makes uses of the services property to determine whether the special message is displayed.

```tsx
export const ContentBox = createRegisterableComponent(
  "content-box",
  (props: { content: string }, services) => (
    <div>
      <p>{props.content}</p>
      {services.featureState.showSpecial && (
        <div>Special content item - enabled with feature toggle service</div>
      )}
    </div>
  )
);
```

## Demo
In the demo CodeSandbox there’s an example of each composition so you can see everything together. Check that out and feel free to play around with the layouts.

[Code Sandbox: JSON React Layouts](https://codesandbox.io/s/json-react-layout-jgtgr?from-embed)

## Middleware
JSON React Layouts also supports Middleware, which would enable data loading, feature toggling and anything else you would like to add around component rendering. It’s a very powerful addition but one that’s just outside the scope of this article. If you’re interested take a look [JSON React Layout’s middleware example](https://github.com/sevenwestmedia-labs/json-react-layouts#middleware).

## Conclusion
JSON React Layouts was built with the following goals in mind:

* Pages are just plain objects, so they can be serialised or come from a server (to enable CMS managed layouts)
* Can enable capabilities for all pages / components in a cross cutting way
* Type safety on the component definitions

This is achieved through components and compositions, brought together in a layout registration. JSON React Layouts provides the ability to define an entire page layout through a JSON object. Each component has access to the props and services defined when you registered the component, enabling an easy way to create multiple layouts.

If you would like more information on the project you can find all the details on GitHub: [https://github.com/sevenwestmedia-labs/json-react-layouts](https://github.com/sevenwestmedia-labs/json-react-layouts)
