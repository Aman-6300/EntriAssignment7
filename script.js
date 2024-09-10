
function calculateSum() {
    let number = parseInt(document.getElementById("numberInput").value);

    if (isNaN(number) || number < 0 || number > 1000000) {
        document.getElementById("result").textContent = "Invalid number";
    } else {
        let sum = 0;
        for (let i = 1; i <= number; i++) {
            sum += i;
        }

        document.getElementById("result").textContent = `Sum of numbers up to ${number} is ${sum}`;
    }
}
