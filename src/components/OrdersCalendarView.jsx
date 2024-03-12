import React, { useState, useEffect } from 'react';
import FullCalendar from '@fullcalendar/react'; // Import FullCalendar component
import dayGridPlugin from '@fullcalendar/daygrid'; // Import dayGrid plugin
import ordersData from './orders.json'; // Import orders data

const OrdersCalendarView = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    // Set orders data from imported JSON
    setOrders(ordersData.orders);
  }, []);

 // Function to handle date click event
const handleDateClick = (event) => {
  // Get the clicked date from the event object
  const clickedDate = new Date(event.event.start);

  // Filter orders due for delivery on the clicked date
  const ordersDueForDelivery = orders.filter(order => {
    const deliveryDate = new Date(order.date);
    return deliveryDate.toDateString() === clickedDate.toDateString();
  });

  // Display orders due for delivery on the clicked date
  console.log("Orders due for delivery on", clickedDate.toDateString(), ":", ordersDueForDelivery);
};

  return (
    <div className="container mx-auto px-4 bg-white my-auto py-4 rounded-md">
      <h1 className="text-3xl font-bold mb-4 text-blue-900 text-center">Orders Calendar View</h1>
      {/* Render FullCalendar component */}
      <FullCalendar
        plugins={[dayGridPlugin]} // Add dayGrid plugin
        initialView="dayGridMonth" // Set initial view as month
        events={orders.map(order => ({
          title: `Order #${order.id} Exp. Delivey:${order.expectedDeliveryDate}`,
          date: order.expectedDeliveryDate // Set order date as event date
        }))}
        eventClick={handleDateClick} // Handle event click
        themeSystem='bootstrap5'
      />
    </div>
  );
};

export default OrdersCalendarView;
