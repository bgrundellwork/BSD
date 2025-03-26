const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');

    burger.addEventListener('click', () => {
        // Toggle the class 'nav-active' on the nav-links
        nav.classList.toggle('nav-active');
        
        // Optionally, you can also toggle an animation on the burger icon (like rotating it when clicked)
        burger.classList.toggle('toggle');
    });
}

navSlide();
