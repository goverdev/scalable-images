const modal = document.querySelector('.modal');
const previews = document.querySelectorAll('.gallery img');
const original = document.querySelector('.full-img');
const caption = document.querySelector('.caption');

previews.forEach((preview) => {
    preview.addEventListener('click', () => {
        modal.classList.add('open');
        original.classLi.add('open');
        //Dynamic change image and text
        const originalSrc = preview.getAttribute('data-original');
        original.src = `./large/${originalSrc}`;
        caption.textContent = preview.alt;

    })
});

modal.addEventListener('click',(e)=> {
    if (e.target.classList.contains('modal')) {
        modal.classList.remove('open');
        original.classList.remove('open');
    }
})