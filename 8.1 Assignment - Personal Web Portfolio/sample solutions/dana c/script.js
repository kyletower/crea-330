function toTop() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

function scrolling() {
  if (document.body.scrollTop > 90 || document.documentElement.scrollTop > 90) {
    headerName = document.getElementById("headerName");
    headerName.classList.add("scrolling");
  } else {
    headerName = document.getElementById("headerName");
    headerName.classList.remove("scrolling");
  }
}
