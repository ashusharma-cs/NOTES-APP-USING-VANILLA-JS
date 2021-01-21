showNotes();

console.log("welcome to notes app");


let addBtn = document.querySelector("#addBtn");

addBtn.addEventListener("click", function (e) {

    let text = document.querySelector("#textarea");

    let notes = localStorage.getItem("notes");
    if (notes == null) {
        notesObj = [];
    }
    else {
        notesObj = JSON.parse(notes);
    }

    notesObj.push(text.value);
    localStorage.setItem("notes", JSON.stringify(notesObj));
    text.value = "";

    showNotes();
})


// A function to show the notes
function showNotes() {
    let notes = localStorage.getItem("notes");
    if (notes == null) {
        notesObj = [];
    }
    else {
        notesObj = JSON.parse(notes);
    }

    let html = "";

    for (let index = 0; index < notesObj.length; index++) {
        const element = notesObj[index];

        html += `
        <div class="scard card mx-2 my-2" style="width: 18rem;">
        <!-- <img src="..." class="card-img-top" alt="..."> -->
        <div class="card-body">
          <h5 class="card-title">NOTE ${index + 1}</h5>
          <p class="card-text">${element}</p>
          <button id="${index}" onclick="deleteNote(this.id)"class="btn btn-danger">DELETE NOTE</a>
        </div>
      </div>
        `;





    }
    let note = document.querySelector("#note");

    if (notesObj.length != 0) {
        note.innerHTML = html;
    }
    else {
        note.innerHTML = `NOTHING TO SHOW RIGHT NOW. USE "ADD NOTE" SECTION TO SAVE NOTES`;
    }
}


// A function to delete particular note

function deleteNote(index) {
    let notes = localStorage.getItem("notes");
    if (notes == null) {
        notesObj = [];
    }
    else {
        notesObj = JSON.parse(notes);
    }

    notesObj.splice(index, 1);

    localStorage.setItem("notes", JSON.stringify(notesObj));


    showNotes();


}


// A function to search 

let sBtn = document.querySelector("#sBtn");

sBtn.addEventListener("input", function () {


    let text = sBtn.value;

    let note = document.querySelector("#note");

    let card = document.getElementsByClassName("scard");

    Array.from(card).forEach(element => {
        let p = element.getElementsByTagName("p")[0].innerText;


        if (p.includes(text)) {
            element.style.display = "block";
        }
        else {
            element.style.display = "none";
        }
    });
})