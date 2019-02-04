// var counter = 1;
//     //delete the selected table
// $('.undoBtn').on("click", function(){
//     $(this).closest("li").remove();
// });
//
// //add row
// $("ul").click( function(event){
//     var elementID = event.target.id;
//     var elementClass = event.target.className;
//
//     if( elementID === 'addRow' || elementClass === 'add icon'){
//         var newRow = $("<tr>");
//         var cols = "";
//
//         cols += '<td><div class="field"><select class="ui fluid dropdown" name="state' + counter +'"><option value="included">Included</option><option value="excluded">Excluded</option></select></div></td>';
//         cols += '<td><div class="field"><select class="ui fluid dropdown" name="property' + counter +'"><option value="long name">Long Name</option><option value="occupancy">Occupancy</option><option value="level">Level</option><option value="any">Any</option></select></div></td>';
//         cols += '<td><div class="field"><select class="ui fluid dropdown" name="operator' + counter +'"><option value="match">Match</option><option value="contains">Contains</option><option value="n/a">N/A</option></select></div></td>';
//         cols += '<td><div class="ui input"><input type="text" name="value' + counter +'"></div</td>';
//         cols += '<td><button id="deleteRow" class="ui icon red button"><i class="trash alternate outline icon"></i></button></td>';
//
//                 //append new row
//         newRow.append(cols);
//         $(event.target).closest("table").append(newRow);
//     $(".ui.dropdown").dropdown();
//     counter += 1;
//     }
// });
//
// $("ul").click( function(event){
//     var elementID = event.target.id;
//     var elementClass = event.target.className;
//     if (elementID === 'deleteRow' || elementClass === 'trash alternate outline icon'){
//         $(event.target).closest("tr").remove();
//         counter -= 1;
//     }
// });
//
// //delete row
// $("table.order-list").on("click", "#deleteRow", function (event) {
//
// });
//
// //add table
// $(".addTable").on("click", function(){
//     var newTable = $('<li>');
//     var defaultTable = "";
//         //table
//     defaultTable += '<button class="ui icon orange right floated button undoBtn"><i class="close icon"></i></button><table class="ui celled table order-list" id="table0">';
//         //thead
//     defaultTable += '<thead><tr><th>State</th><th>Property</th><th>Operator</th><th>Value</th><th></th></tr></thead>';
//         //tbody
//     defaultTable += '<tbody>';
//         //tr
//     defaultTable += '<tr>'
//     defaultTable += '<td><div class="field"><select class="ui fluid dropdown" name="state0"><option value="included">Included</option><option value="excluded">Excluded</option></select></div></td>';
//     defaultTable += '<td><div class="field"><select class="ui fluid dropdown" name="property0"><option value="long name">Long Name</option><option value="occupancy">Occupancy</option><option value="level">Level</option><option value="any">Any</option></select></div></td>';
//     defaultTable += '<td><div class="field"><select class="ui fluid dropdown" name="operator0"><option value="match">Match</option><option value="contains">Contains</option><option value="n/a">N/A</option></select></div></td>';
//     defaultTable += '<td><div class="ui input"><input type="text" name="value0"></div></td><td></td></tr></tbody>';
//     defaultTable += '<tfoot><tr><td colspan="4"><button class="ui icon blue button" id="addRow"><i class="add icon"></i></button></td></tr></tfoot></table>';
//     defaultTable += '</li>';
//
//         //appending the to the ul
//     newTable.append(defaultTable);
//     $("#ul").append(newTable);
//     $(".ui.dropdown").dropdown();
//
//     //delete the selected table
//     $('.undoBtn').on("click", function(){
//         $(this).closest("li").remove();
//     });
//
//
//
//
//
// });
