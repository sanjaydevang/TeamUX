function handleEditProfile() {
    // Show edit view first
    document.getElementById("edit-view").style.display = "block";
    document.getElementById("display-view").style.display = "none";

    // Transfer values
    document.getElementById("input-name").value = document.getElementById("name").textContent;
    document.getElementById("input-email").value = document.getElementById("email").textContent;
    document.getElementById("input-dob").value = document.getElementById("dob-display").value;
    document.getElementById("input-interests").value = document.getElementById("interests").textContent;

    // Init datepicker after showing the input
    new Datepicker(document.getElementById('input-dob'), {
        autohide: true,
        format: 'yyyy-mm-dd'
    });
}

function handleUpdateProfile() {
    const updatedName = document.getElementById("input-name").value;
    const updatedEmail = document.getElementById("input-email").value;
    const updatedDOB = document.getElementById("input-dob").value;
    const updatedInterests = document.getElementById("input-interests").value;

    if (!validator.isEmail(updatedEmail)) {
        alert("Please enter a valid email address.");
        return;
    }

    document.getElementById("name").textContent = updatedName;
    document.getElementById("email").textContent = updatedEmail;
    document.getElementById("dob-display").value = updatedDOB;
    document.getElementById("interests").textContent = updatedInterests;

    document.getElementById("edit-view").style.display = "none";
    document.getElementById("display-view").style.display = "block";
}
