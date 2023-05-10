import * as esbuild from 'esbuild'

import buildOptions from './options.mjs';

const result = await esbuild.build(buildOptions);
// console.log(result);
