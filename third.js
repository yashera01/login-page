let username = document.getElementById("username");
        let passw = document.getElementById("password");
        let flag =1;
        function validateform()
        {
            if(username.value =="")
            {
                document.getElementById("usererror").innerHTML = "user name is empty";
                flag =0;
            }
            else if(username.value.length < 4){
                document.getElementById("usererror").innerHTML = "user name required minimum 4 characters";
                flag=0;
            }
            else{
                document.getElementById("usererror").innerHTML = "";
                flag =1;
            }
            if(password.value =="")
            {
                document.getElementById("passerror").innerHTML = "password is empty";
                flag=0;
            }
            else{
                document.getElementById("passerror").innerHTML = "";
                // flag =1;
            }
        
            if(flag)
            {
                alert("click ok to submit the form");
                return true;
            }
            else{
                return false;
            }
        }