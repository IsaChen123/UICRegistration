function on() {
    document.getElementById("overlay").style.display = "block";
    
}

function off () {
    document.getElementById("overlay").style.display = "none";
}

function displayMatchingClasses(){
    done=0;
    while(done!=3){
        // let container=document.createElement("div");
        // document.getElementById("tabcontent").appendChild(container);
        // let table=document.createElement("table");
        // container.appendChild(table);
        // let row1=document.createElement("tr");
        // table.appendChild(row1);
        // let col1=document.createElement("td")
        // row1.appendChild(col1);
        // let className=document.createElement("p")
        // className.textContent=SearchParams.name
        // let professorName=document.createElement("p")
        // professorName.append()
        // done++
        const fragment = document.createDocumentFragment(); // Create a virtual container

        const div = document.createElement("div");
        div.className = "LectureInfo";

        const table = document.createElement("table");
        const row1 = document.createElement("tr");
        const cell1 = document.createElement("td");

        const className = document.createElement("p");
        className.id = "className";
        className.textContent = "CS 412";

        const instructor = document.createElement("p");
        instructor.textContent = "Saha, Aadirupa";
        instructor.style.cursor = "pointer";
        instructor.onclick = function () { on(); };

        // Append elements to each other before adding to the real DOM
        cell1.appendChild(className);
        cell1.appendChild(instructor);
        row1.appendChild(cell1);
        table.appendChild(row1);
        div.appendChild(table);

        fragment.appendChild(div); // Add everything to the fragment
        document.body.appendChild(fragment); // Append all at once
    }

}

function toggleSchedulePanel() {
    var x = document.getElementById("schedule-panel");
    var currentDisplay = window.getComputedStyle(x).display;

    x.style.display = (currentDisplay === "none") ? "inline-block" : "none";
}

function toggleSummaryPanel() {
    var x = document.getElementById("summary-panel");
    var currentDisplay = window.getComputedStyle(x).display;

    x.style.display = (currentDisplay === "none") ? "inline-block" : "none";
}

// function closeSchedulePanel(){
//     document.getElementById("schedule-panel").style.display = "none";
    
// }

// function openSummaryPanel(){
//     if()
//     document.getElementById("summary-panel").style.display = "inline-block";
    
// }

// function closeSummaryPanel(){
//     document.getElementById("summary-panel").style.display = "none";
    
// }


function toggleText(element){
    if (window.getComputedStyle(element).display === "block")
        element.style.display="none";
    else
        element.style.display="block";
}

function toggleDisplay(element){
    if (window.getComputedStyle(element).display === "flex")
        element.style.display="none";
    else
        element.style.display="flex";
}

function toggleDropdown(element){
    [...element.parentNode.parentNode.parentNode.querySelectorAll(".linked-card")].forEach(e => toggleDisplay(e));
    [...element.parentNode.parentNode.parentNode.querySelectorAll(".linked-text")].forEach(e => toggleText(e));
}