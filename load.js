const images = document.querySelectorAll("img");
const options = {threshold: .5, rootMargin: "0px 0px 100px 0px"};

function preloadImage(img) {
    const source = img.getAttribute('data-src');
    if(!source) {
        return;
    }

    img.src = source;
}

const io = new IntersectionObserver (
    (entries, io) => {
        entries.forEach(entry => {
            if (!entry.isIntersecting) {
                return;
            }
            else {
                preloadImage(entry.target);
                io.unobserve(entry.target);
            }
        })
    }, options
);

images.forEach(image => {
    io.observe(image);
})

