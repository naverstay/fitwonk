$(function(){
    $('#select-program').on('click', function(){
        var data = 'TraineePrograms[program_id]='+$('#programs').val();
        var url = '/trainee/select-program';
        $.post(url,data);
    });
});