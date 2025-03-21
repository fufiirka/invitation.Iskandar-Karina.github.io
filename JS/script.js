const button = document.querySelector('.image-button');
const images = document.querySelectorAll('.top-image');
const movementArea = document.querySelector('.movement-area');
const line1 = document.querySelector('.line1');
let escapeCount = 0;
let currentImageIndex = 0;
let clickCount = 0;

// Флаг для контроля прокрутки
let scrollEnabled = false;

// Блокируем прокрутку при загрузке страницы
document.body.style.overflow = 'hidden';

function moveButton() {
    if (escapeCount < 3) {
        const newLeft = Math.random() * (movementArea.offsetWidth - button.offsetWidth);
        const newTop = Math.random() * (movementArea.offsetHeight - button.offsetHeight);

        button.style.left = newLeft + 'px';
        button.style.top = newTop + 'px';
        escapeCount++;
    }
}

for (let i = 1; i < images.length; i++) {
    images[i].classList.remove('top-image-active');
}

button.addEventListener('click', () => {
    if (clickCount < 3) {
        images[currentImageIndex].classList.remove('top-image-active');
        currentImageIndex = (currentImageIndex + 1) % images.length;
        images[currentImageIndex].classList.add('top-image-active');
        clickCount++;
    } else if (clickCount === 3) {
        button.disabled = true;
        scrollToLine1();
        
        // Разрешаем прокрутку после 4-го нажатия
        scrollEnabled = true;
        document.body.style.overflow = 'auto'; // Включаем прокрутку
    }

    moveButton();
});

// Функция автоматической прокрутки
function scrollToLine1() {
    line1.scrollIntoView({ behavior: 'smooth' });
}





