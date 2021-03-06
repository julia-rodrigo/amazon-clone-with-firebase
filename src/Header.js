import React from 'react';
import "./Header.css";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import { Link } from 'react-router-dom';
import { useStateValue } from './StateProvider';
import { auth } from './firebase';


function Header() {
    const [{ basket, user }, dispatch] = useStateValue();
    const handleAuthentication = () => {
        if(user) {
            auth.signOut();
        }
    }
    return (
        <div className = "header">
            <Link to = "/">
            <img 
                    className = 'header__logo'
                    //scr = "http://pngimg.com/uploads/amazon/amazon_PNG11.png" // not working
                    //src = "https://logos-world.net/wp-content/uploads/2020/04/Amazon-Logo.png" // black font
                    src = "https://onlinebusinessmanager.com/wp-content/uploads/2018/09/white-amazon-logo-png-6.png" // white font
            />
            </Link>

            <div className="header__search">
                <input className="header__searchInput" type="text" />
                <SearchIcon className="header__searchIcon" />
            </div>

            <div className="header__nav">
                {/* THIS CODE CHANGES THE LINK AT THE SIGNIN/OUT BUTTON */}
                <Link to = {!user && "/login"}>
                    <div onClick = {handleAuthentication} className="header__option">
                    {/*this is a comment */}
                    
                    <span className="header__optionLineOne">Hello {!user? 'Guest' : user.email}</span>
                    <span className="header__optionLineTwo">{user? 'Sign Out' : 'Sign In'}</span>
                    </div>
                </Link>
                
                <Link to = '/orders'>
                <div className="header__option">
                    <span className="header__optionLineOne">Returns</span>
                    <span className="header__optionLineTwo">& Orders</span>
                </div>
                </Link>

                <div className="header__option">
                    <span className="header__optionLineOne">Your</span>
                    <span className="header__optionLineTwo">Prime</span>
                </div>

                <Link to = "/checkout">
                <div className="header__optionBasket">
                    <ShoppingBasketIcon />
                    <span className="header__optionLineTwo header__basketCount">
                    {basket?.length}</span>
                </div>
                </Link>
                
            </div>
        </div>
    )
}

export default Header
