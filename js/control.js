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
    //console.log('oooook');
    if(leftmenuopen){
        //already open
        leftmenuopen=false;
        leftmenu.style.left='-300px';
        mainpage.style.left='0px';
    }else{
        //haven't open
        leftmenuopen=true;
        leftmenu.style.left='0px';
        mainpage.style.left='300px';
    }
}