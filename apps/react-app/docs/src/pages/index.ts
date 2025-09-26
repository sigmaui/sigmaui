import Home from './home/route';
import Introduction from './introduction/route';
import Theming from './theming/route';
import NotFound from './not-found/route';

import components from './components';

export default [Home, Introduction, ...components, Theming, NotFound];
