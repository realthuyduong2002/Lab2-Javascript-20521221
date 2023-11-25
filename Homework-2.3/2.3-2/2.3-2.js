function updateClock() {
    var currentTime = new Date(); // Lấy thời gian hiện tại
    var hours = currentTime.getHours(); // Lấy giờ
    var minutes = currentTime.getMinutes(); // Lấy phút
    var seconds = currentTime.getSeconds(); // Lấy giây
  
    // Thêm số 0 vào trước nếu giờ, phút hoặc giây < 10
    hours = (hours < 10) ? "0" + hours : hours;
    minutes = (minutes < 10) ? "0" + minutes : minutes;
    seconds = (seconds < 10) ? "0" + seconds : seconds;
  
    var clockDiv = document.getElementById('clock');
    clockDiv.innerText = hours + ":" + minutes + ":" + seconds + " KST"; // Hiển thị thời gian
  
    setTimeout(updateClock, 1000); // Cập nhật thời gian mỗi giây
  }
  
  updateClock(); // Bắt đầu chạy đồng hồ khi trang web được load
  