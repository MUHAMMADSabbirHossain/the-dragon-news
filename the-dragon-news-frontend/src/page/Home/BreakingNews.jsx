import React from 'react';
import Marquee from "react-fast-marquee";
import { Link } from 'react-router-dom';

const BreakingNews = () => {
    return (
        <div className='flex'>
            <button className='btn btn-secondary text-white font-bold'> Breaking News</button>
            <Marquee pauseOnHover={true} speed={100}>
                <Link to="/" className='mr-12'>I can be a React component, multiple React components, or just some text...</Link>
                <Link to="/" className='mr-12'>I can be a React component, multiple React components, or just some text...</Link>
                <Link to="/" className='mr-12'>I can be a React component, multiple React components, or just some text...</Link>
            </Marquee>
        </div>
    );
};

export default BreakingNews;