function VErifyMaxAge(age) {
    if (age < 18 ) {
        return "Você é menor de idade !"
    } 
    return "Você é maior de idade !"
}

console.log(VErifyMaxAge(23));
