
// timeout para una promesa

// primera promesa
const promesaOriginal = () => new Promise ( resolve => {
    setTimeout(()=>{
        resolve('Promesa original terminada');
    }, 400);
});

// segunda promesa timeout
const timeoutPromise = () => new Promise (( originalPromise, maxTime ) => {
    setTimeout(() => {
        originalPromise('No ha terminado la promesa original');
    }, maxTime = 500);
})

Promise.race([
    promesaOriginal(),
    // temp para timeout
    new Promise ((resolve, reject) => {

        setTimeout(()=>{

            reject('Se acabo el tiempo');

        }, 2000)
        
    }),
    timeoutPromise(),
]).then((result) => {
    console.log( result );
});