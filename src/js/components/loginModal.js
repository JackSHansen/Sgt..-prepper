export function initLoginModal() {
	// Avoid duplicate mount
	if (document.querySelector(".modal-overlay")) return;

	// Build overlay modal once and append to body
	const overlay = document.createElement("div");
	overlay.className = "modal-overlay";
	overlay.innerHTML = `
		<div class="modal" role="dialog" aria-modal="true" aria-labelledby="login-title">
			<h2 id="login-title">Log ind</h2>
			<form class="login-form">
				<label class="sr-only" for="login-username">Brugernavn</label>
				<input id="login-username" type="text" placeholder="Brugernavn" autocomplete="username" />
				<label class="sr-only" for="login-password">Adgangskode</label>
				<input id="login-password" type="password" placeholder="Adgangskode" autocomplete="current-password" />
				<div class="actions">
					<button type="button" class="btn btn-secondary" id="signup-btn">Opret profil</button>
					<button type="submit" class="btn btn-primary">Log ind</button>
				</div>
			</form>
		</div>
	`;
	document.body.appendChild(overlay);

	const modal = overlay.querySelector(".modal");
	const username = overlay.querySelector("#login-username");
	const form = overlay.querySelector("form");

	function open() {
		overlay.classList.add("open");           // CSS handles visibility/animation
		document.body.style.overflow = "hidden"; // lock background scroll
		setTimeout(() => username && username.focus(), 0);
	}
	function close() {
		overlay.classList.remove("open");
		document.body.style.overflow = "";
	}

	// Open on header login click
	document.addEventListener("click", (e) => {
		if (e.target.closest("#login-btn")) {
			e.preventDefault();
			open();
		}
	});

	// Close on backdrop click
	overlay.addEventListener("click", (e) => {
		if (!modal.contains(e.target)) close();
	});

	// Close on ESC
	document.addEventListener("keydown", (e) => {
		if (e.key === "Escape" && overlay.classList.contains("open")) close();
	});

	// Close on submit (placeholder for real auth)
	form.addEventListener("submit", (e) => {
		e.preventDefault();
		close();
	});
}
