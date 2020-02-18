<!DOCTYPE html>
<head>
    <meta charset="UTF-8">
    <title>text/Foxfish</title>
    <link rel="shortcut icon" href="./image/icon.png">
    <meta name="viewport" content="user-scalable=no, width=device-width, initial-scale=1.0" />
    <link href="./css/bootstrap.min.css" rel="stylesheet">
    <script src="./js/jquery.min.js"></script>  
    <script src="./js/bootstrap.min.js"></script>
    <script src="./js/control.js"></script>
    <script src="./js/parsearticle.js"></script>
    <link rel="stylesheet" href="./css/style.css">
    <script src="./js/marked.min.js"></script>
</head>
<body>
    <div class="all_body">
        <script src="./js/leftmenu.js"></script>
        <div id="mainpage" class="all_main">
            <script src="./js/head.js"></script>
            <!--主体开始-->
            <?php 
                $md= $_GET["md"];
                echo "<script>var urlmd=$md;</script>";
            ?>
            <div class="container">
                <div class="col-lg-9 col-xs-12 body_left_data">
                    <div class="col-lg-12 col-xs-12 body_r1">
                        <div id="body_passage">
                            
                        </div>
                    </div>
                </div>
                <script src="./js/rightmenu.js"></script>
            </div>
            <!--主体结束-->
            <script src="./js/tail.js"></script>
            <script>
                //alert(urlmd);
                var xmlhttp=new XMLHttpRequest();
                if(window.XMLHttpRequest){
                    xmlhttp=new XMLHttpRequest();
                }else{
                    xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
                }
                xmlhttp.onreadystatechange=function(){
                    if(xmlhttp.readyState==4&&xmlhttp.status==200){
                        var indexDot=urlmd.lastIndexOf('.');
                        var suffix=urlmd.slice(indexDot+1,urlmd.length);
                        if(suffix=="md"){
                            datajson=marked(xmlhttp.responseText);
                        }
                        else if(suffix=="json"){
                            datajson=parsearticle(JSON.parse(xmlhttp.responseText));
                        }
                        document.getElementById('body_passage').innerHTML=datajson;
                        //alert(datajson);
                    }
                }
                xmlhttp.open("GET",urlmd,true);
                xmlhttp.send();
            </script>
        </div>
    </div>
</body>
</html>