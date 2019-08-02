import React from 'react';
import Tilt from 'react-tilt';
import brain from './brain.png';
import './Logo.css';

const Logo = () => {
	return (
		<div className='ma4 mt0 center'>
			<Tilt className="Tilt br2 shadow-3" options={{ max : 55 }} style={{ height: 175, width: 175 }} >
				<div className="Tilt-inner pa3">
					<img src={brain} alt='logo' />
					<p className="ma0 tracked b white center">Face Finder</p>
				</div>
			</Tilt>
		</div>
	);
}

export default Logo;