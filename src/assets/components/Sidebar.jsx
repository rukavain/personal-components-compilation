import { React, useState } from "react";
import { Link } from "react-router-dom";
import { MdDashboard } from "react-icons/md";
import { IoPersonSharp } from "react-icons/io5";
import { GrDocumentPerformance } from "react-icons/gr";
import { MdModelTraining } from "react-icons/md";
import { IoLibrary } from "react-icons/io5";
import { CiSquareQuestion } from "react-icons/ci";
import { CiSettings } from "react-icons/ci";
import { IoLinkSharp } from "react-icons/io5";
import { BsLayoutSidebarInset } from "react-icons/bs";
import Next from "../icons/Next";
import { IoIosLogOut } from "react-icons/io";

const Sidebar = () => {
  const [isHidden, setIsHidden] = useState(false);

  const sidebarItems = [
    { name: "Dashboard", href: "/", icon: <MdDashboard /> },
    { name: "Employees", href: "/employees", icon: <IoPersonSharp /> },
    {
      name: "Performance",
      href: "/performance",
      icon: <GrDocumentPerformance />,
    },
    { name: "Training", href: "/training", icon: <MdModelTraining /> },
    { name: "Library", href: "/library", icon: <IoLibrary /> },
    { name: "Requests", href: "/requests", icon: <CiSquareQuestion /> },
    { name: "Quick Links", href: "/quicklinks", icon: <IoLinkSharp /> },
  ];

  return (
    <section className="absolute flex flex-col justify-between items-start py-8 left-0 bg-white shadow-md rounded-md h-dvh px-4">
      {/* start of logo div */}
      <div className="my-4 flex gap-4 py-4 justify-center items-center  rounded-md px-4 cursor-pointer  transition-all ">
        <Next />
        <h1 className="text-3xl font-semibold text-slate-800">Sidebar</h1>
      </div>
      {/* end of logo div */}
      <div>
        {/* start of main elements div */}
        <div className="flex flex-col gap-4 px-2 py-8 rounded-md shadow-md my-12 bg-slate-50">
          <ul className="flex flex-col gap-8 ">
            {sidebarItems.map((item) => (
              <Link to={item.href}>
                {" "}
                <li
                  className="rounded-md py-2 px-6 hover:bg-slate-200 transition-all cursor-pointer text-slate-800 font-semibold text-md flex justify-center items-center gap-2"
                  key={item.name}
                >
                  {item.icon}
                  {item.name}
                </li>{" "}
              </Link>
            ))}
          </ul>
        </div>
        {/* end of main elements div */}
        {/* start of logout div */}
      </div>
      <div className="flex flex-col justify-start items-start bg-white shadow-md py-4 gap-4 w-full">
        <div className="flex justify-center items-center w-full px-5">
          <h1 className="rounded-md w-full py-2 px-6 hover:bg-slate-800 hover:text-white transition-all cursor-pointer text-slate-800 font-semibold text-md flex justify-start items-center gap-2">
            <CiSettings />
            Settings
          </h1>
        </div>
        <div className="flex justify-center items-center w-full px-5">
          <h1 className="rounded-md w-full py-2 px-6 hover:bg-slate-800 hover:text-white transition-all cursor-pointer text-slate-800 font-semibold text-md flex justify-start items-center gap-2">
            <IoIosLogOut />
            Logout
          </h1>
        </div>
      </div>
      {/* end of logout div */}
    </section>
  );
};

export default Sidebar;
