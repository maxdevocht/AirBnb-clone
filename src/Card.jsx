import React from 'react'

export default function Card() {
    return (
        <section className='cards'>
            <div className="card">
                <img className='profile' src="./images/katie-zaferes.png" alt="katie-zaferes" />
                <div className="rate">
                    <img className='star' src="./images/star.png" alt="star" />
                    <span>5.0</span>
                    <span className='grey'>(6) • </span>
                    <span className='grey'>USA</span>
                </div>
                <p className="title">Life lessons with Katie Zaferes</p>
                <p className="cost"><span className='bold'>From $136</span> / person</p>
            </div>
        </section>
    )
}