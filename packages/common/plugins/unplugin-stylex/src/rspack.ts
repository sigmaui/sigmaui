/**
 * This entry file is for Rspack plugin.
 *
 * @module
 */

import { createRspackPlugin } from 'unplugin';
import type { RspackPluginInstance } from 'unplugin';
import type { UnpluginStylexInstance } from './types';
import { unpluginFactory } from './index';

type RspackPluginType = UnpluginStylexInstance<RspackPluginInstance>;

const rspackPlugin: RspackPluginType = createRspackPlugin(unpluginFactory);

/**
 * Rsapck plugin
 *
 * @example
 *
 * import stylexPlugin from 'unplugin-stylex/rspack'
 *
 * module.exports = {
 *   plugins: [
 *     stylexPlugin(),
 *   ],
 * }
 */
export default rspackPlugin;
