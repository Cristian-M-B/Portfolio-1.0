import React from 'react';
import Nav from './Nav.jsx';
import Footer from './Footer.jsx';
import BigCard from './BigCard.jsx';
import images from '../assets/certifications.js';
import '../styles/Certifications.scss';

export default function Certifications() {
    return (
        <>
            <Nav />
            <div className='certifications'>
                <div className='images'>
                    {images?.map(certification => {
                        return <BigCard image={certification?.image} link={certification?.link} />
                    })}
                </div>
            </div>
            <Footer />
        </>
    )
}
