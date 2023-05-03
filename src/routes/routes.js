import config from '~/config';

import { HeaderOnly } from '~/layouts';
import Home from '~/Pages/Home';
import Following from '~/Pages/Following';
import Update from '~/Pages/Update';
import Search from '~/Pages/Search';
import Profile from '~/Pages/Profile';
import Live from '~/Pages/Live';
import Explore from '~/Pages/Explore';

const publicRoutes = [
  { path: config.routes.home, component: Home },
  { path: config.routes.following, component: Following },
  { path: config.routes.explore, component: Explore },
  { path: config.routes.live, component: Live },
  { path: config.routes.profile, component: Profile },
  { path: config.routes.update, component: Update, layout: HeaderOnly },
  { path: config.routes.search, component: Search, layout: null },
];
const privateRoutes = [];
export { publicRoutes, privateRoutes };
