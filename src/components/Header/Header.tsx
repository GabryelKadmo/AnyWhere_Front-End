import { useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import anywhereLogo from '../../assets/images/Anywhere.svg';
import { PiUser } from "react-icons/pi";
import { FiMenu, FiX } from "react-icons/fi";

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const location = useLocation();

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const closeMenu = () => {
        setIsMenuOpen(false);
    };

    return (
        <div className='flex items-center justify-between p-2.5 mt-6 mb-20'>
            <div className='flex-1'>
                <NavLink to="/">
                    <img
                        className="w-44 ml-5 mt-5 mb-5 md:ml-10 md:mt-0"
                        src={anywhereLogo}
                        alt="logo"
                    />
                </NavLink>
            </div>

            <div className='md:hidden'>
                <button onClick={toggleMenu} className='text-2xl'>
                    {isMenuOpen ? <FiX /> : <FiMenu />}
                </button>
            </div>

            <div className={`flex-2 md:flex md:flex-row md:items-center ${isMenuOpen ? 'flex flex-col mt-4 gap-4' : 'hidden'} md:flex justify-center`}>
                <ul className='flex flex-col md:flex-row list-none p-0 m-0 gap-5'>
                    <li>
                        <NavLink to="/" className={`nav-link ${location.pathname === '/' ? 'navbar-link-active' : ''}`} onClick={closeMenu}>Home</NavLink>
                    </li>
                    <li>
                        <NavLink to="/acomodacoes" className={`nav-link ${location.pathname.startsWith('/acomodacoes') ? 'navbar-link-active' : ''}`} onClick={closeMenu}>Acomodações</NavLink>
                    </li>
                    <li>
                        <NavLink to="/cadastrar-propriedade" className={`nav-link ${location.pathname.startsWith('/cadastrar-propriedade') ? 'navbar-link-active' : ''}`} onClick={closeMenu}>Anuncie seu Espaço</NavLink>
                    </li>
                </ul>

                <div className='md:hidden flex flex-col mt-4 gap-4'>
                    <NavLink to="/login" className='text-black text-center' onClick={closeMenu}>
                        Login
                    </NavLink>
                    <NavLink to="/perfil" className='text-black text-center' onClick={closeMenu}>
                        Perfil
                    </NavLink>
                </div>
            </div>

            <div className='hidden md:flex flex-1 justify-end gap-2.5 text-center mr-10'>
                <NavLink to="/login">
                    <button className='bg-[#FF3E30] rounded-2xl pt-1 pb-1 pl-4 pr-4 font-poppins text-white text-lg'>Entrar</button>
                </NavLink>
                <NavLink to="/perfil" className='text-black text-center justify-center '>
                    <button className='flex items-center rounded-xl pt-1 pb-1 pl-3 pr-3 font-poppins text-black opacity-50 text-3xl'><PiUser /></button>
                </NavLink>
            </div>

            {isMenuOpen && (
                <div className="fixed inset-0 bg-white z-10 flex flex-col p-5 text-center transition-transform transform duration-300 ease-in-out">
                    <button onClick={closeMenu} className='text-2xl self-end mb-4'>
                        <FiX />
                    </button>
                    <ul className='flex flex-col gap-4 text-lg'>
                        <li>
                            <NavLink to="/" className={`nav-link ${location.pathname === '/' ? 'navbar-link-active' : ''}`} onClick={closeMenu}>Home</NavLink>
                        </li>
                        <li>
                            <NavLink to="/acomodacoes" className={`nav-link ${location.pathname.startsWith('/acomodacoes') ? 'navbar-link-active' : ''}`} onClick={closeMenu}>Acomodações</NavLink>
                        </li>
                        <li>
                            <NavLink to="/cadastrar-propriedade" className={`nav-link ${location.pathname.startsWith('/cadastrar-propriedade') ? 'navbar-link-active' : ''}`} onClick={closeMenu}>Anuncie seu Espaço</NavLink>
                        </li>
                        <li>
                            <NavLink to="/login" className='text-black text-center' onClick={closeMenu}>
                                Login
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/perfil" className='text-black text-center' onClick={closeMenu}>
                                Perfil
                            </NavLink>
                        </li>
                    </ul>
                </div>
            )}
        </div>
    );
}
