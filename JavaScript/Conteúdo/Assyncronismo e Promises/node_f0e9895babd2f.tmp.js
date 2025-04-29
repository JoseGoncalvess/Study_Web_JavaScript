const numeroqualquer = new Promise((resolve, reject) => {
    setInterval(() => {
        const numberQualuer = parseInt(Math.random() * 100);
        // se der certo chamo o resolver
        resolve(numberQualuer)
    }, 2000)

    // se não o reject
    reject("ERRRO")

})

numeroqualquer.then((value) => {
    console.log(value);

}).catch((Error) => {
    console.log(Error);
}).finally(() => {
    console.log("DEU BOM DEMAIS!!");

})