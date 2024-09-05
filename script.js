// Select DOM elements
const addUserBtn = document.querySelector("#addUser");
const employeeCountElem = document.getElementById("employeeCount");
const errorMsgElem = document.getElementById("error-msg");

// Initialize employee data
let employeeCount = 0;
let employees = [];

// Update employee count display initially
updateEmployeeCount();

// Event listener for the "Add User" button
addUserBtn.addEventListener("click", () => {
  // Get input values
  const name = document.getElementById("name").value;
  const profession = document.getElementById("profession").value;
  const age = document.getElementById("age").value;

  // Validate inputs
  if (name && profession && age) {
    // Create a new employee object
    const newEmployee = {
      id: ++employeeCount,
      name,
      profession,
      age: parseInt(age)
    };

    // Add the new employee to the array
    employees.push(newEmployee);

    // Display employees and update count
    displayEmployees();
    updateEmployeeCount();

    // Show success message
    errorMsgElem.textContent = "Success: Employee Added!";
    errorMsgElem.className = ''; // Reset error class

    // Clear input fields
    document.getElementById("name").value = '';
    document.getElementById("profession").value = '';
    document.getElementById("age").value = '';
  } else {
    // Show error message
    errorMsgElem.textContent = "Error: Please make sure all fields are filled!";
    errorMsgElem.className = 'error'; // Apply error class
  }
});

// Function to display the list of employees
function displayEmployees() {
  const employeeList = document.getElementById('employeeList');
  employeeList.innerHTML = '';

  employees.forEach(employee => {
    const employeeDiv = document.createElement('div');
    employeeDiv.className = 'employee';
    employeeDiv.innerHTML = `
      <span>${employee.id}. Name: ${employee.name} | Profession: ${employee.profession} | Age: ${employee.age}</span>
      <button class="delete-button" onclick="deleteEmployee(${employee.id})">Delete User</button>
    `;
    employeeList.appendChild(employeeDiv);
  });
}

// Function to delete an employee by id
function deleteEmployee(id) {
  // Remove employee from array
  employees = employees.filter(employee => employee.id !== id);
  employeeCount--;

  // Update employee list and count
  displayEmployees();
  updateEmployeeCount();
}

// Function to update employee count display
function updateEmployeeCount() {
  employeeCountElem.textContent = employeeCount === 0 ? 'You have 0 Employees.' : `You have ${employeeCount} Employees.`;
}
