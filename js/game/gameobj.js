var enemy_bullets=[];
var player_bullets=[];
var task=[];
var enemys=[];
var boss;
var player;
var fpstime=0;
var distroyline=30;
var mx=192,my=224;
function gametimer(d,func){
    var timenow=fpstime;
    var times=0;
    var delay=d;
    return function(){
        if((fpstime-timenow)%delay==0){
            func(times);
            times++;
        } 
    }
}
function paintangle(a){//弧度变换
    return (Math.PI/180)*a;
}
function calcangle(a){//角度变换
    return (180/Math.PI)*a;
}
class PlayerBullet{
    constructor(x,y,v,a){
        this.x=x;
        this.y=y;
        this.v=v;
        this.a=a;
        this.vx=v*Math.cos(paintangle(a));
        this.vy=v*Math.sin(paintangle(a));
        this.r=5;
        this.distroy=false;
    }
    update(){
        this.x=this.x+this.vx;
        this.y=this.y+this.vy;
        if(this.y>my+distroyline)
            this.distroy=true;
    }
}
class Player{
    constructor(){
        this.x=0;
        this.y=-200;
        this.v=6;
        this.vx=0;//运动方向
        this.vy=0;
        this.slowv=3;
        this.shoot=false;
        this.shootstart=0;
        this.power=0;
        this.slow=false;
        this.heart=5;
        this.bomb=2;
        this.usebomb=false;
        this.r=3;
        this.miss=false;
    }
    missaction(){
        this.x=0;
        this.y=-200;
    }
    update(){
        var realv;
        var c=Math.sqrt(this.vx*this.vx+this.vy*this.vy);
        if(this.slow)
            realv=this.slowv;
        else
            realv=this.v;
        if(this.vx)
            this.x=this.x+this.vx*realv/c;
        if(this.vy)
            this.y=this.y+this.vy*realv/c;
        if(this.x>192)this.x=192;
        if(this.x<-192)this.x=-192;
        if(this.y>224)this.y=224;
        if(this.y<-224)this.y=-224;
        if(this.usebomb){
            this.usebomb=false;
            if(this.bomb>0){
                this.bomb--;
            }
        }
        if(this.shoot){
            if(fpstime-this.shootstart>=4){
                player_bullets.push(new PlayerBullet(this.x-5,this.y+5,8,90));
                player_bullets.push(new PlayerBullet(this.x+5,this.y+5,8,90));
                this.shootstart=fpstime;
            }
        }else{
            this.shootstart=fpstime;
        }
        if(this.miss){
            //miss
            //this.missaction()
            this.miss=false;
            if(this.heart){
                this.heart--;
            }else{
                //end
            }
            
        }
    }
}
player=new Player();
document.addEventListener("keydown",keydown);
document.addEventListener("keyup",keyup);
function keydown(e){
    //alert(e.keyCode);
    //up 38
    //down 40
    //left 37
    //right 39
    //shift 16
    //z 90
    //x 88
    if(e.keyCode==37){
        player.vx=-1;
    }else if(e.keyCode==38){
        player.vy=1;
    }else if(e.keyCode==39){
        player.vx=1;
    }else if(e.keyCode==40){
        player.vy=-1;
    }else if(e.keyCode==16){
        player.slow=true;
    }else if(e.keyCode==90){
        player.shoot=true;
    }else if(e.keyCode==88){
        player.usebomb=true;
    }
}
function keyup(e){
    if(e.keyCode==37&&player.vx==-1){
        player.vx=0;
    }else if(e.keyCode==38&&player.vy==1){
        player.vy=0;
    }else if(e.keyCode==39&&player.vx==1){
        player.vx=0;
    }else if(e.keyCode==40&&player.vy==-1){
        player.vy=0;
    }else if(e.keyCode==16){
        player.slow=false;
    }else if(e.keyCode==90){
        player.shoot=false;
    }
}
class Bullet{
    constructor(x,y,v,a,r){
        this.x=x;
        this.y=y;
        this.v=v;
        this.a=a;
        this.vx=v*Math.cos(paintangle(a));
        this.vy=v*Math.sin(paintangle(a));
        this.r=r;
        this.distroy=false;
    }
    update(){
        this.x=this.x+this.vx;
        this.y=this.y+this.vy;
        if(this.y>my+distroyline){
            this.distroy=true;
        }else if(this.y<-my-distroyline){
            this.distroy=true;
        }else if(this.x<-mx-distroyline){
            this.distroy=true;
        }else if(this.x>mx+distroyline){
            this.distroy=true;
        }
        var distance=(this.x-player.x)*(this.x-player.x)+(this.y-player.y)*(this.y-player.y);
        if(distance<=this.r+player.r){
            this.distroy=true;
            if(!player.usebomb){
                player.miss=true;
            }
        }
    }
}
class Boss{
    constructor(){
        this.name;
        this.health;
        this.x;
        this.y;
        this.vx;
        this.vy;
        this.v;
        this.spellcards=[];
        this.r=10;
    }
    update(){
        
    }
}