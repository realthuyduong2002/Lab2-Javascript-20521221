// Lấy đối tượng button submit
const submitButton = document.querySelector('.submit-wrapper button');

// Gắn sự kiện 'submit' vào form
document.querySelector('form').addEventListener('submit', function(event) {
    // Ngăn chặn việc gửi form đi (để không load lại trang)
    event.preventDefault();
    
    // Thay đổi nội dung của nút thành 'Submitted'
    submitButton.textContent = 'Submitted';
    
    // Hiển thị thông báo thành công
    const successMessage = document.getElementById('successMessage');
    successMessage.style.display = 'block';
});