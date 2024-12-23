// script.js

document.addEventListener("DOMContentLoaded", function() {
    const toggleNav = document.getElementById('toggleNav');
    const hiddenContent = document.getElementsByClassName('hidden')[0]; // Lấy phần tử đầu tiên có lớp 'hidden'
    let isVisible = false; // Biến theo dõi trạng thái hiện tại của phần tử
  
    toggleNav.addEventListener('click', function() {
      if (hiddenContent) {
        if (isVisible) {
          hiddenContent.classList.add('hidden');
          toggleNav.textContent = 'Mở Menu';

        } else {
          hiddenContent.classList.remove('hidden');
          toggleNav.textContent = 'Đóng Menu'
        }
        isVisible = !isVisible; // Đảo ngược trạng thái hiện tại
      }
    });
  });
  