import React from 'react';
import { Link } from 'react-router-dom';


const Dashboard = () => {
  // Dummy data for demonstration
  const totalProducts = 50;
  const totalOrders = 100;

  return (
    <>
    <div className="drawer">
  <input id="my-drawer-3" type="checkbox" className="drawer-toggle" /> 
  <div className="drawer-content flex flex-col">
    {/* Navbar */}
    <div className="w-full navbar bg-base-300">
      <div className="flex-none lg:hidden">
        <label htmlFor="my-drawer-3" aria-label="open sidebar" className="btn btn-square btn-ghost">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-6 h-6 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
        </label>
      </div> 
      <div className="flex-1 px-2 mx-2">Dashboard</div>
      <div className="flex-none hidden lg:block">
        <ul className="menu menu-horizontal">
          {/* Navbar menu content here */}
          <li><a href='/orders'>Order Management</a></li>
          <li><a href='/products'>Product Management</a></li>
          <li><a href='/ordersCalendar'>Orders Calendar</a></li>
        </ul>
      </div>
    </div>
    {/* Page content here */}
    <div className=" mx-auto px-4 h-screen w-screen bg-gradient-to-r from-slate-900 to-slate-700">
      {/* <h1 className="text-3xl font-bold mb-4">Dashboard</h1> */}

      {/* Metrics Section */}
      {/* <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8"> */}
        {/* Total Products */}
        {/* <div className="bg-gray-200 p-6 rounded-lg">
          <h2 className="text-xl font-semibold mb-2">Total Products</h2>
          <p className="text-3xl font-bold">{totalProducts}</p>
        </div> */}

        {/* Total Orders */}
        {/* <div className="bg-gray-200 p-6 rounded-lg">
          <h2 className="text-xl font-semibold mb-2">Total Orders</h2>
          <p className="text-3xl font-bold">{totalOrders}</p>
        </div>
      </div> */}


      {/*testing css component*/}
      <div className="grid lg:grid-cols-3 lg:gap-x-4  gap-4 justify-center pt-32 mb-10">

        {/* <!-- Total Products stat card --> */}
        <div
            className="flex flex-col gap-2 h-40 text-white rounded-xl shadow-md p-6 max-w-screen-lg bg-gray-200 bg-opacity-30 backdrop-filter backdrop-blur-lg transition duration-300 hover:scale-105">
            <div className="font-semibold text-lg">Total Products</div>
            <div className="font-semibold text-5xl tracking-tight">{totalProducts}</div>
        </div>

        {/* <!-- Total Orders stat card --> */}
        <div
            className="flex flex-col gap-2 h-40 text-white rounded-xl shadow-md p-6 max-w-screen-lg bg-gray-200 bg-opacity-30 backdrop-filter backdrop-blur-lg transition duration-300 hover:scale-105">
            <div className="font-semibold text-lg">Total Orders</div>
            <div className="font-semibold text-5xl tracking-tight">{totalOrders}</div>
        </div>
         {/* <!-- Total revenue stat card --> */}
        <div
            className="flex flex-col gap-2 h-40 text-white rounded-xl shadow-md p-6 max-w-screen-lg  bg-gray-200 bg-opacity-30 backdrop-filter backdrop-blur-lg transition duration-300 hover:scale-105">
            <div className="font-semibold text-lg">Total Revenue</div>
            <div className="font-semibold text-5xl tracking-tight">$300000</div>
        </div>
         {/* <!-- No of orders Shipped  stat card --> */}
        <div
            className="flex flex-col gap-2 h-40 text-white rounded-xl shadow-md p-6 max-w-screen-lg bg-gray-200 bg-opacity-30 backdrop-filter backdrop-blur-lg transition duration-300 hover:scale-105">
            <div className="font-semibold text-lg">No. of Orders Shipped</div>
            <div className="font-semibold text-5xl tracking-tight">10</div>
        </div>
        {/* <!-- No of orders Processed  stat card --> */}
        <div
            className="flex flex-col gap-2 h-40 text-white rounded-xl shadow-md p-6 max-w-screen-lg bg-gray-200 bg-opacity-30 backdrop-filter backdrop-blur-lg transition duration-300 hover:scale-105">
            <div className="font-semibold text-lg">No. of Orders Processed</div>
            <div className="font-semibold text-5xl tracking-tight">5</div>
        </div>
        {/* <!-- No of orders Delivered  stat card --> */}
        <div
            className="flex flex-col gap-2 h-40 text-white rounded-xl shadow-md p-6 max-w-screen-lg bg-gray-200 bg-opacity-30 backdrop-filter backdrop-blur-lg transition duration-300 hover:scale-105">
            <div className="font-semibold text-lg">No. of Orders Delivered</div>
            <div className="font-semibold text-5xl tracking-tight">15</div>
        </div>

    </div>

      {/* Navigation Links */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Products Management */}
        <Link to="/products" className="bg-blue-500 text-white p-4 rounded flex items-center justify-center">
          <span className="text-lg font-semibold">Products Management</span>
        </Link>

        {/* Orders Management */}
        <Link to="/orders" className="bg-blue-500 text-white p-4 rounded flex items-center justify-center">
          <span className="text-lg font-semibold">Orders Management</span>
        </Link>

        {/*Order Calendar View */}
        <Link to="/ordersCalendar" className="bg-blue-500 text-white p-4 rounded flex items-center justify-center">
          <span className="text-lg font-semibold">Order Calendar View</span>
        </Link>
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
    
    </>
  );
};

export default Dashboard;
