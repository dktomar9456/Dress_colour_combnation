var sno = 1;
class entry {
    constructor(sNo, upper, lower) {
        this.sNo = sNo;
        this.upper = upper;
        this.lower = lower;
    }
}

function saveIt() {

    upper = document.getElementById('upper').value;
    lower = document.getElementById('lower').value;
    let nEntry = new entry(sno, upper, lower);
    insertRaw(nEntry);
    alert("style Saved Sucessfully");
    sno++;
}

function insertRaw(x) {
    const list = document.getElementById('list');
    const row = document.createElement('tr');
    row.innerHTML = `
    <td>${x.sNo}</td>
    <td style="background-color:${x.upper};">${x.upper}</td>
    <td style="background-color:${x.lower};">${x.lower}</td> 
    `
    list.appendChild(row);

}