import Head from 'next/head'
import Image from 'next/image'
import * as React from 'react'
import logo from '../public/logo.png'

export default function Home() {

	const textOptions = [
		// Intro Text / Artist Name
		'self consciously aware',
		
		// Randoms
		'i\'m glad you\'re here',
		'some days, i wish i could take it all back',

		// I Hope You Understand / Selfish
		'there\'s nothing wrong with me, and yet everything',
		'i\'m crying all the time for more than you understand',

		// It's Not Getting Better
		'the words you spoke don\'t resonate inside me',
		'in the same way that I always was',

		// Waste Your Time
		'it\'s okay if you want me to let you go',
		'don\'t i really waste your time?',

		// MOS
		'i\'ll start with a new plan. start once again',
		'i never meant for these nightmares to come true',

		// Falter
		'i can\'t stand for this. i don\'t trust you anymore',
		'you said that we\'ll stretch too thin',

		// To Rest
		'are you human? do you care at all?',
		'i will go quietly',

		// Teasers?
		'words of ash and paper will melt into the sun',
		'sleep tonight - you morning riser, you',

		// Pride
		'trans rights = human rights'
	]

	const [ typewriterText, setTypewriterText ] = React.useState(textOptions[0])
	const [ typewriterActive, setTypewriterActive ] = React.useState(true)

	const newRandomNumber = () => {
		return Math.floor(Math.random() * (textOptions.length))
	}

	const resetText = () => {
		setTypewriterActive(false)

		setTimeout(() => {
			let randomNumber = newRandomNumber()
			while (textOptions[randomNumber] == typewriterText) {randomNumber = newRandomNumber()} // Guarantees a different string
			setTypewriterText(textOptions[randomNumber])
			setTypewriterActive(true)
		}, 1000)
	}

	return (
		<div style={{height: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center'}}>
			<Head>
				<title>Self Consciously Aware</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<div className='logo-container' onClick={resetText} >
				<Image className='logo' src={logo} />
			</div>
			<div className='typewriter'>
				<p id={typewriterActive ? 'write' : null} onClick={resetText} >{typewriterText}</p>
			</div>
			<div className='footer'>
				<span>
					you're here early. more soon.<br />
					2022 SCA
				</span>
			</div>
		</div>
	)
}
