interface HeaderProps {
	randomizePalette: () => void;
}

export default function Header({ randomizePalette }: HeaderProps) {
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
							ABOUT
						</a>
					</li>
					<li>
						<a href="contact me" className="link">
							CONTACT ME
						</a>
					</li>
				</ul>
			</nav>
		</div>
	);
}
