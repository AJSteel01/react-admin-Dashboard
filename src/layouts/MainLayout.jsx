const MainLayout = ({ children }) => {
  return (
    <div className="min-h-screen w-screen bg-gradient-to-r from-slate-900 to-slate-700 ">
      <div className="drawer">
        <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col">
          {/* Navbar */}
          <div className="w-full navbar bg-base-300">
            <div className="flex-none lg:hidden">
              <label
                htmlFor="my-drawer-3"
                aria-label="open sidebar"
                className="btn btn-square btn-ghost"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  className="inline-block w-6 h-6 stroke-current text-white"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  ></path>
                </svg>
              </label>
            </div>
            <div className="flex-1 px-2 mx-2 text-white">AJ-ERP System</div>
            <div className="flex-none hidden lg:block text-white">
              <ul className="menu menu-horizontal">
                {/* Navbar menu content here */}
                <li>
                  <a href="/">Dashboard</a>
                </li>
                <li>
                  <a href="/orders">Order Management</a>
                </li>
                <li>
                  <a href="/products">Product Management</a>
                </li>
                <li>
                  <a href="/ordersCalendar">Orders Calendar</a>
                </li>
              </ul>
            </div>
          </div>
          {/* Page content here */}
          <div className=" mx-auto px-4 h-full w-screen bg-gradient-to-r from-slate-900 to-slate-700">
            {children}
          </div>
        </div>

        <div className="drawer-side z-10">
          <label
            htmlFor="my-drawer-3"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>
          <ul className="menu p-4 w-80 min-h-full bg-base-200 text-white">
            {/* Sidebar content here */}
            <li>
              <a href="/">Dashboard</a>
            </li>
            <li>
              <a href="/orders">Order Management</a>
            </li>
            <li>
              <a href="/products">Product Management</a>
            </li>
            <li>
              <a href="/ordersCalendar">Orders Calendar</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
export default MainLayout;
