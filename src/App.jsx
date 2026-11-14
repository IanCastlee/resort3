import { useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import havenData from './data/havenData';
import HavenLayout from './components/HavenLayout';

import HavenHome from './pages/HavenHome';
import HavenVillasPage from './pages/HavenVillasPage';
import HavenAboutPage from './pages/HavenAboutPage';
import HavenExperiencesPage from './pages/HavenExperiencesPage';
import HavenJournalPage from './pages/HavenJournalPage';
import HavenContactPage from './pages/HavenContactPage';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [pathname]);
  return null;
}

export default function App() {
  const { brand, navigation } = havenData;

  return (
    <HelmetProvider>
      <BrowserRouter>
        <ScrollToTop />
        <HavenLayout brand={brand} navigation={navigation}>
          <Routes>
            <Route path="/" element={<HavenHome />} />
            <Route path="/villas" element={<HavenVillasPage />} />
            <Route path="/about" element={<HavenAboutPage />} />
            <Route path="/experiences" element={<HavenExperiencesPage />} />
            <Route path="/journal" element={<HavenJournalPage />} />
            <Route path="/contact" element={<HavenContactPage />} />
          </Routes>
        </HavenLayout>
      </BrowserRouter>
    </HelmetProvider>
  );
}
