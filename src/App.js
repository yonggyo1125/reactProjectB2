import Login from './pages/member/Login';
import Join from './pages/member/Join';
import BoardView from './pages/board/BoardView';
import { Routes, Route } from 'react-router-dom';

const App = () => {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/join" element={<Join />} />
      <Route path="/board/view/:id" element={<BoardView />} />
    </Routes>
  );
};

export default App;
