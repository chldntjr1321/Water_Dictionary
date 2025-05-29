import { Routes, Route, useNavigate } from 'react-router-dom';
import './App.css';
import Search from './routes/Search';
import Supplement from './routes/Supplement';

function App() {
  let navigate = useNavigate();
  return (
    <>
      <button
        onClick={() => {
          navigate('/');
        }}
      >
        메인 페이지
      </button>
      <button
        onClick={() => {
          navigate('/search');
        }}
      >
        검색하면 페이지
      </button>
      <button
        onClick={() => {
          navigate('/supplement');
        }}
      >
        가나다 순으로 전체 단어 보여지는 페이지
      </button>

      <Routes>
        <Route path="/" element={<>메인 페이지</>} />
        <Route path="/search" element={<Search />} />
        <Route path="/supplement" element={<Supplement />} />
        <Route path="*" element={<>없는 페이지임</>} />
      </Routes>
    </>
  );
}

export default App;
