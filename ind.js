$(document).ready(function(){
    $("a[target='_blank'").css("background-color","red");
    $("#hide").click(function(){
        $("#effect").hide(1000);
    });
    $('#bt').click(function(){
        $('.pr').hide();
    })
    $('#show').on("click",function(){
        $('#effect').show();
    });
    $('#toggle').on("click",function(){
        $('#effect').toggle();
    });
    $('#fadein').click(function(){
        $('#div1').fadeIn(3000);
    });
    $('#fadeout').click(function(){
        $('#div1').fadeOut(3000);
    });
    $('#fadetoggle').click(function(){
        $('#div1').fadeToggle(3000);
    });
    $("#flip").click(function(){
        $("#panel").slideToggle("slow");
    });
    $("#animate").click(function(){
        $(".anim").animate({left: '250px'},3000);
    });
    $("#stop").click(function(){
        $(".anim").stop();
    });
    $('#showtext').click(function(){
        alert($('#test').text());
    });
    $('#showhtml').click(function(){
        alert($('#test').html());
    });
    $('#changetext').click(function(){
        $('#test').text("hello world");
    });
    $('#changehtml').click(function(){
        $('#test').html("<b>hello world</b>");
    });
    $('#changeval').click(function(){
        $('#checkval').val("kunal");
    });
    $('#showtext1').click(function(){
        $('#edit').text(function(i,orig){
            return orig+"good morning";
        })
    })
    $('#showtext2').click(function(){
        $('#edit').html(function(i,orig){
            return orig+"<b>good morning<b/>";
        })
    });
    $('#prepend').on("click",function(){
        $('#addelem').prepend("<b>prepend</b>");
    });
    $('#append').on("click",function(){
        $('#addelem').append("append");
    });
    $('#before').click(function(){
        $('[alt=jQuery]').before("hello,<b>before</b>");
    });
    $('#after').click(function(){
        $('[alt=jQuery]').after("hello,<b>after</b>");
    });
    $('#empty').click(function(){
        $('#itememp').empty();
    });
    $('#remove').click(function(){
        $('#itemrem').remove();
    });
    $('#addclass').click(function(){
        $('#iadd').addClass("blue");
    });
    // $(document).scroll(function(){
    //     alert("scroll");
    // })
    $('#removeclass').click(function(){
        $('#irem').removeClass("red");
    })
    $('#toggleclass').click(function(){
        $('#irem').toggleClass("red");
        $('#iadd').toggleClass("blue");
    });
    $('#dim').click(function(){
        var text =`width : ${$('#hgt').width()} <br/>
                    height : ${$('#hgt').height()}`
        $('#hgt').html(text);
    });
    $('#innerdim').click(function(){
        var text =`width : ${$('#hgt').innerWidth()} <br/>
                    height : ${$('#hgt').innerHeight()}`
        $('#hgt').html(text);
    });
    $('#outerdim').click(function(){
        var text =`width : ${$('#hgt').outerWidth()} <br/>
                    height : ${$('#hgt').outerHeight()}`
        $('#hgt').html(text);
    });
    $('#parent').click(function(){
        $('#spn').parent().css({"color": "red","border":"2px solid red"});
    });
    $('#parents').click(function(){
        $('#spn').parents().css({"color": "red","border":"2px solid red"});
    });
    $('#parentuntil').click(function(){
        $('#spn').parentsUntil("div").css({"color": "red","border":"2px solid red"});
    });
    $('#child').click(function(){
        $('#grt').children().css({"color": "red","border":"2px solid red"});
    });
    $('#find').click(function(){
        $('#grt').find("span").css({"color": "red","border":"2px solid red"});
    });
    $('#sib').click(function(){
        $('#selectsib').siblings().css({"color": "red","border":"2px solid red"});;
    });
    $('#sibs').click(function(){
        $('#selectsib').siblings('span').css({"color": "red","border":"2px solid orange"});;
    });
    $('#next').click(function(){
        $('#selectsib').next().css({"color": "red","border":"2px solid green"});;
    });
    $('#nextall').click(function(){
        $('#selectsib').nextAll().css({"color": "red","border":"2px solid yellow"});;
    });
    $('#nextuntil').click(function(){
        $('#selectsib').nextUntil("h3").css({"color": "red","border":"2px solid blue"});
    });
    $('#first').click(function(){
        $('.para').first().css({"background-color": "red"})
    });
    $('#last').click(function(){
        $('.para').last().css({"background-color": "blue"});
    });
    $('#index').click(function(){
        $('.para').eq(2).css({"background-color": "orange"});
    });
    $('#filter').click(function(){
        $('.para').filter("#param").css({"background-color": "green"});
    });
    $('#not').click(function(){
        $('.para').not("#param").css({"background-color": "yellow"});
    });

});
$(function(){
    $('#mousedown').css("display","inline").mousedown(function(){
        alert("mouseDown");
    });
    $('#mouseup').css("display","inline").mouseup(function(){
        alert("mouseup");
    });
    $('#mouseenter').css("display","inline").mouseenter(function(){
        alert("mouseenter");
    });
    $('#mouseleave').css("display","inline").mouseleave(function(){
        alert("mouseleave");
    });
    $('#hover').hover(function(){
        alert("hover");
    });
    $('input[type="text"]').focus(function(){
        $(this).css("background-color", "green");
    })
    $("input").blur(function(){
        $(this).css("background-color", "#ffffff");
    });
    $("form").submit(function(){
        alert("submit");
    }).change(function(){
        alert("change");
    });
    
})
