$(function(){
    //Закрытие диалога
    $('.close-dialog').on('click', function(){

        var url = '/trainer/close-dialog/?id='+$(this).data('dialog');

        $.post(url);

    });
    //отправляет запрос на изменение статуса всех сообщений стажера диалога на ПРОЧИТАНО
    $('.open-dialog').on('click',function() {

        var url = '/trainer/read-messages/?id=' + $(this).data('dialog')+'&trainee=' + $(this).data('trainee');

        $.post(url);

    });

    //Перенос диалога в архив
    $('.archive-dialog').on('click', function(){

        var url = '/trainer/archive-dialog/?id='+$(this).data('dialog');

        $.post(url);

    });
});

