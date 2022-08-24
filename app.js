let body = document.getElementsByTagName("body");

let notepad = document.querySelector(".note");

let addNote = document.getElementById("addNote");

let noteSpace = document.getElementById("noteSpace");

let clearStorage = document.getElementById("clearStorage");

clearStorage.addEventListener("click", clearShit);

/* window.setInterval("refresh()", 1000);

function refresh() {
  window.location.reload();
} */

function clearShit() {
  localStorage.clear();
}

addNote.addEventListener("click", noteFactory);

let arrayOfNotes = [];
let arrayOfTextAreaValues = [];

let copyNote;

let count = 0;
let notes;

let deletePressed = false;

//localStorage.clear();

function noteFactory() {
  let note = document.createElement("div");
  note.id = "note" + count;

  arrayOfTextAreaValues.push("");

  /* console.log(note.id);

  console.log(document.getElementById("addNote"));

  document.getElementById(note.id).addEventListener("keyup", notepadValues2);

  function notepadValues2(e) {
    console.log(e);
  } */

  note.classList.add("note");
  let header = document.createElement("div");
  header.classList.add("header");
  let penNpaper = document.createElement("i");
  penNpaper.classList.add("fa-solid");
  penNpaper.classList.add("fa-pen-to-square");
  let trash = document.createElement("i");
  trash.classList.add("fa-solid");
  trash.classList.add("fa-trash-can");
  let whitePaper = document.createElement("textarea");
  whitePaper.classList.add("whitePaper");

  note.append(header);
  header.append(penNpaper);
  header.append(trash);
  note.append(whitePaper);

  body[0].append(note);

  let noteString = String("note" + count);

  //console.log(document.getElementById(noteString));

  document.getElementById(noteString).addEventListener("keyup", notepadValues2);
  document
    .getElementById(noteString)
    .firstElementChild.lastElementChild.addEventListener("click", deleteNote);
  console.log(
    document
      .getElementById(noteString)
      .firstElementChild.firstElementChild.addEventListener(
        "click",
        disableTextarea
      )
  );
  //document.getElementById(noteString).addEventListener("click", deleteNote);

  let currentNode;

  arrayOfNotes.push(note.outerHTML);

  // console.log(arrayOfNotes.length);

  localStorage.setItem("count", count);

  console.log(count);

  console.log(localStorage.getItem("count", count));

  // body[0].addEventListener("keyup", notepadValues);

  /* function notepadValues(e) {
    //console.log(e.path[1].lastElementChild.value);
    //arrayOfTextAreaValues.push(e.path[1].lastElementChild.value);
    //console.log(arrayOfTextAreaValues);

    localStorage.setItem("textareaValues", arrayOfTextAreaValues);
  } */
  count++;
}

let index;

let filteredArray = [];

function disableTextarea(e) {
  console.log(e);
  if (e.path[2].lastElementChild.disabled == false) {
    e.path[2].lastElementChild.disabled = true;
  } else if (e.path[2].lastElementChild.disabled == true) {
    e.path[2].lastElementChild.disabled = false;
  }
}

function deleteNote(e) {
  console.log(e.path[2].id[e.path[2].id.length - 1]);
  e.path[2].remove();

  index = arrayOfNotes.findIndex((element) => element.includes(e.path[2].id));

  console.log(index);

  arrayOfNotes.splice(index, 1);
  arrayOfTextAreaValues.splice(index, 1);

  filteredArray = arrayOfTextAreaValues.filter((e) => e);

  console.log(filteredArray);

  arrayOfTextAreaValues = filteredArray;

  console.log(arrayOfTextAreaValues);

  //console.log(arrayOfNotes);
  localStorage.setItem("notes", arrayOfNotes);
  localStorage.setItem("textareaValues", arrayOfTextAreaValues);

  console.log(arrayOfNotes);

  /* if (arrayOfNotes.length == 0) {
    localStorage.clear();
  } */
  deletePressed = true;

  refresh();

  function refresh() {
    window.location.reload();
  }
}

//localStorage.clear();

function notepadValues2(e) {
  /* console.log(e.path[1].id.length);
  console.log(e.path[1].id[e.path[1].id.length - 1]);
  console.log(e.path[0].value); */

  console.log(e.path[1].id);

  console.log(
    (index = arrayOfNotes.findIndex((element) =>
      element.includes(e.path[1].id)
    ))
  );

  arrayOfTextAreaValues.splice(index, 1, e.path[0].value);

  console.log(arrayOfTextAreaValues);

  /* console.log(arrayOfTextAreaValues); */

  localStorage.setItem("notes", arrayOfNotes);

  /*   console.log(arrayOfNotes); */

  localStorage.setItem("textareaValues", arrayOfTextAreaValues);
}

window.addEventListener("load", savedElements);

//let noteString = String("note" + count);

let arrayOfOuterHTML = [];
let arrayOfTextValues = [];

function savedElements() {
  if (localStorage.getItem("notes") != null) {
    arrayOfOuterHTML = localStorage.getItem("notes").split(",");

    arrayOfNotes = arrayOfOuterHTML;

    /*  console.log(arrayOfOuterHTML); */

    if (localStorage.getItem("textareaValues") != null) {
      arrayOfTextValues = localStorage.getItem("textareaValues").split(",");

      arrayOfTextAreaValues = arrayOfTextValues;
    }
  }

  //localStorage.clear();

  if (localStorage.getItem("count") != null) {
    count = parseInt(localStorage.getItem("count")) + 1;
  }

  //console.log(count);

  for (let i = 0; i < arrayOfOuterHTML.length; i++) {
    let newNote = document.createElement("div");
    body[0].appendChild(newNote);

    newNote.innerHTML = arrayOfOuterHTML[i];

    //console.log(newNote.firstElementChild);

    if (newNote.firstElementChild != null) {
      document
        .getElementById(newNote.firstElementChild.id)
        .addEventListener("keyup", notepadValues2);

      newNote.firstElementChild.firstElementChild.lastElementChild.addEventListener(
        "click",
        deleteNote
      );

      newNote.lastElementChild.lastElementChild.value = arrayOfTextValues[i];
    }

    console.log(deletePressed);

    if (newNote.firstElementChild != null) {
      if (
        newNote.lastElementChild.lastElementChild.value != "" &&
        deletePressed == false
      ) {
        newNote.lastElementChild.lastElementChild.disabled = true;
      } else if (deletePressed == true) {
        newNote.lastElementChild.lastElementChild.disabled = false;
      }
    }

    if (newNote.firstElementChild != null) {
      newNote.firstElementChild.firstElementChild.firstElementChild.addEventListener(
        "click",
        disableTextarea
      );
    }

    //document.getElementById(newNote.).addEventListener("click")

    //console.log(newNote.lastElementChild.lastElementChild.value);
  }

  //localStorage.clear();

  deletePressed = false;
}

/* function anotherNote(event) {
  event.preventDefault();
  let note = document.createElement("div");
  note.classList.add("note");
  let header = document.createElement("div");
  header.classList.add("header");
  let penNpaper = document.createElement("i");
  penNpaper.classList.add("fa-solid");
  penNpaper.classList.add("fa-pen-to-square");
  let trash = document.createElement("i");
  trash.classList.add("fa-solid");
  trash.classList.add("fa-trash-can");

  let whitePaper = document.createElement("textarea");
  whitePaper.classList.add("whitePaper");

  note.append(header);
  header.append(penNpaper);
  header.append(trash);
  note.append(whitePaper);

  body[0].append(note);

  arrayOfNotes.push(note);

  console.log(arrayOfNotes[0]);
  console.log(arrayOfNotes[0].outerHTML);
  console.log(arrayOfNotes);

  for (let i = 0; i < arrayOfNotes.length; i++) {
    arrayOfOuterHTML.push(arrayOfNotes[i].outerHTML);
  }

  console.log(arrayOfOuterHTML);

  localStorage.setItem("notes", arrayOfNotes); */

//console.log(arrayOfNotes[0].lastElementChild.value);

/* for (let i = 0; i < arrayOfNotes.length; i++) {
    arrayOfNotes[i].firstElementChild.lastElementChild.addEventListener(
      "click",
      removeNote
    );
    arrayOfNotes[i].firstElementChild.firstElementChild.addEventListener(
      "click",
      disableTextarea
    );
    arrayOfNotes[i].lastElementChild.addEventListener("keyup", notepadValues);
  } */

//function notepadValues(e) {
/* let allNotes = document.querySelectorAll(".note");
    console.log(allNotes);
 */
/*  console.log(e.path[1]);
    console.log(e.path[1].lastElementChild.value); */
//localStorage.setItem("textareaValue", e.path[1].lastElementChild.value);
//localStorage.setItem("notepadValue", e.path[1].outerHTML);
/* let div = document.createElement("div");
    body[0].append(div); */
//e.path[0].value = localStorage.getItem("notepadValue");

/* function removeNote(e) {
    e.path[2].remove();
  }

  function disableTextarea(e) {
    if (e.path[2].lastElementChild.disabled == false) {
      e.path[2].lastElementChild.disabled = true;
    } else if (e.path[2].lastElementChild.disabled == true) {
      e.path[2].lastElementChild.disabled = false;
    }
  } */

/* console.log("Is this still clicking");
  clone = notepadVariable.cloneNode(true);

  arrayOfClones.push(clone);

  console.log(arrayOfClones);

  clone.lastElementChild.value = "";

  notepadVariable.after(clone);
  notepadVariable = clone;

  for (let i = 0; i < arrayOfClones.length; i++) {
    arrayOfClones[i].firstElementChild.lastElementChild.addEventListener(
      "click",
      removeNote
    );
  }

  function removeNote(e) {
    e.path[2].remove();
  } */
//count++;

//window.addEventListener("load", savedElements);

/*function savedElements() {
  let newNote = document.createElement("div");
  body[0].appendChild(newNote);

  notes = localStorage.getItem("notes");

  console.log(notes);

  //console.log(localStorage.getItem("notepadValue"));

  //console.log(localStorage.getItem("notes"));

  //noteSpace.outerHTML = localStorage.getItem("notes");

  //body[0].outerHTML = note;

  /* console.log(copyNote);
  console.log(arrayOfNotes); 
}*/
