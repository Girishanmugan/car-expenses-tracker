// Get references to form and table body
const maintenanceForm = document.getElementById('maintenanceForm');
const maintenanceTableBody = document.getElementById('maintenanceTableBody');

// Handle form submission
maintenanceForm.addEventListener('submit', (e) => {
  e.preventDefault();

  const maintenanceDate = document.getElementById('maintenanceDate').value;
  const maintenanceType = document.getElementById('maintenanceType').value;
  const maintenanceCost = document.getElementById('maintenanceCost').value;

  if (maintenanceDate && maintenanceType && maintenanceCost) {
    addMaintenance(maintenanceDate, maintenanceType, maintenanceCost);
    maintenanceForm.reset();
  }
});

// Function to add maintenance data to the table
function addMaintenance(date, type, cost) {
  const row = document.createElement('tr');

  row.innerHTML = `
    <td>${date}</td>
    <td>${type}</td>
    <td>$${cost}</td>
    <td><button class="delete-btn" onclick="deleteMaintenance(this)">Delete</button></td>
  `;

  maintenanceTableBody.appendChild(row);
}

// Function to delete maintenance data from the table
function deleteMaintenance(button) {
  button.parentElement.parentElement.remove();
}
