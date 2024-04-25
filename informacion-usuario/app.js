
// callback de un API falsa

// mostrar getuserinfo organizada para el callback
const mostrarInfo = (infoEsencial) =>{
    console.log('Información del usuario:');
    console.log('Nombre de usuario:', infoEsencial.username);
    console.log('Nombre:', infoEsencial.nombre);
    console.log('Email:', infoEsencial.email);
    console.log('Descripcion:', infoEsencial.descripcion);
    console.log('Ubicación:', infoEsencial.direccion);
}

// funcion con los datos simulando a una api
const getUserInfo = ( username, callback ) => {

    setTimeout(()=>{  

        const userInfo = {

            username: username,
            nombre: 'Juan Vasquez',
            email: 'juan23@cuenta.com',
            descripcion: 'Ingeniero de Sistemas',
            direccion: 'Calle 50, Medellin',

        };

        callback(userInfo);

    }, 2000); // 2 segundos de respuesta    
    
}

const usuarioNuevo = 'Felipe567';
getUserInfo(usuarioNuevo, mostrarInfo);