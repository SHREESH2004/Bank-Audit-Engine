function calculateTax() {

    let income = parseFloat(document.getElementById("income").value);

    if (isNaN(income) || income < 0) {
        alert("Please enter valid income.");
        return;
    }

    let tax = 0;

    if (income <= 250000)
        tax = 0;
    else if (income <= 500000)
        tax = (income - 250000) * 0.05;
    else if (income <= 1000000)
        tax = 12500 + (income - 500000) * 0.20;
    else
        tax = 112500 + (income - 1000000) * 0.30;

    let surcharge = 0;  // Not implemented for simplicity
    let cess = tax * 0.04;
    let total = tax + surcharge + cess;

    document.getElementById("tax").value = tax.toFixed(2);
    document.getElementById("surcharge").value = surcharge.toFixed(2);
    document.getElementById("cess").value = cess.toFixed(2);
    document.getElementById("total").value = total.toFixed(2);
}

function resetForm() {
    document.getElementById("income").value = "";
    document.getElementById("tax").value = "";
    document.getElementById("surcharge").value = "";
    document.getElementById("cess").value = "";
    document.getElementById("total").value = "";
}