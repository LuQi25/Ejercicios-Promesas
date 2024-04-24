
//const apiGithub = 'https://api.github.com'; // fetch de la api
//const userName = 'juanes23'; // obtener del input

// fetch ('https://api.github.com') // no sirve
// fecth (' https://api.github.com/users/'nombre de usuario' ') // si sirve

const fetchQuote = async() => {
    const apiGithub = 'https://api.github.com'; // fetch de la api
    const userName = 'LuQi25'; // obtener del input
    // fetch(`https://api.github.com/users/${userName}`)

    fetch(`${apiGithub}/users/${userName}`)
            .then(data => {
                return data.json()
            })
            .then( si =>{
                console.log('El usuario es ', si.login);
            })
            .catch(noRespuesta =>{
                console.log('No se obtuvo la solicitud', noRespuesta);
            });

    fetch(`${apiGithub}/users/${userName}/repos`)
        .then(data => {
            return data.json()
        })
        .then( si =>{
            console.log('El repositorio es ', si);
        })
        .catch(noRespuesta =>{
            console.log('No se obtuvo la solicitud', noRespuesta);
        });
    

}
fetchQuote();

// fetch(`${apiGithub}/users/${userName}`)
//         .then(data => {
//            return data.json()
//          })
//         .then( si =>{
//             console.log('El usuario es ', si);
//         } )
//         .catch(noRespuesta =>{
//             console.log('No se obtuvo la solicitud', noRespuesta);
//         });
