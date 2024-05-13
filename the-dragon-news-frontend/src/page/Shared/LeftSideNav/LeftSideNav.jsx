import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const LeftSideNav = () => {
    const [categories, setCategoris] = useState([]);

    useEffect(() => {
        fetch("../../../../public/categories.json")
            .then(res => res.json())
            .then(data => {
                // console.log(data);
                setCategoris(data);
            });

    }, [])
    return (
        <div className='space-y-5'>
            <h2 className="text-2xl">All Categories({categories.length})</h2>
            {
                categories.map(category =>
                    <Link
                        key={category.id}
                        to={`${categories.name}`}
                        className='block ml-4 text-xl font-semibold'>{category.name}</Link>)
            }
        </div >
    );
};

export default LeftSideNav;