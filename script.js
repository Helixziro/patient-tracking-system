const form = document.getElementById('patientForm');
const tableBody = document.querySelector('#patientTable tbody');

let count = 1;

form.addEventListener('submit', function(e) {
  e.preventDefault();

  const name = document.getElementById('name').value;
  const age = document.getElementById('age').value;
  const disease = document.getElementById('disease').value;

  const tr = document.createElement('tr');
  tr.innerHTML = `
    <td>${count++}</td>
    <td>${name}</td>
    <td>${age}</td>
    <td>${disease}</td>
    <td><button class="delete-btn">Delete</button></td>
  `;

  tableBody.appendChild(tr);
  form.reset();
});

tableBody.addEventListener('click', function(e) {
  if (e.target.classList.contains('delete-btn')) {
    e.target.closest('tr').remove();
  }
});
