function calcularIR() {
    let salario = parseFloat(document.getElementById("salario").value);

    if (isNaN(salario) || salario <= 0) {
        alert("Por favor, insira um salário válido.");
        return;
    }

    let irpf = calcularImposto(salario);
    let aliquotaEfetiva = calcularAliquotaEfetiva(salario, irpf);

    document.getElementById("resultado").innerHTML = `
        <p>Imposto devido: R$ ${irpf.toFixed(2)}</p>
        <p>Alíquota efetiva: ${aliquotaEfetiva.toFixed(2)}%</p>
    `;
}

function calcularImposto(salario) {
    let imposto = 0;

    if (salario <= 2259.20) {
        imposto = 0;
    } else if (salario <= 2826.65) {
        imposto = (salario * 0.075) - 169.44;
    } else if (salario <= 3751.05) {
        imposto = (salario * 0.15) - 381.44;
    } else if (salario <= 4664.68) {
        imposto = (salario * 0.225) - 662.77;
    } else {
        imposto = (salario * 0.275) - 896.00;
    }

    return imposto > 0 ? imposto : 0;
}

function calcularAliquotaEfetiva(salario, imposto) {
    return (imposto / salario) * 100;
}

function limparCampos() {
    document.getElementById("salario").value = "";
    document.getElementById("resultado").innerHTML = "";
}
