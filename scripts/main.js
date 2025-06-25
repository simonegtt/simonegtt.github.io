function toggleSidebar() {
  document.getElementById('sidebar').classList.toggle('open');
}

function filterByYear() {
  const selected = document.getElementById("year-filter").value;
  const groups = document.querySelectorAll(".year-group");

  groups.forEach(group => {
    const year = group.getAttribute("data-year");
    if (selected === "all" || year === selected) {
      group.style.display = "block";
    } else {
      group.style.display = "none";
    }
  });
}
