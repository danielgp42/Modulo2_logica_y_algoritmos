document.addEventListener('DOMContentLoaded', function() {
    const contactos = [
      {
        nombre: 'Ana Pérez',
        puesto: 'Diseñadora Gráfica',
        empresa: 'Creativa Studio',
        correo: 'ana.perez@creativastudio.com',
        telefono: '55-1234-5678'
      },
      {
        nombre: 'Carlos López',
        puesto: 'Desarrollador Web',
        empresa: 'Tech Solutions',
        correo: 'carlos.lopez@techsolutions.net',
        telefono: '55-9876-5432'
      },
      {
        nombre: 'Sofía Gómez',
        puesto: 'Gerente de Marketing',
        empresa: 'Global Marketing Inc.',
        correo: 'sofia.gomez@globalmarketing.com',
        telefono: '55-1122-3344'
      }
    ];
  
    const contenedorTarjetas = document.getElementById('contenedor-tarjetas');
  
    const generarTarjeta = (contacto) => {
      return `
        <div class="tarjeta">
          <h3>${contacto.nombre}</h3>
          <p>Puesto: ${contacto.puesto}</p>
          <p>Empresa: ${contacto.empresa}</p>
          <p>Correo: <a href="mcorreode:${contacto.correo}">${contacto.correo}</a></p>
          <p>Teléfono: ${contacto.telefono}</p>
        </div>
      `;
    };
  
    contactos.forEach(contacto => {
      const tarjetaHTML = generarTarjeta(contacto);
      contenedorTarjetas.innerHTML += tarjetaHTML;
    });
  });
