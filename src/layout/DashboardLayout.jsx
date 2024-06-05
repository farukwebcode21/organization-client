import React from "react";
import { Link, Outlet } from "react-router-dom";

const DashboardLayout = () => {
  return (
    <div>
      <div className="drawer lg:drawer-open">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col items-center justify-center">
          <Outlet />
          <label
            htmlFor="my-drawer-2"
            className="btn btn-primary drawer-button lg:hidden"
          >
            Menu Drawer
          </label>
        </div>
        <div className="drawer-side ">
          <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content">
            <li>
              <Link to={"/"}>Home</Link>
            </li>
            <li>
              <Link to={"/dashboard/all-product"}>All Product</Link>
            </li>
            <li>
              <Link to={"/dashboard/add-product"}>Add Product</Link>
            </li>
            <li>
              <a>Sidebar Item 1</a>
            </li>
            <li>
              <a>Sidebar Item 2</a>
            </li>
          </ul>
          <button>Logut</button>
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
