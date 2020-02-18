var gameprogress;
var thread;
function randbullet(x,y,v,times){
    enemy_bullets.push(new Bullet(x,y,v,Math.random()*360,15));
    //alert("add");
}
function aimbullet(x,y,v,times){
    // var a=Math.atan((player.y-y)/(player.x-x));
    // a=calcangle(a);
    // if(player.x<0) a+=180;
    // var i=0;
    // if(times%2==0) i=15
    for(i;i<360;i+=30){
        enemy_bullets.push(new Bullet(x,y,v,-90+i+times*13,10));
    }
}
function circlebullet(x,y,v,times){
    var a=Math.atan((player.y-y)/(player.x-x+100));
    a=calcangle(a);
    if(player.x<0) a+=180;
    //alert(30*Math.sin(paintangle(times*10)));
    for(i=0;i<4;++i){
        enemy_bullets.push(new Bullet(x-100,y,v,a-30+i*90+15*Math.sin(paintangle(times*10)),5));
    }
    var a=Math.atan((player.y-y)/(player.x-x-100));
    a=calcangle(a);
    if(player.x<0) a+=180;
    for(i=0;i<4;++i){
        enemy_bullets.push(new Bullet(x+100,y,v,a+30+i*90-15*Math.sin(paintangle(times*10)),5));
    }
    var a=Math.atan((player.y-y-50)/(player.x-x-30));
    a=calcangle(a);
    if(player.x<0) a+=180;
    for(i=0;i<4;++i){
        enemy_bullets.push(new Bullet(x+30,y+50,v,a-30+i*90+15*Math.sin(paintangle(times*10)),5));
    }
    var a=Math.atan((player.y-y-50)/(player.x-x+30));
    a=calcangle(a);
    if(player.x<0) a+=180;
    for(i=0;i<4;++i){
        enemy_bullets.push(new Bullet(x-30,y+50,v,a+30+i*90-15*Math.sin(paintangle(times*10)),5));
    }
}

function gameinit(){
    
    document.onkeydown = function(e) {
        e = e || event;
        if (e.keyCode == 37) {
            //你自己的代码
            return false;
        }
        if (e.keyCode == 38) {
            //你自己的代码
            return false;
        }
        if (e.keyCode == 39) {
            //你自己的代码
            return false;
        }
        if (e.keyCode == 40) {
            //你自己的代码
            return false;
        }
    }
    gameprogress=setInterval(updateall,16.67);
    //task.push(gametimer(2,function(){randbullet(0,100,4);} ));
    task.push(gametimer(8,function(times){aimbullet(0,100,4,times);} ));
    //task.push(gametimer(4,function(times){circlebullet(0,100,5,times);} ));
}

