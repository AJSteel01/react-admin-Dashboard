// import React, { useState, useEffect } from 'react';
// import format from 'date-fns/format';
// import Modal from './Modal'; // Import the Modal component
// import ordersData from './orders.json'; // Import the orders data

// const OrdersManagement = () => {
//   const [orders, setOrders] = useState([]);
//   const [selectedOrder, setSelectedOrder] = useState(null);
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const [selectedStatus, setSelectedStatus] = useState('');

//   useEffect(() => {
//     // Set orders data from imported JSON
//     setOrders(ordersData.orders);
//   }, []);

//   const handleViewDetails = (order) => {
//     setSelectedOrder(order);
//     setIsModalOpen(true);
//   };

//   const closeModal = () => {
//     setIsModalOpen(false);
//   };

//   const handleDeleteOrder = (id) => {
//     // Filter out the deleted order
//     const updatedOrders = orders.filter(order => order.id !== id);
//     setOrders(updatedOrders);
//   };

//   // const handleUpdateStatus = (id) => {
//   //   // Find the order by ID and update its status
//   //   const updatedOrders = orders.map(order => {
//   //     if (order.id === id) {
//   //       return { ...order, status: selectedStatus };
//   //     }
//   //     return order;
//   //   });
//   //   setOrders(updatedOrders);
//   // };

//   const handleUpdateStatus = (id) => {
//     // Find the order by ID and update its status
//     const updatedOrders = orders.map(order => {
//       if (order.id === id) {
//         return { ...order, status: selectedStatus }; // Update status for the selected order
//       }
//       return order;
//     });
//     setOrders(updatedOrders);
//     // Reset selected status after updating
//     setSelectedStatus('');
//   };
  

//   return (
//     <div className="container mx-auto px-4 max-w-screen-xl flex justify-center items-center min-h-screen flex-col gap-6">
//       <h1 className="text-3xl text-center font-bold">Orders Management</h1>
//       <div className='border rounded-xl'>
//         <table className="rounded-3xl border border-collapse p-8 overflow-hidden">
//           <thead>
//             <tr>
//               <th className="px-4 py-2">ID</th>
//               <th className="px-4 py-2">Customer Name</th>
//               <th className="px-4 py-2">Date</th>
//               <th className="px-4 py-2">Status</th>
//               <th className="px-4 py-2">Actions</th>
//             </tr>
//           </thead>
//           <tbody>
//             {orders.map(order => (
//               <tr key={order.id}>
//                 <td className="border px-4 py-2">{order.id}</td>
//                 <td className="border px-4 py-2">{order.customerName}</td>
//                 <td className="border px-4 py-2">{format(new Date(order.date), 'MMMM dd, yyyy')}</td>
//                 <td className="border px-4 py-2">{order.status}</td>
//                 <td className="border px-4 py-2 flex items-center justify-around gap-4 flex-wrap md:flex-nowrap">
//                   <button
//                     className="btn btn-info text-white"
//                     onClick={() => handleViewDetails(order)}
//                   >
//                     View Details
//                   </button>
//                   <select
//                     value={selectedStatus}
//                     onChange={(e) => setSelectedStatus(e.target.value)}
//                     className="select w-full max-w-xs"
//                   >
//                     <option value="">Select Status</option>
//                     <option value="Delivered">Delivered</option>
//                     <option value="Shipped">Shipped</option>
//                     <option value="Processing">Processing</option>
//                   </select>
//                   <button
//                     className="btn btn-success text-white"
//                     onClick={() => handleUpdateStatus(order.id)}
//                     // disabled={!selectedStatus}
//                   >
//                     Update Status
//                   </button>
//                   <button
//                     className="btn btn-error text-white"
//                     onClick={() => handleDeleteOrder(order.id)}
//                   >
//                     Delete
//                   </button>
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//       <Modal isOpen={isModalOpen} closeModal={closeModal} order={selectedOrder}/>
//     </div>
//   );
// };

// export default OrdersManagement;


import { useState, useEffect } from 'react';
import format from 'date-fns/format';
import Modal from './Modal'; // Import the Modal component
import ordersData from './orders.json'; // Import the orders data

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
    const updatedOrders = orders.filter(order => order.id !== id);
    setOrders(updatedOrders);
    // Remove status for the deleted order
    setStatusList(prevStatusList => {
      const { [id]: removedStatus, ...newStatusList } = prevStatusList;
      return newStatusList;
    });
  };

  const handleUpdateStatus = (id) => {
    // Find the order by ID and update its status
    const updatedOrders = orders.map(order => {
      if (order.id === id) {
        return { ...order, status: statusList[id] || order.status }; // Update status from statusList if available
      }
      return order;
    });
    setOrders(updatedOrders);
  };

  const handleStatusChange = (id, status) => {
    // Update statusList with the selected status for the specific order
    setStatusList(prevStatusList => ({
      ...prevStatusList,
      [id]: status,
    }));
  };

  return (

    <div className="drawer">
  <input id="my-drawer-3" type="checkbox" className="drawer-toggle" /> 
  <div className="drawer-content flex flex-col">
    {/* Navbar */}
    <div className="w-full navbar bg-base-300 text-white">
      <div className="flex-none lg:hidden">
        <label htmlFor="my-drawer-3" aria-label="open sidebar" className="btn btn-square btn-ghost">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-6 h-6 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
        </label>
      </div> 
      <div className="flex-1 px-2 mx-2">Order Management</div>
      <div className="flex-none hidden lg:block">
        <ul className="menu menu-horizontal">
          {/* Navbar menu content here */}
          <li><a href='/'>Dashboard</a></li>
          <li><a href='/products'>Products Management</a></li>
          <li><a href='/ordersCalendar'>Orders Calendar</a></li>
        </ul>
      </div>
    </div>
    {/* Page content here */}
    <div className='bg-gradient-to-r from-slate-900 to-slate-700'>
    <div className="container mx-auto px-4 max-w-screen-xl flex justify-center items-center min-h-screen flex-col gap-6 ">
      <h1 className="text-3xl text-center font-bold text-white">Orders Management</h1>
      <div className='border-hidden rounded-xl'>
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
            {orders.map(order => (
              <tr key={order.id}>
                <td className="border px-4 py-2">{order.id}</td>
                <td className="border px-4 py-2">{order.customerName}</td>
                <td className="border px-4 py-2">{format(new Date(order.date), 'MMMM dd, yyyy')}</td>
                <td className="border px-4 py-2">
                  <select
                    value={statusList[order.id] || order.status} // Use status from statusList if available
                    onChange={(e) => handleStatusChange(order.id, e.target.value)}
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
      <Modal isOpen={isModalOpen} closeModal={closeModal} order={selectedOrder}/>
    </div>
    </div>
  </div> 
  <div className="drawer-side">
    <label htmlFor="my-drawer-3" aria-label="close sidebar" className="drawer-overlay"></label> 
    <ul className="menu p-4 w-80 min-h-full bg-base-200">
      {/* Sidebar content here */}
      <li><a>Sidebar Item 1</a></li>
      <li><a>Sidebar Item 2</a></li>
    </ul>
  </div>
</div>
    
  );
};

export default OrdersManagement;
