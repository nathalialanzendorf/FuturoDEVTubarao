var date = new Date();
var mes = date.getMonth;

switch (mes) {
    case 0:
        alert("Mês Janeiro");
        break;
    case 11:
        alert("Mês Novembro");
        break;
    default:
        alert("Mês não mapeado");
        break;
}
