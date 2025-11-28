document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.copy-btn').forEach(button => {
    button.addEventListener('click', () => {
      const codeBlock = button.parentElement.querySelector('code');
      if (!codeBlock) return;

      const text = codeBlock.innerText.trim();

      navigator.clipboard.writeText(text).then(() => {
        // Feedback visual
        button.textContent = '✅';
        setTimeout(() => {
          button.textContent = '📋';
        }, 900);
      });
    });
  });
});
