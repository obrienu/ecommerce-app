import React from 'react';
import './header.style.scss'
import {ReactComponent as Logo} from '../../asset/crown.svg'
import {NavLink, Link} from 'react-router-dom'

const Header = () => {
    return (
        <div className='Header container-fixed'>
            <Link className='LogoContainer' to='/'>
                <Logo />
            </Link>

            <div className="Options">
                <NavLink activeClassName="ActiveLink" className='Option' to="/shop">SHOP</NavLink>
                <NavLink activeClassName="ActiveLink" className='Option' to="/contact">CONTACT</NavLink>
            </div>
        </div>
    );
}

export default Header;
