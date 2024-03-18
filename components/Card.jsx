import React from 'react'

export default function Card(props) {
    return (
        <section className='cards'>
            <div className="card">
                <img className='profile' src={props.img}alt="profile-img" />
                <div className="rate">
                    <img className='star' src="./images/star.png" alt="star" />
                    <span>{props.rating}</span>
                    <span className='grey'>({props.reviewCount}) • </span>
                    <span className='grey'>{props.location}</span>
                </div>
                <h2 className="title">{props.title}</h2>
                <p className="cost"><span className='bold'>From ${props.price}</span> / person</p>
            </div>
        </section>
    )
}