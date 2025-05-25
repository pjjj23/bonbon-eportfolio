import { initContactForm } from './firebase.js';
import { initLoadingScreen } from './loading.js';
import { initNavigation } from './navigation.js';
import { initAnimations } from './animations.js';
import { initProjectModals } from './projects.js';
import { initUIEffects } from './ui-effects.js';
import { initTheme } from './theme.js';
import { initDownloadButton } from './download.js';

document.addEventListener("DOMContentLoaded", function() {
  initLoadingScreen();
  initNavigation();
  initAnimations();
  initUIEffects();
  initTheme();
  initDownloadButton();
  initContactForm();
  initProjectModals();

  // Console Easter Egg
  console.log(`
    ╔══════════════════════════════════════════╗
    ║                                          ║
    ║           Welcome to my Portfolio!       ║
    ║                                          ║
    ║     👨‍💻 Interested in the code?           ║
    ║     🚀 Let's build something amazing!    ║
    ║     📧 Contact me for opportunities      ║
    ║                                          ║
    ╚══════════════════════════════════════════╝
  `);
});