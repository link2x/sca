import Head from 'next/head'
import Image from 'next/image'
import * as React from 'react'
import logo from '../public/logo.png'

export default function Home() {

	const [ typewriterText, setTypewriterText ] = React.useState('')
	const [ typewriterActive, setTypewriterActive ] = React.useState(false)

	const textOptions = [
		'i\'m glad you\'re here',
		'thank you for being here',
		'some days, i wish i could take it all back'
	]

	const resetText = () => {
		setTypewriterActive(false)

		setTimeout(() => {
			let randomNumber = Math.floor(Math.random() * (textOptions.length))
			setTypewriterText(textOptions[randomNumber])
			setTypewriterActive(true)
		}, 1000)
	}

	React.useMemo(resetText, [true])

	return (
		<div style={{height: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center'}}>
			<Head>
				<title>Self Consciously Aware</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<div className='logo-container'>
				<Image className='logo' src={logo} />
			</div>
			<div className='typewriter'>
				<p id={typewriterActive ? 'write' : null} onClick={resetText} >{typewriterText}</p>
			</div>
		</div>
	)
}
