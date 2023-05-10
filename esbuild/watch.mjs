import * as esbuild from 'esbuild'

import buildOptions from './options.mjs';

const ctx = await esbuild.context(buildOptions);
await ctx.watch();
