$(function(){
    $('#send').on('click',function(){
        var date_from = $('#from').val();
        var date_to = $('#to').val();
        var from = new Date(date_from).getTime()/1000;
        var to = new Date(date_to).getTime()/1000;
        var url = '/trainee/anthropometry-graph?date_from='+from+'&date_to='+to;
        window.location.replace(url);
    });
});