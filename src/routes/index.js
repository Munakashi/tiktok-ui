import Home from '~/Pages/Home';
import Following from '~/Pages/Following';
import Update from '~/Pages/Update';
import Search from '~/Pages/Search';
import { HeaderOnly } from '~/components/Layout';
const publicRoutes = [
  { path: '/', component: Home },
  { path: '/following', component: Following },
  { path: '/update', component: Update, layout: HeaderOnly },
  { path: '/search', component: Search, layout: null },
];
const privateRoutes = [];
export { publicRoutes, privateRoutes };
