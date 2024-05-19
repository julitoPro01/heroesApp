import { useContext } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../auth/context/AuthContext';


export const Navbar = () => {
   const navigate = useNavigate();

   const {user,dispatchLogout} =useContext(AuthContext);

    const onLogout = () => {
        dispatchLogout()
        navigate('/login',{
            replace:true
        })
    }

    return (
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark container-xl"
            style={{ padding: '0 10px 0 10px' }}
        >

            <Link
                className="navbar-brand ml-3"
                to="/"
            >
                Asociaciones
            </Link>

            <div className="navbar-collapse">
                <div className="navbar-nav">

                    <NavLink
                        className={(arg) => `nav-item nav-link ${arg.isActive && 'active text-info'}`}
                        to="/marvel"
                    >
                        Marvel
                    </NavLink>

                    <NavLink
                        className={(arg) => `nav-item nav-link ${arg.isActive && 'active text-info'}`}
                        to="/dc"
                    >
                        DC
                    </NavLink>
                    <NavLink
                        className={(arg) => `nav-item nav-link ${arg.isActive && 'active text-info'}`}
                        to="/search"
                    >
                        Search
                    </NavLink>
                </div>
            </div>

            <div className="navbar-collapse collapse w-100 order-3 dual-collapse2 d-flex justify-content-end p-2">
                <ul className="navbar-nav ml-auto " >
                    <span className='nav-item nav-link text-primary' > {user.name} </span>
                    <button
                        className='btn btn-light'
                        onClick={onLogout}
                    >
                        Logout
                    </button    >
                </ul>
            </div>
        </nav>
    )
}