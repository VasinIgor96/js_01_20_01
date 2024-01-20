let salary = prompt("Введіть розмір вашої зарплати:");
salary = parseFloat(salary);
if (!isNaN(salary)) {
    salary = parseFloat(salary);
    // премія
    let premium = 0.15 * salary;
    // нарахування
    let accrual = salary + premium;
    // податки
    let taxes = 0.10 * accrual;
    // витрати
    let costs = 190;
    // залишок
    let remainder = accrual - taxes - costs;
    alert ("Залишок від зарплати складає:" + remainder);
} else {
    alert("Будь ласка, введіть коректне числове значення для зарплати!");
}
