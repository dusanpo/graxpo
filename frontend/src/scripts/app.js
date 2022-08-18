const sectionCounter = document.querySelector("#sectionCounter");
const counters = document.querySelectorAll(".counter");

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

    observer.unobserve(sectionCounter);
  },
  {
    root: null,
    threshold: 0.4,
  }
);
CounterObserver.observe(sectionCounter);

$(document).ready(function () {
  $(".list-item").click(function () {
    const value = $(this).attr("data-filter");
    if (value === "all") {
      $(".item").show("1000");
    } else {
      $(".item")
        .not("." + value)
        .hide("1000");
      $(".item")
        .filter("." + value)
        .show("1000");
    }
  });

  $(".list-item").click(function () {
    $(this).addClass("active").siblings().removeClass("active");
    
  });
});
