import { Suspense, lazy } from 'react';
import { BrowserRouter } from 'react-router-dom';
import GenericSpinner from './components/GenericSwiper/GenericSpinner';
import './styles/index.scss';

const AsyncRouterApp = lazy(() => import('./routes/AlsamarRouter'));

const loader = <GenericSpinner />;
const routerApp = (
  <div>
    <AsyncRouterApp />
  </div>
);
function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={loader}>{routerApp}</Suspense>
    </BrowserRouter>
  );
}

export default App;
