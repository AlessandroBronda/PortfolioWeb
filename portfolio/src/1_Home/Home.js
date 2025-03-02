import React, { useState, useEffect } from "react";
import "./Home.css";
import "./media.css";

const semoyImage = process.env.PUBLIC_URL + "/semoy.jpg";

function App() {
	const [menuOpen, setMenuOpen] = useState(false);
	const [isMobileNav, setIsMobileNav] = useState(
		window.innerWidth >= 700 && window.innerWidth < 1300
	);

	// Controlla il ridimensionamento della finestra
	useEffect(() => {
		const handleResize = () => {
			const width = window.innerWidth;
			setIsMobileNav(width >= 700 && width < 1300);
		};

		window.addEventListener("resize", handleResize);
		return () => window.removeEventListener("resize", handleResize);
	}, []);

	return (
		<div className="App">
			{/* Sposta il menu in cima solo tra 700px e 1300px */}
			{isMobileNav && (
				<nav id="mainMenu" className={`sections ${menuOpen ? "open" : ""}`}>
					<div className="navbar">
						<ul className="sections">
							<li>HOME</li>
							<li>BIO</li>
							<li>PROGETTI 3D</li>
							<li>ANIMAZIONE</li>
							<li>GRAFICA</li>
							<li>PROGRAMMAZIONE</li>
							<li>WEB DESIGN</li>
						</ul>
					</div>
				</nav>
			)}
			<header className="App-header">
				{/* Bottone Hamburger per mobile (già presente sotto i 700px) */}
				<button className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
					☰
				</button>

				<div className="LeftCl">
					<img className="profilePic" src={semoyImage} alt="Semoy" />
					<h1 className="Name">Alessandro Bronda</h1>
					<p className="bio">
						Ciao, sono un freelance e mi occupo di 3D, grafica e programmazione. Mi piace
						unire diverse discipline per dare vita a progetti creativi, d'impatto, funzionali
						ma sopratutto belli.
					</p>
				</div>

				{/* Mantiene il menu nella posizione originale sopra i 1200px e sotto i 700px */}

				<div className="RightCl">
					{!isMobileNav && (
						<ul id="mainMenu" className={`sections ${menuOpen ? "open" : ""}`}>
							<li>HOME</li>
							<li>BIO</li>
							<li>PROGETTI 3D</li>
							<li>ANIMAZIONE</li>
							<li>GRAFICA</li>
							<li>PROGRAMMAZIONE</li>
							<li>WEB DESIGN</li>
						</ul>
					)}
					<div className="cMaster">
						<div className="c1"></div>
						<div className="c2"></div>
						<div className="c3"></div>
					</div>
				</div>
			</header>
		</div>
	);
}

export default App;
