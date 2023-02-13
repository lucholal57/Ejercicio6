window.onload = function () {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {

        if (this.readyState == 4 && this.status == 200) {

            var response = JSON.parse(xhttp.responseText);

            var usuarios = response.usuarios;

            json = usuarios;

            var item = '';

            for (var i = 0; i < usuarios.length; i++) {
                item += `
            <td> ${usuarios[i].id} </td>
            <td> ${usuarios[i].nombre} </td>
            <td> ${usuarios[i].apellido} </td>
            <td> ${usuarios[i].tipo} </td>
            <td> ${usuarios[i].estado} </td>
            <td>
            <button class="btn btn-warning"> Editar </button>
            <button class="btn btn-danger"> Eliminar </button>
            </td>
            </tr>
            `;

            }

            document.getElementById('example').innerHTML = item;
        }
    };

    xhttp.open("GET", "data.json", true);
    xhttp.send();


    var submit = document.getElementById('id_submit');
    var home = document.getElementById('id_home');

    home.addEventListener('mouseover', function () {
        alert("Home de Pagina")
    })

    /* 
    *
    * Contador para Id
    * */
    var i = 0;

    submit.addEventListener('click', function () {
        var nombre = document.getElementById('id_nombre').value;
        var apellido = document.getElementById('id_apellido').value;
        var tipo = document.getElementById('id_tipo').value;
        var estado = document.getElementById('id_estado').value;
        let datos =
        {
            "id": i++, "nombre": nombre,
            "apellido": apellido, "tipo": tipo,
            "estado": estado
        }
    })

}
