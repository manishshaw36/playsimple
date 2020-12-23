import React from 'react'
import { Link } from 'react-router-dom'
import './navbar.css'

const Menu = ({children, redirectTo, name}) => (
    <>
        <Link className="menu" to={`${redirectTo}`}>{name}</Link>
        {
            children
                ? <div className="sub-menu">
                    {children}
                </div>
                : ''
        }
    </>
)

const Navbar = () => {
    return (
        <div className="navbar">
            <div className="nav-items-left">
                <Link className="menu menu-logo" to="/">
                    <img width="54px" src="https://cdn.supercell.com/supercell.com/201215100024/all/themes/supercell/img/logo_supercell@2x.png" alt="Logo"/>
                </Link>
                <Menu redirectTo='/games' name="Games">
                    <Link to="/games/hayday">Hay day</Link>
                    <Link to="/game" >Clash of clans</Link>
                    <Link to="/game">Boom beach</Link>
                    <Link to="/game">Clash Royale</Link>
                </Menu>
                <Menu redirectTo='/' name="Careers" key="careers" />
                <Menu redirectTo='/' name="Support" />
                <Menu redirectTo='/' name="Safe and fair play" />
            </div>
            <div className="nav-items-right">
                <Link to="/">Support</Link>
                <Link to="/">Safe and Fair play</Link>
            </div>
        </div>
    )
}

export default Navbar
