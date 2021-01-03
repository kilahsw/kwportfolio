import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Footer from './Footer';
import '../App.css';

const Meet = () => {
	return (
		<div className='meetcontent'>
			<img className='images' src='https://i.imgur.com/vNmyydG.jpg' />
			<p className='descriptions'>
				Hi and thanks for visiting my site. I'm from the South, but I make my
				home in Los Angeles, CA, and I'm an artist, and former corporate
				professional, who loves to code. <br />
				<br />
				I'm a front end developer, who most enjoys working in React and Gatsby,
				with a sizeable working knowledge of the backend. <br />
				<br />
				My name is Kilah, and I look forward to bringing my experience and
				creativity to your projects.
			</p>
		</div>
	);
};

export default Meet;
