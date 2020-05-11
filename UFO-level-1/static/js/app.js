// from data.js
var tableData = data;
var tbody = d3.select("tbody");

// // Use d3 to update each cell's text

tableData.forEach(function(UFODATA) {
   
   var row = tbody.append("tr");
   Object.entries(UFODATA).forEach(function([key, value]) {
     
     // Append a cell to the row for each value
     // in the data.js
     var cell = row.append("td");
     cell.text(value);
   });
 });
 
 //Filter Button Date
 var submit = d3.select("#filter-btn");

 submit.on("click",function(){
    var search_ = document.querySelector('#datetime').value;
    console.log(search_ );
    var search_data = tableData.filter(tableData => tableData.datetime === search_);  
    
    //Remove old table
    var table = d3.select('tbody').selectAll("tr").remove();
    //Insert filter table
    search_data.forEach(function(filterdata) {
        
        var row2 = tbody.append("tr");
        console.log(row2);
        Object.entries(filterdata).forEach(function([key2, value2]) {
          
          // Append a cell to the row for each value
          // in the data.js
          var cell2 = row2.append("td");
          cell2.text(value2);
        });

    });
 });
