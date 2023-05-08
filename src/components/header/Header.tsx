import Burger from './Burger.tsx';
interface HeaderProps {
  randomizePalette: () => void;
}
export default function Header({ randomizePalette }: HeaderProps) {
	function handleBurgerClick(): void {
		console.log('clicked');
		const navList = document.querySelector('.burger-nav');
		navList?.classList.toggle('burger-nav-active');
	}

	return (
		<div className="header">
			<div className="logo" onClick={randomizePalette}></div>
			<nav className="nav">
				<ul className="nav-list">
					<li>
						<a href="work" className="link">
							WORK
						</a>
					</li>
					<li>
						<a href="about" className="link">
							GALLERY
						</a>
					</li>
					<li>
						<a href="contact me" className="link">
							ABOUT
						</a>
					</li>
				</ul>
			</nav>
      <Burger />
			<svg
				xmlns="http://www.w3.org/2000/svg"
				width="2rem"
				height="2rem"
				fill="currentColor"
				className="bi bi-list burger"
				viewBox="0 0 16 16"
				onClick={handleBurgerClick}
			>
				<path
					fillRule="evenodd"
					d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
				/>
			</svg>
		</div>
	);
}
