export function renderProductsSection() {
	const section = document.createElement("section");
	section.className = "products";
	section.innerHTML = `
		<div class="products-header">
			<h2>Seneste nyt</h2>
		</div>
		<div id="product-grid" class="product-grid"></div>
		<div id="loading" class="loading">Indlæser produkter…</div>
		<div id="error" class="error" hidden>Fejl ved indlæsning af produkter.</div>
	`;
	return section;
}
