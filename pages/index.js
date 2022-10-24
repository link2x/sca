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
	const [ spinActive, setSpinActive ] = React.useState(true)

	const setText = (newText) => {
		setTypewriterActive(false)
		setTimeout(() => {
			setTypewriterText(newText)
			setTypewriterActive(true)
		}, 1000)
	}

	const newRandomNumber = () => {
		return Math.floor(Math.random() * (textOptions.length))
	}

	const resetText = () => {
		let randomNumber = newRandomNumber()
			while (textOptions[randomNumber] == typewriterText) {randomNumber = newRandomNumber()} // Guarantees a different string
			setText(textOptions[randomNumber])
	}

	const pauseAnimation = (newText = '') => {
		if ((newText) && (typewriterText != newText)) {
			setText(newText)
		}
		setSpinActive(false)
	}

	const unpauseAnimation = () => {
		setSpinActive(true)
		resetText()
	}

	const CircleItem = (props) => {
		return(
			<div className='circle-item'
				tabIndex='0'
				onMouseEnter={() => {pauseAnimation(props.newText)}}
				onFocus={() => {pauseAnimation(props.newText)}}
				onMouseLeave={unpauseAnimation}
				onBlur={unpauseAnimation}
				>
					{props?.children}
			</div>
		)
	}

	return (
		<div className='main'>
			<Head>
				<title>Self Consciously Aware</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<div className='bg'>
				<div className='bg-circle' id={spinActive ? null : 'pause'}>
					<CircleItem newText={'1 - i hope you understand / selfish'} />
					<CircleItem newText={'2 - it\'s not getting better'} />
					<CircleItem newText={'3 - waste your time'} />
					<CircleItem newText={'4 - mos'} />
					<CircleItem newText={'5 - falter'} />
					<CircleItem newText={'6 - to rest'} />
				</div>
			</div>
			<div className='logo-container' onClick={resetText}>
				<Image className='logo' src={logo} alt='Self Consciously Aware Logo' />
			</div>
			<div className='typewriter'>
				<p id={typewriterActive ? 'write' : null} onClick={resetText} >{typewriterText}</p>
			</div>
			<div className='footer'>
				<span>
					you&apos;re here early. more soon.<br />
					2022 SCA
				</span>
			</div>
		</div>
	)
}
