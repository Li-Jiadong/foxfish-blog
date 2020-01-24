var leftmenuopen=false;
var leftmenutime1,leftmenutime2;
var leftmenu,mainpage;
var cimages;
window.onload=function(){
    var imsize=document.getElementById('headimg');
    var w=Number(imsize.clientWidth);
    imsize.style.height=w/2+'px';
    leftmenu=document.getElementById('leftmenu');
    mainpage=document.getElementById('mainpage');
    leftmenu.style.left='-300px';
    mainpage.style.left='0px';
    cimages=changeimage();
}
window.onresize = function(){
    var imsize=document.getElementById('headimg');
    var w=Number(imsize.clientWidth);
    imsize.style.height=w/2+'px';//1140*570
}
function showleftmenu(){
    var returnpage=document.getElementById('leftmenu_right');
    //console.log('oooook');
    if(leftmenuopen){
        //already open
        leftmenuopen=false;
        returnpage.style.display='none';
        document.body.style.overflow='auto';
        //动画
        leftmenutime1=setInterval(function(){activemove('l',leftmenu.style.left.slice(0,-2),-300,-30,'px',leftmenutime1)},10);
        leftmenutime2=setInterval(function(){activemove('m',mainpage.style.left.slice(0,-2),0,-30,'px',leftmenutime2)},10);
        //leftmenu.style.left='-300px';
        //mainpage.style.left='0px';
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
        leftmenutime1=setInterval(function(){activemove('l',leftmenu.style.left.slice(0,-2),0,30,'px',leftmenutime1)},10);
        leftmenutime2=setInterval(function(){activemove('m',mainpage.style.left.slice(0,-2),300,30,'px',leftmenutime2)},10);
        //leftmenu.style.left='0px';
        //mainpage.style.left='300px';
    }
}
function activemove(obj,value,end,step,tail,timer){
    var now=Number(value)+Number(step);
    //console.log(now);
    if(value==end){
        clearInterval(timer);
    }else{
        if(obj=='l'){
            leftmenu.style.left=now+tail;
        }else if(obj=='m'){
            mainpage.style.left=now+tail;
        }
    }
}
function changeimage(){
    var num=16;
    var i=Math.floor(Math.random()*num);
    var imgs=document.getElementById('imgs');
    imgs.src='./image/head'+i+'.jpg';
    return function(){
        //alert(i);
        var ii
        do{
            ii=Math.floor(Math.random()*num);
        }while(i==ii);
        i=ii;
        imgs.src='./image/head'+i+'.jpg';
    }   
}