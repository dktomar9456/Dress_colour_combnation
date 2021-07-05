class entry {
    constructor(upper, lower) {
        this.upper = upper;
        this.lower = lower;
    }
}

function removealert() {
    var div = document.getElementById('alertdiv');
    div.className = '';
    div.innerHTML = '';
}

function showalert(message, classType) {
    var div = document.getElementById('alertdiv');
    div.className = "alert mx-5 alert-" + classType;
    div.appendChild(document.createTextNode(message));
    setTimeout(() => {
        removealert();
    }, 1500);
}

function saveIt() {

    upper = document.getElementById('upper').value;
    lower = document.getElementById('lower').value;
    if (upper == '#000000' && lower == '#000000') {
        showalert("You Can't Choose both black. so choose different colour by clicking on the cloth shaped field ! :)", 'danger');
    } else {
        showalert("Style Saved Sucessfully", 'success');
        let nEntry = new entry(upper, lower);
        insertRaw(nEntry);
    }

}

function insertRaw(x) {
    const list = document.getElementById('list');
    const row = document.createElement('tr');
    row.innerHTML = `
    <td style="background-color:${x.upper};">${x.upper}</td>
    <td style="background-color:${x.lower};">${x.lower}</td>
    <td><a href='#' class="btn btn-danger btn-sm" onclick="remove(this)">X</a></td>
    `;
    list.appendChild(row);

}

function remove(element) {
    element.parentElement.parentElement.remove();
    showalert("Style Removed Sucessfully!", 'primary')
}