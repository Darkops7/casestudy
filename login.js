



$(document).ready(function(){

    function todo()
    {
        setTimeout (function(){
        window.location.replace("todo.html"); 
        },3000);
        // to change the location while clicking the button
    }
    $("#submit").click(function(e){
        e.preventDefault();
        // method in jQuery to stop the default action of selected element to occur.
     
        //         validating username and password
     
    if ($("#user").val()==""|| $("#password").val()=="")
    {
        $("p").html("<h5>Please provide a Valid username and Password</h5>")
        $("p").css({"color": "red","font-size": "100%"});
    }
//         when the username and password is empty,it must show a message like"enter the credentials.for this we are selecting the id names of user input and password input and
//         we are using .val(), an inbuilt method in jQuery to set/returns the value of an attribute to the selected elements.
    // here it will get the value of the input box with these user names

        
    else if ($("#user").val()=="admin" &&  $("#password").val()=="12345")
    {
        setTimeout(function()
        {
            $("p").html("<h5>Welcome To Your TODO List</h5>")
            $("p").css({"color": "green","font-size": "100%"});
        });
              
        access (todo)
    }
    else{
        $("p").html("<h2>Your username or Password does not match. Please verify and try again</h2>")
        $("p").css({"color": "red","font-size": "50%"});

    }
    function access(callback)
    {
        // alert("LOGIN Sucessfull");
        callback()
    }
     })

})















