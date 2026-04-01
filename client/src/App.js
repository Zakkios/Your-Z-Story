import './styles/App.css';
import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ChapterPage from './pages/ChapterPage';

function App() {
  return (
    <div className="container min-h-screen mx-auto text-center h-screen flex items-center justify-center">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/chapter/:chapterId" element={<ChapterPage />} />
      </Routes>
    </div>
  );
}

export default App;
