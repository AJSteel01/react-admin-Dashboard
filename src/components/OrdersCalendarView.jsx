import { useState, useEffect } from "react";
import FullCalendar from "@fullcalendar/react"; // Import FullCalendar component
import dayGridPlugin from "@fullcalendar/daygrid"; // Import dayGrid plugin
import ordersData from "./orders.json"; // Import orders data
import * as bootstrap from "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "../index.css";
import format from "date-fns/format";
import MainLayout from "../layouts/MainLayout";

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
    const ordersDueForDelivery = orders.filter((order) => {
      const deliveryDate = new Date(order.date);
      return deliveryDate.toDateString() === clickedDate.toDateString();
    });

    // Display orders due for delivery on the clicked date
    console.log(
      "Orders due for delivery on",
      clickedDate.toDateString(),
      ":",
      ordersDueForDelivery
    );
  };

  return (
    <MainLayout>
      {/* Page content here */}
      <div className="mt-4 container mx-auto px-4 bg-white my-auto py-4 rounded-md">
        <h1 className="text-3xl font-bold mb-4 text-blue-900 text-center">
          Orders Calendar View
        </h1>
        {/* Render FullCalendar component */}
        <FullCalendar
          plugins={[dayGridPlugin]} // Add dayGrid plugin
          initialView="dayGridMonth" // Set initial view as month
          // events={orders.map(order => ({
          //   title: `Order #${order.id}  Exp. Delivey:${order.expectedDeliveryDate}`,
          //   date: order.expectedDeliveryDate // Set order date as event date
          // }))}
          height={"80vh"}
          events={orders.map((order) => ({
            id: `order-${order.id}`,
            title: `Order #${order.id}`,
            date: order.expectedDeliveryDate, // Set order date as event date
          }))}
          eventClick={handleDateClick} // Handle event click
          themeSystem="bootstrap5"
          // eventContent={(eventInfo) => (
          //   <EventPopover event={eventInfo.event.extendedProps} />
          // )} // Use popover component for event content
          eventDidMount={(info) => {
            const eventId = info.event.id; // Get the event ID
            const orderId = eventId.replace("order-", ""); // Extract the order ID from the event ID
            const order = orders.find(
              (order) => order.id === parseInt(orderId)
            ); // Find the corresponding order object
            if (order) {
              const orderDetails = `
              <p>ID: ${order.id}</p>
              <p>Customer Name: ${order.customerName}</p>
              <p>Date of Purchase: ${format(
                new Date(order.date),
                "MMMM dd, yyyy"
              )}</p>
              <p>Status: ${order.status}</p>
              <p>Expected Delivery: ${format(
                new Date(order.expectedDeliveryDate),
                "MMMM dd, yyyy"
              )}</p>
              <p>Items:</p>
              <ul>
                ${order.items
                  .map(
                    (item) =>
                      `<li>Product ID: ${item.productId}, Quantity: ${item.quantity}</li>`
                  )
                  .join("")}
              </ul>
            `;
              return new bootstrap.Popover(info.el, {
                title: info.event.title,
                placement: "auto",
                trigger: "hover",
                customClass: "popoverStyle",
                content: orderDetails,
                html: true,
              });
            }
          }}
        />
      </div>
    </MainLayout>
  );
};

export default OrdersCalendarView;
