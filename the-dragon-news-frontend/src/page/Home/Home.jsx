import React from 'react';
import Navbar from '../Shared/Navbar/Navbar';
import Header from '../Shared/Header/Header';
import LeftSideNav from '../Shared/LeftSideNav/LeftSideNav';
import RightSideNav from '../Shared/RightSideNav/RightSideNav';
import BreakingNews from './BreakingNews';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <BreakingNews></BreakingNews>
            <Navbar></Navbar>

            <main className='grid grid-cols-1 md:grid-cols-5 gap-5'>
                <div className='border'>
                    <LeftSideNav></LeftSideNav>
                </div>
                <div className='md:col-span-3 border'>
                    news comming soon...
                </div>
                <div className='border'>
                    <RightSideNav></RightSideNav>
                </div>
            </main>
        </div>
    );
};

export default Home;