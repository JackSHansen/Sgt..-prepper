import { renderHeader } from "./components/header.js";
import { renderNav } from "./components/nav.js";
import { renderHero } from "./components/hero.js";
import { renderProductsSection } from "./components/products.js";
import { renderFooter } from "./components/footer.js";
import { initLoginModal } from "./components/loginModal.js";

(function render() {
	// Build page in a fragment
	const frag = document.createDocumentFragment();

	frag.append(
		renderHeader(),
		renderNav(),
		(() => {
			const main = document.createElement("main");
			main.className = "container";
			main.append(renderHero(), renderProductsSection());
			return main;
		})(),
		renderFooter()
	);

	// Insert before the first script so they remain at the end of <body>
	const firstScript = document.scripts[0];
	if (firstScript) {
		document.body.insertBefore(frag, firstScript);
	} else {
		document.body.appendChild(frag);
	}

	document.dispatchEvent(new CustomEvent("skeleton:ready"));

	// NEW: mount login modal and hook up the login button
	initLoginModal();
})();
