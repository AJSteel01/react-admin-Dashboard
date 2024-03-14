import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import ProductsManagement from "./components/ProductsManagement";
import OrdersManagement from "./components/OrdersManagement";
import OrdersCalendarView from "./components/OrdersCalendarView";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/products" element={<ProductsManagement />} />
          <Route path="/orders" element={<OrdersManagement />} />
          <Route path="/ordersCalendar" element={<OrdersCalendarView />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
