// Get references to form and table body
const expenseForm = document.getElementById('expenseForm');
const expenseTableBody = document.getElementById('expenseTableBody');

// Handle form submission
expenseForm.addEventListener('submit', (e) => {
  e.preventDefault();

  const date = document.getElementById('date').value;
  const category = document.getElementById('category').value;
  const amount = document.getElementById('amount').value;
  const notes = document.getElementById('notes').value;

  if (date && category && amount) {
    addExpense(date, category, amount, notes);
    expenseForm.reset();
  }
});

// Function to add expense to the table
function addExpense(date, category, amount, notes) {
  const row = document.createElement('tr');
  row.innerHTML = `
    <td>${date}</td>
    <td>${category}</td>
    <td>$${amount}</td>
    <td>${notes || 'N/A'}</td>
    <td><button class="delete-btn" onclick="deleteExpense(this)">Delete</button></td>
  `;
  expenseTableBody.appendChild(row);
}

// Function to delete expense from the table
function deleteExpense(button) {
  button.parentElement.parentElement.remove();
}
