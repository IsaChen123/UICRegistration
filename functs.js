function on() {
    document.getElementById("overlay").style.display = "block";
    
}

function off () {
    document.getElementById("overlay").style.display = "none";
}

function displayMatchingClasses(){
    done=false;
    while(!done){
        let container=document.createElement("div");
        document.getElementById("tabcontent").appendChild(container);
        let table=document.createElement("table");
        container.appendChild(table);
        let row1=document.createElement("tr");
        table.appendChild(row1);
        let col1=document.createElement("td")
        row1.appendChild(col1);
        let className=document.createElement("p")
        className.textContent=SearchParams.name
        let professorName=document.createElement("p")
        professorName.append()
    }
}