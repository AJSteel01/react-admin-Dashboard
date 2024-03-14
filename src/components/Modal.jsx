import format from "date-fns/format";

function Modal({ isOpen, closeModal, order }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-opacity-50 flex justify-center items-center">
      <div className="w-full md:w-1/2 max-w-lg p-5 rounded-lg bg-slate-100 shadow-lg flex flex-col">
        <div className="flex justify-between items-center">
          <h3 className="text-lg font-bold">Details of Order# {order.id}</h3>
          <button
            onClick={closeModal}
            className="text-3xl bg-transparent font-extrabold"
          >
            &times;
          </button>
        </div>
        <div className="flex-grow justify-center items-center p-4">
          <p>ID: {order.id}</p>
          <p>Customer Name: {order.customerName}</p>
          <p>Date: {format(new Date(order.date), "MMMM dd, yyyy")}</p>
          <p>Status: {order.status}</p>
          <p>
            Expected Delivery Date:{" "}
            {format(new Date(order.expectedDeliveryDate), "MMMM dd, yyyy")}
          </p>
          <h3>Items:</h3>
          <ul>
            {order.items.map((item) => (
              <li key={item.productId}>
                Product ID: {item.productId} - Quantity: {item.quantity}
              </li>
            ))}{" "}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Modal;
