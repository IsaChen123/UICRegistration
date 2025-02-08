import "index.html"

function getInputVal(subject) {
    var input = document.getElementById();
    subject = input.value;

}

function checkButton(openSectionsOnly) {
    var clicked = false;
    button.addEventListener('click', function() {
        if (openSectionsOnly == false) {
            openSectionsOnly = true
        }   else {
            openSectionsOnly = false
        }
    });
};

let searchParams = {
    subject: "",
    classTitle: "",
    courseNum: "",
    openSectionsOnly: false,

    // Functions to chnange each object property
    newSubject: function() {
        getInputVal(subject)
    },
    newClassTitle: function() {
        getInputVal(classTitle)
    },
    newCourseNum: function() {
        getInputVal(courseNum)
    },
    newOpenSections: function() {
        
    }
};