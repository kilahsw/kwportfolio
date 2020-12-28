import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import '../App.css';

const Developer = () => {
	
	return (
		<div className='developer'>
			<h1 className='websites'>Websites</h1>
			<div className='projects'>
				<div className='heffington'>
					<p>Heffington</p>
					<p>
						Client build using Gatsby with Contentful as a headless CMS. With
						Contentful, the client has full access to change all info on his
						site.
					</p>
					<img className='images' src='https://i.imgur.com/woWKENC.jpg' />
				</div>
				<div className='gouda'>
					<p>It's All Gouda</p>
					<p>
						Group full stack build using React (front end) and Mongo DB
						(backend)
					</p>
					<img className='images' src='https://i.imgur.com/peA3UuN.png' />
				</div>
			</div>
		</div>
	);
};
export default Developer;
