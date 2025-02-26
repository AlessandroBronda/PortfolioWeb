import React, { useState } from "react";
import "./Home.css";
import "./media.css";
const semoyImage = process.env.PUBLIC_URL + "/semoy.jpg";

function App() {
	const [menuOpen, setMenuOpen] = useState(false); // Stato per aprire/chiudere la navbar

	return (
		<div className="App">
			<header className="App-header">
				{/* Bottone Hamburger per mobile */}
				<button className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
					☰
				</button>

				<div className="LeftCl">
					<img className="profilePic" src={semoyImage} alt="Semoy" />
					<h1 className="Name">
						Bronda <br /> Alessandro
					</h1>
					<p className="bio">
						<i>
							"Mi occupo di grafica, 3D e programmazione. Unisco estetica e tecnologia con
							l'intenzione di creare esperienze di impatto"
						</i>
					</p>
				</div>

				<div className="RightCl">
					<ul className={`sections ${menuOpen ? "open" : ""}`}>
						<li>HOME</li>
						<li>BIO</li>
						<li>PROGETTI3D</li>
						<li>ANIMAZIONE</li>
						<li>GRAFICA</li>
						<li>PROGRAMMAZIONE</li>
						<li>WEBDESIGN</li>
					</ul>

					<div className="cMaster">
						<div className="c1">Contatti</div>
						<div className="c2"></div>
						<div className="c3"></div>
					</div>
				</div>
			</header>
		</div>
	);
}

export default App;
