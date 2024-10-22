// script.js
// Función para cargar los modelos destacados
function loadFeaturedModels() {
    const modelGrid = document.querySelector('.model-grid');
  
    // Aquí deberías hacer una solicitud a una API o una base de datos
    // para obtener la información de los modelos destacados
    // const featuredModels = [
    //   {
    //     id: 1,
    //     name: 'Jarrón Moderno',
    //     image: "data:image/jpeg;base64,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",
    //     description: 'Un elegante jarrón de diseño minimalista.'
    //   },
    //   {
    //     id: 2,
    //     name: 'Organizador de Escritorio',
    //     image: 'organizador-escritorio.jpg',
    //     description: 'Un práctico organizador de escritorio para mantener tu espacio ordenado.'
    //   },
    //   {
    //     id: 3,
    //     name: 'Figura Decorativa',
    //     image: 'figura-decorativa.jpg',
    //     description: 'Una hermosa figura decorativa para adornar tu hogar.'
    //   }
    // ];
  
    featuredModels.forEach(model => {
      const modelElement = document.createElement('div');
      modelElement.classList.add('model-item');
  
      const imageElement = document.createElement('img');
      imageElement.src = `img/${model.image}`;
      imageElement.alt = model.name;
  
      const nameElement = document.createElement('h3');
      nameElement.textContent = model.name;
  
      const descriptionElement = document.createElement('p');
      descriptionElement.textContent = model.description;
  
      const downloadButton = document.createElement('a');
      downloadButton.href = `#`;
      downloadButton.classList.add('btn');
      downloadButton.textContent = 'Descargar';
  
      modelElement.appendChild(imageElement);
      modelElement.appendChild(nameElement);
      modelElement.appendChild(descriptionElement);
      modelElement.appendChild(downloadButton);
  
      modelGrid.appendChild(modelElement);
    });
  }
  
  // Llamar a la función para cargar los modelos destacados
  loadFeaturedModels();
  