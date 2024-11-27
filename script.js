function checkFirst(){
    var first = document.getElementById("first").value;
    var regex = /^[a-zA-Zа-яА-ЯёЁ\s\-]{2,50}$/;

    if(regex.test(first)) {
        document.getElementById("first_Check").style.color = "green";
        document.getElementById("first_Check").innerHTML = "Имя введено корректно!";
        return true;
    }
    else{
        document.getElementById("first_Check").style.color = "red";
        document.getElementById("first_Check").innerHTML = "Введите от 2 до 50 символов";
        return false;
    }
}


function checkLast(){
    var last = document.getElementById("last").value;
    var regex = /^[a-zA-Zа-яА-ЯёЁ\s\-]{2,50}$/;

    if(regex.test(last)) {
        document.getElementById("last_Check").style.color = "green";
        document.getElementById("last_Check").innerHTML = "Фамилия введена корректно!";
        return true;
    }
    else{
        document.getElementById("last_Check").style.color = "red";
        document.getElementById("last_Check").innerHTML = "Введите от 2 до 50 символов";
        return false;
    }
}

function checkPhone() {
    var phone = document.getElementById("phone").value;
    var regex = /^\+7\d{10}$/;

    if (regex.test(phone)) {
        document.getElementById("phone_Check").style.color = "green";
        document.getElementById("phone_Check").innerHTML = "Номер введен корректно!";
        
        return true;
    } else {
        document.getElementById("phone_Check").style.color = "red";
        document.getElementById("phone_Check").innerHTML = "Введите номер в формате +7XXXXXXXXXX";
        return false;
    }
}

function checkEmail() {
    var email = document.getElementById("email").value;
    var regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (regex.test(email)) {
        document.getElementById("email_Check").style.color = "green";
        document.getElementById("email_Check").innerHTML = "E-mail введён корректно!";
        return true;
    } else {
        document.getElementById("email_Check").style.color = "red";
        document.getElementById("email_Check").innerHTML = "Введите корректный E-mail в формате example@mail.ru";
        return false;
    }
}



function outputData() {
    var first = document.getElementById("first").value;
    var last = document.getElementById("last").value;
    var phone = document.getElementById("phone").value;
    var email = document.getElementById("email").value;
    var course = document.getElementById("course").value;
    var time = document.getElementById("time").value;
    var payment = document.getElementById("payment").value;
    var submitButton = document.querySelector(".form_button");
    var likeimg = document.querySelector(".likeimg");

    if (first && last && phone && email && course && time && payment) {
        summary.style.color = "black";
        summary.style.display = "block"; 
        summary.innerHTML = `
            Спасибо за заказ, ${first} ${last}!<br>
            Вы будете получать материалы по курсу <strong>${course}</strong> 
            каждый день в <strong>${time}</strong> на почту <strong>${email}</strong>.
        `;

        likeimg.style.display = "block";
  
        submitButton.style.backgroundColor = "#28a745";  
        submitButton.style.borderColor = "#28a745"; 
        submitButton.style.color = "#fff"; 
    } else {
        summary.style.color = "red";
        summary.style.display = "block"; 
        summary.innerHTML = "Пожалуйста, заполните все поля формы.";


        submitButton.style.backgroundColor = "#dc3545"; 
        submitButton.style.borderColor = "#dc3545"; 
        submitButton.style.color = "#fff";  
    }
}



