import { Link } from 'react-router-dom';
import logo from '../../../assets/image__2_-removebg-preview.png'
import { useContext } from 'react';
import { AuthContext } from '../../../Providers/AuthProvider';
import { FaShoppingCart} from 'react-icons/fa';
import useCart from '../../../Hooks/useCart';

const Navbar = () => {
    const { user, logOut } = useContext(AuthContext);
    const [cart] = useCart();
    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(error => console.log(error));

    }
    const navOptions = <>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/instructors'>Instructors</Link></li>
        <li><Link to='/classes'>Classes</Link></li>
        <li><Link to='/'>
            <button className="btn">
               <FaShoppingCart></FaShoppingCart>
                <div className="badge badge-secondary">+{cart?.length || 0}</div>
            </button>
            </Link></li>


        {
            user ? <>
                <li><Link to='/dashboard'>DashBoard</Link></li>
                <img className='w-10 h-10 rounded-full mr-2' src={user?.photoURL} alt="" />
                <button onClick={handleLogOut} className="btn  btn-sm btn-neutral">Log Out</button>
            </> :
                <>
                    <li><Link to='/login'>Login</Link></li>
                </>
        }

    </>
    return (
        <>
            <div className="navbar bg-black text-yellow-400 max-w-screen-lg mx-auto">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 p-2  text-yellow-400 rounded-box w-52">

                            {navOptions}
                        </ul>
                    </div>
                    <img className='w-[200px] h-[80px]' src={logo} alt="" />
                    <a className="btn btn-ghost text-yellow-400 text-base">Imagine <br /> Studio</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal text-white px-1">
                        {navOptions}
                    </ul>
                </div>

            </div>


        </>
    );
};

export default Navbar;