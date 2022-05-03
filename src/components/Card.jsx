import React from 'react'
import loc from '../images/loc.png'


function Card(props) {
    const {
        imageUrl,
        location,
        googleMapsUrl,
        title,
        startDate,
        endDate,
        description   
    } = props.item
  return (
    <div key={props.index} className='card'>
        <img src={imageUrl} alt="" className='card-img'/>
        <div className='card-words'>
            <section className='card-location'>
                <img src={loc} alt="" className='card-loc-img'/>
                <h3 className='card-loc'>{location}</h3>
                <a href={googleMapsUrl} className='card-url'>View on Google Maps</a>
            </section>
            <h1 className='card-title'>{title}</h1>
                <h4 className='card-date'>{startDate} - {endDate}</h4>
                <p className='card-desc'>{description}</p>
        </div>
    </div>
  )
}

export default Card