import './styles/TopPage.css'

const TopPage = () => {
    return (
        <>
            <div className='top-page'>
                <img src='/imgBack.png' alt='фоновая картинка' className='img-back'></img>
                <div className="block-heading">
                    <h1 className="h1-top-page lato-bold">Отзывы об автосалонах по всей России</h1>
                    <h2 className="h2-top-page">Мы собираем только реальные отзывы покупателей и посетителей автосалонов, чтобы поделиться ими с Вами! Надеемся, и Вы примите активное участие в обсуждениях, и не станете жертвой автообмана!</h2>
                    <button className='btn-top-page'>Найти отзывы об автосалоне</button>
                </div>
            </div>
        </>
    )
}

export default TopPage