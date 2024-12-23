document.addEventListener("DOMContentLoaded", function () {
    const welcomeMessage = document.getElementById('welcomeMessage');
    const loginForm = document.querySelector('#loginForm'); // Sử dụng querySelector để chọn form
    const loginButton = document.querySelector('.login-btn');
    const registerButton = document.querySelector('.register-btn');
    const logoutButton = document.getElementById('logoutBtn');

    // Kiểm tra xem người dùng đã đăng nhập chưa
    const user = JSON.parse(localStorage.getItem('user'));

    if (user) {
        // Nếu đã đăng nhập, hiển thị thông báo chào
        if (welcomeMessage) {
            // Loại bỏ '@gmail.com' khỏi email
            const username = user.email.split('@')[0];
            welcomeMessage.textContent = `Xin chào, ${username}`;
        }
        if (loginButton) loginButton.style.display = 'none';
        if (registerButton) registerButton.style.display = 'none';
        if (logoutButton) logoutButton.style.display = 'inline-block';
    }

    if (loginForm) { // Kiểm tra xem loginForm có tồn tại hay không
        loginForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const email = document.getElementById('email').value;
            const password = document.getElementById('password').value;
            
            const storedUser = JSON.parse(localStorage.getItem('user'));
            
            if (storedUser && storedUser.email === email && storedUser.password === password) {
                alert('Đăng nhập thành công!');
                // Hiển thị thông báo chào và ẩn button đăng nhập và đăng ký
                if (welcomeMessage) {
                    // Loại bỏ '@gmail.com' khỏi email
                    const username = storedUser.email.split('@')[0];
                    welcomeMessage.textContent = `Xin chào, ${username}`;
                }
                if (loginButton) loginButton.style.display = 'none';
                if (registerButton) registerButton.style.display = 'none';
                if (logoutButton) logoutButton.style.display = 'inline-block';
                // Điều hướng đến trang index.html sau khi đăng nhập thành công
                window.location.href = 'index.html';
            } else {
                alert('Email hoặc mật khẩu không chính xác.');
            }
        });
    }

    // Hàm xử lý đăng xuất
    function logout() {
        localStorage.removeItem('user');
        // Hiển thị lại button đăng nhập và đăng ký, ẩn thông báo chào
        if (loginButton) loginButton.style.display = 'inline-block';
        if (registerButton) registerButton.style.display = 'inline-block';
        if (logoutButton) logoutButton.style.display = 'none';
        if (welcomeMessage) welcomeMessage.textContent = '';
    }

    // Event listener cho nút đăng xuất
    if (logoutButton) logoutButton.addEventListener("click", logout);
});
