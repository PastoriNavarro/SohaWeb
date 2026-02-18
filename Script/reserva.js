function validarFormulario() {
    var nombre = document.getElementById("nombre").value;
    var apellido = document.getElementById("apellido").value;
    var telefono = document.getElementById("telefono").value;
    var correo = document.getElementById("correo").value;
    var fecha = document.getElementById("fecha").value;
    
    
    var regexNombre = /^[a-zA-Z\s]+$/;
    var regexTelefono = /^\d{10}$/;
    var regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    var regexFecha = /^\d{4}-\d{2}-\d{2}$/;

    
    if (!nombre.match(regexNombre)) {
        alert("Por favor, introduzca un nombre válido.");
        return false;
    }

    if (!apellido.match(regexNombre)) {
        alert("Por favor, introduzca un apellido válido.");
        return false;
    }

    
    if (!correo.match(regexEmail)) {
        alert("Por favor, introduzca un correo electrónico válido.");
        return false;
    }

    
    if (!fecha.match(regexFecha)) {
        alert("Por favor, introduzca una fecha de reserva válida en el formato YYYY-MM-DD.");
        return false;
    }

    
    return true;
}

function confirmarReserva() {
    var form = document.getElementById("reserva");
    var formData = new FormData(form);

    var confirmMessage = "Por favor, revisa los datos de tu reserva:\n\n";

    for (var pair of formData.entries()) {
        confirmMessage += pair[0] + ": " + pair[1] + "\n";
    }

    if (confirm(confirmMessage + "\n¿Confirmar reserva?")) {
        alert("¡Reserva confirmada! Gracias.");
        form.reset();
    } else {
        alert("Reserva cancelada.");
    }
}

