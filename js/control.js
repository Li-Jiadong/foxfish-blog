var leftmenuopen=false;
window.onload=function(){
    var imsize=document.getElementById('headimg');
    var w=Number(imsize.clientWidth);
    imsize.style.height=w/16*8+'px';
}
window.onresize = function(){
    var imsize=document.getElementById('headimg');
    var w=Number(imsize.clientWidth);
    imsize.style.height=w/16*8+'px';
}
function showleftmenu(){
    var leftmenu=document.getElementById('leftmenu');
    var mainpage=document.getElementById('mainpage');
    var returnpage=document.getElementById('leftmenu_right');
    //console.log('oooook');
    if(leftmenuopen){
        //already open
        leftmenuopen=false;
        returnpage.style.display='none';
        document.body.style.overflow='auto';
        //动画
        leftmenu.style.left='-300px';
        mainpage.style.left='0px';
    }else{
        //haven't open
        leftmenuopen=true;
        //alert(document.documentElement.clientHeight);
        leftmenu.style.height=document.documentElement.clientHeight+'px';
        returnpage.style.display='block';
        returnpage.style.height=document.documentElement.clientHeight+'px';
        returnpage.style.width=document.documentElement.clientWidth-300+'px';
        document.body.style.overflow='hidden';
        //动画
        leftmenu.style.left='0px';
        mainpage.style.left='300px';
    }
}