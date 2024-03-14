import MainLayout from "../layouts/MainLayout";

const Dashboard = () => {
  // Dummy data for demonstration
  const totalProducts = 50;
  const totalOrders = 100;

  return (
    <MainLayout>
      {/*testing css component*/}
      <div className="grid lg:grid-cols-3 grid-cols-2 p-4 lg:gap-x-4  gap-4 justify-center ">
        {/* <!-- Total Products stat card --> */}
        <div className="flex flex-col gap-2 h-40 text-white rounded-xl shadow-md p-6 max-w-screen-lg bg-gray-200 bg-opacity-30 backdrop-filter backdrop-blur-lg transition duration-300 hover:scale-105">
          <div className="font-semibold text-lg">Total Products</div>
          <div className="font-semibold text-5xl tracking-tight">
            {totalProducts}
          </div>
        </div>

        {/* <!-- Total Orders stat card --> */}
        <div className="flex flex-col gap-2 h-40 text-white rounded-xl shadow-md p-6 max-w-screen-lg bg-gray-200 bg-opacity-30 backdrop-filter backdrop-blur-lg transition duration-300 hover:scale-105">
          <div className="font-semibold text-lg">Total Orders</div>
          <div className="font-semibold text-5xl tracking-tight">
            {totalOrders}
          </div>
        </div>
        {/* <!-- Total revenue stat card --> */}
        <div className="flex flex-col gap-2 h-40 text-white rounded-xl shadow-md p-6 max-w-screen-lg  bg-gray-200 bg-opacity-30 backdrop-filter backdrop-blur-lg transition duration-300 hover:scale-105">
          <div className="font-semibold text-lg">Total Revenue</div>
          <div className="font-semibold text-5xl tracking-tight">$300000</div>
        </div>
        {/* <!-- No of orders Shipped  stat card --> */}
        <div className="flex flex-col gap-2 h-40 text-white rounded-xl shadow-md p-6 max-w-screen-lg bg-gray-200 bg-opacity-30 backdrop-filter backdrop-blur-lg transition duration-300 hover:scale-105">
          <div className="font-semibold text-lg">No. of Orders Shipped</div>
          <div className="font-semibold text-5xl tracking-tight">10</div>
        </div>
        {/* <!-- No of orders Processed  stat card --> */}
        <div className="flex flex-col gap-2 h-40 text-white rounded-xl shadow-md p-6 max-w-screen-lg bg-gray-200 bg-opacity-30 backdrop-filter backdrop-blur-lg transition duration-300 hover:scale-105">
          <div className="font-semibold text-lg">No. of Orders Processed</div>
          <div className="font-semibold text-5xl tracking-tight">5</div>
        </div>
        {/* <!-- No of orders Delivered  stat card --> */}
        <div className="flex flex-col gap-2 h-40 text-white rounded-xl shadow-md p-6 max-w-screen-lg bg-gray-200 bg-opacity-30 backdrop-filter backdrop-blur-lg transition duration-300 hover:scale-105">
          <div className="font-semibold text-lg">No. of Orders Delivered</div>
          <div className="font-semibold text-5xl tracking-tight">15</div>
        </div>
      </div>
    </MainLayout>
  );
};

export default Dashboard;
