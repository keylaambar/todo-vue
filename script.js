function addTodo() {
  const input = document.getElementById("todo-input");
  const text = input.value.trim();

  if (text === "") return;

  const li = document.createElement("li");
  li.textContent = text;

  // Tambahkan tombol hapus

  // Buat elemen teks tugas
  const taskText = document.createElement("span");
  taskText.textContent = text;

  // Buat elemen tanggal
  const date = new Date();
  const timeString = date.toLocaleString(); // format lokal
  const dateSpan = document.createElement("small");
  dateSpan.textContent = `🕒 ${timeString}`;
  dateSpan.classList.add("task-date");

  // Buat tombol hapus
  const delBtn = document.createElement("button");
  delBtn.textContent = "Hapus";
  delBtn.onclick = function (e) {
    e.stopPropagation();
    li.remove();
  };

  HEAD;
  li.appendChild(delBtn);

  // Tambahkan ke li
  li.appendChild(taskText);
  li.appendChild(dateSpan);
  li.appendChild(delBtn);

  // Toggle selesai
  li.addEventListener("click", () => {
    li.classList.toggle("done");
  });

  document.getElementById("todo-list").appendChild(li);
  input.value = "";
}
