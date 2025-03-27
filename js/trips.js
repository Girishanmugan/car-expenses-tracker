// Get references to form and table body
const tripForm = document.getElementById('tripForm');
const tripTableBody = document.getElementById('tripTableBody');

// Handle form submission
tripForm.addEventListener('submit', (e) => {
  e.preventDefault();

  const tripDate = document.getElementById('tripDate').value;
  const startLocation = document.getElementById('startLocation').value;
  const endLocation = document.getElementById('endLocation').value;
  const distance = document.getElementById('distance').value;
  const fuelUsed = document.getElementById('fuelUsed').value;
  const cost = document.getElementById('cost').value;

  if (tripDate && startLocation && endLocation && distance && fuelUsed && cost) {
    addTrip(tripDate, startLocation, endLocation, distance, fuelUsed, cost);
    tripForm.reset();
  }
});

// Function to add trip to the table
function addTrip(date, start, end, distance, fuelUsed, cost) {
  const row = document.createElement('tr');
  const costPerKm = (cost / distance).toFixed(2);

  row.innerHTML = `
    <td>${date}</td>
    <td>${start}</td>
    <td>${end}</td>
    <td>${distance}</td>
    <td>${fuelUsed}</td>
    <td>$${cost}</td>
    <td>$${costPerKm}</td>
    <td><button class="delete-btn" onclick="deleteTrip(this)">Delete</button></td>
  `;

  tripTableBody.appendChild(row);
}

// Function to delete trip from the table
function deleteTrip(button) {
  button.parentElement.parentElement.remove();
}
