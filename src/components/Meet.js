import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Footer from './Footer';
import '../App.css';

const Meet = () => {
	return (
		<div className='meetcontent'>
			<img className='images' src='https://i.imgur.com/vNmyydG.jpg' />
			<p className='descriptions'>
				Hi, my name is Kilah Willingham, and I've had a very interesting path to
				software development. Over the last 20 years, I've enjoyed careers in
				several fields: finance, startup system management, entertainment
				production, studio management and commercial acting. I look forward to
				bringing my experience and creativity to your projects.
			</p>
		</div>
	);
};

export default Meet;
