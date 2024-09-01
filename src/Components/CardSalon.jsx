import './styles/CardSalon.css'


const CardSalon = ({color, result, img, name, score, numberFeedback, city, address, phone, url}) => {
    return (
        <>
            <div className='cardSalon'>
                <div className={`top-card-color top-card-color-${color}`}> <p className='p-top-card-color'>{result}</p></div>

                <div className='top-card-name'>
                    <img className="img-camp-card" src={img}></img>
                    <div className='card-name'>
                        <p className='card-name-company'>{name}</p>
                        <div className='card-feedback'>
                            <img className='img-star-card' src={'/Star.svg'}></img>
                            <p className='card-score'>{score}</p>
                            <p className='card-number-feedback'>{numberFeedback} отзывов</p>
                        </div>
                    </div>
                </div>

                <div className='description-card'>
                    <div className='block-description-1'>
                        <p className='col-description-1'>Город:</p>
                        <p className='col-description-1'>Адрес:</p>
                        <p className='col-description-1'>Телефон:</p>
                        <p className='col-description-1 c-d-4'>Сайт:</p>
                    </div>
                    <div className='block-description-2'>
                        <p className='col-description-2'>{city}</p>
                        <p className='col-description-2'>{address}</p>
                        <p className='col-description-2'>{phone}</p>
                        <p className='col-description-2 c-d-4'>{url}</p>
                    </div>
                </div>

                <div className='bottom-card'>
                    <button className='btn-card-details'><p className='btn-card-placeholder'>Подробнее</p></button>
                    <button className='btn-card-img'>
                        <img className='img-icon-card' src='/iconCard.svg'></img>
                    </button>
                </div>
            </div>
        </>
    )
}

export default CardSalon

/*<div className='line-description l-d-1'>
                        <p className='col-description-1'>Город:</p>
                        <p className='col-description-2'>Челябинск</p>
                    </div>
                    <div className='line-description l-d-2'>
                        <p className='col-description-1'>Адрес:</p>
                        <p className='col-description-2'>Университетская Набережная, 68</p>
                    </div>
                    <div className='line-description l-d-3'>
                        <p className='col-description-1'>Телефон:</p>
                        <p className='col-description-2'>+7 (351) 220-78-13</p>
                    </div>
                    <div className='line-description l-d-4'>
                        <p className='col-description-1'>Сайт:</p>
                        <p className='col-description-2'>crystal-motors.ru</p>
                    </div>*/