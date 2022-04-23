function removeItems() {
    document.getElementById('name').value = '';
    document.getElementById('email').value = '';
    document.getElementById('subject').value = '';
    document.getElementById('message').value = '';
}

var btn = document.getElementById('btn');
btn.addEventListener('click', function(e) {
    e.preventDefault()
    var nom = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var subject = document.getElementById('subject').value;
    var message = document.getElementById('message').value;
    var body = "Sujet : " + subject + "<br>" + "Nom complet : " + nom + "<br>" + "Email : " + email + "<br>" + "Message : " +message


    Email.send({
        Host: "smtp.gmail.com",
        Username: "tiemogosogodogo94@gmail.com",
        Password: "jpxiyttgqmjqwsql",
        To: 'tiemogosogodogo94@gmail.com',
        From: email,
        Subject: subject,
        Body: body,
    }).then(
        message => alert("Votre message a été envoyé. Merci !")
    );

    removeItems();
});