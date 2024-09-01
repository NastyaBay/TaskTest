import CardSalon from "../Components/CardSalon"
import Footer from "../Components/Footer"
import Header from "../Components/Header"
import TopPage from "../Components/TopPage"
import './Home.css'

const Home = () => {
    return (
        <>
            <Header />
            <TopPage />
            <div className="middle-page">
                <div className="mainPage">
                    <div className="left-main-page">
                        <div className="main-page-top">
                            <div className="text-1">
                                <p className="text-top">Выберите <span className="text-sity">город</span></p>
                            </div>
                            <p className="text-sort-1">Сортировать <span className="text-sort">по популярности</span></p>
                        </div>
                        <div className="cards">
                            <CardSalon
                                color='green'
                                result='Высокий рейтинг доверия'
                                img="/logo1.png"
                                name='Crystal Motors'
                                score='4,9'
                                numberFeedback='246'
                                city='Челябинск'
                                address='Университетская Набережная, 68'
                                phone='+7 (351) 220-78-13'
                                url='crystal-motors.ru' />
                            <CardSalon
                                color='red'
                                result='Много негативных отзывов'
                                img="/logo4.png"
                                name='Алькон Авто'
                                score='1,8'
                                numberFeedback='4'
                                city='Москва'
                                address='33км МКАД 6с6'
                                phone='+7 (495) 266-24-45'
                                url='alcon-auto.ru' />
                            <CardSalon
                                color='yellow'
                                result='Мало отзывов'
                                img="/logo5.png"
                                name='Proxy-cars'
                                score='4,3'
                                numberFeedback='5'
                                city='Петрозаводск'
                                address='Лыжная, 3'
                                phone='+7 (814) 255-90-38'
                                url='proxy-cars.ru' />

                            <CardSalon
                                color='red'
                                result='Новый автосалон (менее 1 года)'
                                img="/logo6.png"
                                name='Аквамарин'
                                score='1,5'
                                numberFeedback='19'
                                city='Челябинск'
                                address='Братьев Кашириных, 147А'
                                phone='+7 (351) 200-74-68'
                                url='ac-aquamarine.ru' />
                            <CardSalon
                                color='green'
                                result='Высокий рейтинг доверия'
                                img="/logo2.png"
                                name='AutoHouse'
                                score='4,9'
                                numberFeedback='206'
                                city='Челябинск'
                                address='Кузнецова, 1А'
                                phone='+7 (351) 242‑00‑89'
                                url='chel.autohouse24.ru' />
                            <CardSalon
                                color='yellow'
                                result='Мало отзывов'
                                img="/logo7.png"
                                name='Первый Независимый Автоцентр'
                                score='3,5'
                                numberFeedback='4'
                                city='Челябинск'
                                address='Братьев Кашириных, 135'
                                phone='+7 (351) 220-82-79'
                                url='pncentr.ru' />

                            <CardSalon
                                color='yellow'
                                result='Мало отзывов'
                                img="/logo7.png"
                                name='Первый Независимый Автоцентр'
                                score='3,5'
                                numberFeedback='4'
                                city='Челябинск'
                                address='Братьев Кашириных, 135'
                                phone='+7 (351) 220-82-79'
                                url='pncentr.ru' />
                            <CardSalon
                                color='red'
                                result='Новый автосалон (менее 1 года)'
                                img="/logo6.png"
                                name='Аквамарин'
                                score='1,5'
                                numberFeedback='19'
                                city='Челябинск'
                                address='Братьев Кашириных, 147А'
                                phone='+7 (351) 200-74-68'
                                url='ac-aquamarine.ru' />
                            <CardSalon
                                color='green'
                                result='Высокий рейтинг доверия'
                                img="/logo3.png"
                                name='Авто с пробегом'
                                score='4,9'
                                numberFeedback='132'
                                city='Челябинск'
                                address='Кузнецова, 1А'
                                phone='+7 (351) 200-25-16'
                                url='chel.autocred1.ru' />

                            <CardSalon
                                color='green'
                                result='Высокий рейтинг доверия'
                                img="/logo1.png"
                                name='CRYSTAL MOTORS'
                                score='4,9'
                                numberFeedback='246'
                                city='Челябинск'
                                address='Университетская Набережная, 68'
                                phone='+7 (351) 220-78-13'
                                url='crystal-motors.ru' />
                            <CardSalon
                                color='red'
                                result='Много негативных отзывов'
                                img="/logo4.png"
                                name='Алькон Авто'
                                score='1,8'
                                numberFeedback='4'
                                city='Москва'
                                address='33км МКАД 6с6'
                                phone='+7 (495) 266-24-45'
                                url='alcon-auto.ru' />
                            <CardSalon
                                color='yellow'
                                result='Мало отзывов'
                                img="/logo5.png"
                                name='Proxy-cars'
                                score='4,3'
                                numberFeedback='5'
                                city='Петрозаводск'
                                address='Лыжная, 3'
                                phone='+7 (814) 255-90-38'
                                url='proxy-cars.ru' />

<CardSalon
                                color='red'
                                result='Новый автосалон (менее 1 года)'
                                img="/logo6.png"
                                name='Аквамарин'
                                score='1,5'
                                numberFeedback='19'
                                city='Челябинск'
                                address='Братьев Кашириных, 147А'
                                phone='+7 (351) 200-74-68'
                                url='ac-aquamarine.ru' />
                            <CardSalon
                                color='green'
                                result='Высокий рейтинг доверия'
                                img="/logo2.png"
                                name='AutoHouse'
                                score='4,9'
                                numberFeedback='206'
                                city='Челябинск'
                                address='Кузнецова, 1А'
                                phone='+7 (351) 242‑00‑89'
                                url='chel.autohouse24.ru' />
                            <CardSalon
                                color='yellow'
                                result='Мало отзывов'
                                img="/logo7.png"
                                name='Первый Независимый Автоцентр'
                                score='3,5'
                                numberFeedback='4'
                                city='Челябинск'
                                address='Братьев Кашириных, 135'
                                phone='+7 (351) 220-82-79'
                                url='pncentr.ru' />

                            <CardSalon
                                color='yellow'
                                result='Мало отзывов'
                                img="/logo7.png"
                                name='Первый Независимый Автоцентр'
                                score='3,5'
                                numberFeedback='4'
                                city='Челябинск'
                                address='Братьев Кашириных, 135'
                                phone='+7 (351) 220-82-79'
                                url='pncentr.ru' />
                            <CardSalon
                                color='red'
                                result='Новый автосалон (менее 1 года)'
                                img="/logo6.png"
                                name='Аквамарин'
                                score='1,5'
                                numberFeedback='19'
                                city='Челябинск'
                                address='Братьев Кашириных, 147А'
                                phone='+7 (351) 200-74-68'
                                url='ac-aquamarine.ru' />
                            <CardSalon
                                color='green'
                                result='Высокий рейтинг доверия'
                                img="/logo3.png"
                                name='Авто с пробегом'
                                score='4,9'
                                numberFeedback='132'
                                city='Челябинск'
                                address='Кузнецова, 1А'
                                phone='+7 (351) 200-25-16'
                                url='chel.autocred1.ru' />

                        </div>
                        <div class="main-page-down">
                            <button class="btn-main-page">Показать еще</button>
                        </div>
                    </div>

                    <div className="advertisement">
                        <div className="rating">
                            <h2 className="name-rating">Рейтинг автосалонов</h2>
                            <h3 className="place">1 место</h3>
                            <div className="salon">
                                <div className="left-salon">
                                    <img src="/logo1.png" className="img-salon"></img>
                                    <div className="name-review">
                                        <p className="name-salon">Crystal Motors</p>
                                        <p className="review-salon">246 отзывов</p>
                                    </div>
                                </div>
                                <div className="star-score-salon">
                                    <img src="/Star.svg" className="star-salon"></img>
                                    <p className="score-salon">4,9</p>
                                </div>
                            </div>

                            <h3 className="place">2 место</h3>
                            <div className="salon">
                                <div className="left-salon">
                                    <img src="/logo2.png" className="img-salon"></img>
                                    <div className="name-review">
                                        <p className="name-salon">AutoHouse</p>
                                        <p className="review-salon">206 отзывов</p>
                                    </div>
                                </div>
                                <div className="star-score-salon">
                                    <img src="/Star.svg" className="star-salon"></img>
                                    <p className="score-salon">4,9</p>
                                </div>
                            </div>

                            <h3 className="place">3 место</h3>
                            <div className="salon">
                                <div className="left-salon">
                                    <img src="/logo3.png" className="img-salon"></img>
                                    <div className="name-review">
                                        <p className="name-salon">Авто с пробегом</p>
                                        <p className="review-salon">132 отзывов</p>
                                    </div>
                                </div>
                                <div className="star-score-salon">
                                    <img src="/Star.svg" className="star-salon"></img>
                                    <p className="score-salon">4,9</p>
                                </div>
                            </div>
                            <p className="rating-down-p">Последнее обновление информации: 22.01.2024 г.</p>
                        </div>
                        <img src="/imgAdvert.png" className="imgAdvertisment"></img>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Home