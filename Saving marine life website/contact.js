//Function to validate the form
//The event function is what allows user input interations


function validateForm(event){
    event.preventDefault(); //Capital D for Default
    //Prevent default does not allow you to submit the form without input data
    
    //fetch the form values
    

   
   
   
 

    //Clearing previous errors
    document.getElementById('FirstNameError').textContent='';
    document.getElementById('SurnameError').textContent='';
    document.getElementById('ContactNumberError').textContent='';
    document.getElementById('EmailaddressError').textContent='';


    //Validate the name field
    if (FirstName === ''){
        document.getElementById('FirstNameError').textContent ='Please enter your name';
        return;
    }

    if (Surname === ''){
        document.getElementById('SurnameError').textContent ='Please enter your Surname';
        return;
    }

    if (ContactNumber === ''){
        document.getElementById('ContactMumberError').textContent ='Please enter your Contact Number';
        return;
    }

    if (Emailaddress === ''){
        document.getElementById('EmailaddressError').textContent ='Please enter your email';
        return;
    }

    //Display success message
    alert('Form submitted successfully!');

}

//Validate the form
var form = document.getElementById('ContactForm');
form.addEventListener('button', validateForm);
//Addeventlistener calls the code to validate the form