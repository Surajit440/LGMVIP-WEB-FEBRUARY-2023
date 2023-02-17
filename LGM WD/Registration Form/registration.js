var selectedRow = null

function onFormSubmit(e) {
	event.preventDefault();
        var formData = readFormData();
        if (selectedRow == null){
            insertNewRecord(formData);
		}
        else{
            updateRecord(formData);
		}
        resetForm();    
}

//Retrieve the data
function readFormData() {
    var formData = {};
    formData["fname"] = document.getElementById("fname").value;
    formData["lname"] = document.getElementById("lname").value;
    formData["DOB"] = document.getElementById("DOB").value;
    formData["Age"] = document.getElementById("Age").value;
    formData["Email"] = document.getElementById("Email").value;
    return formData;
}

//Insert the data
function insertNewRecord(data) {
    var table = document.getElementById("storeList").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.length);
    cell1 = newRow.insertCell(0);
		cell1.innerHTML = data.fname;
    cell2 = newRow.insertCell(1);
		cell2.innerHTML = data.lname;
    cell3 = newRow.insertCell(2);
		cell3.innerHTML = data.DOB;
    cell4 = newRow.insertCell(3);
		cell4.innerHTML = data.Age;
    cell5 = newRow.insertCell(4);
		cell5.innerHTML = data.Email;
    cell6 = newRow.insertCell(5);
        cell6.innerHTML = `<button onClick="onEdit(this)">Edit</button> <button onClick="onDelete(this)">Delete</button>`;
}

//Edit the data
function onEdit(td) {
    selectedRow = td.parentElement.parentElement;
    document.getElementById("fname").value = selectedRow.cells[0].innerHTML;
    document.getElementById("lname").value = selectedRow.cells[1].innerHTML;
    document.getElementById("DOB").value = selectedRow.cells[2].innerHTML;
    document.getElementById("Age").value = selectedRow.cells[3].innerHTML;
    document.getElementById("Email").value = selectedRow.cells[4].innerHTML;
}
function updateRecord(formData) {
    selectedRow.cells[0].innerHTML = formData.fname;
    selectedRow.cells[1].innerHTML = formData.lname;
    selectedRow.cells[2].innerHTML = formData.DOB;
    selectedRow.cells[3].innerHTML = formData.Age;
    selectedRow.cells[4].innerHTML = formData.Email;
}

//Delete the data
function onDelete(td) {
    if (confirm('Do you want to delete this record?')) {
        row = td.parentElement.parentElement;
        document.getElementById('storeList').deleteRow(row.rowIndex);
        resetForm();
    }
}

//Reset the data
function resetForm() {
    document.getElementById("fname").value = '';
    document.getElementById("lname").value = '';
    document.getElementById("DOB").value = '';
    document.getElementById("Age").value = '';
    document.getElementById("Email").value = '';
    selectedRow = null;
}