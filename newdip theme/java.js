document.addEventListener('DOMContentLoaded', function() {
  const subscribeBtn = document.getElementById('subscribeBtn');
  const bellIcon = document.getElementById('bellIcon');
  const bellOptions = document.getElementById('bellOptions');
  const unsubscribeBtn = document.getElementById('unsubscribeBtn');
  
  // Subscribe button click handler
  subscribeBtn.addEventListener('click', function() {
      subscribeBtn.style.display = 'none';
      bellIcon.style.display = 'block';
  });
  
  // Bell icon click handler - shows dropdown options
  bellIcon.addEventListener('click', function(e) {
      e.preventDefault();
      bellOptions.style.display = 'block';
  });
  
  // Unsubscribe button click handler
  unsubscribeBtn.addEventListener('click', function() {
      bellOptions.style.display = 'none';
      bellIcon.style.display = 'none';
      subscribeBtn.style.display = 'block';
  });
  
  // Notification options click handlers
  document.querySelector('.all-notifications').addEventListener('click', function() {
      bellIcon.innerHTML = '<i class="fa-solid fa-bell text-dark"></i>';
      bellOptions.style.display = 'none';
  });
  
  document.querySelector('.personalized-notifications').addEventListener('click', function() {
      bellIcon.innerHTML = '<i class="fa-solid fa-bell text-dark"></i>';
      bellOptions.style.display = 'none';
  });
  
  document.querySelector('.no-notifications').addEventListener('click', function() {
      bellIcon.innerHTML = '<i class="fa-solid fa-bell-slash text-dark"></i>';
      bellOptions.style.display = 'none';
  });
  
  // Close dropdown when clicking outside
  document.addEventListener('click', function(e) {
      if (!e.target.closest('#subscribeContainer')) {
          bellOptions.style.display = 'none';
      }
  });
});