(() => {
    const button = document.querySelector('.user-manual__button');
    const list = document.querySelector('.user-manual__list');
    const items = document.querySelectorAll('.user-manual__item');

    let currentIndex = 0; // начальный индекс текущего элемента
    let transformValue = 0; // начальное значение трансформации
    let isAnimating = false;

    const handleButtonClick = () => {
        if (isAnimating) return;

        isAnimating = true;
        if (currentIndex >= items.length - 1) {
            // если достигнут конец списка, начинаем сначала
            currentIndex = 0;
            transformValue = 0;
        } else {
            currentIndex++;
            transformValue -= 370; // отрицательное значение для перемещения вправо
        }
        list.style.transform = `translateX(${transformValue}px)`;
        
        setTimeout(() => {
            isAnimating = false;
        }, 300);
    };

    button.addEventListener('click', handleButtonClick);
})();

