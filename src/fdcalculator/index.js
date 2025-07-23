document.addEventListener("DOMContentLoaded", function () {
    const investmenInput = document.getElementById("investment");
    const interestRate = document.getElementById("interestrate");
    const timePeriod = document.getElementById("time_period");
    investmenInput.addEventListener("input", function () {
        updateInvestmentValue(this.value);
    })

    interestRate.addEventListener("input", function () {
        updateInterestValue(this.value);
    })

    timePeriod.addEventListener("input", function () {
        updatetimePeriodValue(this.value);
    })
    updateInterestValue(interestRate.value)
    updateInvestmentValue(investmenInput.value)
    updatetimePeriodValue(timePeriod.value)
})

function updateInterestValue(value) {
    document.getElementById("range-value").innerText = `${parseFloat(value).toFixed(2)}%`;

}


function updateInvestmentValue(value) {
    document.getElementById("investment-value").innerText = `${parseFloat(value).toLocaleString('en-AU')}`;
}

function updatetimePeriodValue(value) {
    document.getElementById("time-period-value").innerText = `${parseFloat(value).toFixed(0)}`
}

function calculayeInteerst() {
    const principle = parseFloat(document.getElementById("investment").value);
    const rateofInterest = parseFloat(document.getElementById("interestrate").value);
    const timePeriod = parseFloat(document.getElementById("time_period").value);
    const n = 4;
    const totalAmount = principle * Math.pow((1 | rateofInterest / 100) / n, n * timePeriod);
    const interestEarned = totalAmount - principle;
    document.getElementById("intvestment_am").innerText = `AU${principle.toLocaleString('en-AU')}`;
    document.getElementById("returns").innerText = `${Math.round(rateofInterest)}%`;
    document.getElementById("total_val").innerText = `${Math.round(timePeriod)}`;
    document.getElementById("total_amount").innerText = `${Math.round(interestEarned)}`;

}
