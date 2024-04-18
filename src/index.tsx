import React from 'react';
import ReactDOM from 'react-dom/client';
import './custom.scss';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { ToastMessage } from './components/general/ToastMessage';
import OrderCar from './components/transactions/OrderCar';
import {
  Outlet,
  RouterProvider,
  createRootRoute,
  createRoute,
  createRouter
} from '@tanstack/react-router';

const rootRoute = createRootRoute({
  component: () => (
    <>
      <Outlet />
      <ToastMessage />
    </>
  )
});

const loginRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/',
  component: () => <OrderCar></OrderCar> //TODO change to login
});

const purchaseRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/purchase',
  component: () => <OrderCar></OrderCar>
});

//@ts-ignore
const routeTree = rootRoute.addChildren([loginRoute, purchaseRoute]);

const router = createRouter({ routeTree });

declare module '@tanstack/react-router' {
  // eslint-disable-next-line no-unused-vars
  interface Register {
    router: typeof router;
  }
}

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
