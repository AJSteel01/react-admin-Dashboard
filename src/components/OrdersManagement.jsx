import { useState, useEffect } from "react";
import format from "date-fns/format";
import Modal from "./Modal"; // Import the Modal component
import ordersData from "./orders.json"; // Import the orders data
import MainLayout from "../layouts/MainLayout";

const OrdersManagement = () => {
  const [orders, setOrders] = useState([]);
  const [selectedOrder, setSelectedOrder] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [statusList, setStatusList] = useState({}); // State to store status for each order

  useEffect(() => {
    // Set orders data from imported JSON
    setOrders(ordersData.orders);
  }, []);

  const handleViewDetails = (order) => {
    setSelectedOrder(order);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleDeleteOrder = (id) => {
    // Filter out the deleted order
    const updatedOrders = orders.filter((order) => order.id !== id);
    setOrders(updatedOrders);
    // Remove status for the deleted order
    setStatusList((prevStatusList) => {
      const { [id]: removedStatus, ...newStatusList } = prevStatusList;
      return newStatusList;
    });
  };

  const handleUpdateStatus = (id) => {
    // Find the order by ID and update its status
    const updatedOrders = orders.map((order) => {
      if (order.id === id) {
        return { ...order, status: statusList[id] || order.status }; // Update status from statusList if available
      }
      return order;
    });
    setOrders(updatedOrders);
  };

  const handleStatusChange = (id, status) => {
    // Update statusList with the selected status for the specific order
    setStatusList((prevStatusList) => ({
      ...prevStatusList,
      [id]: status,
    }));
  };

  return (
    <MainLayout>
      {/* Page content here */}
      <div className="container mx-auto px-4 max-w-screen-xl flex justify-center items-center min-h-screen flex-col gap-6 ">
        <h1 className="text-3xl text-center font-bold text-white">
          Orders Management
        </h1>
        <div className="border-hidden rounded-xl">
          <table className="rounded-3xl border border-collapse p-8 overflow-hidden bg-slate-100">
            <thead>
              <tr>
                <th className="px-4 py-2">ID</th>
                <th className="px-4 py-2">Customer Name</th>
                <th className="px-4 py-2">Date</th>
                <th className="px-4 py-2">Status</th>
                <th className="px-4 py-2">Actions</th>
              </tr>
            </thead>
            <tbody>
              {orders.map((order) => (
                <tr key={order.id}>
                  <td className="border px-4 py-2">{order.id}</td>
                  <td className="border px-4 py-2">{order.customerName}</td>
                  <td className="border px-4 py-2">
                    {format(new Date(order.date), "MMMM dd, yyyy")}
                  </td>
                  <td className="border px-4 py-2">
                    <select
                      value={statusList[order.id] || order.status} // Use status from statusList if available
                      onChange={(e) =>
                        handleStatusChange(order.id, e.target.value)
                      }
                      className="select w-full max-w-xs bg-slate-300"
                    >
                      <option value="Processing">Processing</option>
                      <option value="Shipped">Shipped</option>
                      <option value="Delivered">Delivered</option>
                    </select>
                  </td>
                  <td className="border px-4 py-2 flex items-center justify-around gap-4 flex-wrap md:flex-nowrap">
                    <button
                      className="btn btn-info text-white"
                      onClick={() => handleViewDetails(order)}
                    >
                      View Details
                    </button>
                    <button
                      className="btn btn-success text-white"
                      onClick={() => handleUpdateStatus(order.id)}
                    >
                      Update Status
                    </button>
                    <button
                      className="btn btn-error text-white"
                      onClick={() => handleDeleteOrder(order.id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <Modal
          isOpen={isModalOpen}
          closeModal={closeModal}
          order={selectedOrder}
        />
      </div>
    </MainLayout>
  );
};

export default OrdersManagement;
