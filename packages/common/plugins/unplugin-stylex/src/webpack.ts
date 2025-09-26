/**
 * This entry file is for Webpack plugin.
 *
 * @module
 */

import { createWebpackPlugin } from 'unplugin';
import type { WebpackPluginInstance } from 'unplugin';
import type { UnpluginStylexInstance } from './types';
import { unpluginFactory } from './index';

const webpackPlugin: UnpluginStylexInstance<WebpackPluginInstance> = createWebpackPlugin(unpluginFactory);

/**
 * Webpack plugin
 *
 * @example
 *
 * import stylexPlugin from 'unplugin-stylex/webpack'
 *
 * module.exports = {
 *   plugins: [
 *     stylexPlugin(),
 *   ],
 * }
 */
export default webpackPlugin;
