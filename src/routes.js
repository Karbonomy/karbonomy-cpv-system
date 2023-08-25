import { useRoutes } from 'react-router-dom';
// layouts
import DashboardLayout from './layouts/main';
import MarketLayout from './layouts/market';
// import BlogPage from './pages/BlogPage';
import UserPage from './pages/UserPage';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignUpPage';
import DashboardAppPage from './pages/DashboardAppPage';
import Main from './components/main';
import ProjectPage from './pages/projects';
import CreateProject from './pages/projects/create';
import Marketplace from './pages/market';
import CertificateDetail from './pages/market/detail'
import CustomerWaiting from './pages/customer';
import CompanyDetail from './pages/company/detail';

// ----------------------------------------------------------------------

export default function Router() {
  const routes = useRoutes([
    {
      path: '/',
      element: <DashboardLayout />,
      children: [
        { path: '/', element: <DashboardAppPage /> },
        { path: 'companys', element: <UserPage /> },
        { path: 'projects', element: <ProjectPage /> },
        { path: 'projects/create', element: <CreateProject /> },
        { path: 'customer', element: <CustomerWaiting /> },
        { path: 'main', element: <Main /> },
        { path: 'company-detail', element: <CompanyDetail /> }
      ],
    },
    {
      path: 'login',
      element: <LoginPage />,
    },
    {
      path: 'signup',
      element: <SignupPage />,
    },
    {
      path: 'marketplace',
      element: <MarketLayout />,
      children: [
        { path: '/marketplace', element: <Marketplace /> },
        { path: '/marketplace/detail', element: <CertificateDetail /> },
      ]
    }
  ]);

  return routes;
}
