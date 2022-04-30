'use strict'

// Select size and color input
const Width = document.querySelector("#inputWidth");
const Height = document.querySelector("#inputHeight");
const Color = document.querySelector("#colorPicker");
const Submit = document.querySelector("#submit");
let table = document.querySelector("#pixelCanvas");

function gridCreator() {
  // width and height values
  let width = Width.value;
  let height = Height.value;
  let rowCell;
  let colCell;

  let rows = document.getElementsByClassName("r-cell");
  // Add color to the table using click event and a
  // function targetting node
  table.addEventListener('click', function(e){
    if(e.target.nodeName === "TD"){
      e.target.style.backgroundColor = Color.value;
     }
   });

  // empty table
  if (rows.length) {
    table.innerHTML= "";
  }

  // row cells
  for(let r = 1; r <= height; r++){
    rowCell = document.createElement('tr');
    rowCell.className = "r-cell";
    table.appendChild(rowCell);
  }

  // column cells
  for(let i = 0; i <= rows.length-1; i++){
        for(let col = 1; col <= width; col++){
        colCell = document.createElement('td');
        rows[i].appendChild(colCell);
        }
    }
}

// call gridCreator() when Submit button is clicked.
Submit.addEventListener('click', function(e){
  e.preventDefault();
  gridCreator();
});