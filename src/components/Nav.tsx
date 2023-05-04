import React from 'react';

export default function Header() {
	return (
		<div className='header'>
			<div className="logo">logo</div>
			<nav className='nav'>
				<ul className="nav-list">
					<li>
						<a href="work" className="link">
							Work
						</a>
					</li>
					<li>
						<a href="about" className="link">
							About
						</a>
					</li>
					<li>
						<a href="contact me" className="link">
							Contact me
						</a>
					</li>
				</ul>
			</nav>
		</div>
	);
}
