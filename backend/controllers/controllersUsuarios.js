function guardarUsuario(usuario){

    try {
        const {id, nombreCompleto, correo, contrasenia} = usuario;
        const sheetUsuarios= obtenerSheet(env_().SH_REGISTRO_USUARIOS);
        sheetUsuarios.appendRow([id, nombreCompleto, correo, contrasenia]);
        return {
            titulo: "Registro Exitoso!! ",
        };
    } catch (error) {
        return {
            titulo: "Ocurrio un Error!! " + error,
        };
    }
}