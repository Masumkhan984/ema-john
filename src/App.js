import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import Inventory from './components/Inventory/Inventory';
import OrderReview from './components/OrderReview/OrderReview';
import Shop from './components/Shop/Shop';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Header></Header>
        <Routes>
          <Route exact path='/' element={<Shop />} />
          <Route path='/orders' element={<OrderReview />} />
          <Route path='/inventory' element={<Inventory />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
