document.querySelectorAll('.navbar li a').forEach(link => {
  link.addEventListener('click', function() {
      // પહેલાંની એક્ટિવ ક્લાસ હટાવો
      document.querySelectorAll('.navbar li a').forEach(el => el.classList.remove('active'));
      
      // ક્લિક કરેલ લિંકને એક્ટિવ કરો
      this.classList.add('active');
  });
});