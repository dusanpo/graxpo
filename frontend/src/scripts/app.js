const sectionCounter = document.querySelector("#section_counter");
const counters = document.querySelectorAll(".counter");
const liItem = document.querySelectorAll(".list li");
const imgItem = document.querySelectorAll(".item");

const CounterObserver = new IntersectionObserver(
  (entries, observer) => {
    let [entry] = entries;
    if (!entry.isIntersecting) return;

    const speed = 500;
    counters.forEach(counter => {
      const update = () => {
        const target = +counter.getAttribute("data-target");
        const count = +counter.innerText;

        const increment = target / speed;

        if (count < target) {
          counter.innerText = Math.ceil(count + increment);
          setTimeout(update, 1);
        } else {
          counter.innerText = target;
        }
      };
      update();
    });

    observer.unobserve(section_counter);
  },
  {
    root: null,
    threshold: 0.4,
  }
);
CounterObserver.observe(section_counter);

liItem.forEach(li => {
  li.onclick = function () {
    liItem.forEach(li => {
      li.className = "";
    });
    li.className = "active";

    const value = li.textContent;
    imgItem.forEach(img => {
      img.style.display = "none";
      if (
        img.getAttribute("data-filter") === value.toLowerCase() ||
        value === "All Categories"
      ) {
        img.style.display = "block";
      }
    });
  };
});
