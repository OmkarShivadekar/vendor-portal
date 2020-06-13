$(document).ready(function() {
        $('#example').DataTable();
      });

      $(document).on("click", ".browse", function() {
        var file = $(this).parents().find(".file");
        file.trigger("click");
      });
      $('input[type="file"]').change(function(e) {
        var fileName = e.target.files[0].name;
        $("#file").val(fileName);

        var reader = new FileReader();
        reader.onload = function(e) {
          // get loaded data and render thumbnail.
          document.getElementById("preview").src = e.target.result;
        };
        // read the image file as a data URL.
        reader.readAsDataURL(this.files[0]);
      });

      $("#pop").on("click", function() {
         $('#imagepreview').attr('src', $('#preview').attr('src')); // here asign the image to the modal when the user click the enlarge link

         $('#myModalLabel').text($("#file").val());
         $('#imagemodal').modal('show'); // imagemodal is the id attribute assigned to the bootstrap modal, then i use the show function
      });


      function performOp(){
        var btnState = document.getElementById("changeAction").textContent;
        
        if(btnState == "Edit"){
          editOp();
        } else if(btnState == "Update"){
          updateOp();
        }
      }

      function resetOp(){
        var btnState = document.getElementById("resetAction").textContent;

        if(btnState == "Cancel"){
          cancelOp();

        } else if(btnState == "Close"){
          closeOp();
        }       
      }

      function editOp(){
        $("#changeAction").html('Update');
        $("#resetAction").html('Cancel');
        enableControls();
      }

      function updateOp(){

      }

      function cancelOp(){
        $("#changeAction").html('Edit');
        $("#resetAction").html('Close');
        disableControls();
      }

      function closeOp(){
        $('#viewProduct').modal('toggle');
      }

      function enableControls(){
        $("#file").prop('disabled', false);
        $("#capture").removeClass("disabled");
        $("#pName").prop('disabled', false);
        $("#vName").prop('disabled', false);
        $("#cNumber").prop('disabled', false);
        $("#distance").prop('disabled', false);
        $("#cost").prop('disabled', false);
        $("#dDate").prop('disabled', false);
        $("#yes").prop('disabled', false);
        $("#no").prop('disabled', false);
        $("#address").prop('disabled', false);
        
      }

      function disableControls(){
        $("#file").prop('disabled', true);
        $("#capture").addClass("disabled");
        $("#pName").prop('disabled', true);
        $("#vName").prop('disabled', true);
        $("#cNumber").prop('disabled', true);
        $("#distance").prop('disabled', true);
        $("#cost").prop('disabled', true);
        $("#dDate").prop('disabled', true);
        $("#yes").prop('disabled', true);
        $("#no").prop('disabled', true);
        $("#address").prop('disabled', true);
      }