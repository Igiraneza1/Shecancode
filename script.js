document.getElementById("expenseForm").addEventListener("submit", function(event) {
    event.preventDefault();
    let description = document.getElementById("description").value;
    let amount = document.getElementById("amount").value;
    let category = document.getElementById("category").value;
    let date = document.getElementById("date").value;
    
    let table = document.getElementById("expenseList");
    let row = table.insertRow();
    row.innerHTML = `<td>${description}</td><td>${amount}</td><td>${category}</td><td>${date}</td>
                     <td class='actions'><button onclick='deleteExpense(this)'>X</button></td>`;
    
    document.getElementById("expenseForm").reset();
});

function deleteExpense(btn) {
    btn.parentElement.parentElement.remove();
}