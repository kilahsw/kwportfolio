import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import '../App.css';

const Developer = () => {
	return (
		<div id='developer'>
			<h1 className='pagetitles'>PROJECTS</h1>
			<div className='projects'>
				<div className='heffington'>
					<a href='https://heffington.netlify.app/'>
						<h2 className='projecttitles'>Heffington</h2>
					</a>
					<p className='projectdesc'>
						Client build using Gatsby with Contentful as a headless CMS. The goal of this build was to make a site
						that was completely customizable. 
					</p>
					<img className='images' src='https://i.imgur.com/woWKENC.jpg' />
					<div className='sitelinks'>
						<a href='https://heffington.netlify.app/'>
							<p className='linksite'>site |</p>
						</a>
						<a href='https://github.com/kilahsw/Heffington'>
							<p className='linksite'>&nbsp;code</p>
						</a>
					</div>
				</div>
				<div className='gouda'>
					<a href='https://its-all-gouda-frontend.netlify.app/'>
						<h2 className='projecttitles'>It's All Gouda</h2>
					</a>
					<p className='projectdesc'>
						Group project and full stack build using React (front end) and Mongo
						DB (backend). I built the backend for this project.
					</p>
					<img className='images' src='https://i.imgur.com/3nEGmFb.png' />
					<div className='sitelinks'>
						<a href='https://its-all-gouda-frontend.netlify.app/'>
							<p className='linksite'>site |</p>
						</a>
						<a href='https://github.com/hannahtrask/UNIT3-frontend'>
							<p className='linksite'>&nbsp;code</p>
						</a>
					</div>
				</div>
			</div>
		</div>
	);
};
export default Developer;
