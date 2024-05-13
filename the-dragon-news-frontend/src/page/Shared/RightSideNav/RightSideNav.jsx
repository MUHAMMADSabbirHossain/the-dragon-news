import React from 'react';
import { FaGoogle, FaGithub, FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa'
import qZone1 from '../../../assets/qZone1.png';
import qZone2 from '../../../assets/qZone2.png';
import qZone3 from '../../../assets/qZone3.png';

const RightSideNav = () => {
    return (
        <div>
            <div className='p-4 space-y-2 mb-6'>
                <h2 className='text-3xl mb-4'>Login With</h2>
                <button className="btn btn-outline w-full">
                    <FaGoogle></FaGoogle>
                    Button
                </button>
                <button className="btn btn-outline w-full">
                    <FaGithub></FaGithub>
                    Button
                </button>
            </div>

            <div className='p-2 mb-5'>
                <h2>Find Us on</h2>
                <a className="p-4 flex text-lg items-center border rounded-t-lg">
                    <FaFacebook className='mr-2'></FaFacebook>
                    <span>Facebook</span>
                </a>
                <a className="p-4 flex text-lg items-center border-x">
                    <FaTwitter className='mr-2'></FaTwitter>
                    <span>Twitter</span>
                </a>
                <a className="p-4 flex text-lg items-center border rounded-b-lg">
                    <FaInstagram className='mr-2'></FaInstagram>
                    <span>Instagram</span>
                </a>
            </div>
            {/* q zone */}
            <div className='p-4 mb-6'>
                <h2 className='text-3xl space-y-2 mb-4'>Q Zone</h2>
                <img src={qZone1} alt="" />
                <img src={qZone2} alt="" />
                <img src={qZone3} alt="" />
            </div>

        </div>
    );
};

export default RightSideNav;