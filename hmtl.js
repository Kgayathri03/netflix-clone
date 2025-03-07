<script>
  // Add event listener to accordion headers
  document.querySelectorAll('.accordion-header').forEach((header) => {
    header.addEventListener('click', () => {
      const accordionItem = header.parentElement;
      const content = accordionItem.querySelector('.accordion-content');
      
      // Toggle active state
      accordionItem.classList.toggle('active');
      
      // Show/Hide content
      if (accordionItem.classList.contains('active')) {
        content.style.display = 'block';
      } else {
        content.style.display = 'none';
      }
    });
  });
</script>
