function insert_Row() {
    // Get reference to the table
    const table = document.getElementById("sampleTable");

    // Create a new row and two cells
    const newRow = table.insertRow(0); // Insert at the top
    const newCell1 = newRow.insertCell(0);
    const newCell2 = newRow.insertCell(1);

    // Set the cell values
    newCell1.textContent = "New Cell1";
    newCell2.textContent = "New Cell2";
}
