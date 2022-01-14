const registroForm = document.querySelector('#form_registro');

registroForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const txtNombre = document.getElementById('nombre').value;
    const txtCorreo = document.getElementById('correo').value;
    const txtClave = document.getElementById('contraseña').value;

    autenticacion
        .createUserWithEmailAndPassword(txtCorreo, txtClave)
        .then(userCrendential => {
            registroForm.reset();

            //cerrar div
            var x = document.getElementById("modal");
            if (x.style.display === "none") {
                x.style.display = "block";
            } else {
                x.style.display = "none";
            }
            console.log('Registrado')
        })
})