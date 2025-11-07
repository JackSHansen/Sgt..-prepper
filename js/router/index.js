/* Minimal hash router.
   router(routes, sel) watches hashchange and renders route content into container.
*/

/**
 * Initialize router with route map.
 * @param {Object} routes - map of path -> view (string | Node | async function)
 * @param {string} [sel='#container'] - container selector
 */
export async function router(routes, sel = '#container') {
  const el = document.querySelector(sel);

  const render = async () => {
    const key = location.hash.slice(1) || '/';
    const v = routes[key] ?? routes['*'] ?? '';
    const output = (typeof v === 'function') ? await v() : v;
    el.innerHTML = '';
    if (output instanceof Node) {
      el.append(output);
    } else {
      el.innerHTML = String(output);
    }
  };

  addEventListener('hashchange', render);
  render();
}

/** Programmatic navigation helper that updates location.hash. */
export const go = (path) => (location.hash = path);
