// Get references to form and table body
const fuelForm = document.getElementById('fuelForm');
const fuelTableBody = document.getElementById('fuelTableBody');

// Handle form submission
fuelForm.addEventListener('submit', (e) => {
  e.preventDefault();

  const fuelDate = document.getElementById('fuelDate').value;
  const fuelLiters = document.getElementById('fuelLiters').value;
  const fuelCost = document.getElementById('fuelCost').value;

  if (fuelDate && fuelLiters && fuelCost) {
    addFuel(fuelDate, fuelLiters, fuelCost);
    fuelForm.reset();
  }
});

// Function to add fuel data to the table
function addFuel(date, liters, cost) {
  const row = document.createElement('tr');
  const costPerLiter = (cost / liters).toFixed(2);

  row.innerHTML = `
    <td>${date}</td>
    <td>${liters}</td>
    <td>$${cost}</td>
    <td>$${costPerLiter}</td>
    <td><button class="delete-btn" onclick="deleteFuel(this)">Delete</button></td>
  `;

  fuelTableBody.appendChild(row);
}

// Function to delete fuel data from the table
function deleteFuel(button) {
  button.parentElement.parentElement.remove();
}
