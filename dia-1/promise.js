async function temporizador () {

    await new Promise((resolve) => {
        setTimeout(() => {
            resolve(console.log('Hello World'))
        }, 2000);
    })

    console.log('Hello World 2')
}

temporizador()


// function temporizador () {

//     setTimeout(() => {
//         console.log('Hello World')
//     }, 2000);

//     console.log('Hello World 2')
// }

// temporizador()

