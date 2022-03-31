// import './App.css';
import { Route, Routes } from 'react-router-dom';
import Header from './components/Header/Header';
import Manage from './components/Manage/Manage';
import NotFound from './components/NotFound/NotFound';
import Order from './components/Order/Order';
import OrderReview from './components/OrderReview/OrderReview';
import Shop from './components/Shop/Shop';

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Shop></Shop>}></Route>
        <Route path="/home" element={<Shop></Shop>}></Route>
        <Route path="/order" element={<Order></Order>}></Route>
        <Route path="/orderReview" element={<OrderReview></OrderReview>}></Route>
        <Route path="/manage" element={<Manage></Manage>}></Route>
        <Route path="*" element={<NotFound></NotFound>}></Route>   
      </Routes>
    </div>
  );
}

export default App;
