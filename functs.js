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