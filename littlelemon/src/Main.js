import bruchetta from './img/bruchetta.png';
import greek_salad from './img/greek_salad.jpg';
import lemon_dessert from './img/lemon_dessert.jpg';
import restauranfood from './img/restauranfood.jpg';

export default function Main() {
    return (
        <>
            <main>
                <section className='first-section'>
                    <div className='section-right'>
                        <img src={restauranfood} alt="Reserve table image"/>
                    </div>
                    <div className='section-left'>
                        <h1>Little <span>Lemon</span></h1>
                        <h2>Chicago</h2>
                        <p>Welcome to Little lemon restaurant online platform. We are here to serve your quicker 
                            and better.
                        </p>
                        <button>Reserve a Table</button>
                    </div>
                </section>
                <section className='second-section'>
                    <div className="section-head">
                        <h2>Specials</h2>
                        <button>Online Menu</button>
                    </div>
                    <div className='section-body'>
                        <article>
                            <img src={greek_salad} height="200px" alt="meal image"/>
                            <div className="food-tag"><h3>Greek salad</h3><h3>$12.99</h3></div>
                            <p>The famous greek salad of crispy lettuce, peppers, olives and our Chicago
                                style feta cheese, garnished with crunchy garlic and rosemary crouons.
                            </p>
                            <p className='od'>Order a delivery</p>
                        </article>
                        <article>
                            <img src={bruchetta} height="200px" alt="meal image"/>
                            <div className="food-tag"><h3>Brucheta</h3><h3>$5.99</h3></div>
                            <p>Our Brucheta is made from grilled bread that has been smeared with garlic and 
                                seasoned with salt and olive oil.
                            </p>
                            <p className='od'>Order a delivery</p>
                        </article>
                        <article>
                            <img src={lemon_dessert} height="200px" alt="meal image"/>
                            <div className="food-tag"><h3>Lemon Desert</h3><h3>$12.99</h3></div>
                            <p>This comes straight from grandma's recipe book, every last ingredient has been
                                sourced and is as authentic as can be imagined.
                            </p>
                            <p className='od'>Order a delivery</p>
                        </article>
                    </div>
                </section>
            </main>
        </>
    )
}