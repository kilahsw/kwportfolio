import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Meet from './Meet';
import '../App.css';

const Footer = () => {
	const [meetToggle, setMeetToggle] = useState(false);

	const showMeet = meetToggle ? 'width1' : '';
	

	return (
		<div className='footer'>
			<p
				className='meetfooter'
				onClick={() => {
					setMeetToggle(!meetToggle);
				}}>
				meet kilah
			</p>
			<a href='mailto:kilahsw@gmail.com'>
				<i className='fas fa-envelope'></i>
			</a>
			<a href='https://github.com/kilahsw'>
				<i className='fab fa-github'></i>
			</a>
			<a href='https://www.linkedin.com/in/kilahw/'>
				<i className='fab fa-linkedin'></i>
			</a>
			{/* <i className='fab fa-instagram'></i> */}
			<div className={`contentBox ${showMeet}`}>
				<Meet />
				<p
					className='close'
					onClick={() => {
						setMeetToggle(false);
					}}>
					close
				</p>
			</div>
		</div>
	);
};
export default Footer;
