import {BrowserRouter, Routes, Route} from 'react-router-dom';
import HomePage from './pages/HomePage.jsx';
import RecipePage from './pages/RecipePage.jsx';
const App = () =>{
  return (
      <BrowserRouter>
        <Routes>
            <Route path="*" element={<HomePage />} />
            <Route path="/recipes" element={<RecipePage />} />
        </Routes>
      </BrowserRouter>
  )
}

export default App
