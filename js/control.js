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