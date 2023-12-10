document.addEventListener("DOMContentLoaded", function () {
  const cells = document.querySelectorAll(".cell");
  const modal = document.getElementById("inputModal");

  let currentCell;

  cells.forEach((cell) => {
    cell.addEventListener("click", function () {
      openModal(cell);
    });
  });

  function openModal(cell) {
    modal.style.display = "block";
    currentCell = cell;
  }

  document
    .getElementById("saveChangesBtn")
    .addEventListener("click", saveEvent);

  function saveEvent() {
    let eventInput = document.getElementById("eventInput").value;
    currentCell.innerHTML = `<div>${eventInput}
            <button type="button" class="btn btn-secondary">
                Remove
            </button>
            <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#inputModal">
                Edit
            </button>
        </div>`;

    document.getElementById("eventInput").value = "";
  }
});
