import { Route, Routes } from 'react-router-dom';
import Homepage from './component/Homepage/Homepage';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      {/* <Route path="blog" element={<Blog />} /> */}
    </Routes>
  );
}

export default App;
