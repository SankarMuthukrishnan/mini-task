import { lazy, ReactNode, Suspense } from 'react';
import { Routes, BrowserRouter, Route } from 'react-router-dom';

import { PrivateLayout } from './components';

import "./assets/style.css";

const Login = lazy(() => import('./pages/Login'));
const Dashboard = lazy(() => import('./pages/Dashboard'));

const SuspendPage = (element: ReactNode, fallback = <div />) => {
  return (
    <Suspense fallback={fallback}>
      {element}
    </Suspense>
  )
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login/" element={SuspendPage(<Login />)} />
        <Route element={<PrivateLayout />}>
          <Route path="/" element={SuspendPage(<Dashboard />)} />
          <Route path="/:action" element={SuspendPage(<Dashboard />)} />
          <Route path="/page/:pageCount" element={SuspendPage(<Dashboard />)} />
          <Route path="/:action/:userId" element={SuspendPage(<Dashboard />)} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
