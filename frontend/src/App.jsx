import { Route, Routes } from 'react-router-dom';
import Layout from './components/common/Layout';
import CatalogPage from './pages/CatalogPage';
import PetDetailPage from './pages/PetDetailPage';

export default function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<CatalogPage />} />
        <Route path="/pets/:id" element={<PetDetailPage />} />
      </Routes>
    </Layout>
  );
}
