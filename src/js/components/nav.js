export function renderNav() {
	const nav = document.createElement("nav");
	nav.className = "main-nav";
	nav.setAttribute("aria-label", "Hovednavigation");
	nav.innerHTML = `
		<div class="container nav-links">
			<a href="#">Vand og vandrensning</a>
			<a href="#">Mad og langtidsopbevaring</a>
			<a href="#">Energi og belysning</a>
			<a href="#">Førstehjælp og sundhed</a>
			<a href="#">Kommunikation og navigation</a>
		</div>
	`;
	return nav;
}
