const openPopupBtns = document.querySelectorAll('.open-popup-btn');
const popupOverlay = document.getElementById('popupOverlay');
const closePopupBtn = document.getElementById('closePopupBtn');
const popupBoxes = document.querySelectorAll('.popup-box'); // Chọn toàn bộ box chính
const popupSideBoxes = document.querySelectorAll('.popup-side-box'); // Chọn toàn bộ side box

// Mở popup và thay đổi nội dung động
openPopupBtns.forEach((button) => {
  button.addEventListener('click', () => {
    // Lấy nội dung từ data-content-up và data-content
    const contentUp = button.getAttribute('data-content-up')?.split(',') || []; // Nội dung cho h3 trên
    const content = button.getAttribute('data-content')?.split(',') || []; // Nội dung cho h3 dưới

    // Cập nhật nội dung cho các popup-box
    popupBoxes.forEach((box, index) => {
      const topH3 = box.querySelector('h3:first-of-type'); // Chọn h3 đầu tiên (ở trên)
      const bottomH3 = box.querySelector('h3:last-of-type'); // Chọn h3 cuối cùng (ở dưới)

      // Gán nội dung tương ứng cho h3
      if (topH3) {
        topH3.textContent = contentUp[index] || ''; // Nội dung h3 trên
      }
      if (bottomH3) {
        bottomH3.textContent = content[index] || ''; // Nội dung h3 dưới
      }
    });

    // Cập nhật nội dung cho các popup-side-box
    popupSideBoxes.forEach((sideBox, index) => {
      const topH3 = sideBox.querySelector('h3:first-of-type'); // Chọn h3 đầu tiên (ở trên)
      const bottomH3 = sideBox.querySelector('h3:last-of-type'); // Chọn h3 cuối cùng (ở dưới)

      // Gán nội dung tương ứng cho h3
      if (topH3) {
        topH3.textContent = contentUp[index + popupBoxes.length] || ''; // Nội dung h3 trên của side box
      }
      if (bottomH3) {
        bottomH3.textContent = content[index + popupBoxes.length] || ''; // Nội dung h3 dưới của side box
      }
    });

    // Hiển thị popup
    popupOverlay.style.display = 'flex';
  });
});







// Đóng popup
closePopupBtn.addEventListener('click', () => {
  popupOverlay.style.display = 'none';
});

// Đóng popup khi click ra ngoài
popupOverlay.addEventListener('click', (e) => {
  if (e.target === popupOverlay) {
    popupOverlay.style.display = 'none';
  }
});


// carousel

const carousel = document.getElementById("carousel");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");

const imageWidth = 300 + 40; // Chiều rộng mỗi hình + khoảng cách (margin)
const imagesPerView = 3; // Số lượng hình hiển thị cùng lúc
const totalImages = document.querySelectorAll(".image-container").length;
let currentIndex = 0;

// Hàm cập nhật vị trí trượt
function updateCarousel() {
  carousel.style.transform = `translateX(-${currentIndex * imageWidth}px)`;
}

// Nút mũi tên trái
prevBtn.addEventListener("click", () => {
  if (currentIndex > 0) {
    currentIndex--;
    updateCarousel();
  }
});

// Nút mũi tên phải
nextBtn.addEventListener("click", () => {
  if (currentIndex < totalImages - imagesPerView) {
    currentIndex++;
    updateCarousel();
  }
});



const studentCarousel = document.getElementById("studentCarousel");
const studentDots = document.getElementById("studentDots");

const students = document.querySelectorAll(".student-box");
const totalStudents = students.length;
const studentsPerView = 3; // Hiển thị 3 student
let currentStudentIndex = 0; // Vị trí ban đầu

// Tạo các nút tròn
for (let i = 0; i <= totalStudents - studentsPerView; i++) {
  const dot = document.createElement("div");
  dot.classList.add("dot");
  if (i === currentStudentIndex) dot.classList.add("active");
  dot.addEventListener("click", () => goToStudent(i));
  studentDots.appendChild(dot);
}

// Hàm cập nhật trạng thái hiển thị
function updateStudentCarousel() {
  const translateX = -(currentStudentIndex * (300 + 200)); // 300: chiều rộng, 40: khoảng cách
  studentCarousel.style.transform = `translateX(${translateX}px)`;

  // Xóa lớp active khỏi tất cả các student
  students.forEach((student) => student.classList.remove("active"));

  // Thêm lớp active cho student ở giữa
  const middleStudentIndex = currentStudentIndex + Math.floor(studentsPerView / 2);
  if (students[middleStudentIndex]) {
    students[middleStudentIndex].classList.add("active");
  }

  // Cập nhật trạng thái nút tròn
  const dots = document.querySelectorAll(".dot");
  dots.forEach((dot, index) => {
    dot.classList.remove("active");
    if (index === currentStudentIndex) dot.classList.add("active");
  });
}

// Chuyển đến student tương ứng
function goToStudent(index) {
  currentStudentIndex = index;
  updateStudentCarousel();
}

updateStudentCarousel(); // Khởi tạo trạng thái ban đầu


// feedback
const feedback = document.getElementById("feedback");
const dotsContainer = document.getElementById("dotsContainer");

const imagesfeedback = document.querySelectorAll(".feedback-box");
const totalImagesfeedback = imagesfeedback.length;
const imagesfeedbackPerView = 3; // Hiển thị 3 hình
let currentIndexfeedback = 0; // Vị trí ban đầu

// Tạo các nút tròn
for (let i = 0; i <= totalImagesfeedback - imagesfeedbackPerView +1; i++) {
  const dot = document.createElement("div");
  dot.classList.add("dot2");
  if (i === currentIndexfeedback) dot.classList.add("active");
  dot.addEventListener("click", () => goToSlide(i));
  dotsContainer.appendChild(dot);
}

// Hàm cập nhật trạng thái hiển thị
function updateFeedback() {
  const translateX = -(currentIndexfeedback * (300 + 100)); // 300: chiều rộng, 100: khoảng cách
  feedback.style.transform = `translateX(${translateX}px)`;

  // Xóa lớp active khỏi tất cả các hình
  imagesfeedback.forEach((img) => img.classList.remove("active"));

  // Thêm lớp active cho hình ở giữa
  const middleIndex = currentIndexfeedback + Math.floor(imagesfeedbackPerView / 2);
  if (imagesfeedback[middleIndex]) {
    imagesfeedback[middleIndex].classList.add("active");
  }

  // Cập nhật trạng thái nút tròn
  const dots = document.querySelectorAll(".dot2");
  dots.forEach((dot, index) => {
    dot.classList.remove("active");
    if (index === currentIndexfeedback) dot.classList.add("active");
  });
}

// Chuyển đến hình tương ứng
function goToSlide(index) {
  currentIndexfeedback = index;
  updateFeedback();
}

updateFeedback(); // Khởi tạo trạng thái ban đầu