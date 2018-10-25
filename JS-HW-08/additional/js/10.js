const menu = document.querySelector(".js-menu");
const list = menu.querySelectorAll(".menu-link");

menu.addEventListener("click", handleMenuClick);

function handleMenuClick({ target }) {
  const nodeName = target.nodeName;
  event.preventDefault();
  if (nodeName !== "A") return;
  list.forEach(link => {
    if (link !== target) {
      link.classList.remove("menu-link-active");
    } else {
      link.classList.add("menu-link-active");
    }
  });
}
