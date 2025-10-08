const restaurantes = [
  { nombre: "Burger Land", tipo: "Comidas Rápidas", img: "https://source.unsplash.com/400x300/?burger" },
  { nombre: "Sushi Go", tipo: "Comida Japonesa", img: "https://source.unsplash.com/400x300/?sushi" },
  { nombre: "La Parrilla", tipo: "Carnes a la brasa", img: "https://source.unsplash.com/400x300/?steak" },
  { nombre: "Pasta Bella", tipo: "Italiana", img: "https://source.unsplash.com/400x300/?pasta" },
];

let pedidoActual = null;

// Renderizar restaurantes
function mostrarRestaurantes() {
  const contenedor = document.getElementById("listaRestaurantes");
  contenedor.innerHTML = "";
  restaurantes.forEach(r => {
    const card = document.createElement("div");
    card.className = "card";
    card.innerHTML = `
      <img src="${r.img}" alt="${r.nombre}">
      <div class="card-content">
        <h3>${r.nombre}</h3>
        <p>${r.tipo}</p>
        <button class="btn" onclick="verCarta('${r.nombre}')">Ver Carta</button>
      </div>
    `;
    contenedor.appendChild(card);
  });
}

function verCarta(nombre) {
  const platos = [
    { nombre: "Combo 1", precio: 25000 },
    { nombre: "Combo 2", precio: 30000 },
    { nombre: "Bebida", precio: 8000 },
  ];
  const detalle = document.getElementById("detallePedido");
  detalle.innerHTML = `<h3>${nombre}</h3>`;
  platos.forEach(p => {
    const item = document.createElement("div");
    item.innerHTML = `
      <p>${p.nombre} - $${p.precio.toLocaleString()}</p>
      <button class="btn" onclick="agregarPedido('${p.nombre}', ${p.precio})">Agregar</button>
    `;
    detalle.appendChild(item);
  });

  pedidoActual = { restaurante: nombre, platos: [], total: 0 };

  mostrarSeccion("pedido");
}

function agregarPedido(nombre, precio) {
  pedidoActual.platos.push({ nombre, precio });
  pedidoActual.total += precio;

  const detalle = document.getElementById("detallePedido");
  const total = document.createElement("p");
  total.style.fontWeight = "bold";
  total.textContent = `Total: $${pedidoActual.total.toLocaleString()}`;
  detalle.appendChild(total);
}

document.getElementById("btnConfirmar").addEventListener("click", () => {
  alert(`Pedido confirmado en ${pedidoActual.restaurante}`);
  mostrarSeccion("seguimiento");
  simularSeguimiento();
});

function mostrarSeccion(id) {
  document.querySelectorAll(".seccion").forEach(sec => sec.classList.remove("activa"));
  document.getElementById(id).classList.add("activa");
}

function simularSeguimiento() {
  const estados = ["Preparando tu pedido...", "Repartidor en camino 🚴‍♂️", "Pedido entregado ✅"];
  let i = 0;
  const estado = document.getElementById("estadoPedido");
  const interval = setInterval(() => {
    estado.textContent = estados[i];
    i++;
    if (i === estados.length) clearInterval(interval);
  }, 3000);
}

// Navegación entre tabs
document.getElementById("btnRestaurantes").addEventListener("click", () => {
  mostrarSeccion("restaurantes");
  document.getElementById("btnRestaurantes").classList.add("active");
  document.getElementById("btnPedidos").classList.remove("active");
});

document.getElementById("btnPedidos").addEventListener("click", () => {
  mostrarSeccion("pedido");
  document.getElementById("btnPedidos").classList.add("active");
  document.getElementById("btnRestaurantes").classList.remove("active");
});

document.addEventListener("DOMContentLoaded", mostrarRestaurantes);
