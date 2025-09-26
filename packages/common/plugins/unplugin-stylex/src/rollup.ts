/**
 * This entry file is for Rollup plugin.
 *
 * @module
 */

import { createRollupPlugin } from 'unplugin';
import type { RollupPlugin } from 'unplugin';
import type { UnpluginStylexInstance } from './types';
import { unpluginFactory } from './index';

const rollupPlugin: UnpluginStylexInstance<RollupPlugin | RollupPlugin[]> = createRollupPlugin(unpluginFactory);

/**
 * Rollup plugin
 *
 * @example
 *
 * import stylexPlugin from 'unplugin-stylex/rollup'
 *
 * export default {
 *   plugins: [
 *     stylexPlugin(),
 *   ],
 * }
 */
export default rollupPlugin;
