$(function(){
    $('.measure').on('click',function(e){
        e.preventDefault();
        var data =  'AnthropometryMeasurement[user_id]='+$(this).data('uid')+
                    '&AnthropometryMeasurement[type]='+$(this).data('type')+
                    '&AnthropometryMeasurement[value]='+$(this).parent().find('input').val();

        $.post('/trainee/save-anthropometry',data);
    });
});