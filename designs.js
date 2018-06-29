$(document).ready(function(){
const theGrid = '#pixelCanvas';
// Set target ID to variable.

const row = '<tr></tr>';
// Set row elements to variable.

const cell = '<td></td>';
// Set cell elements to variable.


function makeGrid (event) {
// The makeGrid function takes the parameter event.

  event.preventDefault();
  // Prevent auto-refresh from deleting grid.

  $(theGrid).empty();
  // Clear the grid on submit, if there is one.

  let gridHeight = $('#inputHeight').val();
  // Get the input value of  gridHeight.

  let gridWidth = $('#inputWidth').val();
  // Get the input value of gridWidth.

  for (let m = 0; m < gridHeight; m++) {
  // Outer loop defined by gridHeight.

    $(theGrid).append(row);
    // Append a row to the table m times.

    for (let n = 0; n < gridWidth; n++) {
    // Inner loop defined by gridWidth.

      $('tr').last().append(cell);
      // Append n cells to the last row m times.
    }
  }
}

function pickedColor () {
  let color = $('#colorPicker').val();
  // Grab the input color each time, in case it's changed.

  $(this).css('background-color', color);
  // Set this cell's background to the input color.
}

$('#sizePicker').submit(makeGrid); // When the sizePicker form is submitted, run the makeGrid function.
$(theGrid).on('click', 'td', pickedColor); // When the table is clicked on, run the pickedColor function on the target cell.

});