$(function(){
    $('.save').on('click', function(){
        var trainer_id = $(this).siblings('.trainer_id').val();
        var trainee_program_id = $(this).parents('.program').find('.trainee_program_id').val();
        var program_workout_id = $(this).siblings('.program_workout_id').val();
        var data = {
            TraineeProgramWorkouts:
                {
                    trainer_id:trainer_id,
                    trainee_program_id:trainee_program_id,
                    program_workout_id:program_workout_id
                }
             };
        $.post('/trainee/start',data);
    });
});