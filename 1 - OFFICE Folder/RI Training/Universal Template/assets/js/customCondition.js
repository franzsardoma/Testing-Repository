//REMOVE WHOLE CONDITION
$('.removeSegment').on("click", function(){
    $(this).closest("#mainForm .conditionSeg").remove();
});

// //APPEND ITEMS
// $(".ui.secondary.segment").click(function (event) {
//   var newItem= $("<span>");
//   var item = "";
//   if(event.target.id === "condition"){
//     item += '<div class="ui labeled input style"><div class="ui label">Condition</div><input type="text" placeholder="Enter the condition"></div>';
//   } else if (event.target.id ==="operator"){
//     item += '<div class="ui labeled input style"><div class="ui label">Operator</div><select class="ui dropdown"><option value="<">Less than</option><option value="<=">Less than or equal</option>';
//     item += '<option value="=">Equal</option><option value=">">Greater than</option><option value=">=">Greater than or equal</option><option value="!=">Not equal</option></select></div>';
//   } else if (event.target.id === "from-to") {
//     item += '<span class="style"><div class="ui labeled input"><div class="ui label">From</div><input type="number" placeholder="0"></div><div class="ui checkbox"><input type="checkbox" name="example"><label></label></div>';
//     item += '<div class="ui labeled input"><div class="ui label">To</div><input type="number" placeholder="0"></div><div class="ui checkbox"><input type="checkbox" name="example"><label></label></div></span>';
//   } else if (event.target.id === "value") {
//     item += '<div class="ui labeled input style"><div class="ui label">Value</div><input type="number" placeholder="0"></div>';
//   } else if (event.target.id === "unit") {
//     item += '<div class="ui labeled input style"><div class="ui label">Unit</div><input type="text" placeholder="Unit"></div>';
//   } else if (event.target.id === "checkbox") {
//     item += '<span class="style"><div class="ui checkbox"><input type="checkbox" name="example"><label></label></div></span>';
//   } else if (event.target.id === "when-then") {
//
//     // WHEN
//     item += '<div class="ui segments conditionSeg"><div class="ui segment" id="paddingBot"><div class="ui secondary menu">Custom WHEN-THEN</div></div>';
//     item += '<div class="ui secondary segment"><div class="ui segments"><div class="ui segment"><p>WHEN</p></div>';
//     item += '<div class="ui secondary segment"><span class="mini ui button" id="condition"><i class="add green icon"></i>Condition</span>';
//     item += '<span class="mini ui button" id="operator"><i class="add green icon"></i>Operator</span>';
//     item += '<span class="mini ui button" id="from-to"><i class="add green icon"></i>From-To</span>';
//     item += '<span class="mini ui button" id="value"><i class="add green icon"></i>Value</span>';
//     item += '<span class="mini ui button" id="unit"><i class="add green icon"></i>Unit</span>';
//     item += '<span class="mini ui button" id="checkbox"><i class="add green icon"></i>Checkbox</span>';
//     item += '  <div class="style"><!-- Append items here --></div><!-- WHEN --></div></div>';
//     //THEN
//     item += '<div class="ui segments"><div class="ui segment"><p>THEN</p></div><div class="ui secondary segment">';
//     item += '<span class="mini ui button" id="condition"><i class="add green icon"></i>Condition</span>';
//     item += '<span class="mini ui button" id="operator"><i class="add green icon"></i>Operator</span>';
//     item += '<span class="mini ui button" id="from-to"><i class="add green icon"></i>From-To</span>';
//     item += '<span class="mini ui button" id="value"><i class="add green icon"></i>Value</span>';
//     item += '<span class="mini ui button" id="unit"><i class="add green icon"></i>Unit</span>';
//     item += '<span class="mini ui button" id="checkbox"><i class="add green icon"></i>Checkbox</span>';
//     item += '<div class="style"><!-- Append items here --></div><!-- THEN --></div></div></div></div>';
//   }
//
//   if(item){
//     newItem.append(item);
//     $(event.target).closest("div").append(newItem);
//   }
//
//   //DROPDOWN
//   $(".ui.dropdown").dropdown();
// })
