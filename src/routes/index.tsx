import NotFound from '@/pages/not-found';
import { Suspense, lazy } from 'react';
import { Navigate, Outlet, useRoutes } from 'react-router-dom';

const DashboardLayout = lazy(
  () => import('@/components/layout/dashboard-layout')
);
const SignInPage = lazy(() => import('@/pages/auth/signin'));
const DashboardPage = lazy(() => import('@/pages/dashboard'));
//const StudentPage = lazy(() => import('@/pages/students'));

const FactuurPage = lazy(() => import('@/pages/facturen'));
const KalenderPage = lazy(() => import('@/pages/kalender'));
const LeadsPage = lazy(() => import('@/pages/leads'));
const StudentDetailPage = lazy(() => import('@/pages/leads/StudentDetailPage'));
const ConfiguratorPage = lazy(() => import('@/pages/configurator'));
const OffertesPage = lazy(() => import('@/pages/offertes'));
//const DashboardPage = lazy(() => import('@/pages/dashboard'));
//const StudentPage = lazy(() => import('@/pages/students'));
//const StudentDetailPage = lazy(() => import('@/pages/students/StudentDetailPage')

// ----------------------------------------------------------------------

export default function AppRouter() {
  const dashboardRoutes = [
    {
      path: '/',
      element: (
        <DashboardLayout>
          <Suspense>
            <Outlet />
          </Suspense>
        </DashboardLayout>
      ),
      children: [
        {
          element: <DashboardPage />,
          index: true
        },
        {
          path: 'student',
          element: <LeadsPage />
        },
        {
          path: 'student/details',
          element: <StudentDetailPage />
        },
        {
          path: 'factuur',
          element: <FactuurPage />
        },
        {
          path: 'kalender',
          element: <KalenderPage />
        },
        {
          path: 'offertes',
          element: <OffertesPage />
        },
        {
          path: 'leads',
          element: <LeadsPage />
        },
        {
          path: 'configurator',
          element: <ConfiguratorPage />
        }
      ]
    }
  ];

  const publicRoutes = [
    {
      path: '/login',
      element: <SignInPage />,
      index: true
    },
    {
      path: '/404',
      element: <NotFound />
    },
    {
      path: '*',
      element: <Navigate to="/404" replace />
    }
  ];

  const routes = useRoutes([...dashboardRoutes, ...publicRoutes]);

  return routes;
}
