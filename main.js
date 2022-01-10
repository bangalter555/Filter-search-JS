const $d = document;

const searchFilter = (input, selector) => {
  $d.addEventListener("keyup", (e) => {
    let target = e.target;
    if (target.matches(input)) {
      $d.querySelectorAll(selector).forEach((el) =>
        el.textContent.includes(target.value)
          ? el.classList.remove("filters")
          : el.classList.add("filters")
      );
    }
    if (e.key === "Escape") e.target.value = "";
  });
};

$d.addEventListener("DOMContentLoaded", (e) => {
  searchFilter("#filter", ".card");
});
