import tinder from '../images/tinder.png'

const Nav = ({authToken}) => {
    return <nav>
        <div className="logo-container">
            <img className="logo" src={tinder} alt='logo'/>
            {authToken && <button className='primary-button'>Login</button>}
        </div>

    </nav>
    }
    
    export default Nav