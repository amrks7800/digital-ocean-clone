// navigation bar responsive design
let navIcon = document.querySelector("header .fa-pause");
let nav = document.querySelector("header nav");
navIcon.onclick = function () {
  nav.classList.toggle("open");
};

// customizing savings card.
let spansDiv = Array.from(document.querySelectorAll(".plans-card .spans span"));
let activeSpan;
let holders = Array.from(
  document.querySelectorAll(".plans-card .body .holder")
);

// get the active span in variable updated.
spansDiv.forEach((span) => {
  setInterval(() => {
    if (span.classList.contains("active")) {
      activeSpan = span;
    }
  }, 500);
});
// get the active holder in variable updated.
holders.forEach((holder) => {
  setInterval(() => {
    if (holder.dataset.index === activeSpan.dataset.index) {
      holder.style.opacity = "1";
    } else {
      holder.style.opacity = "0";
    }
  }, 500);
});

function setActive(i, z, time) {
  setTimeout(() => {
    spansDiv[i].classList.remove("active");
    spansDiv[z].classList.add("active");
  }, time);
}

setInterval(() => {
  setActive(0, 1, 0);
  setActive(1, 2, 5000);
  setActive(2, 3, 10000);
  setActive(3, 0, 15000);
}, 20000);
