document.getElementById('boton-ingresos').addEventListener('click', () => registrarTransaccion('ingreso'));
document.getElementById('boton-gastos').addEventListener('click', () => registrarTransaccion('gasto'));

async function registrarTransaccion(tipo) {
    const monto = document.getElementById('monto').value;
    const categoria = document.getElementById('categoria').value;
    const fecha = document.getElementById('fecha').value;

    // Validación básica antes de mandar
    if (!monto || !fecha) {
        alert('Por favor, completa el monto y la fecha.');
        return;
    }

    const nuevaTransaccion = {
        monto: parseFloat(monto),
        categoria: categoria,
        fecha: fecha,
        tipo: tipo
    };

    try {
        const respuesta = await fetch('http://localhost:5000/gastos', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(nuevaTransaccion)
        });

        if (respuesta.ok) {
            // Limpiar formulario
            document.getElementById('monto').value = '';
            document.getElementById('fecha').value = '';
            // Refrescar la lista del historial automáticamente
            if (typeof cargarHistorial === 'function') {
                cargarHistorial();
            }
        } else {
            alert('Hubo un problema al guardar el registro.');
        }
    } catch (error) {
        console.error('Error al enviar la transacción:', error);
    }
}