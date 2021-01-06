import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Footer from './Footer';
import '../App.css';

const Meet = () => {
	return (
		<div className='meetcontent'>
			<img className='meetimage' src='https://i.imgur.com/vNmyydG.jpg' />
			<p className='descriptions'>
				Developer, Writer, Actor - an incredibly broad range of skills, but I've
				always believed in doing all the things that make you feel alive. Art
				does that for me, in every form. <br />
				<br /> I write to process experiences, and my blog, Switch(), details a
				most turbulent (and rewarding) one - learning to code. I act to
				experience what it means to physically bring a vision to life, and I've
				been fortunate enough to have roles in the national commercials you'll
				see on my reel. <br />
				And, developing is art. It is starting with nothing and building an app
				that is equally inviting, responsive, and captivating. <br />
				I've also spent the last 18 years in various corporate management roles learning the ins and outs of working
				with people. Those roles schooled me on the importance of connections which, I believe, are the foundation on which everything is built.
				<br />
				<br />
				I'm a front end developer, who most enjoys working in React and Gatsby,
				with a sizeable working knowledge of the backend. I'm a writer, I'm an
				actor, I'm an artist.
				<br />
				<br />
				My name is Kilah, and I look forward to bringing your vision to life.
			</p>
		</div>
	);
};

export default Meet;
