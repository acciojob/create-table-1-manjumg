let rowCounter = 3; // Start from 3 since two rows already exist

function insert_Row() {
    const table = document.getElementById("sampleTable");

    const newRow = table.insertRow(0);
    const cell1 = newRow.insertCell(0);
    const cell2 = newRow.insertCell(1);

    const rowName = `Row ${rowCounter++}`;

    cell1.innerHTML = `<div class="double-box">${rowName}</div>`;
    cell2.innerHTML = `<div class="double-box">${rowName}</div>`;
}
