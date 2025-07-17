'use client'
import React, { useEffect } from 'react'

const TopNavBar = () => {
    useEffect(() => {
        const h3text = document.getElementById('h3text');
        const textContent = h3text.textContent;
        h3text.innerHTML = '';
        textContent.split('').forEach(char => {
            const span = document.createElement('span');
            span.textContent = char;
            span.style.transition = 'transform 0.3s';
            span.onmouseover = () => {
                span.style.transform = 'scale(1.5)';
            };
            span.onmouseleave = () => {
                span.style.transform = 'scale(1)';
            };
            h3text.appendChild(span);
        });
    }, []);
return (
    <div className='bg-gradient-to-r from-first py-4 flex justify-center items-center via-second to-third'>
        <h2  id='h3text' className=''>🚀 Best Digital Marketing Agency in Pakistan | SEO, Web & Shopify Experts!</h2>
    </div>
)
}

export default TopNavBar
