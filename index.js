$(document).ready(function(){


    //disable/enable form submit button
    $('#submitbtn').prop('disabled',true);

    $('#username,#email,#mobile,#image').on('input',function(){
       
        if (($('#username').val()) != '' && $('#email').val() != '' && $('#mobile').val() != '' && $('#image').val() != '')
                {
                     $('#submitbtn').prop('disabled', false);
                }
                else
                {
                   $('#submitbtn').prop('disabled', true);
                }
    });


    //calling functions

    $("#username").on("input",function(){
        checkuser();
    });


    $("#email").on("input",function(){
        checkemail();
    });


    $("#mobile").on("input",function(){
        checkmobile();
    });


    $('#image').on('change', function() {
        fileupload();
    });







/*   const submitButton = document.getElementById("#submit");
    const input = document.getElementById("#username","#email","#mobile");

    input.addEventListener("keyup",(e) =>{
        const value = e.currentTarget.value;
        if(value === "")
        {
            submitButton.disabled = true;
        }
        else
        {
            submitButton.disabled = false;
        }
    });
*/


//user validation 
function checkuser()
{
        var name_pattern = /^[A-Za-z]+$/;
        var value = $("#username").val();

        if(value!=="" && !name_pattern.test(value))
        {
            $("#username_err").text("Please enter valid username");
        }
        else{
            $("#username_err").text("");
        }
  
}


//email validation
function checkemail()
{
        var email_pattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        var value = $("#email").val();

        if(value!=="" && !email_pattern.test(value))
        {
            $("#email_err").text("Please enter valid gmail");
        }
        else{
            $("#email_err").text("");
        }
}


//mobile validation
function checkmobile()
{
    
    var $i = $("#mobile").val().length;

        var mob_pattern = /^[0-9]+$/;
        var value = $("#mobile").val();

        if(value!=="" && !mob_pattern.test(value)) 
        {
            $("#mobile_err").text("only number is allowed");
        }
        else if($i != 10) {
            $("#mobile_err").text("Mobile number must be 10 digits");
        }
        else{
            $("#mobile_err").text("");
        }
}


//file upload
function fileupload()
{
    //console.log("start load");
    var file2 = image.files[0];

    if (file2) 
    {
        var extension = file2.type;

        // Create array with the files extensions that we wish to upload
        var validFileExtensions = ['image/jpeg', 'image/jpg', 'image/png'];
        
        if (validFileExtensions.indexOf(extension) === -1) 
        {
            
            $('#file_err').text("Sorry!! Upload only jpg, jpeg, png, gif, bmp file").show();
            $('#submitbtn').prop('disabled', true);
        }
        else if ($("#image")[0].files[0].size > (1024 * 1024 * 2))
            {
              console.log("else");
                $('#file_errg').text("Sorry!! Max allowed file size is 2 MB").show();                  
                $('#submitbtn').prop('disabled', true);
            }
        else 
            {
                $('#file_err').text('').hide();
                $('#submitbtn').prop('disabled', false);           
            }
        

    }
}

});
