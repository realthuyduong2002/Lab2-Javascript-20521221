document.querySelector('form').addEventListener('submit', function(event) {
    // Ngăn chặn hành vi mặc định của form (tránh làm trang web load lại)
    event.preventDefault();

    // Hiển thị thông báo thành công
    document.getElementById('successMessage').style.display = 'block';
});