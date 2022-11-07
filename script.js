let money = prompt("Ваш бюджет на месяц?", ""),
    time = prompt("Введите дату в формате YYYY-MM-DD", "");
    
let appData = {
    budget: money,
    timeData: time,
    expenses: {
        sum: `${money} : ${time}`
    },
    optionalExpenses: {},
    income: [],
    savings: false
};

let monthExpenses = prompt("Введите обязательную статью расходов в этом месяце", ""),
    howMuch = prompt("Во сколько обойдется?", ""),
    monthExpenses2 = prompt("Введите обязательную статью расходов в этом месяце", ""),
    howMuch2 = prompt("Во сколько обойдется?", "");

alert(appData.budget / 30);