// HTML Elemanları
const addTaskButton = document.getElementById("addTask");
const taskInput = document.getElementById("task");
const taskList = document.getElementById("taskList");

// Görev Ekleme
addTaskButton.addEventListener("click", function() {
  const taskText = taskInput.value.trim();

  // Boş görev eklemeyi engelle
  if (taskText === "") {
    alert("Görev boş olamaz!");
    return;
  }

  // Yeni bir liste öğesi oluştur
  const listItem = document.createElement("li");

  // Yeni görev yazısını ekle
  listItem.innerHTML = `${taskText} <button class="deleteButton">Sil</button>`;

  // Listeye ekle
  taskList.appendChild(listItem);

  // Görev inputunu temizle
  taskInput.value = "";

  // Silme butonuna işlevsellik ekle
  const deleteButton = listItem.querySelector(".deleteButton");
  deleteButton.addEventListener("click", function() {
    taskList.removeChild(listItem);
  });
});
