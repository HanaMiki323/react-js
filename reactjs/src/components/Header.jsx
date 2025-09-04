import React from 'react';
import '../style/Header.css';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <>
          <header style={{width: '100%', height: '100px', backgroundColor: 'rgb(221, 221, 16)', display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'absolute', top: '0px', left: '0px'}}>            
              <nav style={{width: '100%', height: '100%'}}>
                <div style={{width: '100%', height: '100%', position: 'absolute', top: '0px', left: '0px'}}>
                  <img src="/public/logo/logo.jpg" alt="logo" style={{width: '70px', borderRadius: '50%', position: 'absolute', top: '50%', left: '5%', transform: 'translateY(-50%)'}} />
                  <span style={{fontSize: '25px', fontFamily: 'Moul', fontWeight: 100, position: 'absolute', top: '50%', left: '15%', transform: 'translateY(-50%)'}}>Hana Miki</span>
                </div>
                <div className='navbar' style={{height: '100%', width: '100%', position: 'absolute', top: '0', left: '0'}}>
                  <ul style={{height: '100%', display: 'flex', justifyContent: 'end', marginRight: '5%', alignItems: 'center'}}>
                    <li style={{display: 'inline-block'}}><Link to="/home" style={{transition: '0.3s',fontFamily: 'khmer' , textDecoration: 'none', color: 'black', fontSize: '20px', padding: '10px 20px'}}>Home</Link></li>
                    <li style={{display: 'inline-block'}}><Link to="/about" style={{transition: '0.3s',fontFamily: 'khmer' , textDecoration: 'none', color: 'black', fontSize: '20px', padding: '10px 20px'}}>About</Link></li>
                  </ul>
                </div>
              </nav>
          </header>   
        </>
    );
};

export default Header;