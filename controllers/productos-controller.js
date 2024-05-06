const nuevoProducto = (name, image, description, id) =>  {
    const card = document.createElement("div")
    const contenido = `<div class="producto">
    <img src="${image}" alt="Jarron" class="img">
    <h1 class="name">${name}</h1>
    <p class="description">${description}</p>
  </div>
  <div class="model-grid">
    <!-- Aquí se insertarán los modelos destacados mediante JavaScript -->
  </div>`
    
  card.innerHTML = contenido
  card.dataset.id = id

  return card
}

const productos = document.querySelector("[data-product]")
