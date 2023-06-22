gsap.registerPlugin(ScrollTrigger);

gsap.utils.toArray("section").forEach((section, index) => {
  const w = section.querySelector(".images");
  const [x, xEnd] = [w.scrollWidth * -1, 0];
  gsap.fromTo(
    w,
    { x },
    {
      x: xEnd,
      scrollTrigger: {
        trigger: section,
        scrub: 1,
      },
    }
  );
});

const menuIcon = document.querySelector('.menu-icon');
const menu = document.querySelector('.menu');

menuIcon.addEventListener('click', () => {
  menu.classList.toggle('show');
});




