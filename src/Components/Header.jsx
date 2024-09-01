import './styles/Header.css'


const Header = () => {
    return (
        <>
            <div className="header-main">
                <img src='/logo.svg' alt='АвтоОтзыв' className='logo-img' ></img>
                <nav className='nav-menu'>
                    <a href="/" className='lato-simibold'>Главная</a>
                    <a href="/" className='lato-simibold'>Отзывы</a>
                    <a href="/" className='lato-simibold'>Обратная связь</a>
                    <a href="/" className='lato-simibold'>Правила</a>
                </nav>
                <form className='form-search'>
                    <input type='text' placeholder="Поиск по автосалонам" className='form-input'></input>
                    <button type='submit' className='form-button'>
                        <img src='/Search.svg' className='form-img'></img>
                    </button>
                </form>
            </div>
        </>
    )
}

export default Header