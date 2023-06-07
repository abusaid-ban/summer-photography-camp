import logo from '../../../assets/image__2_-removebg-preview.png'

const Navbar = () => {
    const navOptions = <>
        <li><a>Home</a></li>
        <li><a>About</a></li>
        <li><a>Contact</a></li>
    </>
    return (
        <>
            <div className="navbar bg-black">
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
                <div className="navbar-end">
                    <a className="btn">Button</a>
                </div>
            </div>


        </>
    );
};

export default Navbar;