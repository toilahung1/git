// JavaScript để xử lý việc mở rộng và thu gọn submenu
document.addEventListener('DOMContentLoaded', function() {
    const toggleLinks = document.querySelectorAll('.toggle-link');

    toggleLinks.forEach(function(link) {
        link.addEventListener('click', function(event) {
            event.preventDefault(); // Ngừng hành động mặc định của liên kết
            const target = document.getElementById(link.getAttribute('data-target')); // Lấy submenu theo ID
            
            // Nếu submenu đang hiển thị thì ẩn nó đi, ngược lại thì hiển thị
            if (target.classList.contains('show')) {
                target.classList.remove('show');
            } else {
                target.classList.add('show');
            }
        });
    });
});
