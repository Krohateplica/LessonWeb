function setImg(selected_url) {
    var item = document.getElementById('preview');
    item.src = selected_url;
}

function submitForm(name, tel, car) {
    $.ajax({
        method:"POST",
        url:"/HOME/Order",
        data:{Name:name,Tel:tel,Car:car}
    }).fail(function () {
        alert("При передаче данных произошла ошибка!");
    }).done(function (context) {
        alert(context);
    });
}

$(document).ready(function () {
    $('#header').fadeTo(2000, 0.5, function () {
        $('html, body').animate({
                scrollTop: $('#content').offset().top
            }, 2000
        );
    });
});
$(document).on('submit', 'form', function() {
    var UserName=$('input[name=Name]').val();
    var UserTel=$('input[name=Tel]').val();
    var Car=$('select').val();
   /*Валидация данных*/
   //Проверка имени
   if(UserName.length>0){
       //проверка телефона
       var regular=/^\8-[0-9]{3}-[0-9]{3}-[0-9]{4}/;
       if(regular.test(UserTel)==true){
           alert("отлично!");
           submitForm(UserName,UserTel,Car);
       }
       else {
           alert('Не укзан номер телефона')
       }
   }
   else {
       alert('Не укзано имя ')
   }

});