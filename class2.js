const entry = prompt('Do you want to 1. Deposit money, or 2. Withdraw money?');

let balance = 1000;

if (entry == 1) {
    const amount = Number(prompt('How much would you like to deposit?'));
    alert(`New balance is ${balance + amount}`);
    if (balance + amount >= 0) {
        alert(`You got monnneeeyy`);
    }
}
else if (entry == 2) {
    const amount = Number(prompt('How much would you like to withdraw?'));
    alert(`New balance is ${balance - amount}`);
    if (balance - amount >= 0) {
        alert(`You got monnneeeyy`)
    }
    else if (balance - amount <= 0) {
        alert(`Low funds`)
    }
}
