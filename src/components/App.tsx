import { useEffect, useState } from 'react';
import lightPalette, { Palette } from '../data/lightPalette.tsx';
import '../css/App.css';
import Header from './header/Header.tsx';
import Main from './main/Main.tsx';
import Footer from './footer/Footer.tsx';

function App() {
	const [currentPalette, setCurrentPalette] = useState(0);

	function randomizeNumber(min: number, max: number): number {
		return Math.floor(Math.random() * (max - min + 1) + min);
	}

	function changePalette(palette: Palette): void {
		document.documentElement.style.setProperty(
			'--primary-color',
			palette.primary
		);
		document.documentElement.style.setProperty(
			'--secondary-color',
			palette.secondary
		);
		document.documentElement.style.setProperty(
			'--emphasis-color',
			palette.emph
		);
		document.documentElement.style.setProperty(
			'--text-color',
			palette.text
		);
		document.documentElement.style.setProperty(
			'--extra-color',
			palette.extra
		);
	}

	function randomizePalette(): void {
		const randomNumber: number = randomizeNumber(0, 3);
		if (randomNumber === currentPalette) {
			randomizePalette();
			return;
		} else {
			setCurrentPalette(randomNumber);
			changePalette(lightPalette[randomNumber]);
		}
	}

	useEffect(() => {
		randomizePalette();
	}, []);

	return (
		<div className="app">
			<Header randomizePalette={randomizePalette} />
			<Main />
			<Footer />
		</div>
	);
}

export default App;
