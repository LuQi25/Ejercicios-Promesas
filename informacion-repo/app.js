
// Repositorio GIT

const fetchQuote = async() => {
    const apiGithub = 'https://api.github.com'; // direccion fetch de la api
    const userName = 'LuQi25'; // obtener del input del usuario

    // Obtener usuario
    fetch(`${apiGithub}/users/${userName}`) // url de la api
        .then(data => {
            if (!data.ok){ // si no se encuentra un usuario
                console.log('No se encuentran usuarios con ese nombre');
            }
            return data.json() // devolver la info de la api
        })
        .then( dataGit =>{
            console.log('El usuario es ', dataGit.login); //obtener usuario
            console.log('------------');
        })
        .catch(noRespuesta =>{
            throw new Error('No se obtuvo la solicitud del usuario', noRespuesta); // no se recibio respuesta de la api
        });
    //

    // Obtener repositorios
    fetch(`${apiGithub}/users/${userName}/repos`) // url api
        .then(check => {
            if (!check.ok) { // si no se encuentra un repo de ese usuario
                console.log('No se encuentran los repositorios');
            }
            return check.json(); // devolver la info de la api
        })
        .then(repo => {
            console.log('Detalles de los repositorios:');
            console.log('--------------------');
            repo.forEach (repo => { // obtener datos de los repos
                // por cada uno mostrarlo y sacar la info especifica con logs
                console.log('Nombre:', repo.name);
                console.log('Descripción:', repo.description);
                console.log('URL:', repo.html_url);
                console.log('Visibilidad:', repo.visibility);
                console.log('ID:', repo.id);
                console.log('------------');
            });
        })
        .catch(sinRespuesta =>{
            throw new Error('No se obtuvo la solicitud del repositorio', sinRespuesta); // no se recibio respuesta de la api
        });

    
    //NECESITAMOS name , html_url , description , visibility , id.

}

fetchQuote(); // nombrar 

