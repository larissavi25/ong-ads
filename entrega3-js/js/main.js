import { router } from './router.js';
import { initFormValidation } from './formValidation.js';

document.addEventListener('DOMContentLoaded', () => {
  router();
  initFormValidation();
});
