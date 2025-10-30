export function renderHero() {
	// Build hero image
	const section = document.createElement("section");
	section.className = "hero";
	section.innerHTML = `
		<img src="assets/images/Billededone 1.png" alt="Hero" class="hero-img" />
	`;

	// Overlay card outside the hero
	const overlay = document.createElement("div");
	overlay.className = "hero-overlay";
	overlay.innerHTML = `
		<h1>Velkommen til Sgt. Prepper</h1>
		<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean mauris ex, fringilla a ligula id, rutrum blandit eros. Sed ullamcorper fermentum urna sit amet vehicula. Mauris nunc lectus, bibendum id leo sit amet, varius ornare.</p>
		<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean mauris ex, fringilla a ligula id, rutrum blandit eros. Sed ullamcorper fermentum urna sit amet vehicula. Mauris nunc lectus, bibendum id leo sit amet, varius ornare.</p>
	`;

	// Return both as siblings
	const frag = document.createDocumentFragment();
	frag.append(section, overlay);
	return frag;
}
