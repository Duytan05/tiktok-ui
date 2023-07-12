//layouts
import { HeaderOnly } from '~/component/Layout';

//pages
import Home from '~/pages/Home';
import Following from '~/pages/Following';
import Profile from '~/pages/Profile';
import Upload from '~/pages/Upload';
import Search from '~/pages/Search';
import Cart from '~/pages/Cart/Cart';

//Public routes
const publicRoutes = [
    { path: '/', component: Home },
    { path: '/folowing', component: Following },
    { path: '/@:nickname', component: Profile },
    { path: '/cart', component: Cart },
    { path: '/upload', component: Upload, layout: HeaderOnly },
    { path: '/search', component: Search, layout: null },
];

const priviteRoutes = [];

export { priviteRoutes, publicRoutes };
