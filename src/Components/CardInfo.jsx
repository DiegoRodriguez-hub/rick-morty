import './CardInfo.css'

function CardInfo({location}) {
  return (
    <div className='cardInfo'>
      <h2 className='cardInfo_title'>{location?.name}</h2>
      <div className='cardInfo_container'>
        <div className='cardInfo_item'>
          <h3 className='cardInfo_item-title'>Type</h3>
          <p className='cardInfo_item-data'>{location?.type}</p>
        </div>
        <div className='cardInfo_item'>
            <h3 className='cardInfo_item-title'>Dimension</h3>
            <p className='cardInfo_item-data'>{location?.dimension}</p>
        </div>
        <div className='cardInfo_item'>
            <h3 className='cardInfo_item-title'>Population</h3>
            <p className='cardInfo_item-data'>{location?.residents?.length}</p>
        </div>
      </div>
    </div>
  )
}

export default CardInfo