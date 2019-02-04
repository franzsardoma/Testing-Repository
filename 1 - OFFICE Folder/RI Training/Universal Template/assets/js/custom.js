$(document).ready(function() {
    // to activate text- editor in rule description in the form
    var mainForm = $('#mainForm');
    var fileUploadDiv = $('.fileUpload');
    var ruleDescriptionEditor = $('textarea#ruleDescription');
    var imageGallery = $('#imageGallery');

    // function to preview image
    // var imagesPreview =  function(input, div){
    //     if(input.files){
    //         var imageCount = input.files.length;
    //         for(i=0; i< imageCount; i++ ){
    //             var reader = new FileReader();
    //             reader.onload = function(event){
    //               var appendElement ='<a class="teal card imagetoPreview"><div class="image">'+
    //                                 '<img src="'+event.target.result +'"></div></a>';
    //               $(div).append(appendElement);
    //             }
    //             reader.readAsDataURL(input.files[i]);
    //         }
    //     }
    // }
    // form validation
    // mainForm.form(
    //   {
    //     on: 'submit',
    //     fields: {
    //       ruleName: {
    //         identifier  : 'ruleName',
    //         rules: [
    //           {
    //             type   : 'empty',
    //             prompt : 'Please enter rule name'
    //           }
    //         ]
    //       },
    //       ruleDescription: {
    //         identifier  : 'ruleDescription',
    //         rules: [
    //           {
    //             type   : 'empty',
    //             prompt : 'Please enter rule description'
    //           }
    //         ]
    //       },
    //       uploadImage: {
    //         identifier: 'uploadImage',
    //         rules: [
    //           {
    //             type   : 'empty',
    //             prompt : 'Please upload Image'
    //           }
    //         ]
    //       },
    //       droppableSystemTypeInput: {
    //         identifier: 'droppableSystemTypeInput',
    //         rules: [
    //           {
    //             type   : 'empty',
    //             prompt : 'Please drag System Type'
    //           }
    //         ]
    //       },
    //       droppableTableInput: {
    //         identifier: 'droppableTableInput',
    //         rules: [
    //           {
    //             type   : 'empty',
    //             prompt : 'Please drag Table'
    //           }
    //         ]
    //       },
    //       droppableConditionalTableInput: {
    //         identifier: 'droppableConditionalTableInput',
    //         rules: [
    //           {
    //             type   : 'empty',
    //             prompt : 'Please drag Conditional Table'
    //           }
    //         ]
    //       }
    //     }
    //   });

    ruleDescriptionEditor.froalaEditor({
        heightMin: 300,
        heightMax: 500,
        placeholderText: 'Enter Rule Description',
        toolbarButtons: [
            'fullscreen',
            'bold',
            'italic',
            'underline',
            'strikeThrough',
            'subscript',
            'superscript',
            '|',
            'fontFamily',
            'fontSize',
            'color',
            'inlineStyle',
            'paragraphStyle',
            '|',
            'paragraphFormat',
            'align',
            'formatOL',
            'formatUL',
            'outdent',
            'indent',
            'quote',
            '-',
            'insertLink',
            'insertImage',
            'insertVideo',
            'embedly',
            'insertFile',
            'insertTable',
            '|',
            'emoticons',
            'specialCharacters',
            'insertHR',
            'selectAll',
            'clearFormatting',
            '|',
            'print',
            'spellChecker',
            'help',
            'html',
            '|',
            'undo',
            'redo'
        ]
    });

    imageGallery
        .froalaEditor({
            heightMin: 300,
            heightMax: 500,
            toolbarButtons: ['insertImage', 'undo', 'redo']
        })
        .on('froalaEditor.image.beforeUpload', function(e, editor, files) {
            if (files.length) {
                var reader = new FileReader();
                reader.onload = function(e) {
                    var result = e.target.result;
                    editor.image.insert(result, null, null, editor.image.get());
                };
                reader.readAsDataURL(files[0]);
            }
            return false;
        });

    fileUploadDiv.on('click', function(event) {
        //  fileUploadInput.trigger('click');
    });

    // the activate menu tab
    $('.menu .item').tab({
        onVisible: function() {}
    });
    // to activate the draggable div - "System Type"
    $('.draggableSystemType').draggable({
        helper: 'clone',
        start: function(event, ui) {
            $(this)
                .parent()
                .addClass('my_class');
        }
    });
    // to activate the droppable div - "System Type"
    $('.droppableSystemType').droppable({
        accept: '.draggableSystemType',
        drop: function(event, ui) {
            // $('.ui.checkbox').checkbox();
            // $('.ui.dropdown').dropdown(); // activate dropdown
        },
        deactivate: function(e, ui) {
            mainForm.form('set values', {
                droppableSystemTypeInput: '1'
            });
            $('.droppableSystemType  > .draggableSystemType').remove();
            $(ui.draggable)
                .clone()
                .appendTo($(this)); // add to div
            $(this).removeClass('segment');
            activateCheckboxDropdown();

            // $('.ui.checkbox').on("change", function(){
            //   console.log($(this).closest('input').find('[type=checkbox]').length());
            //       // if($(".ui.checkbox").hasClass("checked")){
            //       //     console.log($(this).closest('input,radio, checkbox'));
            //       //
            //       // }else{
            //       //   //  $(this).closest('[type=checkbox]').attr('checked', false);
            //       // }
            // });
        }
    });

    function isCheck() {}
    var cloneID = 1;
    $('.draggableTable').draggable({
        helper: 'clone',
        start: function(event, ui) {
            //$(this).parent().addClass('my_class');
        }
    });

    var counterFor4cols = 0;
    var counterFor5cols = 0;
    $('.droppableTable').droppable({
        accept: '.draggableTable',
        drop: function(event, ui) {},
        deactivate: function(e, ui) {
            var removeClass = e.target;

            mainForm.form('set values', {
                droppableTableInput: '1'
            });
            //  $('.ui.dropdown').dropdown(); // activate dropdow
            var div = $(ui.draggable).clone();
            div.attr('id', 'columnID' + cloneID).appendTo($(this)); // add id
            var selectTable = $('#columnID' + cloneID).find('table'); // find the table inside the div
            selectTable.attr('id', 'table' + cloneID); // add id
            selectTable.addClass('removeSelectedTable'); // add class
            var input = $(selectTable).find('input')[0];
            if ($(selectTable).hasClass('4Cols')) {
                counterFor4cols++;
                $(input).val('Space Type ' + counterFor4cols);
            } else {
                counterFor5cols++;
                $(input).val('Element Type ' + counterFor5cols);
            }


            const addRowButton =
                '<tfoot class="toHideinOutputHTML"><tr><td colspan="5">  <span class="mini ui button" id="addRow"><i class="add green icon"></i>  Add Row </span></td></tr></tfoot>';
            $('#tablesContainer table:last').append(addRowButton);
            activateCheckboxDropdown();
            $('.deleteTable').on('click', function() {
                $(this)
                    .closest('table')
                    .fadeOut(700, function() {
                        $(this)
                            .closest('table')
                            .remove();
                    });
            });
            $('table.removeSelectedTable').click(function(event) {
                var elementID = event.target.id;
                var elementClass = event.target.className;
                //console.log("ID: ", elementID, "Class: ", elementClass);
                if (elementID === 'deleteRow' || elementClass === 'trash red icon') {
                    $(event.target)
                        .closest('tr')
                        .fadeOut(500, function() {
                            $(this)
                                .closest('tr')
                                .remove();
                            counter -= 1;
                        });
                }
            });

            cloneID++;
        }
    });

    var conditionID = 0;
    $('.draggableConditionalTable').draggable({
        helper: 'clone',
        start: function(event, ui) {}
    });

    $('.droppableConditionalTable').droppable({
        accept: '.draggableConditionalTable',
        drop: function(event, ui) {},
        deactivate: function(e, ui) {
            var removeClass = e.target;
            mainForm.form('set values', {
                droppableConditionalTableInput: '1'
            });
            // $(ui.draggable).clone().appendTo($(this));
            var div = $(ui.draggable).clone();
            div.attr('id', 'conditionID' + conditionID).appendTo($(this)); // add id
            var selectTable = $('#conditionID' + conditionID).find(
                '.customCondition'
            ); // find the table inside the div
            selectTable.attr('id', 'customCondition' + conditionID); // add id

            activateCheckboxDropdown();
            customCondition();
            conditionID++;
        }
    });

    function activateCheckboxDropdown() {
        //  console.log("Dex");
        $('.ui.checkbox').checkbox();
        $('#tablesContainer .ui.dropdown').dropdown(); // activate dropdow
        $('#conditionalContainer .ui.dropdown').dropdown(); // activate dropdow
    }

    function customCondition() {
        //REMOVE WHOLE CONDITION
        $('.removeSegment').on('click', function() {
            $(this)
                .closest('.conditionSeg')
                .fadeOut(700, function() {
                    $(this)
                        .closest('.conditionSeg')
                        .remove();
                });
        });
    }

    //APPEND ITEMS
    $('#conditionalContainer').click(function(event) {
        var newItem = $('<div class="field">');
        var item = '';

        if (event.target.id === 'condition') {
            item +=
                '<div class="ui labeled input style"><div class="ui label">Condition</div><input type="text" placeholder="Enter the condition"></div>';
        } else if (event.target.id === 'operator') {
            item +=
                '<div class="ui labeled input style"><div class="ui label">Operator</div><select class="ui dropdown"><option value="<">Less than</option><option value="<=">Less than or equal</option>';
            item +=
                '<option value="=">Equal</option><option value=">">Greater than</option><option value=">=">Greater than or equal</option><option value="!=">Not equal</option></select></div>';
        } else if (event.target.id === 'from-to') {
            item +=
                '<span class="style"><div class="ui labeled input"><div class="ui label">From</div><input type="number" step="0.01" placeholder="0"></div><div class="ui checkbox"><input type="checkbox" name="example"><label></label></div>';
            item +=
                '<div class="ui labeled input"><div class="ui label">To</div><input type="number" step="0.01" placeholder="0"></div><div class="ui checkbox"><input type="checkbox" name="example"><label></label></div></span>';
        } else if (event.target.id === 'value') {
            item +=
                '<div class="ui labeled input style"><div class="ui label">Value</div><input type="number" step="0.01" placeholder="0"></div>';
        } else if (event.target.id === 'unit') {
            item +=
                '<div class="ui labeled input style"><div class="ui label">Unit</div><input type="text" placeholder="Unit" value="mm" disabled="true"></div>';
        } else if (event.target.id === 'checkbox') {
            item +=
                '<span class="style"><div class="ui checkbox"><input type="checkbox" name="example"><label></label></div></span>';
        } else if (event.target.id === 'label') {
            item +=
                '<div class="ui labeled input style"><div class="ui label">Label</div><input type="text" placeholder="Enter label"></div>';
        } else if (event.target.id === 'when-then') {
            // WHEN
            item +=
                '<div class="ui segments conditionSeg"><div class="ui segment" id="paddingBot"><div class="ui secondary menu">Custom WHEN-THEN</div></div>';
            item +=
                '<div class="ui secondary segment"><div class="ui segments"><div class="ui segment"><p>WHEN</p></div>';
            item +=
                '<div class="ui secondary segment"><span class="mini ui button toHideinOutputHTML" id="condition"><i class="add green icon"></i>Condition</span>';
            item +=
                '<span class="mini ui button toHideinOutputHTML" id="operator"><i class="add green icon"></i>Operator</span>';
            item +=
                '<span class="mini ui button toHideinOutputHTML" id="from-to"><i class="add green icon"></i>From-To</span>';
            item +=
                '<span class="mini ui button toHideinOutputHTML" id="value"><i class="add green icon"></i>Value</span>';
            item +=
                '<span class="mini ui button toHideinOutputHTML" id="unit"><i class="add green icon"></i>Unit</span>';
            item +=
                '<span class="mini ui button toHideinOutputHTML" id="checkbox"><i class="add green icon"></i>Checkbox</span>';
            item +=
                '<span class="mini ui button toHideinOutputHTML" id="label"><i class="add green icon"></i>Label</span>';
            item +=
                '  <div class="style"><!-- Append items here --></div><!-- WHEN --></div></div>';
            //THEN
            item +=
                '<div class="ui segments"><div class="ui segment"><p>THEN</p></div><div class="ui secondary segment">';
            item +=
                '<span class="mini ui button toHideinOutputHTML" id="condition"><i class="add green icon"></i>Condition</span>';
            item +=
                '<span class="mini ui button toHideinOutputHTML" id="operator"><i class="add green icon"></i>Operator</span>';
            item +=
                '<span class="mini ui button toHideinOutputHTML" id="from-to"><i class="add green icon"></i>From-To</span>';
            item +=
                '<span class="mini ui button toHideinOutputHTML" id="value"><i class="add green icon"></i>Value</span>';
            item +=
                '<span class="mini ui button toHideinOutputHTML" id="unit"><i class="add green icon"></i>Unit</span>';
            item +=
                '<span class="mini ui button toHideinOutputHTML" id="checkbox"><i class="add green icon"></i>Checkbox</span>';
            item +=
                '<span class="mini ui button toHideinOutputHTML" id="label"><i class="add green icon"></i>Label</span>';
            item +=
                '<div class="style"><!-- Append items here --></div><!-- THEN --></div></div></div></div>';
        }

        if (item) {
            newItem.append(item);
            $(event.target)
                .closest('div')
                .append(newItem);
            activateCheckboxDropdown();
            console.log($(event.target.id));
        }
    });

    $('#undoBtn').on('click', function() {
        $('#displayNone')
            .css('display', 'none')
            .remove();
    });

    // add row
    var counter = 1;
    $('#tablesContainer').click(function(event) {
        var elementID = event.target.id;
        var elementClass = event.target.className;
        if (elementID === 'addRow' || elementClass === 'add icon') {
            var newRow = $('<tr>');
            var cols = '';

            if (
                $(event.target)
                .closest('div')
                .hasClass('5Column')
            ) {
                // for 5 coloumn
                cols +=
                    '<td><div class="field"><select class="ui fluid dropdown" name="state' +
                    counter +
                    '"><option value="Include">Included</option><option value="Exclude">Excluded</option></select></div></td>';
                cols +=
                    '<td><div class="field"><select class="ui dropdown search selection visible" name="type' +
                    counter +
                    '">';
                cols +=
                    '<option value="Any">Any</option><option value="Beam">Beam</option><option value="Building">Building</option><option value="BuildingElementProxy">BuildingElementProxy</option><option value="BuildingStorey">BuildingStorey</option> <option value="CableCarrierSegment">CableCarrierSegment</option><option value="Ceiling">Ceiling</option><option value="Covering">Covering</option><option value="Column">Column</option><option value="Curtain">Curtain</option>';
                cols +=
                    '<option value="DistributionControlElement">DistributionControlElement</option><option value="DistributionFlowElement">DistributionFlowElement</option><option value="DiscreteAccessory">DiscreteAccessory</option>';
                cols +=
                    '<option value="DistributionChamberElement">DistributionChamberElement</option><option value="DistributionElement">DistributionElement</option><option value="DistributionControl">DistributionControl</option><option value="Door">Door</option>';
                cols +=
                    '<option value="EnergyConversionDevice">EnergyConversionDevice</option><option value="FlowTerminal">FlowTerminal</option><option value="Fastener">Fastener</option><option value="Footing">Footing</option>';
                cols +=
                    '<option value="FurnishingElement">FurnishingElement</option><option value="FlowMovingDevice">FlowMovingDevice</option><option value="FlowTreatmentDevice">FlowTreatmentDevice</option><option value="FlowFitting">FlowFitting</option><option value="FlowSegment">FlowSegment</option>';
                cols +=
                    '<option value="FlowController">FlowController</option><option value="FlowStorageDevice">FlowStorageDevice</option><option value="Grid">Grid</option>';
                cols +=
                    '<option value="MechanicalFastener">MechanicalFastener</option><option value="Member">Member</option><option value="OpeningElement">OpeningElement</option><option value="FlowSegment">Pipe Segment</option><option value="Plate">Plate</option><option value="Pile">Pile</option>';
                cols +=
                    '<option value="Railing">Railing</option><option value="Ramp">Ramp</option><option value="RampFlight">RampFlight</option><option value="ReinforcingBar">ReinforcingBar</option>';
                cols +=
                    '<option value="ReinforcingMesh">ReinforcingMesh</option><option value="Roof">Roof</option><option value="Site">Site</option><option value="Slab">Slab</option><option value="Space">Space</option><option value="Stair">Stair</option>';
                cols +=
                    '<option value="StairFlight">StairFlight</option><option value="TransportElement">TransportElement</option><option value="Type">Type</option><option value="TranportElement">TranportElement</option>';
                cols +=
                    '<option value="Tendon">Tendon</option><option value="TendonAnchor">TendonAnchor</option><option value="UnitaryEquipmentType">UnitaryEquipmentType</option><option value="Wall">Wall</option><option value="Window">Window</option>';
                cols += '</select></div></td>';
                cols +=
                    '<td><div class="field"><select class="ui selection dropdown" name="property' +
                    counter +
                    '"><option value="Any">Any</option><option value="Building Name">Building Name</option><option value="Description">IFC Description</option><option value="ObjectType">IFC ObjectType</option><option value="Level">Level</option><option value="LongName">Long Name</option><option value="Name">Name</option><option value="Project Location">Project Location</option><option value="Project Development Type">Project Development Type</option><option value="System">System</option></select></div></td>';
                cols +=
                    ' <td><div class="field"><select class="ui fluid dropdown" name="operator' +
                    counter +
                    '"><option value="Contains">Contains</option><option value="Match">Match</option><option value="N.A">N.A</option></select></div></td>';
                cols += '<td><input type="text" name="value' + counter + '"></td>';
                cols +=
                    '<td class="toHideinOutputHTML"><span class="mini ui" id="deleteRow"><i class="trash red icon"></i></span></td>';
            } else {
                // for 4 coloumn
                cols +=
                    '<td><div class="field"><select class="ui fluid dropdown" name="state' +
                    counter +
                    '"><option value="Include">Included</option><option value="Exclude">Excluded</option></select></div></td>';
                cols +=
                    '<td><div class="field"><select class="ui fluid dropdown" name="property' +
                    counter +
                    '"><option value="LongName">Long Name</option><option value="Occupancy">Occupancy</option><option value="Level">Level</option><option value="Any">Any</option></select></div></td>';
                cols +=
                    '<td><div class="field"><select class="ui fluid dropdown" name="operator' +
                    counter +
                    '"><option value="Match">Match</option><option value="Contains">Contains</option><option value="n/a">N/A</option></select></div></td>';
                cols += '<td><input type="text" name="value' + counter + '"></td>';
                cols +=
                    '<td class="toHideinOutputHTML"><span class="mini ui" id="deleteRow"><i class="trash red icon"></i></span></td>';
            }

            //append new row
            newRow.append(cols);
            $(event.target)
                .closest('table')
                .append(newRow);
            activateCheckboxDropdown();
            counter += 1;
        }
    });

    $('#getOperator').click(function(e) {
        var text = e.target.text;
    });

    mainForm.on('submit', function(e) {
        e.preventDefault();
        var allFields = mainForm.form('get values');
        allFields.ruleName =   $.trim(allFields.ruleName); // trim white space at the beggining
        var filename = allFields.ruleName;
        filename = filename.replace(/[_\W]+/g, "_");
        $('#saveFile').form('set value', 'fileName', filename.toUpperCase());
        //createXMLSchema();
        $('.ui.modal')
            .modal({
                onApprove: function() {
                    // console.log($('#mainForm .ui.fluid.dropdown.selection').dropdown('get value'));
                    var systemTypeDivContent = $('#droppableSystemType').html();
                    var img = allFields.imageGallery;
                    var fileName = $('#saveFile');
                    allFields.ruleDescription = ruleDescriptionEditor.froalaEditor(
                        'html.get'
                    );
                    allFields.imageGallery = imageGallery.froalaEditor('html.get');
                    fileName = fileName.form('get values');
                    createXMLSchema(allFields);
                    var save = saveFile(allFields);
                    download(new Blob([save]), fileName.fileName + '.html', 'text/html');
                    //download(new Blob([createXMLSchema(allFields)]), fileName.fileName + '.xml', 'text/xml');

                }
            })
            .modal('show');
    });

    function createXMLSchema(allFields) {
        var date = new Date();
        var month = date.getMonth();
        var day = date.getDate();
        var year = date.getFullYear();
        var currentDate = month + '/' + day + '/' + year;
        // For GFA Header Table AND PUB check box
        var populateCoveredUncoveredXML = '<FORMOBJECT ID="SystemType">';

        $('#droppableSystemType .ui.checkbox')
            .find('input,radio, checkbox')
            .each(function(val) {
                var id = $(this).val();
                var isChecked = $(this).prop('checked');
                if (isChecked) {
                    populateCoveredUncoveredXML =
                        populateCoveredUncoveredXML +
                        '<CONDITIONOBJECT ID="' +
                        id +
                        '">' +
                        id +
                        '</CONDITIONOBJECT>';
                }
            });

        populateCoveredUncoveredXML = populateCoveredUncoveredXML + '</FORMOBJECT>';

        var count = 1;
        var tableSchema = ``;
        var inputValArray = []; //to be use when dispkaying the value to output.html;
        var table = $('#tablesContainer')
            .find('table')
            .each(function(val, index) {
                var tableLabel = $(this).find('input')[0];
                $(tableLabel).attr('id', $(tableLabel).val());
                $(tableLabel).attr('class', 'getIdToBeTextValue');
                tableSchema =
                    tableSchema +
                    `<FORMOBJECT ID="${$(tableLabel).val()}" TYPE="table">`;

                var rowIndex = $(this)
                    .find('tbody > tr')
                    .each(function(val, index) {
                        tableSchema = tableSchema + `<ROWOBJECT TYPE="TR">`;
                        colIndex = $(this)
                            .find('td')
                            .not(':last')
                            .each(function(index, val) {
                                //
                                var thisCol = $(this);
                                var thead = thisCol.closest('table').find('tr')[1];
                                var thead = $(thead).find('th')[index];
                                thead = $(thead).attr('id');
                                var elementSelectText = thisCol.find('select option:selected');
                                var elementInputVal = thisCol.find('input[type=text]');
                                tableSchema =
                                    tableSchema + `<COLUMNOBJECT ID="${thead}" TYPE="TD">`;
                                if (elementSelectText.text()) {
																		var val = $(elementSelectText).val();
																		var text = $(elementSelectText).val();
                                    // if input is select option
                                    tableSchema =
                                        tableSchema +
                                        `<TBLOBJECT ID="${val}" TYPE="select" ISSELECTED="true" VALUE="${val}">${text}</TBLOBJECT>`;
                                   //console.log(tableSchema);
                                } else {

                                    // if input type text
                                    tableSchema =
                                        tableSchema +
                                        `<TBLOBJECT ID="value" TYPE="input" ISSELECTED="true" VALUE="${elementInputVal.val()}">${elementInputVal.val()}</TBLOBJECT>`;
                                    $(elementInputVal).attr('id', elementInputVal.val());
                                    $(elementInputVal).attr('class', 'getIdToBeTextValue');
                                    //inputValArray.push();
                                }
                                tableSchema = tableSchema + `</COLUMNOBJECT>`;
                            });

                        tableSchema = tableSchema + `</ROWOBJECT>`;
                    });
                tableSchema = tableSchema + `</FORMOBJECT>`;
            }); // count table in each div
        conditionSchema = ``;
        var conditionalContainer = $('#conditionalContainer')
            .find('div.ui.form.conditionalTable')
            .each(function(index, val) {
                index++;
                conditionSchema =
                    conditionSchema + `<FORMOBJECT ID="Condition${index}">`;
                input = $(this)
                    .find(':input')
                    .each(function(index, val) {
                        var self = $(this);
                        var type = self.attr('type'); //returns radio or text (the attr type)
                        var val = self.val();
                        if (type === undefined) {
                            type = 'select';
                            // val = self.val();
                        }
                        if (type === 'checkbox') {
                            val = self.is(':checked');
                        }
                        conditionSchema =
                            conditionSchema +
                            `<CONDITIONOBJECT ID="${type}${index}"  TYPE="${type}">${val}</CONDITIONOBJECT>`;
                        $(self).attr('id', val);
                        $(self).attr('class', 'getIdToBeTextValueCConditional');
                    });

                conditionSchema = conditionSchema + '</FORMOBJECT>';
            });

        var xmlSchema = `<?xml version="1.0" encoding="UTF-8"?>
		 <FORMPARAMETER>
		   <CLAUSE NAME="Gross Floor Area" CLAUSEID="3.1">
			 			<FORMOBJECT ID="name" TYPE="Text">${allFields.ruleName}</FORMOBJECT>
						${populateCoveredUncoveredXML}
						${tableSchema}
						${conditionSchema}
			 </CLAUSE>
			 </FORMPARAMETER>
		 `;
        // `' +
        // 	'          <CLAUSE NAME="Gross Floor Area" CLAUSEID="3.1">' +
        // 	'              <FORMOBJECT ID="name" TYPE="Text"> ' +
        // 	allFields.ruleName +
        // 	'</FORMOBJECT>' +
        // 	'                ' +
        // 	populateCoveredUncoveredXML +
        // 	'  ' +
        // 	tableSchema +
        // 	conditionSchema +
        // 	'          </CLAUSE>' +
        // 	'        </FORMPARAMETER>';
        // // console.log(xmlSchema);
        return (allFields.XML = xmlSchema);
    }

    function saveFile(allFields, filename) {
        allFields.Table = $('#tablesContainer').html();
        allFields.conditionTables = $('#conditionalContainer').html();
        allFields.systemType = $('#droppableSystemType').html();

        var html =
            '<!DOCTYPE html>' +
            '<html lang="en" dir="ltr">' +
            '   <head>' +
            '      <meta charset="utf-8">' +
            '      <title>Universal Template</title>' +
            '        <!-- For Font Style. -->' +
            '      <link href="https://fonts.googleapis.com/css?family=Raleway" rel="stylesheet">' +
            '        <!-- Semantic Ui CSS -->' +
            '      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.3.3/semantic.min.css">' +
            '      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/prettify/r298/prettify.min.css">' +
            '        <!-- Own Ui CSS -->' +
            '        <!-- Include jQuery. -->' +
            '      <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>' +
            '      <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/prettify/r298/prettify.js"></script>' +
            '        <style>' +
            '              body{' +
            '                padding: 5%;' +
            '                background: #f0f2f5;' +
            '              }' +
            '              h1, h2, h3, h4, h5, h6 , a , p{' +
            "               font-family: 'Raleway' !important;" +
            '              }' +
            '              .ui.header.red{' +
            '                font-weight: 700px !important;' +
            '                /* color: white !important; */' +
            '              }' +
            '              .backgroundWhite{' +
            '                background: white !important;' +
            '              }' +
            '              .icon.close{' +
            '                display: none !important;' +
            '              }' +
            '              .ui.black.table, .ui.segments.conditionSeg{' +
            '                margin-bottom: 30px; !important;' +
            '              }' +
            '             .fr-inner{  ' +
            '               text-align: center !important;  ' +
            '               margin: auto !important;  ' +
            '               margin-top: 5px !important;  ' +
            '               display: table !important;  ' +
            '            } ' +
            '        </style>' +
            '   </head>' +
            '   <body> <div style="display:none;"> ' +
            allFields.XML +
            '</div>' +
            '  <div class="ui container">' +
            '    <table class="ui padded celled table grey">' +
            '      <thead>' +
            '        <tr>' +
            '          <th colspan="2" class="center aligned backgroundWhite">' +
            '            <strong>' +
            '              <h2 class="ui header red">FORNAX™ ePlanCheck Rule</h2>' +
            '            </strong>' +
            '          </th>' +
            '        </tr>' +
            '        <tr>' +
            '          <th colspan="2" class="center aligned">' +
            '            <h3 class="ui center aligned header">' +
            '              Rule Parameters' +
            '            </h3>' +
            '          </th>' +
            '        </tr>' +
            '      </thead>' +
            '      <tbody>' +
            '        <tr>' +
            '          <td class="center aligned">' +
            '            <h4 class="ui header">Rule Name</h4>' +
            '          </td>' +
            '          <td>'+allFields.ruleName+'</td>' +
            '        </tr>' +
            '      </tbody>' +
            '    </table>' +
            '    <div class="ui segment">' +
            '      <h3 class="ui center aligned header">' +
            '        Rule Description </h3> <div id="ruleDescription">' +
            allFields.ruleDescription +
            '    </div>  </div>' +
            '    <div class="ui segment">' +
            '      <h3 class="ui center aligned header">' +
            '        Image/s' +
            '      </h3> <div id="appendImage">  ' +
            allFields.imageGallery +
            '</div>' +
            '    </div>' +
            '    <div class="ui segment">' +
            '      <h3 class="ui center aligned header">' +
            '        Rule Parameters' +
            '      </h3> <div id="droppableSystemType">  ' +
            allFields.systemType +
            '</div>' +
            '    </div>' +
            '    <div class="ui segment">' +
            '      <h3 class="ui center aligned header">' +
            '       Table' +
            '      </h3>  <div id="droppableTable">  ' +
            allFields.Table +
            '</div>' +
            '    </div>' +
            '    <div class="ui segment">' +
            '      <h3 class="ui center aligned header">' +
            '       Condition/s Table' +
            '      </h3> <div id="droppableConditionalTable">  ' +
            allFields.conditionTables +
            '</div>' +
            '    </div>' +
            '  </div>' +
            '  <script>' +
            '    $(document).ready(function() {' +
            '      $("img").removeAttr("style");' +
            '      $("img").addClass("ui centered large image");' +
            '      $("#tablesContainer").removeClass("ui segment droppableTable ui-droppable");' +
            '      $(".ui.segment.draggableSystemType").removeAttr("style");' +
            '      $(".toHideinOutputHTML").remove();' +
            '      $(".ui.checkbox.checked").find("input,radio, checkbox").each(function() {' +
            '                  $(this).attr("checked", true); ' +
            '      });' +
            '     $(".getIdToBeTextValue" ).each(function( index ) {' +
            '          var id = $(this).attr("id");' +
            '          $(this).val(id); ' +
            '      });' +
            '     $(".getIdToBeTextValueCConditional" ).each(function( index ) {' +
            '          var id = $(this).attr("id");' +
            '          $(this).val(id); ' +
            '      });' +
            '     $("input" ).each(function( index ) {' +
            '          $(this).attr("readonly", "readonly"); ' +
            '      });' +
            '    });' +
            '  </script>' +
            '</body>' +
            '' +
            '</html>';

        // parser=new DOMParser();
        // html=parser.parseFromString(html, "text/html");
        // html = html.documentElement.outerHTML;


        return html;
    }

    // window.onbeforeunload = function() {
    //   return "Data will be lost if you leave or refresh the page, are you sure?";
    // };

    function readSingleFile(e) {
        var file = e.target.files[0];
        if (!file) {
            return;
        }
        var reader = new FileReader();
        reader.onload = function(e) {
            var contents = e.target.result;
            // Display file content
            displayContents(contents);
        };
        reader.readAsText(file);
    }

});
