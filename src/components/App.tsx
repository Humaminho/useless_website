import { useEffect } from 'react';
import lightPalette, { Palette } from '../data/lightPalette.tsx';
import '../css/App.css';
import Nav from './Nav.tsx';
import Main from './Main.tsx';
import Footer from './Footer.tsx';

function App() {
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
			'--emph-color',
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

	useEffect(() => {
		changePalette(lightPalette[randomizeNumber(0, 3)]);
	}, []);

	return (
		<div className="app">
			<Nav />
			<Main />
			<Footer />
		</div>
	);
}

export default App;
