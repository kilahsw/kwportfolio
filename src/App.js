import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Background from './Photos/sunrise.jpg';
import Developer from './components/Developer';
import Writer from './components/Writer';
import Actor from './components/Actor'
import Footer from './components/Footer'
import './App.css';

function App() {
	const [developerToggle, setDeveloperToggle] = useState(false);
	const [writerToggle, setWriterToggle] = useState(false);
	const [actorToggle, setActorToggle] = useState(false);

	const showDeveloper = developerToggle ? 'width1' : '';
	const showWriter = writerToggle ? 'width1' : '';
	const showActor = actorToggle ? 'width1' : '';

	return (
		<div className='App'>
			<div className='center'>
				<div className='name'>
					<h1>kilah willingham</h1>
				</div>
				<div className='titles'>
					<h3
						onClick={() => {
							setDeveloperToggle(!developerToggle);
							setWriterToggle(false);
							setActorToggle(false);
						}}>
						developer&nbsp;
					</h3>
					<h3
						onClick={() => {
							setWriterToggle(!writerToggle);
							setDeveloperToggle(false);
							setActorToggle(false);
						}}>
						|&nbsp;writer&nbsp;
					</h3>
					<h3
						onClick={() => {
							setActorToggle(!actorToggle);
							setDeveloperToggle(false);
							setWriterToggle(false);
						}}>
						|&nbsp;actor
					</h3>
				</div>
			</div>

			<div className={`contentBox ${showDeveloper}`}>
				<Developer />
			</div>

			<div className={`contentBox ${showWriter}`}>
				<Writer />
			</div>

			<div className={`contentBox ${showActor}`}>
				<Actor />
			</div>
			<div>
				<Footer />
			</div>
		</div>
	);
}

export default App;
