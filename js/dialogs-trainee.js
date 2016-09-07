$(function(){

    //отправляет запрос на изменение статуса всех сообщений на ПРОЧИТАНО
    $(document).ready(function(){
        var url = '/trainee/read-messages';
        $.post(url);
    });

});
