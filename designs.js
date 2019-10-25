/**
 * @description Add <tr></tr> and <td></td> elements
 */
function makeGrid() {
  // get table element
  const TABLE = document.getElementById("pixelCanvas");
  // clear existing <tr> and <td> elements
  TABLE.innerHTML = "";
  // get number of desired row
  let rows = document.getElementById("inputHeight").value;
  // get number of desired columns
  let cols = document.getElementById("inputWidth").value;
  let tableData = "";
  // iterate over and build rows
  for (let i = 0; i < rows; i++) {
    tableData += "<tr>";
    // iterate and build over columns
    for (let x = 0; x < cols; x++) {
      tableData += "<td></td>";
    }
    tableData += "</tr>";
  }
  // add all rows and colmn to html
  TABLE.innerHTML = tableData;
  // call addEventForID function
  AddEventForID();
}
/**
 * @description Add eventListner for all table's cells and assign value of color to it
 */
function AddEventForID() {
  const TDS = document.getElementsByTagName("td");
  for (let i = 0; i < TDS.length; i++) {
    // TODO: add event listener
    TDS[i].addEventListener("click", function(event) {
      // TODO: Get the selected cell
      let currentTD = event.target;
      // TODO: Assign value of the color
      currentTD.style.backgroundColor = document.getElementById(
        "colorPicker"
      ).value;
    });
  }
}
