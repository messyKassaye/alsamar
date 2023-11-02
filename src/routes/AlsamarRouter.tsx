import { Suspense } from 'react';
import { HomePage } from '../pages/HomePage/HomePage';
import { Route, Routes } from 'react-router-dom';

const AlsamarRouter = () => {
  return (
    <Suspense fallback={null}>
      <Routes>
        <Route key={'urlhomepage'} element={<HomePage />} path="/" />
      </Routes>
    </Suspense>
  );
};
export default AlsamarRouter;
