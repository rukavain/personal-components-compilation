import React from "react";
import { MdDashboard } from "react-icons/md";
import { IoPersonSharp } from "react-icons/io5";
import { GrDocumentPerformance } from "react-icons/gr";
import { MdModelTraining } from "react-icons/md";
import { IoLibrary } from "react-icons/io5";
import { CiSquareQuestion } from "react-icons/ci";
import { CiSettings } from "react-icons/ci";
import { IoLinkSharp } from "react-icons/io5";

const Sidebar = () => {
  const sidebarItems = [
    { name: "Dashboard", href: "/", icon: <MdDashboard /> },
    { name: "Employees", href: "/", icon: <IoPersonSharp /> },
    { name: "Performance", href: "/", icon: <GrDocumentPerformance /> },
    { name: "Training", href: "/", icon: <MdModelTraining /> },
    { name: "Library", href: "/", icon: <IoLibrary /> },
    { name: "Requests", href: "/", icon: <CiSquareQuestion /> },
    { name: "Quick Links", href: "/", icon: <IoLinkSharp /> },
  ];

  return (
    <section className="absolute flex flex-col justify-between items-start py-8 left-0 bg-white shadow-md rounded-md h-svh px-4">
      {/* start of logo div */}
      <div>
        <div className="my-4 flex gap-4 justify-center items-center py-6 bg-slate-100 shadow-md rounded-md px-4 cursor-pointer  transition-all ">
          <img
            className="h-8"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Logo_of_Twitter.svg/2491px-Logo_of_Twitter.svg.png"
            alt=""
          />
          <h1 className="text-xl font-bold text-slate-800">RonPhilipSidebar</h1>
        </div>
        {/* end of logo div */}
        {/* start of main elements div */}
        <div className="flex flex-col gap-4 px-4 py-8 rounded-md shadow-md my-12 bg-slate-900">
          <ul className="flex flex-col gap-4">
            {sidebarItems.map((item) => (
              <li
                className="cursor-pointer text-white font-semibold text-md flex justify-start items-center gap-2"
                key={item.name}
              >
                {item.icon}
                {item.name}
              </li>
            ))}
          </ul>
        </div>
        {/* end of main elements div */}
        {/* start of logout div */}
      </div>
      <div>
        <h1>Settings</h1>
        <h1>Logout</h1>
      </div>
      {/* end of logout div */}
    </section>
  );
};

export default Sidebar;
