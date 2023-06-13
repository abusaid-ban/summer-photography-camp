import { Helmet } from "react-helmet-async";
import { Link, Outlet } from "react-router-dom";

const DashBoard = () => {
    return (
        <div>
            <Helmet>
                <title>Imagine Studio | DashBoard</title>
            </Helmet>
            <div className="drawer lg:drawer-open">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content flex flex-col items-center justify-center">
                    <Outlet></Outlet>
                    
                    <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>

                </div>
                <div className="drawer-side">
                    <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 h-full bg-gray-500  text-white">
                       
                        <li><Link to="/"  className="bg-sky-500 mb-2">User Home</Link></li>
                        <li><Link to="/dashboard/history"  className="bg-sky-500 mb-2">Payment History</Link></li>
                        <li><Link to="/dashboard/mycart" className="bg-sky-500 ">My Cart</Link></li>
                    </ul>

                </div>
            </div>

        </div>
    );
};

export default DashBoard;