export function renderFooter() {
	const footer = document.createElement("footer");
	footer.className = "site-footer";
	footer.innerHTML = `
		<div class="footer-inner container">
			<div class="footer-info">
				<p>@TECHCOLLEGE 2025</p>
			</div>
		</div>
	`;
	return footer;
}
