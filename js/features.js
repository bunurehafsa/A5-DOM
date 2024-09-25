document.getElementById('show-donation-page')
    .addEventListener('click', function () {
        showSectionById('donation-page');
        document.getElementById('show-donation-page').style.background='#B4F461';
    });

document.getElementById('show-history-page')
    .addEventListener('click', function () {
        document.getElementById('show-history-page').style.background='#B4F461';

        showSectionById('history-section');
        const now = new Date();
            const formattedTime = now.toLocaleString(); // Format time as a readable string

            // Update the donation history
            const historyList = document.getElementById('historyList');
            const newHistoryItem = document.createElement('li');
            newHistoryItem.textContent = `Donated ${donationAmount} BDT on ${formattedTime}`;
            historyList.appendChild(newHistoryItem);
        

    });
