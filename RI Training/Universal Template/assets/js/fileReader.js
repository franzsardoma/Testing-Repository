$(document).ready(function() {
    var ruleDescriptionEditor = $('textarea#ruleDescription');
    var imageGallery = $('div#imageGallery');
    var droppableSystemType = $('#droppableSystemType');
    var droppableTable = $('#tablesContainer');
    var droppableConditionalTable = $('#conditionalContainer');
    var content = "";
    var val = [];
    var conditional = [];

    $("html").on("dragover", function(event) {
        event.preventDefault();
        event.stopPropagation();

    });

    $("html").on("dragleave", function(event) {
        event.preventDefault();
        event.stopPropagation();
    });

    $("html").on("drop", function(e) {
        e.preventDefault();
        e.stopPropagation();
        var target = $(e.target);


        if (target.is("div")) {

        } else {
            $('#file').prop("files", e.originalEvent.dataTransfer.files);
        }
        //readSingleFile(e.originalEvent.dataTransfer.files);
        // if(e === ){
        //    $('#file').prop("files", e.originalEvent.dataTransfer.files);
        // }
        // else {}
    });

    function readSingleFile(e) {
        var file = e.target.files[0];

        if (!file) {
            return;
        }
        var reader = new FileReader();
        reader.onload = function(e) {

            var contents = e.target.result;
            var table = $(contents).find("#droppableTable");
            // Display file content
            $('#droppableSystemType').empty();
            displayContents(contents);




            $('#tablesContainer table.5Cols tbody tr td:nth-child(2) select').html($('#5Column select:eq(1)').html()); // returns orginal dropdown value fro type select on column 5; eq starts with 0
           $('#tablesContainer table.5Cols tbody tr td:nth-child(3) select').html($('#5Column select:eq(2)').html()); // returns orginal dropdown value fro property select on column 5
            $('#mainForm .ui.dropdown').each(function(index) {
                var id = $(this).closest('.ui-droppable').attr('id');
                var closestDiv = $(this).closest(table);
                if (id === "conditionalContainer") {
                    $(this).dropdown('set selected', conditional[index]);
                } else {
                    $(this).dropdown('set selected', val[index]);
                }
                //console.log(closestDiv);

            });
        };
        reader.readAsText(file);
    }

    function activateCheckboxDropdown() {
        $('.ui.checkbox').checkbox();
        $('.ui.dropdown').dropdown(); // activate dropdown
        $('.ui.checkbox.checked').checkbox('check'); // writing values
    }


    function displayContents(contents) {
        $(contents).find("FORMOBJECT").each(function() {
            var id = $(this).attr('id');
            var value = $(this).html();
            $('#' + id + '').val($.trim(value));


        });
        var ruleDescription = $(contents).find(".ui.segment:eq(0)");

        ruleDescriptionEditor.froalaEditor('html.set', ruleDescription.html())


        var content = $(contents).find("#appendImage");
        var checkBox = $(contents).find("#droppableSystemType .ui.checkbox.checked > input:checkbox");
        var radioCheck = $(contents).find("#droppableSystemType .ui.checkbox.checked > input:radio");
        if ($(radioCheck).length > 0 && $(checkBox).length > 0) { // check if it is GFA or PUB
            $("#draggableSystemTypeGFA").clone().appendTo($('#droppableSystemType')).promise().done(function() {
                activateCheckboxDropdown();
                $(radioCheck).each(function(index) {
                    var id = $(this).attr('value');
                    console.log(id);
                    // ui radio checkbox Included checked
                    $('#droppableSystemType .ui.radio.checkbox.' + id + '').checkbox('check');
                });
                $(checkBox).each(function(index) {
                    var id = $(this).attr('value');
                    console.log(id);
                    // ui radio checkbox Included checked
                    $('#droppableSystemType .ui.checkbox.' + id + '').checkbox('check');
                });

            });
        }
         else{ // if PUB
            $("#draggableSystemType").clone().appendTo($('#droppableSystemType')).promise().done(function() {
                activateCheckboxDropdown();
                $(checkBox).each(function(index) {
                    var id = $(this).attr('value');
                    console.log(id);
                    id = id.replace(/\s/g, '');
                    // ui radio checkbox Included checked
                    $('#droppableSystemType .ui.checkbox.'+id+'').checkbox('check');

                });

            });

        }

        imageGallery.froalaEditor('html.set', $(content).html());
        var table = $(contents).find("#droppableTable");
        droppableTable.html(table.html()).promise().done(function() {
            $(".getIdToBeTextValue").each(function(index) {
                var id = $(this).attr("id");
                $(this).val(id);

            });

            $("table.removeSelectedTable").click(function(event) {
                var elementID = event.target.id;
                var elementClass = event.target.className;
                //console.log("ID: ", elementID, "Class: ", elementClass);
                if (elementID === 'deleteRow' || elementClass === 'trash red icon') {
                    $(event.target).closest("tr").remove();
                    counter -= 1;
                }
            });
            $('.ui.dropdown').dropdown();
            $('.deleteTable').on("click", function() {
                $(this).closest("table").remove();
            });
        });

        //==== for  table ===

        $(contents).find("TBLOBJECT").each(function() {
            if ($(this).attr("type") === "select") {
                val.push($(this).attr("value"));
            }

        });
        //===== for conditional======

        $(contents).find("CONDITIONOBJECT").each(function() {
            if ($(this).attr("type") === "select") {
            //    conditional.push($(this).attr("value"));
            }
        })


        var conditional = $(contents).find("#droppableConditionalTable");
        droppableConditionalTable.html(conditional.html()).promise().done(function() {
          $('input[type="number"]').each(function(index) {
                   $(this).attr('step', 0.01);

          });
            activateCheckboxDropdown();
            $(".removeSegment").click(function(event) {
                var elementID = event.target.id;
                var elementClass = event.target.className;
               $(event.target).closest(".draggableConditionalTable").remove();

            });
            $('.ui.dropdown').dropdown();
            $('.deleteTable').on("click", function() {
                $(this).closest("table").remove();
            });
        });

        $(".getIdToBeTextValueCConditional").each(function(index) {
            var id = $(this).attr("id");
            $(this).val(id);

        });
        console.log
      $('.ui.center.aligned.header').each(function(index) {
          var text = $(this).text();
        console.log(text);
        if(text == 'Rule Description' || text == 'Rule Descriptions'){
           $(this).remove()
        }

      })

    }

    $('#file').on('change', function(e) {
        readSingleFile(e);

    });

});
