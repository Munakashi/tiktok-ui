import routesConfig from '~/config/routes';

import { HeaderOnly } from '~/components/Layout';
import Home from '~/Pages/Home';
import Following from '~/Pages/Following';
import Update from '~/Pages/Update';
import Search from '~/Pages/Search';
import Profile from '~/Pages/Profile';


const publicRoutes = [
  { path: routesConfig.home, component: Home },
  { path: routesConfig.following, component: Following },
  { path: routesConfig.profile, component: Profile },
  { path: routesConfig.update, component: Update, layout: HeaderOnly },
  { path: routesConfig.search, component: Search, layout: null },
];
const privateRoutes = [];
export { publicRoutes, privateRoutes };
