import React, { useState, useEffect } from 'react';
import format from 'date-fns/format';
import Modal from './Modal'; // Import the Modal component
import ordersData from './orders.json'; // Import the orders data

const OrdersManagement = () => {
  const [orders, setOrders] = useState([]);
  const [selectedOrder, setSelectedOrder] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedStatus, setSelectedStatus] = useState('');

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
    const updatedOrders = orders.filter(order => order.id !== id);
    setOrders(updatedOrders);
  };

  const handleUpdateStatus = (id) => {
    // Find the order by ID and update its status
    const updatedOrders = orders.map(order => {
      if (order.id === id) {
        return { ...order, status: selectedStatus };
      }
      return order;
    });
    setOrders(updatedOrders);
  };

  return (
    <div className="container mx-auto px-4 max-w-screen-xl flex justify-center items-center min-h-screen flex-col gap-6">
      <h1 className="text-3xl text-center font-bold">Orders Management</h1>
      <div className='border rounded-xl'>
        <table className="rounded-3xl border border-collapse p-8 overflow-hidden">
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
            {orders.map(order => (
              <tr key={order.id}>
                <td className="border px-4 py-2">{order.id}</td>
                <td className="border px-4 py-2">{order.customerName}</td>
                <td className="border px-4 py-2">{format(new Date(order.date), 'MMMM dd, yyyy')}</td>
                <td className="border px-4 py-2">{order.status}</td>
                <td className="border px-4 py-2 flex items-center justify-around gap-4 flex-wrap md:flex-nowrap">
                  <button
                    className="btn btn-info text-white"
                    onClick={() => handleViewDetails(order)}
                  >
                    View Details
                  </button>
                  <select
                    value={selectedStatus}
                    onChange={(e) => setSelectedStatus(e.target.value)}
                    className="select w-full max-w-xs"
                  >
                    <option value="">Select Status</option>
                    <option value="Delivered">Delivered</option>
                    <option value="Shipped">Shipped</option>
                    <option value="Processing">Processing</option>
                  </select>
                  <button
                    className="btn btn-success text-white"
                    onClick={() => handleUpdateStatus(order.id)}
                    // disabled={!selectedStatus}
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
      <Modal isOpen={isModalOpen} closeModal={closeModal} order={selectedOrder}/>
    </div>
  );
};

export default OrdersManagement;
