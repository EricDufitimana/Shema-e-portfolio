function sendEmail(){
    let params = {
        first_name: document.getElementById('first_name').value,
        last_name: document.getElementById('last_name').value,
        email: document.getElementById('email').value,
        message: document.getElementById('message').value,
    };

        emailjs.send("service_cd0f7bs", "template_ch9vmky", params).then(function(){
            location.reload();   
            alert("Message Sent!!"); 
        }).catch(function(error){
            console.error("Error Sending Email: ", error);
        });
        
    
}