// Función para cargar y pintar el historial desde el Backend
async function cargarHistorial() {
    const lista = document.getElementById('lista-transacciones');
    if (!lista) return;

    try {
        const respuesta = await fetch('http://localhost:5000/gastos'); // Cambia el puerto si tu index.js usa otro
        const transacciones = await respuesta.json();

        lista.innerHTML = ''; // Limpiar la lista antes de pintar

        if (transacciones.length === 0) {
            lista.innerHTML = '<p style="color: #aa9999; font-size: 0.9rem;">No hay registros pendientes.</p>';
            return;
        }

        transacciones.forEach(item => {
            const tarjeta = document.createElement('div');
            
            // Asignamos la clase según el tipo para el efecto CSS hover
            tarjeta.className = `tarjeta-transaccion ${item.tipo}`;

            // Formatear la fecha para que se vea limpia
            const fechaFormateada = new Date(item.fecha).toLocaleDateString('es-ES', {
                year: 'numeric', month: 'short', day: 'numeric'
            });

            tarjeta.innerHTML = `
                <div class="transaccion-info">
                    <span class="transaccion-categoria">${item.categoria}</span>
                    <span class="transaccion-fecha">${fechaFormateada}</span>
                </div>
                <span class="transaccion-monto">
                    ${item.tipo === 'ingreso' ? '+' : '-'} $${Number(item.monto).toLocaleString()}
                </span>
            `;
            lista.appendChild(tarjeta);
        });
    } catch (error) {
        console.error('Error cargando el historial:', error);
    }
}

// Escuchar cuando cargue la página para pintar los datos automáticamente
document.addEventListener('DOMContentLoaded', cargarHistorial); 