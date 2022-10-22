import Head from 'next/head'
import Image from 'next/image'
import * as React from 'react'
import logo from '../public/logo.png'

export default function Home() {

	const textOptions = [
		'self consciously aware',
		'i\'m glad you\'re here',
		'thank you for being here',
		'some days, i wish i could take it all back',
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
		</div>
	)
}
