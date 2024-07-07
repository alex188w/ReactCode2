import React, { useContext } from 'react';
import { Link } from "react-router-dom";
import { CartContext } from "../contexts/CartContext";
import header_logo from "../img/header_logo.svg";
import search_icon from "../img/search_icon.svg";
import { ReactComponent as Мenu_icon } from "../img/menu_icon.svg";
import { ReactComponent as User_icon } from "../img/user_icon.svg";
import { ReactComponent as Cart_icon } from '../img/cart_icon.svg';

function Header() {
    // Получение количества товаров в корзине из контекста
    const { cartItems } = useContext(CartContext);
    const totalItems = cartItems.reduce((total, item) => total + item.quantity, 0);

    return (
        <header className="header center">
            <div className="header_left">
                <Link className="logo" to="/internet-shop_react/">
                    <img src={header_logo} alt="Letter b logo" />
                </Link>
                <img src={search_icon} className="search_icon" width="27" height="28" />
            </div>
            <div className="header_right">
                <div className="main_menu">
                    <label htmlFor="main_menu_button" className="main_menu_button">
                        <Мenu_icon className="menu_icon" />
                    </label>
                    <input type="checkbox" id="main_menu_button" defaultChecked="false" />
                    <div className="main_menu_bar">
                        <h4 className="main_menu_title">MENU</h4>
                        <ul>
                            <li>
                                <Link className="main_section" to="/catalog">MAN</Link>
                                <ul>
                                    <li><Link className="link_section" to="/internet-shop_react/catalog">Accessories</Link></li>
                                    <li><Link className="link_section" to="/internet-shop_react/catalog">Bags</Link></li>
                                    <li><Link className="link_section" to="/internet-shop_react/catalog">Denim</Link></li>
                                    <li><Link className="link_section" to="/internet-shop_react/catalog">T-Shirts</Link></li>
                                </ul>
                            </li>
                            <li>
                                <Link className="main_section" to="/catalog">WOMAN</Link>
                                <ul>
                                    <li><Link className="link_section" to="/internet-shop_react/catalog">Accessories</Link></li>
                                    <li><Link className="link_section" to="/internet-shop_react/catalog">Jackets & Coats</Link></li>
                                    <li><Link className="link_section" to="/internet-shop_react/catalog">Polos</Link></li>
                                    <li><Link className="link_section" to="/internet-shop_react/catalog">T-Shirts</Link></li>
                                    <li><Link className="link_section" to="/internet-shop_react/catalog">Shirts</Link></li>
                                </ul>
                            </li>
                            <li>
                                <Link className="main_section" to="/internet-shop_react/catalog">KIDS</Link>
                                <ul>
                                    <li><Link className="link_section" to="/internet-shop_react/catalog">Accessories</Link></li>
                                    <li><Link className="link_section" to="/internet-shop_react/catalog">Jackets & Coats</Link></li>
                                    <li><Link className="link_section" to="/internet-shop_react/catalog">Polos</Link></li>
                                    <li><Link className="link_section" to="/internet-shop_react/catalog">T-Shirts</Link></li>
                                    <li><Link className="link_section" to="/internet-shop_react/catalog">Shirts</Link></li>
                                    <li><Link className="link_section" to="/internet-shop_react/catalog">Bags</Link></li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
                <Link className="user" to="/internet-shop_react/registration">
                    <User_icon className="user_icon" />
                </Link>
                <Link className="cart" to="/internet-shop_react/cart">
                    <Cart_icon className="cart_icon" />
                    {totalItems > 0 && <span className="cart_count">{totalItems}</span>}
                </Link>
            </div>
        </header>
    );
}

export default Header;