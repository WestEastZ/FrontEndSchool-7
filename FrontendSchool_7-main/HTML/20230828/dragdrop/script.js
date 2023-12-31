const dropTarget = document.querySelector(".drop-target");
const dragItems = document.querySelectorAll(".drag-item");

dragItems.forEach((item) => {
  item.addEventListener("dragstart", () => {
    setTimeout(() => {
      item.classList.add("dragging");
    }, 0);
  });
  item.addEventListener("dragend", () => item.classList.remove("dragging"));
});

function handleDragOver(e) {
  e.preventDefault();
  const draggingItem = dropTarget.querySelector(".dragging");
  const notDraggingItems = Array.from(
    dropTarget.querySelectorAll(".drag-item:not(.dragging)")
  );

  const nextItem = notDraggingItems.find((item) => {
    // clientY :
    console.log("clientY: ", e.clientY);
    console.log("offsetTop: ", item.offsetTop);
    console.log("offsetHeight", item.offsetHeight);
  });
}

dropTarget.addEventListener("dragover", handleDragOver);
// dropTarget.addEventListener('dragenter')
