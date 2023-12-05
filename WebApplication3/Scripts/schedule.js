document.addEventListener("DOMContentLoaded", function () {
  const cells = document.querySelectorAll(".cell");
  const modal = document.getElementById("inputModal");
  const closeBtn = document.querySelector(".close");
  let currentCell;

  cells.forEach((cell) => {
    cell.addEventListener("click", function () {
      openModal(cell);
    });
  });

  closeBtn.addEventListener("click", closeModal);

  function openModal(cell) {
    modal.style.display = "block";
    currentCell = cell;
  }

  function closeModal() {
    modal.style.display = "none";
  }

  window.saveEvent = function () {
    const eventInput = document.getElementById("eventInput").value;
    currentCell.innerHTML = eventInput;
    closeModal();

      eventInput = "";
  };
});
