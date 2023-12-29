import '../style/header.css';
import { GiHamburgerMenu } from "react-icons/gi";
import { BsFillMenuButtonWideFill } from "react-icons/bs";
function Header() {

    return (
        <div className='header'>
            <artical className="header-bg">
                <div>
                    <img className="logo-bg" src="https://assets.nobroker.in/static/img/logos/nb_logo_new_trans.svg"></img>
                </div>
                <div className='header-btn-bgs'>
                    <button><span className='btn-booking'><BsFillMenuButtonWideFill />My Bookings</span></button>
                    <button className='btn-cards'><img src='https://assets.nobroker.in/nb-new/public/payrent.png'/> Pay Rent</button>
                    <button className='owners'>For Property Owners</button>
                    <button>Sign Up</button>
                    <button>Login</button>
                    <button ><span className='btn-menu'><GiHamburgerMenu />Menu</span></button>

                </div>

            </artical >
        </div >
    )
}
export default Header;