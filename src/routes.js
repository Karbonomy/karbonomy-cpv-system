import { useRoutes } from 'react-router-dom';
// layouts
import DashboardLayout from './layouts/main';
// import BlogPage from './pages/BlogPage';
import UserPage from './pages/UserPage';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignUpPage';
import DashboardAppPage from './pages/DashboardAppPage';
import Main from './components/main';
import ProjectPage from './pages/projects';
import CreateProject from './pages/projects/create';
import Marketplace from './pages/Marketplace';

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
        { path: 'main', element: <Main /> },
        { path: 'marketplace', element: <Marketplace /> }
      ],
    },
    {
      path: 'login',
      element: <LoginPage />,
    },
    {
      path: 'signup',
      element: <SignupPage />,
    }
  ]);

  return routes;
}
