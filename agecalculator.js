function calculateAge() {
    const today = new Date();
    const birthdateInput = document.getElementById("birthdate").value;
    const birthdatePart = birthdateInput.split("-");
    const birthDay = birthdatePart[0];
    const birthMonth = birthdatePart[1] - 1;
    const birthYear = birthdatePart[2];
    const birthDate = new Date(birthYear, birthMonth, birthDay);
    console.log(birthDate);
    const isValidDate = (date) => {
        return (
            Object.prototype.toString.call(date) === "[object Date]" && !isNaN(date)

        );
    };

    if (!isValidDate(birthDate)) {
        alert("Please enter the valid birthdate (DD-MM-YYYY)")
        return;
    }
    const ageInMilliseconds = today - birthDate;
    const ageInseconds = Math.floor(ageInMilliseconds / 1000);
    const ageInMinutes = Math.floor(ageInseconds / 60);
    const ageInHours = Math.floor(ageInMinutes / 60);
    const ageInDays = Math.floor(ageInHours / 24);
    const ageInWeeks = Math.floor(ageInDays / 7);
    const ageInMonths = Math.floor(ageInDays / 30.4368);
    const ageInYears = Math.floor(ageInDays / 365.25);
    const resultContainer = document.getElementById("youragecalculator");
    const result = document.getElementById("result");
    result.innerHTML = `
    
        <div class ="result-item">
    <h3>Age: ${ageInYears}</h3>
    <p>Years:${ageInYears}</p>
    <p>Months:${ageInMonths}</p>
    <p>week:${ageInWeeks}</p>
    <p>Days:${ageInDays}</p>
    <p>Hours:${ageInHours}</p>
    <p>Minutes:${ageInMinutes}</p>
    <p>Seconds:${ageInseconds}</p>

    </div>
    `

}
const ageCalculator = document.getElementById("agecalculator");
ageCalculator.addEventListener("submit", (e) => {
    e.preventDefault();
    calculateAge();
})



