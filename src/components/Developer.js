import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import '../App.css';

const Developer = () => {
	return (
		<div id='developer'>
			<div className='projects'>
				<h1 className='websites'>PROJECTS</h1>
				<div className='heffington'>
					<h2 className='projectTitles'>Heffington</h2>
					<p className='projectdesc'>
						Client build using Gatsby with Contentful as a headless CMS. With
						Contentful, the client has full access to change all info on his
						site.
					</p>
					<img className='images' src='https://i.imgur.com/woWKENC.jpg' />
					<div className='sitelinks'>
						<p>Site |</p>
						<p>Code</p>
					</div>
				</div>
				<div className='gouda'>
					<h2 className='projectTitles'>It's All Gouda</h2>
					<p className='projectdesc'>
						Group full stack build using React (front end) and Mongo DB
						(backend)
					</p>
					<img className='images' src='https://i.imgur.com/peA3UuN.png' />
					<div className='sitelinks'>
						<p>Site |</p>
						<p>Code</p>
					</div>
				</div>
			</div>
		</div>
	);
};
export default Developer;
