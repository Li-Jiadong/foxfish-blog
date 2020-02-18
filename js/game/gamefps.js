
var paint=document.getElementById("can");
paint=paint.getContext('2d');
function paintx(x){//坐标变换
    return x+192;
}
function painty(y){
    return 224-y;
}

function show(){
    //radians=(Math.PI/180)*degrees
    paint.clearRect(0,0,384, 448);
    paint.strokeRect(0,0,384,448);
    //plater bullets
    paint.fillStyle="#9fee00";
    paint.globalAlpha=0.8;
    for(i=0;i<player_bullets.length;++i){
        paint.beginPath();
        paint.arc(paintx(player_bullets[i].x),painty(player_bullets[i].y),player_bullets[i].r,0,paintangle(360),true);
        paint.fill();
    }

    //bullets
    paint.fillStyle="#3914af";
    paint.globalAlpha=1;
    for(i=0;i<enemy_bullets.length;++i){
        paint.beginPath();
        paint.arc(paintx(enemy_bullets[i].x),painty(enemy_bullets[i].y),enemy_bullets[i].r,0,paintangle(360),true);
        paint.fill();
    }

    //player
    paint.fillStyle="#000000";
    paint.globalAlpha=1;
    paint.beginPath();
    paint.arc(paintx(player.x),painty(player.y),player.r+3,0,paintangle(360),true);
    paint.fill();
    if(player.slow){
        paint.fillStyle="#ff0000";
        paint.beginPath();
        paint.arc(paintx(player.x),painty(player.y),player.r,0,paintangle(360),true);
        paint.fill();
    }
    
}   

function updateall(){
    fpstime++;
    //cs
    //player
    player.update();

    //player_bullets
    for(i=0;i<player_bullets.length;++i){
        while(i<player_bullets.length&&player_bullets[i].distroy){
            temp=player_bullets[i];
            player_bullets[i]=player_bullets[player_bullets.length-1];
            player_bullets[player_bullets.length-1]=temp;
            player_bullets.pop();
        } 
    }
    for(i=0;i<player_bullets.length;++i){
        player_bullets[i].update();
    }
    //task
    //alert(task);
    for(i=0;i<task.length;++i){
        task[i]();
    }
    //bullets
    for(i=0;i<enemy_bullets.length;++i){
        while(i<enemy_bullets.length&&enemy_bullets[i].distroy){
            temp=enemy_bullets[i];
            enemy_bullets[i]=enemy_bullets[enemy_bullets.length-1];
            enemy_bullets[enemy_bullets.length-1]=temp;
            enemy_bullets.pop();
        } 
    }
    for(i=0;i<enemy_bullets.length;++i){
        enemy_bullets[i].update();
    }
    show();
}