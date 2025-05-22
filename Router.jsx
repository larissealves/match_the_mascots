import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './app';
import ViewMessage from './components/ViewMessage';
import Credits from './components/Creditos';
import MascotGallery from './components/MascotGallery';


function Router() {
    return (
            <Routes>
                <Route path="/" element={<App />} />
                <Route path="/view-message" element={<ViewMessage />} />
                <Route path="/credits" element={<Credits />} />
                <Route path="/mascot-gallery" element={<MascotGallery />} />
            </Routes>
    );
}

export default Router;
