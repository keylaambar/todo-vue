function addTodo() {
  const input = document.getElementById("todo-input");
  const text = input.value.trim();

  if (text === "") return;

  const li = document.createElement("li");
  li.textContent = text;

  // Tambahkan tombol hapus
  const delBtn = document.createElement("button");
  delBtn.textContent = "Hapus";
  delBtn.onclick = function (e) {
    e.stopPropagation();
    li.remove();
  };

  li.appendChild(delBtn);

  li.addEventListener("click", () => {
    li.classList.toggle("done");
  });

  document.getElementById("todo-list").appendChild(li);
  input.value = "";
}
