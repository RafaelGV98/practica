const destinos = {
    "Japón": {
      tipo: "HOTEL+AÉREO",
      precio: "$ 4000",
      detalles: {
        fechas: "1 Mayo - 15 Mayo 2025",
        hotel: "Grand Tokyo Hotel",
        aerolinea: "Japan Airlines",
        incluye: [
          "7 noches de alojamiento",
          "Desayuno incluido",
          "Tours por Tokyo, Kyoto y Osaka",
          "Vuelo de ida y vuelta"
        ],
        restricciones: "Sujeto a disponibilidad. No reembolsable."
      }
    },
    "San Andres": {
      tipo: "HOTEL+AÉREO",
      precio: "$ 3000",
      detalles: {
        fechas: "10 Junio - 20 Junio 2025",
        hotel: "San Andres Resort & Spa",
        aerolinea: "American Airlines",
        incluye: [
          "10 noches de alojamiento",
          "Todo incluido",
          "Tour por la ciudad",
          "Vuelo de ida y vuelta"
        ],
        restricciones: "Cambios permitidos con 30 días de anticipación."
      }
    },
    "Tokyo": {
      precio: "$ 3500",
      detalles: {
        fechas: "Disponible todo el año",
        duracion: "7-14 días",
        atracciones: [
          "Templo Senso-ji",
          "Torre de Tokyo",
          "Palacio Imperial",
          "Distrito de Shibuya"
        ],
        comidas: "Desayuno incluido",
        restricciones: "Temporada alta en primavera (floración de cerezos)."
      }
    },
    "Osaka": {
      precio: "$ 3200",
      detalles: {
        fechas: "Disponible todo el año",
        duracion: "5-10 días",
        atracciones: [
          "Castillo de Osaka",
          "Acuario Kaiyukan",
          "Dotonbori",
          "Universal Studios Japan"
        ],
        comidas: "Desayuno incluido",
        restricciones: "Mejor temporada: primavera y otoño."
      }
    }
  };
  
  // Crear modal para mostrar detalles
  function crearModal() {
    // Crear el elemento modal si no existe
    if (!document.getElementById('detallesModal')) {
      const modal = document.createElement('div');
      modal.id = 'detallesModal';
      modal.className = 'modal';
      modal.innerHTML = `
        <div class="modal-contenido">
          <span class="cerrar-modal">&times;</span>
          <h2 id="modal-titulo"></h2>
          <div id="modal-detalles"></div>
          <div class="modal-botones">
            <button id="reservar-ahora" class="boton-primario">Reservar ahora</button>
          </div>
        </div>
      `;
  
      // Agregar estilos para el modal - usando variables CSS para consistencia
      const estilos = document.createElement('style');
      estilos.textContent = `
        .modal {
          display: none;
          position: fixed;
          z-index: 1000;
          left: 0;
          top: 0;
          width: 100%;
          height: 100%;
          overflow: auto;
          background-color: rgba(0,0,0,0.7);
          animation: fadeIn 0.3s;
        }
        
        @keyframes fadeIn {
          from {opacity: 0}
          to {opacity: 1}
        }
        
        .modal-contenido {
          background-color: var(--blanco, #fff);
          margin: 15% auto;
          padding: 25px;
          border-radius: 8px;
          width: 90%;
          max-width: 600px;
          box-shadow: 0 4px 8px rgba(0,0,0,0.2);
          position: relative;
          animation: slideIn 0.4s;
        }
        
        @media (max-width: 768px) {
          .modal-contenido {
            width: 95%;
            padding: 15px;
            margin: 10% auto;
          }
        }
        
        @media (max-width: 480px) {
          .modal-contenido {
            width: 98%;
            padding: 12px;
            margin: 5% auto;
          }
          
          #modal-titulo {
            font-size: 20px;
          }
          
          #modal-detalles {
            font-size: 14px;
          }
          
          .precio-destacado {
            font-size: 20px !important;
          }
        }
        
        @keyframes slideIn {
          from {transform: translateY(-50px); opacity: 0;}
          to {transform: translateY(0); opacity: 1;}
        }
        
        .cerrar-modal {
          color: var(--gris-oscuro, #8c8c8c);
          float: right;
          font-size: 28px;
          font-weight: bold;
          cursor: pointer;
          transition: color 0.2s ease;
        }
        
        .cerrar-modal:hover {
          color: var(--grafito, #222);
        }
        
        #modal-titulo {
          margin-top: 0;
          color: var(--grafito, #222);
          font-family: 'Unbounded', sans-serif;
        }
        
        #modal-detalles {
          margin: 20px 0;
          color: var(--grafito, #222);
        }
        
        #modal-detalles p {
          margin: 10px 0;
          font-size: 16px;
        }
        
        #modal-detalles ul {
          padding-left: 20px;
        }
        
        .modal-botones {
          display: flex;
          justify-content: flex-end;
          margin-top: 20px;
        }
        
        @media (max-width: 480px) {
          .modal-botones {
            justify-content: center;
          }
        }
        
        .boton-primario {
          background-color: var(--rojo, #b81515);
          color: var(--blanco, #fff);
          border: none;
          padding: 10px 20px;
          border-radius: 4px;
          cursor: pointer;
          font-weight: bold;
          font-family: 'Montserrat', sans-serif;
          transition: background-color 0.2s ease;
        }
        
        .boton-primario:hover {
          background-color: #a01212;
          transform: translateY(-2px);
          box-shadow: 0 2px 5px rgba(0,0,0,0.2);
        }
        
        .boton-primario:active {
          transform: translateY(0);
        }
        
        .etiqueta {
          font-weight: bold;
          display: block;
          margin-top: 15px;
          color: var(--grafito, #222);
        }
        
        .precio-destacado {
          font-size: 24px;
          color: var(--rojo, #b81515);
          font-weight: bold;
          margin: 15px 0;
        }
        
        /* Estilos para hacer elementos clickeables más obvios */
        .ofertas__card--boton,
        .destinos__elemento--boton,
        .busca__categoria {
          cursor: pointer;
          transition: transform 0.2s ease, box-shadow 0.2s ease;
        }
        
        .ofertas__card--boton:hover,
        .destinos__elemento--boton:hover {
          transform: translateY(-3px);
          box-shadow: 0 4px 8px rgba(0,0,0,0.1);
        }
        
        .busca__categoria:hover {
          transform: translateY(-5px);
        }
        
        /* Estilos para pantallas táctiles */
        @media (hover: none) {
          .ofertas__card--boton:active,
          .destinos__elemento--boton:active,
          .busca__categoria:active {
            transform: scale(0.98);
          }
        }
      `;
  
      document.head.appendChild(estilos);
      document.body.appendChild(modal);
  
      // Cerrar modal al hacer clic en X
      document.querySelector('.cerrar-modal').addEventListener('click', function() {
        document.getElementById('detallesModal').style.display = 'none';
      });
  
      // Cerrar modal al hacer clic fuera del contenido
      window.addEventListener('click', function(event) {
        if (event.target === modal) {
          modal.style.display = 'none';
        }
      });
  
      // Cerrar modal con la tecla Escape
      document.addEventListener('keydown', function(event) {
        if (event.key === 'Escape' && modal.style.display === 'block') {
          modal.style.display = 'none';
        }
      });
  
      // Agregar funcionalidad al botón de reservar
      document.getElementById('reservar-ahora').addEventListener('click', function() {
        const destino = document.getElementById('modal-titulo').textContent;
        alert(`¡Gracias por reservar tu viaje a ${destino}! Un asesor se pondrá en contacto contigo pronto.`);
        modal.style.display = 'none';
      });
    }
  }
  
  // Función para mostrar detalles de un destino
  function mostrarDetalles(destino) {
    crearModal();
    
    const modal = document.getElementById('detallesModal');
    const modalTitulo = document.getElementById('modal-titulo');
    const modalDetalles = document.getElementById('modal-detalles');
    
    // Configurar título
    modalTitulo.textContent = destino;
    
    // Obtener información del destino
    const info = destinos[destino];
    if (!info) {
      modalDetalles.innerHTML = '<p>Lo sentimos, no hay información disponible para este destino.</p>';
      modal.style.display = 'block';
      return;
    }
    
    // Construir contenido del modal según el tipo de destino
    let contenido = '';
    
    if (info.tipo) {
      // Para ofertas (Japón, San Andreas)
      contenido += `
        <div class="precio-destacado">${info.precio}</div>
        <p><strong>Tipo:</strong> ${info.tipo}</p>
        <p class="etiqueta">Fechas:</p>
        <p>${info.detalles.fechas}</p>
        <p class="etiqueta">Hospedaje:</p>
        <p>${info.detalles.hotel}</p>
        <p class="etiqueta">Aerolínea:</p>
        <p>${info.detalles.aerolinea}</p>
        <p class="etiqueta">Incluye:</p>
        <ul>
          ${info.detalles.incluye.map(item => `<li>${item}</li>`).join('')}
        </ul>
        <p class="etiqueta">Restricciones:</p>
        <p>${info.detalles.restricciones}</p>
      `;
    } else {
      // Para destinos populares (Tokyo, Osaka)
      contenido += `
        <div class="precio-destacado">Desde ${info.precio}</div>
        <p class="etiqueta">Disponibilidad:</p>
        <p>${info.detalles.fechas}</p>
        <p class="etiqueta">Duración recomendada:</p>
        <p>${info.detalles.duracion}</p>
        <p class="etiqueta">Principales atracciones:</p>
        <ul>
          ${info.detalles.atracciones.map(item => `<li>${item}</li>`).join('')}
        </ul>
        <p class="etiqueta">Alimentación:</p>
        <p>${info.detalles.comidas}</p>
        <p class="etiqueta">Información adicional:</p>
        <p>${info.detalles.restricciones}</p>
      `;
    }
    
    modalDetalles.innerHTML = contenido;
    modal.style.display = 'block';
  }
  
  // Funcionalidad para botones de categorías
  function configurarBotonesCategorias() {
    const categorias = document.querySelectorAll('.busca__categoria');
    
    categorias.forEach(categoria => {
      categoria.addEventListener('click', function() {
        const nombreCategoria = this.querySelector('b').textContent;

    
        
        // Mostrar mensaje diferente según la categoría
        switch(nombreCategoria) {
          case 'Paquetes Nacionales':
            mostrarAlertaResponsiva('Explorando paquetes nacionales... ¡Próximamente tendremos más destinos disponibles!');
            break;
          case 'Paquetes Internacionales':
            mostrarAlertaResponsiva('Descubre nuestros destinos internacionales más populares como Japón, Europa y más.');
            break;
          case 'Transfer':
            mostrarAlertaResponsiva('Servicios de transfer disponibles en todos nuestros destinos. Consulta con un asesor.');
            break;
          default:
            mostrarAlertaResponsiva('Contamos con los mejores seguros de viaje. Un asesor te contactará para brindarte más información.');
        }
      });
    });
  }
  
  // Crear un sistema de alertas personalizado más responsivo
  function mostrarAlertaResponsiva(mensaje) {
    // Verificar si ya existe una alerta y eliminarla
    const alertaExistente = document.querySelector('.alerta-personalizada');
    if (alertaExistente) {
      alertaExistente.remove();
    }
    
    // Crear la alerta
    const alerta = document.createElement('div');
    alerta.className = 'alerta-personalizada';
    alerta.innerHTML = `
      <div class="alerta-contenido">
        <span class="alerta-mensaje">${mensaje}</span>
        <button class="alerta-boton">Aceptar</button>
      </div>
    `;
    
    // Agregar estilos para la alerta
    const estilos = document.createElement('style');
    if (!document.querySelector('style#estilos-alerta')) {
      estilos.id = 'estilos-alerta';
      estilos.textContent = `
        .alerta-personalizada {
          position: fixed;
          z-index: 2000;
          left: 0;
          top: 0;
          width: 100%;
          height: 100%;
          background-color: rgba(0,0,0,0.5);
          display: flex;
          justify-content: center;
          align-items: center;
          animation: fadeIn 0.2s;
        }
        
        .alerta-contenido {
          background-color: var(--blanco, #fff);
          border-radius: 8px;
          padding: 20px;
          width: 90%;
          max-width: 400px;
          box-shadow: 0 4px 15px rgba(0,0,0,0.2);
          text-align: center;
          animation: popIn 0.3s;
        }
        
        @keyframes popIn {
          from {transform: scale(0.8); opacity: 0;}
          to {transform: scale(1); opacity: 1;}
        }
        
        .alerta-mensaje {
          display: block;
          margin-bottom: 20px;
          color: var(--grafito, #222);
          font-size: 16px;
          line-height: 1.5;
        }
        
        .alerta-boton {
          background-color: var(--rojo, #b81515);
          color: var(--blanco, #fff);
          border: none;
          padding: 10px 25px;
          border-radius: 4px;
          cursor: pointer;
          font-weight: 500;
          transition: background-color 0.2s;
        }
        
        .alerta-boton:hover {
          background-color: #a01212;
        }
        
        @media (max-width: 480px) {
          .alerta-contenido {
            width: 85%;
            padding: 15px;
          }
          
          .alerta-mensaje {
            font-size: 14px;
          }
        }
      `;
      document.head.appendChild(estilos);
    }
    
    document.body.appendChild(alerta);
    
    // Cerrar la alerta al hacer clic en el botón
    const boton = alerta.querySelector('.alerta-boton');
    boton.addEventListener('click', function() {
      alerta.remove();
    });
    
    // Cerrar la alerta al hacer clic fuera
    alerta.addEventListener('click', function(e) {
      if (e.target === alerta) {
        alerta.remove();
      }
    });
    
    // Cerrar con la tecla Escape
    const handleKeyDown = function(e) {
      if (e.key === 'Escape') {
        alerta.remove();
        document.removeEventListener('keydown', handleKeyDown);
      }
    };
    document.addEventListener('keydown', handleKeyDown);
  }
  
  // Agregar ripple effect a los botones para mejor feedback táctil
  function agregarEfectoRipple() {
    const botones = document.querySelectorAll('.ofertas__card--boton, .destinos__elemento--boton');
    
    // Agregar estilos para ripple effect
    const estilosRipple = document.createElement('style');
    if (!document.querySelector('style#estilos-ripple')) {
      estilosRipple.id = 'estilos-ripple';
      estilosRipple.textContent = `
        .ripple {
          position: relative;
          overflow: hidden;
        }
        
        .ripple-effect {
          position: absolute;
          border-radius: 50%;
          background-color: rgba(255, 255, 255, 0.7);
          transform: scale(0);
          animation: ripple-animation 0.6s linear;
          pointer-events: none;
        }
        
        @keyframes ripple-animation {
          to {
            transform: scale(4);
            opacity: 0;
          }
        }
      `;
      document.head.appendChild(estilosRipple);
    }
    
    botones.forEach(boton => {
      boton.classList.add('ripple');
      
      boton.addEventListener('click', function(e) {
        const rect = this.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        const ripple = document.createElement('span');
        ripple.className = 'ripple-effect';
        ripple.style.left = x + 'px';
        ripple.style.top = y + 'px';
        
        this.appendChild(ripple);
        
        setTimeout(() => {
          ripple.remove();
        }, 600);
      });
    });
  }
  
  // Inicializar la funcionalidad cuando el DOM esté cargado
  document.addEventListener('DOMContentLoaded', function() {
    // Configurar botones "Ver detalles" en ofertas
    document.querySelectorAll('.ofertas__card--boton').forEach(boton => {
      boton.addEventListener('click', function() {
        const card = this.closest('.ofertas__card');
        const destino = card.querySelector('.ofertas__card--destino-nombre').textContent;
        mostrarDetalles(destino);
      });
    });
    
    // Configurar botones "Ver detalles" en destinos populares
    document.querySelectorAll('.destinos__elemento--boton').forEach(boton => {
      boton.addEventListener('click', function() {
        const elemento = this.closest('.destinos__elemento');
        const destino = elemento.querySelector('.destinos__elemento--nombre').textContent;
        mostrarDetalles(destino);
      });
    });
    
    // Configurar funcionalidad para botones de categorías
    configurarBotonesCategorias();
    
    // Agregar funcionalidad a los enlaces de navegación
    document.querySelectorAll('.encabezado__navegacion--elemento').forEach(enlace => {
      enlace.addEventListener('click', function(e) {
        e.preventDefault();
        const seccion = this.textContent;
        
        switch(seccion) {
          case 'Blog':
            mostrarAlertaResponsiva('Próximamente: Blog con consejos de viaje y experiencias de nuestros clientes.');
            break;
          case 'Paquetes de viaje':
            document.querySelector('.ofertas').scrollIntoView({ behavior: 'smooth' });
            break;
          case 'Contacto':
            mostrarAlertaResponsiva('Llámanos al: +1-800-VIAJES o escríbenos a info@airdeals.com');
            break;
        }
      });
    });
    
    // Agregar funcionalidad a los iconos de redes sociales
    document.querySelectorAll('.footer__social-media-icon').forEach(icono => {
      icono.closest('a').addEventListener('click', function(e) {
        e.preventDefault();
        const indice = Array.from(document.querySelectorAll('.footer__social-media-icon')).indexOf(icono);
        
        switch(indice) {
          case 0:
            mostrarAlertaResponsiva('WhatsApp: +1-800-VIAJES');
            break;
          case 1:
            mostrarAlertaResponsiva('¡Síguenos en Instagram: @airdeals_viajes!');
            break;
          case 2:
            mostrarAlertaResponsiva('¡Síguenos en Twitter: @airdeals_viajes!');
            break;
        }
      });
    });
    
    // Agregar ripple effect a los botones
    agregarEfectoRipple();
    
    // Ajustar interfaces para dispositivos táctiles
    if ('ontouchstart' in window) {
      const estilesTouch = document.createElement('style');
      estilesTouch.textContent = `
        .ofertas__card--boton,
        .destinos__elemento--boton,
        .busca__categoria,
        .encabezado__navegacion--elemento,
        .footer__social-media-icon {
          padding: 12px !important; /* Área táctil más grande */
        }
      `;
      document.head.appendChild(estilesTouch);
    }
  });