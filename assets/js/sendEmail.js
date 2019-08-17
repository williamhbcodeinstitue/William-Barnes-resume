function sendMail(contactForm) {
    emailjs.send("gmail", "william", {
        "from_name": contactForm.name.value,
        "from_email": conactForm.emailaddress.value,
        "project_request": contactForm.projectsummary.value
    })
    .then(
        function(response) {
            console.log("SUCCESS", response);
            
        },
        function(error) {
            console.log("FAILED", error);
        });
}