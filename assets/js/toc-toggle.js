/**
 * TOC Sidebar Toggle
 * Provides collapse/expand functionality with localStorage persistence
 */

(function () {
  'use strict';

  const STORAGE_KEY = 'toc-collapsed';

  function initTocToggle() {
    const wrapper = document.getElementById('toc-wrapper');
    const toggle = document.querySelector('.toc-toggle');

    if (!wrapper || !toggle) return;

    // Restore saved state
    const isCollapsed = localStorage.getItem(STORAGE_KEY) === 'true';
    if (isCollapsed) {
      wrapper.classList.add('collapsed');
      toggle.setAttribute('title', 'Show contents');
    }

    // Toggle handler
    toggle.addEventListener('click', function () {
      const willCollapse = !wrapper.classList.contains('collapsed');
      wrapper.classList.toggle('collapsed');

      // Update title and save state
      toggle.setAttribute('title', willCollapse ? 'Show contents' : 'Hide contents');
      localStorage.setItem(STORAGE_KEY, willCollapse);
    });
  }

  // Initialize when DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initTocToggle);
  } else {
    initTocToggle();
  }
})();
