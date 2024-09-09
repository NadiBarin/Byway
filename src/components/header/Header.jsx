import './header.css'
import logoImg from './../../img/logo.svg'
import searchImg from './../../img/search.svg'
import basketImg from './../../img/basket.svg'

function Header () {
    return (
        <header className='header'>
            <div className="container">
                <div className="header__row">
                    <div className=" wrap header__logo">
                        <img src={logoImg} alt="Logo"/>
                        <span>Categories</span>
                    </div>
                    <div className="search">
                        <input className='search__form'  type="text"
                                placeholder='Search courses'
                            />
                            <img className='search__img' src={searchImg} alt="search" />

                    </div>

                    <div className="wrap header__group">

                    <a href='#' className="header__basket">
                        <img src={basketImg} alt="basket" />
                    </a>
                    
                    <div className="forms">
                    <button className="log__in">Log in</button>
                    <button className="sign__up">Sign up</button>
                    </div>
                    </div>

                    
                </div>
            </div>
        </header>

    )
}

export default Header;