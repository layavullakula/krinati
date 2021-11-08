import logo from '../Home/logo.png'

const Header = () =>(
    <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        background: 'linear-gradient(to right,#f68e1e,#fec232)',
        alignItems: 'center'
    }}>
        <img src={logo} alt="logo" style={{height: '70px',width:'150px',borderRadius: '60px'}} />
        <h1 style={{
            color: 'white',
            fontSize: '40px',
            fontFamily: 'cursive'
        }}>Cabs</h1>
        <ul style={{
            listStyleType: 'none',
            display: 'flex',
            justifyContent: 'space-between',
            minWidth: '200px',
            paddingRight: '10px',
            color: 'white',
            fontWeight: 'bold',
            fontFamily: 'cursive'
        }}>
            <li>Home</li>
            <li>Driver Register</li>
        </ul>
    </div>
)

export default Header  