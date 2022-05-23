import { Routes, Route } from 'react-router-dom';

import HomePage from './pages/HomePage'
import WorksPage from './pages/WorksPage'
import { WorkSinglePage } from './pages/WorkSinglePage';
import BlogPage from './pages/BlogPage'
import { BlogSinglePage } from './pages/BlogSinglePage';
import ContactPage from './pages/ContactPage'
import NotfoundPage from './pages/NotfoundPage'

import Layout from './components/Layout/Layout';

import './scss/app.scss';

function App() {
  return (
    <>
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path='works' element={<WorksPage />} />
        <Route path='works/:id' element={<WorkSinglePage />} />
        <Route path='blog' element={<BlogPage />} />
        <Route path='blog/:id' element={<BlogSinglePage />} />
        <Route path='contact' element={<ContactPage />} />
        <Route path='*' element={<NotfoundPage />} />
      </Route>
    </Routes>
    </>
  );
}

export default App;
