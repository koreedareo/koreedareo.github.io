var works_list = [
    {logo:"portforio.png", name:"ポートフォリオ", contain:"当ポートフォリオです", url:'#'},

    {logo:"notify.png", name:"天気API", contain:"くじら天気APIを使用しました。"},
];



var resize_func = function (width) {
    $('#works_list').empty();
    //add member function
    $.each(works_list,function(i,v){
        $("#works_list").append("\
        <div class='col-3 col-md-12 col-lg-6' style='margin-bottom: 15px;'> \
            <center class='box' style='width: 100%; color: back;'> \
            <a href='"+v.url+"'><img src='image/works/"+v.logo+"' style='width: 100%;  border:1px var(--main-bg-color) solid; '> </a>\
            <div style='width: 200px; margin: 5px auto 0; font-size: 20px;  padding-bottom: 3px;'> \
                    "+v.name+"<br><br>\
            </div> \
            <div style='width: 100%; margin: 3px auto 0; font-size: 15px;'> \
                    "+v.contain+" \
            </div> \
            </center> \
        </div> \
        <br> \
        ");
    });
};


$(function(){
    resize_func($(window).width());
    $(window).resize(function(){
        resize_func($(window).width());
    });
});
