

function generateContraCheck(funcionary, salary, benefici) {
    if (salary >= 0 && salary < 1100) {
        console.log(`O salario Liquido a transferir para ${funcionary} é ${calcSalary(salary, benefici, 5)}`)
    } else if (salary > 1100 && salary <= 2500) {
        console.log(`O salario Liquido a transferir para ${funcionary} é ${calcSalary(salary, benefici, 10)}`)
    } else if (salary > 2500) {
        console.log(`O salario Liquido a transferir para ${funcionary} é ${calcSalary(salary, benefici, 15)}`)
    }

}


function calcSalary(salary, benefici, imporsto) {
    return (salary - (salary * (imporsto / 100))) + benefici
}

generateContraCheck("Celine", 1000, 300)
generateContraCheck("Maria", 1800, 100)
generateContraCheck("Anny", 4300, 0)

function calcularImposto(salario) {
    let aliquota;
    if (salario >= 0 && salario <= 1100) {
        aliquota = 0.05;
    }
    else if (salary > 1100 && salary <= 2500) {
        aliquota = 0.10;
    } else if (salary > 2500) {
        aliquota = 0.15;
    }
    //TODO Criar as demais condições para as aliquotas de 10.00% e 15.00%.
    return salario * aliquota;
}

//Lê os valores de Entrada:
const valorSalario = parseFloat(gets());
const valorBeneficios = parseFloat(gets());

//Calcula o imposto através da função "calcularImposto":
const valorImposto = calcularImposto(valorSalario);
//Calcula e imprime a Saída (com 2 casas decimais):
const saida = (valorSalario - valorImposto) + valorBeneficios;
print(saida.toFixed(2));