function formValidation(){
    var uname = document.registration.Name;
    var uadd = document.registration.Address;
    var ucountry = document.registration.country;
    var uzip = document.registration.Zip;
    var uemail = document.registration.Email;
    
    if(allLetter(uname))
    {
        if(alphanumeric(uadd))
        {
            if(countryselect(ucountry))
            {
                if(allnumeric(uzip))
                {
                    if(ValidateEmail(uemail))
                    {
                        
                    }
                }
            }
        }
    }

return false;
}

function allLetter(uname)
{
    var letters = /^[A-Za-z]+$/;
    if(uname.value.match(letters))
    {
        return true;
    }
    else{
        alert('Username must have alphaber character only');
        uname.focus();
        return false;
    }
}


function alphanumeric(uadd)
{
    var letters = /^[0-9a-zA-Z]+$/;
    if(uadd.value.match(letters))
    {
        return true;
    }
    else{
        alert("User Address must have alphanumeric characters only");
        uadd.focus();
        return false;
    }
}

function countryselect(ucountry)
{
    if(ucountry.value == 'Default')
    {
        alert('Select your country from the list');
        ucountry.focus();
        return false;
    }
    else{
        return true;
    }
}


function allnumeric(uzip)
{
     var numbers = /^[0-9]+$/;
     if(uzip.value.match(numbers))
     {
         return true;
     }
     else
     {
         alert('ZIP code must have numeric characters only')
         uzip.focus();
         return false;
     }
}


function ValidateEmail(uemail)
{
    var mailformat =/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if(uemail.value.match(mailformat))
    {
        return true;
    }
    else{
        alert('You have entered an invalid email address!!');
        uemail.focus();
        return false;
    }
}

