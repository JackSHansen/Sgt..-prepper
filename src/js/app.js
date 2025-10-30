const API_BASE = 'http://localhost:4000';
const PRODUCTS_ENDPOINT = `${API_BASE}/products`; // forventet endpoint
const grid = document.getElementById('product-grid');
const loadingEl = document.getElementById('loading');
const errorEl = document.getElementById('error');
const searchInput = document.getElementById('search');
const cartCountEl = document.getElementById('cart-count');

let products = [];
let cartCount = 0;

function formatPrice(n) {
	return new Intl.NumberFormat('da-DK', { style: 'currency', currency: 'DKK' }).format(n);
}

function imgPath(name) {
	// Hvis image er en sti i assets/images brug den direkte ellers fallback
	if (!name) return 'assets/images/placeholder.jpg';
	if (name.startsWith('http')) return name;
	return `assets/images/${name}`;
}

function renderProducts(list) {
	grid.innerHTML = '';
	if (!list.length) {
		grid.innerHTML = '<p>Ingen produkter fundet.</p>';
		return;
	}
	list.forEach(p => {
		const card = document.createElement('article');
		card.className = 'product-card';
		card.innerHTML = `
			<div class="media"><img src="${imgPath(p.image)}" alt="${escapeHtml(p.title)}" /></div>
			<div class="body">
				<div class="title">${escapeHtml(p.title)}</div>
				<div class="meta">${escapeHtml(p.description || '')}</div>
				<div class="price">${formatPrice(p.price || 0)}</div>
				<div class="actions">
					<button class="view" data-id="${p.id}">Se</button>
					<button class="add add-btn" data-id="${p.id}" ${p.inStock === false ? 'disabled' : ''}>Læg i kurv</button>
				</div>
			</div>
		`;
		grid.appendChild(card);
	});
	// bind add-to-cart
	document.querySelectorAll('.add-btn').forEach(btn => {
		btn.addEventListener('click', () => {
			cartCount += 1;
			cartCountEl.textContent = cartCount;
			// her kan man sende POST til /cart hvis API findes
		});
	});
}

function escapeHtml(s) {
	if (!s) return '';
	return String(s).replace(/[&<>"']/g, (m) => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[m]));
}

async function loadProducts() {
	loadingEl.hidden = false;
	errorEl.hidden = true;
	try {
		const res = await fetch(PRODUCTS_ENDPOINT);
		if (!res.ok) throw new Error('Netværksfejl');
		products = await res.json();
		renderProducts(products);
	} catch (err) {
		errorEl.hidden = false;
		console.error(err);
	} finally {
		loadingEl.hidden = true;
	}
}

searchInput.addEventListener('input', (e) => {
	const q = e.target.value.trim().toLowerCase();
	if (!q) return renderProducts(products);
	const filtered = products.filter(p =>
		(String(p.title || '').toLowerCase().includes(q)) ||
		(String(p.description || '').toLowerCase().includes(q))
	);
	renderProducts(filtered);
});

// Init
document.addEventListener('DOMContentLoaded', () => {
	loadProducts();
});
