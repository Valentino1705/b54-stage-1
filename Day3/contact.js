function submitHandler () {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const subject = document.getElementById('subject').value;
    const message = document.getElementById('message').velue;

    if(name == '') {
        alert('Please enter your name !');
        return;
    } else if(email == '') {
        alert('Please enter your email !');
        return;
    } else if(phone == '') {
        alert('Please enter your phone !');
        return;
    } else if(subject == '') {
        alert('Please enter your subject !');
        return;
    } else if(message == '') {
        alert('Please enter your subject !');
        return;
    }

    const data = {
        name, email, phone, subject, message
    }

    const yourmail = "felicvalenthino14@gmail.com"

    let a = document.createElement("a");
    a.href = `https://mail.google.com/mail?view=cm&fs=1&to=${email}&su=${subject}&body=${message}`
    a.click();

    }
