// Lấy phần tử nút
const backToTopBtn = document.getElementById('backToTopBtn');

// Hàm kiểm tra cuộn trang và hiển thị nút
window.onscroll = function() {
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
        backToTopBtn.style.display = "block"; // Hiển thị nút khi cuộn xuống
    } else {
        backToTopBtn.style.display = "none"; // Ẩn nút khi cuộn lên đầu
    }
};

// Hàm cuộn trang lên đầu khi nhấn nút
backToTopBtn.onclick = function() {
    window.scrollTo({ top: 0, behavior: 'smooth' }); // Cuộn lên đầu trang với hiệu ứng mượt mà
};



