const sliders = document.querySelectorAll("input[name='range'");
sliders.forEach(function (slider) {
    slider.addEvenlistener("input", calculateTip)
})

const billInput = document.getElementById("total_bill_amount");
billInput.addEventListener("change", calculateTip);

function calculateTip() {
    let bill = parseFloat(billInput.value);

    if (!bill) {
        alert("please enter the bill amount");
        return
    }
    let tippercent = document.getElementById("tip").value;
    let noOfPeople = document.getElementById("no_of_people").value;

    billInput.value = bill;
    let total_tip = parseFloat((tippercent / 100) * bill).toFixed(2)
    let total = parseFloat(bill + total_tip).toFixed(2);
    let tipperPerson = parseFloat(total_tip / noOfPeople).toFixed(2);
    let totalPerson = parseFloat(total / noOfPeople).toFixed(2);
    document.getElementById("total_person").textContent = totalPerson;
    document.getElementById("tip_person").textContent = tipperPerson;

}