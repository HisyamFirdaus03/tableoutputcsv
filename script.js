
async function readCSV(){
    const response = await fetch("Table_input.csv");
    const data = await response.text();

    let dataObject = extractCSV(data);
    displayCSVTable1(dataObject);
    displayCSVTable2("Alpha", dataObject.A5 + dataObject.A20);
    displayCSVTable2("Beta", dataObject.A15 / dataObject.A7);
    displayCSVTable2("Charlie", dataObject.A13 * dataObject.A12);
}

function extractCSV(data){
    console.log(data);
    let formattedData = data.split('\n');
    let dataObject = {};
    console.log(formattedData);
    for(let i = 1; i < formattedData.length; i++){
        let part = formattedData[i].split(',');
        dataObject[part[0]] = parseInt(part[1].indexOf('\r') == -1 ? part[1] : part[1].split('\r')[0]);
    }

    return dataObject;
}

function displayCSVTable1(data){
    const table = document.querySelector("#table1 tbody");

    if(data.length == 0){
        const tableRow = document.createElement("tr");
        const tableData1 = document.createElement("td");
        const tableData2 = document.createElement("td");

        tableData1.innerHTML = "<b>Error!<b>";
        tableData2.innerHTML = "Failed to fetch data from CSV file!";

        tableRow.appendChild(tableData1);
        tableRow.appendChild(tableData2);
        table.appendChild(tableRow);
        return;
    }

    for(let key in data){
        const tableRow = document.createElement("tr");
        const tableData1 = document.createElement("td");
        const tableData2 = document.createElement("td");

        tableData1.innerHTML = key;
        tableData2.innerHTML = data[key];

        tableRow.appendChild(tableData1);
        tableRow.appendChild(tableData2);
        table.appendChild(tableRow);
    }
}

function displayCSVTable2(key, data){
    const table = document.querySelector("#table2 tbody");
    const tableRow = document.createElement("tr");
    const tableData1 = document.createElement("td");
    const tableData2 = document.createElement("td");

    if(data == null){
        tableData1.innerHTML = "<b>Error!<b>";
        tableData2.innerHTML = "Failed to fetch data from CSV file!";
    }
    else{
        tableData1.innerHTML = key;
        tableData2.innerHTML = data;
    }

    tableRow.appendChild(tableData1);
    tableRow.appendChild(tableData2);
    table.appendChild(tableRow);
}

window.onload = readCSV;