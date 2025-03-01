import{submitForm, totalFees, successTemplate} from './Templates.js';

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