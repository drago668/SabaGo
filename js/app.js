const pedidos = [
  { id: "#09123", cliente: "Juan P.", direccion: "Calle 45 #12-33", hora: "13:00" },
  { id: "#09124", cliente: "María G.", direccion: "Cra 22 #14-09", hora: "13:10" },
  { id: "#09125", cliente: "Carlos L.", direccion: "Av. 80 #45-20", hora: "13:15" },
];

function cargarPedidos() {
  const tabla = document.getElementById("tablaPedidos");
  tabla.innerHTML = "";
  pedidos.forEach(p => {
    const fila = document.createElement("tr");
    fila.innerHTML = `
      <td>${p.id}</td>
      <td>${p.cliente}</td>
      <td>${p.direccion}</td>
      <td>${p.hora}</td>
      <td><input type="checkbox"></td>
    `;
    tabla.appendChild(fila);
  });
}

document.addEventListener("DOMContentLoaded", () => {
  cargarPedidos();

  const tabs = document.querySelectorAll(".tab");
  tabs.forEach(tab => {
    tab.addEventListener("click", () => {
      tabs.forEach(t => t.classList.remove("active"));
      tab.classList.add("active");
    });
  });
});
