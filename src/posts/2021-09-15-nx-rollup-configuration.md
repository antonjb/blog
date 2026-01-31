---
title: "Extending Rollup configuration for NX"
date: 2021-09-15T00:00:00.000Z
description: >-
  Fixing an error when using Nx to bundle a React library with SVG
tags:
  - nx
  - rollup
---

When using Nx to bundle a React library, a design system in this case, that has SVG (icons and logos), you may run into an error about ReactComponet not being exported. Here's how to extend RollUp's configuration that shipped with Nx to solve the problem.

[Nx](https://nx.dev) supports SVG through [SVGR](https://react-svgr.com) - the problem is, when you bundle, the library throws the following error:

```shell
Error during bundle: Error: 'ReactComponent' is not exported by libs/library-name/src/lib/Icons/activity-log.svg
Bundle failed: library-name
```

Googling (as all developers do) lead me to a [GitHub issue on the Nx repository](https://github.com/nrwl/nx/issues/2212) in particular, this [comment from alexworker23](https://github.com/nrwl/nx/issues/2212#issuecomment-894064983) detailing how to extended the RollUp configuration. Good start.

If you're interested RollUp has instructions on configuring SVGR that you can [find in their documentation](https://react-svgr.com/docs/rollup/).

Alex's comment got me most of the way, but what stuck out at me was the return of calling `nrwlConfig` was unused. I discovered that's because the Nx script mutates the original config. I figure it's possible Nx's script could change in the future and decided to use the output from `nrwlConfig`.

Here's what I ended up with inspired heavily by Alex's comment:
```js
const nrwlConfig = require('@nrwl/react/plugins/bundle-rollup')
const svgr = require('@svgr/rollup').default

module.exports = (config) => {
    const nxConfig = nrwlConfig(config)
    return {
        ...nxConfig,
        plugins: [...nxConfig.plugins, svgr()],
    }
}
```

This file is saved as `rollup.config.cjs` and we inform Nx to use this configuration by modifying the workspace file. Swapping the [default RollUp configuration](https://github.com/nrwl/nx/blob/master/packages/react/plugins/bundle-rollup.ts) with the one we created:

```json
"rollupConfig": "rollup.config.cjs",
```

This resolved the SVGR error but you'll hit another issue:

```shell
'createElement' is not exported by 'node_modules/react/index.js'
```

Back to Google. Which [lead me to this discussion](https://github.com/styled-components/styled-components/issues/1654). Unfortunately that plugin is archived. But, RollUp collated official plugins into the [RollUp plugins repo](https://github.com/rollup/plugins). From there you can install the commonjs plugin, but, only go as far as v14.0.0 to support the version of RollUp in Nx (currently rollup@1.31.1). Any further and you'll hit further errors. That will likely change in future versions of Nx so worth testing.

Run the following NPM install command for the desired version:
```shell
npm i @rollup/plugin-commonjs@14.0.0 --save-dev
```

One more change to inform RollUp about the plugin and the error will cease:

```js
const nrwlConfig = require('@nrwl/react/plugins/bundle-rollup')
const svgr = require('@svgr/rollup').default
const commonjs = require('@rollup/plugin-commonjs')

module.exports = (config) => {
    const nxConfig = nrwlConfig(config)
    return {
        ...nxConfig,
        plugins: [commonjs(), svgr(), ...nxConfig.plugins],
    }
}
```

If you run into that issue I hope this article helps you to overcome it and that in future Nx releases the SVG setup will work in dev as well as during build.