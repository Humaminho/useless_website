import React from 'react';

export default function Main() {
	return (
		<div className="main">
			<div className="quote-section">
				<div className="quote">
					"THERE'S SIMPLY NO WAY TO TELL PEOPLE THEY'VE DEDICATED
					THEIR LIFE TO AN <em>ILLUSION</em>."
				</div>
				<div className="author">- Daniel Dennet -</div>
			</div>
			<div className="cards-section">
				<div className="cards-section-title">
					WORKS THAT I NEVER DONE:
				</div>
				<div className="cards">
					<div className="card">
						<div className="card-title">E-commerce Website</div>
						<div className="card-content">
							<div className="card-description">
								A responsive e-commerce website selling
								fashionable clothing and accessories.
							</div>
							<div className="skill-stack">
								<img
									src="/src/assets/html.png"
									alt="html"
									height={30}
								/>
								<img
									src="/src/assets/typescript.png"
									alt="typescript"
									height={30}
								/>
								<img
									src="/src/assets/react.png"
									alt="react"
									height={30}
								/>
								<img
									src="/src/assets/figma.png"
									alt="figma"
									height={30}
								/>
							</div>
							<button className="see-more">SEE MORE</button>
						</div>
					</div>
					<div className="card">
						<div className="card-title">Social Media App</div>
						<div className="card-content">
							<div className="card-description">
								A social media app for sharing photos and
								connecting with friends and family.
							</div>
							<div className="skill-stack">
								<img
									src="/src/assets/html.png"
									alt="html"
									height={30}
								/>
								<img
									src="/src/assets/typescript.png"
									alt="typescript"
									height={30}
								/>
								<img
									src="/src/assets/react.png"
									alt="react"
									height={30}
								/>
								<img
									src="/src/assets/figma.png"
									alt="figma"
									height={30}
								/>
							</div>
							<button className="see-more">SEE MORE</button>
						</div>
					</div>
					<div className="card">
						<div className="card-title">
							Online Learning Platform
						</div>
						<div className="card-content">
							<div className="card-description">
								An online learning platform offering courses on
								various topics and skill development.
							</div>
							<div className="skill-stack">
								<img
									src="/src/assets/html.png"
									alt="html"
									height={30}
								/>
								<img
									src="/src/assets/typescript.png"
									alt="typescript"
									height={30}
								/>
								<img
									src="/src/assets/react.png"
									alt="react"
									height={30}
								/>
								<img
									src="/src/assets/figma.png"
									alt="figma"
									height={30}
								/>
							</div>
							<button className="see-more">SEE MORE</button>
						</div>
					</div>
					<div className="card">
						<div className="card-title">Fitness Tracking App</div>
						<div className="card-content">
							<div className="card-description">
								A fitness tracking app allowing users to log
								their workouts and monitor their progress.
							</div>
							<div className="skill-stack">
								<img
									src="/src/assets/html.png"
									alt="html"
									height={30}
								/>
								<img
									src="/src/assets/typescript.png"
									alt="typescript"
									height={30}
								/>
								<img
									src="/src/assets/react.png"
									alt="react"
									height={30}
								/>
								<img
									src="/src/assets/figma.png"
									alt="figma"
									height={30}
								/>
							</div>
							<button className="see-more">SEE MORE</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
