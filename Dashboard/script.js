// Function to show only the selected section
function showSection(sectionId) {
    // Hide all sections
    document.getElementById('form-section').style.display = 'none';
    document.getElementById('view-section').style.display = 'none';
    document.getElementById('suggestion-section').style.display = 'none';
    document.getElementById('feedback-section').style.display = 'none';

    // Show the selected section
    document.getElementById(sectionId).style.display = 'block';
}

// Event listeners for navigation buttons
document.getElementById('enterDataButton').addEventListener('click', function () {
    showSection('form-section');
});

document.getElementById('viewDataButton').addEventListener('click', function () {
    showSection('view-section');
});

document.getElementById('suggestionsButton').addEventListener('click', function () {
    showSection('suggestion-section');
});

document.getElementById('feedbackButton').addEventListener('click', function () {
    showSection('feedback-section');
});

// Show the form section by default on page load
window.onload = function () {
    showSection('form-section');
};

// Event listener for Logout button
document.querySelector('.logout-button').addEventListener('click', function () {
    window.location.href = 'login.html';
});

// Prevent default form submission behavior
document.getElementById('applianceForm').addEventListener('submit', function (event) {
    event.preventDefault();
    validateFormInputs();
});

// Function to validate form inputs and display error messages
function validateFormInputs() {
    let isFormValid = true;

    // Clear all previous error messages
    clearPopups();

    // Get the form inputs
    const applianceType = document.getElementById('applianceType');
    const model = document.getElementById('model');
    const usageDuration = document.getElementById('usageDuration');

    // Check if Appliance Type is selected
    if (applianceType.value.trim() === '') {
        showErrorPopup(applianceType, 'Please select an appliance type.');
        isFormValid = false;
    }

    // Check if Model is selected
    if (model.value.trim() === '') {
        showErrorPopup(model, 'Please select a model.');
        isFormValid = false;
    }

    // Check if Usage Duration is filled
    if (usageDuration.value.trim() === '') {
        showErrorPopup(usageDuration, 'Please enter usage duration.');
        isFormValid = false;
    }

    // If the form is valid, show success popup
    if (isFormValid) {
        showSuccessPopup();
    }
}

// Function to show error message below the input field
function showErrorPopup(input, message) {
    const parent = input.closest('.form-group');
    let errorPopup = parent.querySelector('.popup-message.error');

    // If an error popup already exists, update its message; otherwise, create a new one
    if (!errorPopup) {
        errorPopup = document.createElement('div');
        errorPopup.className = 'popup-message error';
        parent.appendChild(errorPopup);
    }

    // Set the message for the error popup
    errorPopup.textContent = message;

    // Add event listener to remove error message when the user starts typing
    input.addEventListener('input', function () {
        clearError(input);
    });
}

// Function to clear all pop-ups
function clearPopups() {
    document.querySelectorAll('.popup-message.error').forEach(popup => popup.remove());
}

// Function to clear error message for a specific field
function clearError(input) {
    const parent = input.closest('.form-group');
    const errorPopup = parent.querySelector('.popup-message.error');
    if (errorPopup) {
        errorPopup.remove();
    }
}

// Function to show success message (only triggered after form is valid and submit is clicked)
function showSuccessPopup() {
    const successPopup = document.querySelector('.popup-message.success');
    if (!successPopup) {
        const newSuccessPopup = document.createElement('div');
        newSuccessPopup.className = 'popup-message success';
        newSuccessPopup.textContent = 'Data submitted successfully!';
        
        // Append the success message to the form
        document.getElementById('applianceForm').appendChild(newSuccessPopup);
        
        // Remove success message after a few seconds
        setTimeout(() => {
            newSuccessPopup.remove();
        }, 3000);
    }
}

// Function to handle feedback form submission and validation
document.getElementById('feedbackForm').addEventListener('submit', function (event) {
    event.preventDefault();

    // Get form values
    const name = document.getElementById('feedbackName').value.trim();
    const email = document.getElementById('feedbackEmail').value.trim();
    const message = document.getElementById('feedbackMessage').value.trim();

    // Validate form inputs
    let isValid = validateFeedbackForm(name, email, message);

    // If validation passes, show the success message
    if (isValid) {
        showFeedbackSuccessMessage();
    }
});

// Function to validate feedback form inputs
function validateFeedbackForm(name, email, message) {
    let isValid = true;

    // Clear previous error messages
    clearErrorMessages();

    // Validate name
    if (!name) {
        showError('nameError', 'Please enter your name.');
        isValid = false;
    }

    // Validate email
    if (!email) {
        showError('emailError', 'Please enter your email.');
        isValid = false;
    } else if (!email.endsWith('@gmail.com')) {
        showError('emailError', 'Please enter a valid email ending with @gmail.com.');
        isValid = false;
    }

    // Validate message
    if (!message) {
        showError('messageError', 'Please enter your message.');
        isValid = false;
    }

    return isValid;
}

// Function to show error message for feedback form
function showError(elementId, message) {
    const errorElement = document.getElementById(elementId);
    errorElement.textContent = message;
    errorElement.style.display = 'block';
}

// Function to clear all error messages in feedback form
function clearErrorMessages() {
    document.querySelectorAll('.error-message').forEach(function (element) {
        element.textContent = '';
        element.style.display = 'none';
    });
}

// Function to display feedback success message
function showFeedbackSuccessMessage() {
    const feedbackContainer = document.querySelector('.feedback-form-container');
    feedbackContainer.innerHTML = `
        <div class="feedback-success">
            <img src="check-fill.svg" alt="check" class="check" height="100px">
            <h2>Feedback Submitted Successfully!</h2>
            <p>Thank you for your valuable feedback. We appreciate your effort to help us improve!</p>
        </div>
    `;
    feedbackContainer.classList.add('fade-in-success');
}

// Appliance Type and Model Dropdown Logic
document.addEventListener("DOMContentLoaded", function () {
    const applianceTypeSelect = document.getElementById("applianceType");
    const modelSelect = document.getElementById("model");

    // Models for each appliance type
    const models = {
        "Air Conditioner": ["GIC 18ETC5-WTA 1.5 Ton", "GSC 12NTC3-WTA 1 Ton", "GWC 18UTC4-WRA 1.5 Ton", "GIC 24INV5-WTA 2 Ton", "GPD 12PRO3-WTA"],
        "Refrigerator": ["RD Edge Pro 190L", "Eon Valor Frost Free 255L", "Edge Pro Bottom Freezer 320L", "NXW Aura Side-by-Side 550L", "Eon Side-by-Side 605L"],
        "Washing Machine": ["Godrej WT EON 650 PHU 6.5 kg", "Godrej WF EON 600 PAW 6 kg", "Godrej WS 850 PFD 8.5 kg", "Godrej WS 800 PD 8 kg", "Godrej WT EON 750 PFD 7.5 kg"],
        "Desert Air Cooler": ["Godrej Desert Air Cooler 30L", "Godrej Desert Air Cooler 45L", "Godrej Desert Air Cooler 50L", "Godrej Desert Air Cooler 55L", "Godrej Desert Air Cooler 65L"]
    };

    // Function to populate models based on the selected appliance type
    function populateModels(applianceType) {
        modelSelect.innerHTML = ""; // Clear existing options
        const defaultOption = document.createElement("option");
        defaultOption.value = "";
        defaultOption.textContent = "Select a model";
        modelSelect.appendChild(defaultOption);

        if (applianceType in models) {
            models[applianceType].forEach(function (model) {
                const option = document.createElement("option");
                option.value = model;
                option.textContent = model;
                modelSelect.appendChild(option);
            });
        }
    }

    // Event listener for appliance type change
    applianceTypeSelect.addEventListener("change", function () {
        const selectedApplianceType = applianceTypeSelect.value;
        populateModels(selectedApplianceType);
    });

    // Initial population of models
    populateModels(applianceTypeSelect.value);
});



// Get the modal container and image elements
const modalContainer = document.getElementById('modal-container');
const modalImage = document.getElementById('modal-image');

// Add an event listener to the view report button
document.getElementById('viewReportButton').addEventListener('click', function () {
    // Set the modal image source to the report image
    modalImage.src = 'Sample_Report.jpg';
    
    // Show the modal container
    modalContainer.style.display = 'block';

    // Hide the navbar
    document.querySelector('.navbar').classList.add('hidden');
});

// Add an event listener to the close modal button
document.getElementById('close-modal').addEventListener('click', function () {
    // Hide the modal container
    modalContainer.style.display = 'none';

    // Show the navbar
    document.querySelector('.navbar').classList.remove('hidden');
});

// Add an event listener to the download modal button
document.getElementById('download-modal').addEventListener('click', function () {
    // Download the image
    const link = document.createElement('a');
    link.href = modalImage.src;
    link.download = 'Sample_Report.jpg';
    link.click();
});