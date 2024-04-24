
// timeout para una promesa




const promesaOriginal = () => new Promise ( resolve => {
    setTimeout(()=>{
        resolve('Promesa original terminada');
    }, 700);
});

const timeoutPromise = () => new Promise (( originalPromise, maxTime ) => {
    setTimeout(() => {
        originalPromise('No termino la promesa original');
    }, maxTime = 500);
})

Promise.race([
    promesaOriginal(),
    // intento temp para timeout
    // basado en un ejercicio online
    // new Promise ((resolve, reject) => {

    //     setTimeout(()=>{

    //         reject('Se acabo el tiempo');

    //     }, 2000)
        
    // }),
    timeoutPromise(),
])
.then((result) => {
    console.log( result );
});