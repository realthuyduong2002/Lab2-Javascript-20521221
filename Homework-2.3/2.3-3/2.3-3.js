function countdown() {
    var currentYear = new Date().getFullYear(); // Lấy năm hiện tại
    var nextYear = currentYear + 1; // Năm tiếp theo
    var countdownDate = new Date("January 01, " + nextYear + " 00:00:00").getTime(); // Cập nhật ngày bắt đầu của năm mới

    var countdownInterval = setInterval(function () {
        var now = new Date().getTime();
        var distance = countdownDate - now;

        var days = Math.floor(distance / (1000 * 60 * 60 * 24));
        var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((distance % (1000 * 60)) / 1000);

        var timerElement = document.getElementById('timer');
        timerElement.innerHTML = `
          <div class="time-box">${days}<br>DAYS</div>
          <div class="time-box">${hours}<br>HOURS</div>
          <div class="time-box">${minutes}<br>MINUTES</div>
          <div class="time-box"><span class="red-seconds">${seconds}</span><br>SECONDS</div>
        `;

        if (distance < 0) {
            clearInterval(countdownInterval);
            timerElement.innerHTML = "<div class='time-box'>Happy<br>New Year!</div>";

            var currentDate = new Date();
            var dateString = `<div class="time-box">Time until ${currentDate.toLocaleDateString('en-US', { day: 'numeric', month: 'long', year: 'numeric' })}</div>`;
            
            var timeUntilElement = document.getElementById('timeUntil');
            timeUntilElement.innerText = dateString;
        }
    }, 1000);
}

countdown();
