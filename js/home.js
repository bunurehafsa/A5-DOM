const myBalance = document.getElementById('current-balance').innerText;
const myBalanceNumber = parseFloat(myBalance);
console.log(myBalanceNumber);
// Donate Noakhali
document.getElementById('btn-donation-noakhali').addEventListener('click', function (event) {
    event.preventDefault();

    const donateForNoakhali = getInputFieldValueById('donation-amount-noakhali');
    const noakhaliBalance = getTextFieldValueById('noakhali-balance');
    
    if (isNaN(donateForNoakhali) || donateForNoakhali <= 0) {
        alert('Invalid donation amount');
        return;
    };
    if (donateForNoakhali > myBalanceNumber) {
        alert('You do not have sufficient balance');
        return;
    }
    const newNoakhaliBalance = donateForNoakhali + noakhaliBalance;
    document.getElementById('noakhali-balance').innerText = newNoakhaliBalance;

    const newCurrentBalance = myBalanceNumber - donateForNoakhali;
    document.getElementById('current-balance').innerText=newCurrentBalance;

    const p = document.createElement('p');
    p.innerText = ` ${donateForNoakhali} Tk. is donated for Flood at Noakhali, Bangladesh`;
    console.log(p); 

    document.getElementById('history-container').appendChild(p);

});
//Donate Feni

document.getElementById('btn-donate-feni').addEventListener('click', function (event) {
    event.preventDefault();

    const donateForNoakhali = getInputFieldValueById('donate-amount-feni');
    const noakhaliBalance = getTextFieldValueById('feni-balance');
    
    if (isNaN(donateForNoakhali) || donateForNoakhali <= 0) {
        alert('Invalid donation amount');
        return;
    };
    if (donateForNoakhali > myBalanceNumber) {
        alert('You do not have sufficient balance');
        return;
    }
    const newNoakhaliBalance = donateForNoakhali + noakhaliBalance;
    document.getElementById('feni-balance').innerText = newNoakhaliBalance;

    const newCurrentBalance = myBalanceNumber - donateForNoakhali;
    document.getElementById('current-balance').innerText=newCurrentBalance;

    const p = document.createElement('p');
    p.innerText = ` ${donateForNoakhali} Tk. is donated for Flood at Noakhali, Bangladesh`;

    document.getElementById('history-container').appendChild(p);

});
//Donate quota movement
document.getElementById('btn-donate-quota-movement').addEventListener('click', function (event) {
    event.preventDefault();

    const donateForNoakhali = getInputFieldValueById('donate-amount-quota-movement');
    const noakhaliBalance = getTextFieldValueById('quota-movement-balance');
    
    if (isNaN(donateForNoakhali) || donateForNoakhali <= 0) {
        alert('Invalid donation amount');
        return;
    };
    if (donateForNoakhali > myBalanceNumber) {
        alert('You do not have sufficient balance');
        return;
    }
    const newNoakhaliBalance = donateForNoakhali + noakhaliBalance;
    document.getElementById('quota-movement-balance').innerText = newNoakhaliBalance;

    const newCurrentBalance = myBalanceNumber - donateForNoakhali;
    document.getElementById('current-balance').innerText=newCurrentBalance;

    const p = document.createElement('p');
    p.innerText = ` ${donateForNoakhali} Tk. is donated for Flood at Noakhali, Bangladesh`;

    document.getElementById('history-container').appendChild(p);

});