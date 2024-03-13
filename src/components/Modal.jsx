import format from "date-fns/format";

function Modal({ isOpen, closeModal, order }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-opacity-50 flex justify-center items-center">
      <div className="w-full md:w-1/2 max-w-lg p-5 rounded-lg bg-gray-700 shadow-lg flex flex-col">
        <div className="flex justify-between items-center">
          <h3 className="text-lg font-bold">Modal Title</h3>
          <button 
            onClick={closeModal} 
            className="text-lg bg-transparent"
          >
            &times;
          </button>
        </div>
        <div className="flex-grow justify-center items-center p-4">
        <p>ID: {order.id}</p>
          <p>Customer Name: {order.customerName}</p>
          <p>Date: {format(new Date(order.date), "MMMM dd, yyyy")}</p>
          <p>Status: {order.status}</p>
          <p>Expected Delivery Date: {format(new Date(order.expectedDeliveryDate), "MMMM dd, yyyy")}</p>
          <h3>Items:</h3>
          <ul>
            {order.items.map((item) => (
              <li key={item.productId}>
                Product ID: {item.productId} - Quantity: {item.quantity}
              </li>
            ))} </ul>
        </div>
        <div className="flex justify-center items-center p-4">
          <button 
            onClick={closeModal} 
            className="px-6 py-2 mx-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          >
            Close
          </button>
          {/* <button 
            onClick={closeModal} 
            className="px-6 py-2 mx-2 bg-red-600 text-white rounded hover:bg-red-700"
            id="cancelBtn"
          >
            Cancel
          </button> */}
        </div>
      </div>
    </div>
  );
}

export default Modal;