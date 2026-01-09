// Keep CSS variables --image-h and --header-h in sync with measured heights.
// Wait for the image to load and use requestAnimationFrame to ensure layout is stable.
function syncHeights() {
  window.requestAnimationFrame(() => {
    const image = document.querySelector('.image-header');
    const header = document.querySelector('.header');
    // Use the exact fractional height to avoid subpixel rounding gaps (Firefox)
    const imageRect = image ? image.getBoundingClientRect() : null;
    const imageH = imageRect ? imageRect.height : 0;
    const headerH = header ? header.getBoundingClientRect().height : 0;
    // write fractional pixel values (e.g. "123.456px") to the CSS variables
    document.documentElement.style.setProperty('--image-h', imageH.toFixed(3) + 'px');
    document.documentElement.style.setProperty('--header-h', headerH.toFixed(3) + 'px');
  });
}

// Ensure we measure after the image has loaded (in case load fires before this script runs)
(function attachImageListener() {
  const img = document.querySelector('.image-header');
  if (!img) {
    window.addEventListener('load', syncHeights);
    return;
  }
  if (img.complete) {
    syncHeights();
  } else {
    img.addEventListener('load', syncHeights);
  }
})();

window.addEventListener('resize', syncHeights);
// Watch for DOM changes that might affect sizes
const obsTarget = document.body;
const mo = new MutationObserver(syncHeights);
mo.observe(obsTarget, { childList: true, subtree: true, attributes: true });
