import './promo.css'
import promoImg from './../../img/promoImg.png'

const Promo = () => {
    return (
        <section className="promo">
            <div className="container">
                <div className="promo__content">

                    <div className="promo__text">
                        <div className="text">
                            <h1>Unlock Your Potential with <br/>Byway</h1>
                            <p className="welcome__text">Welcome to Byway, where learning knows no bounds. We believe <br/> that education is the key to personal and professional growth, <br/> and we're here to guide you on your journey to success. </p>
                        </div>

                        <button className="btn"> <a href="#"><p className='text__btn'>Start your instructor journey </p></a></button>

                    </div>
                    <div className="promo__img">
                        <img src={promoImg} alt="Promo" />

                    </div>
                </div>
            </div>
        </section>

        
        );
}

export default Promo;