import './styles/Footer.css'


const Footer = () => {
    return (
        <>
            <div className='footer-main'>
                <div className='footer-inside'>
                    <div className="footer-top">
                        <div className='footer-left'>
                            <img src='/logo.svg' alt='АвтоОтзыв' className='logo-img-footer' ></img>
                            <nav className='nav-menu-footer'>
                                <a href="/" className='lato-simibold'>Отзывы</a>
                                <a href="/" className='lato-simibold'>Обратная связь</a>
                                <a href="/" className='lato-simibold'>Правила</a>
                                <a href="/" className='lato-simibold'>Политика конфиденциальности</a>
                            </nav>
                        </div>
                        <div className='footer-right'>
                            <button className='btn-footer-add lato-simibold'>Добавить автосалон</button>
                            <button className='btn-footer-arrow'><img src='/Arrow 1.svg'></img></button>
                        </div>
                    </div>
                    <hr className='hr-footer'></hr>
                    <p className='p-footer'>© 2024 Авто отзыв. Все права защищены.</p>
                </div>
            </div>
        </>
    )
}

export default Footer