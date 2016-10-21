/**
 * Created by ThangTheMan on 10/7/16.
 */
$(".game-panel .ball").click(function(){
    if($(this).hasClass("selected")){
        $(this).removeClass("selected");
        bstr=$(this).attr("class");
        bstr=bstr.substr("9",bstr.length);
        numberarray.splice(numberarray.indexOf(bstr),1);
        //console.log("int="+ parseInt(numberarray[n]));
        for(n=0; n<5; n++){
            if(numberarray[n]==undefined){
                $(".random-number-picker .number"+(n+1)+" .num1").css({"marginTop":"0px"});
            }else {
                $(".random-number-picker .number"+(n+1)+" .num1").css({"marginTop":(-1)*(numberarray[n]*46)+ "px"});

            }
            shownumber();
        }
        //shownumber();
    }else{
        bstr=$(this).attr("class");
        bstr=bstr.substr("9",bstr.length);
        singlepick(bstr);
        $(this).addClass("selected");

    }
});

var sn1="";
var sn2="";
var sn3="";
var sn4="";
var sn5="";
var n1="";
var n2="";
var n3="";
var n4="";
var n5="";

var numberarray = [];
var tb;
function singlepick(b){
    tb=b;
    if(numberarray.length<5){
        if(sn1==""){
            sn1=b;
            $(".random-number-picker .number1 .num1").css({"marginTop":(-1)*(sn1*46)+ "px"});
        }else if (sn2==""){
            sn2=b;
            $(".random-number-picker .number2 .num1").css({"marginTop":(-1)*(sn2*46)+ "px"});
        }else if (sn3==""){
            sn3=b;
            $(".random-number-picker .number3 .num1").css({"marginTop":(-1)*(sn3*46)+ "px"});
        }else if (sn4==""){
            sn4=b;
            $(".random-number-picker .number4 .num1").css({"marginTop":(-1)*(sn4*46)+ "px"});
        }else if (sn5==""){
            sn5=b;
            $(".random-number-picker .number5 .num1").css({"marginTop":(-1)*(sn5*46)+ "px"});
        }
        numberarray[numberarray.length]=b;
        shownumber();
    }else{
        setTimeout(function(){
            $(".game-panel .ball.ball"+tb).removeClass("selected");
            console.log("All Numbers Picked!" + ".game-panel .ball"+tb);
        },100);

    }
}
function clearnumber(){
    n1="";
    n2="";
    n3="";
    n4="";
    n5="";
    $(".random-number-picker .number .num").css({"marginTop":"0px"});
    numberarray="";
    shownumber();
}

function picknumber(){
    function randomNumbers(max) {
        function range(upTo) {
            var result = [];
            for(var i = 1; i < upTo; i++) result.push(i);
            return result;
        }
        function shuffle(o){ //v1.0
            for(var j, x, i = o.length; i; j = Math.floor(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
            return o;
        }
        var myArr = shuffle(range(max));
        return function() {
            return myArr.shift();
        };
    }

    var randoms = randomNumbers(37),
        rand = randoms(),
        result = [];
    while(rand != null) {
        result.push(rand);
        rand = randoms();
    }
    console.log(result);
    var n1,n2,n3,n4,n5;
    n1= result[0];
    n2= result[1];
    n3= result[2];
    n4= result[3];
    n5= result[4];
    $(".random-number-picker .number1 .num1").css({"marginTop":(-1)*(n1*46)+ "px"});
    $(".random-number-picker .number2 .num1").css({"marginTop":(-1)*(n2*46)+ "px"});
    $(".random-number-picker .number3 .num1").css({"marginTop":(-1)*(n3*46)+ "px"});
    $(".random-number-picker .number4 .num1").css({"marginTop":(-1)*(n4*46)+ "px"});
    $(".random-number-picker .number5 .num1").css({"marginTop":(-1)*(n5*46)+ "px"});
    if(n1<10){ n1="0"+n1;  }
    if(n2<10){ n2="0"+n2; }
    if(n3<10){ n3="0"+n3; }
    if(n4<10){ n4="0"+n4; }
    if(n5<10){ n5="0"+n5; }
    numberarray=[parseInt(n1),parseInt(n2),parseInt(n3),parseInt(n4),parseInt(n5)];
    shownumber();
}
function shownumber(){
    console.log(numberarray.length + " / " + numberarray);
}
