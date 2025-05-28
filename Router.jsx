import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import App from './app';
import ViewMessage from './components/ViewMessage';
import Credits from './components/Credits';
import MascotGallery from './components/MascotGallery';
import ProjectDocs from './components/ProjectDocs';

function Router() {
  return (
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/view-message" element={<ViewMessage />} />
      <Route path="/credits" element={<Credits />} />
      <Route path="/mascot-gallery" element={<MascotGallery />} />
      <Route path="/ProjectDocs" element={<ProjectDocs />} />

      {/* Catch-all route */}
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}

export default Router;
