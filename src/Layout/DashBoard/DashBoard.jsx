import { Helmet } from "react-helmet-async";
import { Link, Outlet } from "react-router-dom";
import useCart from "../../Hooks/useCart";
import { FaShoppingCart,FaHome } from 'react-icons/fa';

const DashBoard = () => {
    const [cart] = useCart();
    // const isAdmin = true;
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

                        {/* {isAdmin ? <>
                            <li><Link to="/dashboard/home" className="bg-sky-500 mb-2"> <FaHome></FaHome>Admin Home</Link></li>
                            <li><Link to="/dashboard/class" className="bg-sky-500 mb-2">Add Class</Link></li>
                           
                            <li><Link to="/dashboard/users" className="bg-sky-500 mb-2">All Users</Link></li>
                           

                        </> : <> */}
                        <li><Link to="/dashboard/home" className="bg-sky-500 mb-2"> <FaHome></FaHome>User Home</Link></li>
                            <li><Link to="/dashboard/history" className="bg-sky-500 mb-2">My Enroll Class</Link></li>
                            <li><Link to="/dashboard/mycart" className="bg-sky-500 "> <FaShoppingCart></FaShoppingCart>My Selected Class  <div className="badge badge-secondary">+{cart?.length || 0}</div></Link></li>
                        


                    </ul>

                </div>
            </div>

        </div>
    );
};

export default DashBoard;