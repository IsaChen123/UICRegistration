// TOGGLE BUTTON

const toggleButton = document.getElementById("darkToggle");

toggleButton.addEventListener("click", () => {
    // Toggle the dark-mode class on the body element
    document.body.classList.toggle("dark-mode");
});

//INTAKE INPUTS FOR SEARCHES

function getInputVal(inputId, propertyName, obj) {
    var input = document.getElementById(inputId).value; // Get the input value by id
    obj[propertyName] = input; // Set the class property using obj and the property name
}

// Class to hold search parameters
class SearchParams {
    constructor() {
        this.subject = "";
        this.classTitle = "";
        this.courseNumber = "";
        this.openSectionsOnly = false;
    }

    // Modifier functions
    newSubject() {
        getInputVal("subject", "subject", this);  // Use `this` to refer to the class instance
    }

    newClassTitle() {
        getInputVal("classTitle", "classTitle", this);
    }

    newCourseNum() {
        getInputVal("courseNumber", "courseNumber", this);
    }

    newOpenSections() {
        // Can implement logic here if needed, for example toggling openSectionsOnly
    }
}

// Event listener for the button to toggle openSectionsOnly state
function checkButton(openSectionsOnly) {
    const button = document.getElementById("myButton"); // Get the button by ID
    button.addEventListener('click', function() {
        openSectionsOnly = !openSectionsOnly;  // Toggle the openSectionsOnly value
        console.log("Open Sections Only: ", openSectionsOnly); // Log the updated value
    });
}

// Example usage of the class
const searchParamsInstance = new SearchParams();

// Call methods to set the search parameters
searchParamsInstance.newSubject();
searchParamsInstance.newClassTitle();
searchParamsInstance.newCourseNum();

// Call checkButton to handle button click event
checkButton(searchParamsInstance.openSectionsOnly);