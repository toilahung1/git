document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("registerForm");
    const email = document.getElementById("email");
    const password = document.getElementById("password");
    const confirmPassword = document.getElementById("confirmPassword");
    const errorMessage = document.getElementById("error-message");

    form.addEventListener("submit", function (event) {
        // Ngừng submit form nếu có lỗi
        event.preventDefault();

        // Kiểm tra xem mật khẩu và nhập lại mật khẩu có khớp không
        if (password.value !== confirmPassword.value) {
            // Hiển thị thông báo lỗi
            errorMessage.style.display = "block";
            confirmPassword.style.borderColor = "red"; // Đổi màu viền cho ô nhập lại mật khẩu
        } else {
            // Nếu khớp, ẩn thông báo lỗi và tiến hành đăng ký
            errorMessage.style.display = "none";
            confirmPassword.style.borderColor = ""; // Đặt lại màu viền mặc định

            // Lưu thông tin vào Local Storage
            const user = {
                email: email.value,
                password: password.value
            };
            localStorage.setItem('user', JSON.stringify(user));

            // Thông báo đăng ký thành công
            alert('Đăng ký thành công!');

            // Chuyển hướng đến trang đăng nhập hoặc trang chính
            window.location.href = 'login.html';
        }
    });
});
