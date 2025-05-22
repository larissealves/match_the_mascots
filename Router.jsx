import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NewMessage from './components/NewMessage';
import ViewMessage from './components/ViewMessage';

function Router() {
    return (
            <Routes>
                <Route path="/" element={<NewMessage />} />
                <Route path="/view-message" element={<ViewMessage />} />
            </Routes>
    );
}

export default Router;
