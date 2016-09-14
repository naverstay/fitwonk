$(function(){
    autosize($('.chat #dialogmessage-message'));

    $('.wr-lenta').each(function(){

        $(this).scrollTop(99999);

    });

    $('#dialogmessage-message').val('');

    $('.send-message input[type=submit]').on('click',function(e){

        e.preventDefault();

        var data = $(this).parents('.send-message').serialize();

        var $this = $(this);

        $.post('/widget/send-dialog-message',data,function(resp){

            if (resp) {

                var obj = jQuery.parseJSON(resp);

                var html = '<div class="message my">' + obj.message + '<span class="reserv type2"></span><div class="date">'
                    + obj.time +
                    '</div><div class="tail"></div></div>';

                $this.parents('.chat').find('.lenta').append(html);

                $this.parents('.chat').find('.wr-lenta').scrollTop(99999);

                $this.parents('.chat').find('#dialogmessage-message').val('');

                autosize.update($('.chat #dialogmessage-message'));
            }

        });

    });

    $('.previous').on('click',function(){

        var dialog = $(this).parents('.chat');

        var data = 'limit=10&offset='+dialog.data('offset');

        $.post('/widget/previous-messages?dialog_id='+dialog.data('dialog_id'), data, function(resp){

            var obj = jQuery.parseJSON(resp);

            dialog.find('.setting-line').after(obj.content);

            dialog.data('offset', obj.offset);

        });

    });

    $('.drop-block').on('click', function(){

        $(this).find('.wr-lenta').scrollTop(99999);

    });
});