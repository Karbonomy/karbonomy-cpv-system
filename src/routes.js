import { useRoutes } from 'react-router-dom';
// layouts
import DashboardLayout from './layouts/main';
// import BlogPage from './pages/BlogPage';
import UserPage from './pages/UserPage';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignUpPage';
import ProductsPage from './pages/ProductsPage';
import DashboardAppPage from './pages/DashboardAppPage';
import Main from './components/main';

// ----------------------------------------------------------------------

export default function Router() {
  const routes = useRoutes([
    {
      path: '/',
      element: <DashboardLayout />,
      children: [
        { path: '/', element: <DashboardAppPage /> },
        { path: 'companys', element: <UserPage /> },
        { path: 'projects', element: <ProductsPage /> },
        { path: 'main', element: <Main /> },
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
  ]);

  return routes;
}
