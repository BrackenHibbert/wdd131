// Step 1
let participantCount = 1;

window.onload = function() {
    participantCount = 1;


// Step 2
// Add an event listnr
    document.getElementById('add').addEventListener('click', function() {
        // Add to the count for particpants
        participantCount++;

        // copy the participant section
        let participantSection = document.querySelector('.participant1').cloneNode(true);

        // change the copies name and ids
        participantSection.className = 'participant' + participantCount;
        let inputs = participantSection.querySelectorAll('input');
        inputs.forEach(input => {
            let newId = input.id + participantCount;
            input.id = newId;
            input.name = newId;
            input.value = '';
        });

        // update the title for the new participant section
        let participantTitle = participantSection.querySelector('p');
        participantTitle.textContent = 'Participant ' + participantCount;

        // Add section to form
        let fieldset = document.querySelector('.participants');
        fieldset.insertBefore(participantSection, document.getElementById('add'));
    });

    document.querySelector('form').addEventListener('submit', submitForm);
}

// submission function
function submitForm(event) {
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
function totalFees() {
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
function successTemplate(info) {
    return `
        <p>Thank you ${info.name} for registering.</p>
        <p>You have registered ${info.participantCount} participants and owe $${info.totalFee} in fees.</p>
    `;
}