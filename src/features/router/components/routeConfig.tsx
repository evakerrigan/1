import { AboutPage, MainPage, NotFoundPage } from '@/pages';
import { Navigate, RouteProps } from 'react-router-dom';

export enum AppRoutes {
  MAIN = 'main',
  ABOUT = 'about',
  NOT_FOUND = 'not-found',
  NOT_FOUND_NAV = 'not-found-nav',
}

export const RoutePath: Record<AppRoutes, string> = {
  [AppRoutes.MAIN]: '/',
  [AppRoutes.ABOUT]: '/about',
  [AppRoutes.NOT_FOUND]: '/not-found',
  [AppRoutes.NOT_FOUND_NAV]: '/*',
};

export const routeConfig: Record<AppRoutes, RouteProps> = {
  [AppRoutes.MAIN]: {
    path: RoutePath.main,
    element: <MainPage />,
  },
  [AppRoutes.ABOUT]: {
    path: RoutePath.about,
    element: <AboutPage />,
  },
  [AppRoutes.NOT_FOUND]: {
    path: RoutePath['not-found'],
    element: <NotFoundPage />,
  },
  [AppRoutes.NOT_FOUND_NAV]: {
    path: RoutePath['not-found-nav'],
    element: <Navigate to="not-found" replace />,
  },
};
