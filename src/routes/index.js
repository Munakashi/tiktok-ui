import config from '~/config';

import { HeaderOnly } from '~/layouts';
import Home from '~/Pages/Home';
import Following from '~/Pages/Following';
import Update from '~/Pages/Update';
import Search from '~/Pages/Search';
import Profile from '~/Pages/Profile';


const publicRoutes = [
  { path: config.routes.home, component: Home },
  { path: config.routes.following, component: Following },
  { path: config.routes.profile, component: Profile },
  { path: config.routes.update, component: Update, layout: HeaderOnly },
  { path: config.routes.search, component: Search, layout: null },
];
const privateRoutes = [];
export { publicRoutes, privateRoutes };
