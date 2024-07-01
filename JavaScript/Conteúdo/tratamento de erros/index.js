function sum(a, b) {
    const fistnumber = Number(a)
    const lastnumber = Number(b)
    if (isNaN(fistnumber) || isNaN(lastnumber)) {
        throw new Error("A soma precisa ser Dois Numeros!")
    }

    return fistnumber + lastnumber

}

try {
console.log(sum(2,9))
console.log(sum(true,14))
console.log(sum(undefined,22))
console.log(sum("",0))
console.log(sum(18,null))
console.log(sum(13,'zero'))
} catch (error) {
    console.log("Algo de errado não está certo!")
    console.log(error.message)
}finally{
  console.log("Calculos finalizados...!")
}



