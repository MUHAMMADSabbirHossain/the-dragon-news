import logo from '../../../assets/logo.png';
import moment from 'moment';
const Header = () => {
    return (
        <div className='text-center'>
            <img className="mx-auto" src={logo} alt="The Dragon News logo." />
            <h2>Journalism Without Fear or Favour</h2>
            <time className='text-xl' dateTime={moment().format('LLLL')}>{moment().format('LLLL')}</time>

        </div>
    );
};

export default Header;