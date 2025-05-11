function insert_Row() {
  const table = document.getElementById("sampleTable");

  const newRow = table.insertRow(0);
  const cell1 = newRow.insertCell(0);
  const cell2 = newRow.insertCell(1);

  cell1.innerHTML = '<div class="double-box">New Cell1</div>';
  cell2.innerHTML = '<div class="double-box">New Cell2</div>';
}
