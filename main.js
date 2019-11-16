$(function(){
    $('.p1').css('color','#0000ff');
    $('p','div:eq(0)').css('backgroundColor','#ccc');
    $('div').addClass('block1');
    txt_val=$('div p:eq(0)').text();
    $('.p1').text('Здусь был четвертый ээлемент');
    $('#button_enter').click(function(){
        log=$('#login');
        pass=$('#password');
        log.removeClass('error');
        pass.removeClass('error');
        if (log.val()==''){
            log.addClass('error');
        }
        if (pass.val()==''){
            pass.addClass('error');
        }
    });
    $('.div__1').hover(function(){
        $('.div__2').hide();
    });
})
