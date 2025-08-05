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
   <div className='bg-purple-500  flex justify-center items-center'>
        <h2  id='h3text' className=''><marquee>Best Digital Marketing Agency in Pakistan | SEO, Web & Shopify Experts!</marquee></h2>
    </div>
)
}

export default TopNavBar
