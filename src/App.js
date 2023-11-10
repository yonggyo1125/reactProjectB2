import Login from './pages/member/Login';
import Join from './pages/member/Join';
import BoardView from './pages/board/BoardView';
import View from './pages/board/View';

import { Routes, Route } from 'react-router-dom';

const App = () => {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/join" element={<Join />} />
      <Route path="/board/view" element={<BoardView />}>
        <Route path=":id" element={<View />} />
      </Route>
    </Routes>
  );
};

export default App;
