feat(ui): implement profile selection modal, micro-interactions, and layout fixes

### ✨ Features
- Created a dedicated modal menu container for driver/profile selection.
- Implemented JavaScript logic for dynamic avatar switching using an image array and synchronized event listeners.

### 🎨 Styles & UX Enhancements
- Added custom `cubic-bezier` transition curves to wrapper elements for fluid motion.
- Implemented `translateY(-3px)` and responsive `box-shadow` on wrapper hover for a tactile feel.
- Added a default `box-shadow` to the wrapper to improve contrast and separation from the page background (optimized for light mode).
- Made the avatar edit button reactive, dynamically changing border colors based on the `body.dark` state for better readability.
- Added active scaling (`transform: scale`) to interactive buttons for immediate visual feedback.

### 🐛 Bug Fixes & Refactoring
- Resolved horizontal layout overflow by properly separating `body` and `body.dark` CSS rules.
- Standardized the `.hidden` utility class with `display: none` to reliably control modal visibility.
