//用于把json转化为html文本
function parsearticle(art){
    var html='';
    if((typeof art)!="object")
        return art.toString();
    else{
        for(var i=0;i<art.data.length;++i){
            html=html+'<'+art.data[i].name;
            if(art.data[i].hasOwnProperty('id'))
                html=html+' id=\"'+art.data[i].id+'\"';
            if(art.data[i].hasOwnProperty('class'))
                html=html+' class=\"'+art.data[i].class+'\"';
            if(art.data[i].hasOwnProperty('style'))
                html=html+' style=\"'+art.data[i].style+'\"';
            if(art.data[i].hasOwnProperty('height'))
                html=html+' height=\"'+art.data[i].height+'\"';
            if(art.data[i].hasOwnProperty('width'))
                html=html+' width=\"'+art.data[i].width+'\"';
            if(art.data[i].hasOwnProperty('src'))
                html=html+' src=\"'+art.data[i].src+'\"';
            html=html+'>'+parsearticle(art.data[i].contain);
            html=html+'</'+art.data[i].name+'>';
        }
        return html;
    }
}