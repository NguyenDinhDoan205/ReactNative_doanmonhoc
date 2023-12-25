document.addEventListener('DOMContentLoaded', function() {
    var loginForm = document.getElementById('loginForm');
    var errorMessage = document.getElementById('error-message');

    loginForm.addEventListener('submit', function(event) {
        event.preventDefault();

        // Lấy giá trị từ các trường input
        var username = document.getElementById('doan').value;
        var password = document.getElementById('123').value;

        // Kiểm tra thông tin đăng nhập
        if (username === 'user' && password === 'password') {
            alert('Đăng nhập thành công!');
        } else {
            errorMessage.textContent = 'Đăng nhập không thành công.Vui lòng đăng nhập lại!';
        }
    });
});
