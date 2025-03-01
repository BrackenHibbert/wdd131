// submission function
export function submitForm(event, participantCount) {
    event.preventDefault();

    let totalFee = totalFees();
    let adultName = document.getElementById('adult_name').value;

    document.querySelector('form').style.display = 'none';

    let summaryElement = document.getElementById('summary');
    summaryElement.innerHTML = successTemplate({
        name: adultName,
        participantCount: participantCount,
        totalFee: totalFee
    });
    summaryElement.style.display = 'block';
}

// calculate fees function
export function totalFees() {
    let feeElements = document.querySelectorAll("[id^=fee]");

    feeElements = [...feeElements];

    let total = 0;
    feeElements.forEach(feeElement => {
        let feeValue = parseFloat(feeElement.value) || 0;
        total += feeValue;
    });

    return total;
}

// success message function
export function successTemplate(info) {
    return `
        <p>Thank you ${info.name} for registering.</p>
        <p>You have registered ${info.participantCount} participants and owe $${info.totalFee} in fees.</p>
    `;
}