export function renderHeader() {
	const header = document.createElement("header");
	header.className = "site-header";
	header.innerHTML = `
		<div class="container header-inner">
			<img src="assets/images/LOGOGOGOGOGOGO.png" alt="Logo" class="logo" />
			<div class="header-actions">
				<button id="login-btn">Log ind</button>
				<button id="cart-btn">Kurv (<span id="cart-count">0</span>)</button>
			</div>
		</div>
	`;
	return header;
}
