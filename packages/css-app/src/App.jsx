import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import BorderPages from './pages/BorderPages';
import UnitPages from './pages/UnitPages';
import { useEffect } from 'react';
import 'virtual:windi.css';
import FlexPages from './pages/FlexPages';
import HeaderPages from './pages/HeaderPages';
import IntersectionObservePages from './pages/IntersectionObservePages';
import SkillPages from './pages/SkillPages';
import MutationObserverPages from './pages/MutationObserverPages';
import FloatPages from './pages/FloatPages';
import NFCPages from './pages/NFCPages';
import RippleBtnPages from './pages/RippleBtnPages';
import './styles/common.scss';
// require.context

const router = createBrowserRouter([
  {
    path: '/FloatPages',
    element:<FloatPages ></FloatPages>
  },
  {
    path: '/RippleBtnPages',
    element:<RippleBtnPages ></RippleBtnPages>
  },
  {
    path: '/UnitPages',
    element:<UnitPages ></UnitPages>
  },
  {
    path: '/NFCPages',
    element:<NFCPages ></NFCPages>
  },
  {
    path: '/MutationObserverPages',
    element: <MutationObserverPages></MutationObserverPages>,
  },
  {
    path: '/FlexPages',
    element: <FlexPages></FlexPages>,
  },
  {
    path: '/HeaderPages',
    element: <HeaderPages>22</HeaderPages>,
  },
  {
    path: '/SkillPages',
    element: <SkillPages>22</SkillPages>,
  },
  {
    path: '/BorderPages',
    element: <BorderPages>22</BorderPages>,
  },
  {
    path: '/IntersectionObservePages',
    element: <IntersectionObservePages>22</IntersectionObservePages>,
  },
  {
    path: 'about',
    element: <div>About</div>,
  },
]);
function App() {
  useEffect(() => {
    console.log(`app init`);
  }, []);
  return <RouterProvider router={router} />;
}

export default App;
