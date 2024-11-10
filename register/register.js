let participantCount = 1;

document.getElementById("add-participant-btn").addEventListener("click", function() {
    participantCount++;
    let participantHTML = participantTemplate(participantCount);
    document.querySelector("#participants").insertAdjacentHTML("beforebegin", participantHTML);
});

function participantTemplate(count) {
    return `
        <section class="participant${count}">
            <label for="name${count}">Participant ${count} Name:</label>
            <input type="text" id="name${count}" name="name${count}" placeholder="Enter participant name" required>
            <label for="fee${count}">Fee:</label>
            <input type="number" id="fee${count}" name="fee${count}" placeholder="Enter fee for participant" required>
        </section>
    `;
}

document.getElementById("registration-form").addEventListener("submit", submitForm);

function submitForm(event) {
    event.preventDefault();

    let totalFees = calculateTotalFees();
    let name = document.getElementById("name1").value;
    let info = {
        name: name,
        numParticipants: participantCount,
        totalFees: totalFees
    };

    document.querySelector("form").style.display = "none";
    document.getElementById("summary").classList.remove("hide");
    document.getElementById("summary").innerHTML = successTemplate(info);
}

function calculateTotalFees() {
    let feeElements = [...document.querySelectorAll("[id^='fee']")];
    return feeElements.reduce((total, feeElement) => total + parseFloat(feeElement.value || 0), 0);
}

function successTemplate(info) {
    return `
        <h2>Thank you ${info.name} for registering!</h2>
        <p>You have registered ${info.numParticipants} participants and owe $${info.totalFees} in fees.</p>
    `;
}
