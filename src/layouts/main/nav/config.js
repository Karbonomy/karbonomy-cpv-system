// component
import SvgColor from '../../../components/svg-color';

// ----------------------------------------------------------------------

const icon = (name) => <SvgColor src={`/assets/icons/navbar/${name}.svg`} sx={{ width: 1, height: 1 }} />;

const navConfig = [
  {
    title: 'dashboard',
    path: '/',
    icon: icon('ic_analytics'),
  },
  {
    title: 'companys',
    path: '/companys',
    icon: icon('ic_user'),
  },
  {
    title: 'projects',
    path: '/projects',
    icon: icon('ic_cart'),
  },
  {
    title: 'main',
    path: '/main',
    icon: icon('ic_blog'),
  },
  {
    title: 'marketplace',
    path: '/marketplace',
    icon: icon('ic_market')
  }
  // {
  //   title: 'login',
  //   path: '/login',
  //   icon: icon('ic_lock'),
  // },
];

export default navConfig;
