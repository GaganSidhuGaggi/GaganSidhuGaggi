var x=0;
var a = "";
var width = screen.width;
// var rcheck = 0;
function lp(){

    
    let btn = document.getElementById("clacbar");
    btn.addEventListener('keydown', function keypress(e){
        console.log(e.keyCode);
        if(e.keyCode===65||e.keyCode===71||e.keyCode===78){
            e.returnValue = true;
        }
        else if(e.keyCode>64 && e.keyCode<91){
            // console.log("run");
            e.returnValue = false;
        }
        // else if(e.keyCode==13){
        //     clacsub();
        // }
    })


    var code = '<button id="keybtn1" class="keybtn" onclick="press(1)">1</button>';
    for(i=2;i<17;i++){
        if(i===10){
            code += '<button id="keybtn10" class="keybtn" onclick="press(0)">0</button>';  
            document.getElementById("cbtn").innerHTML = code;
        }

        else if(i===11){
            code += '<button id="keybtn11" class="keybtn" onclick="press(11)"> + </button>';  
            document.getElementById("cbtn").innerHTML = code;
        }

        else if(i===12){
            code += '<button id="keybtn12" class="keybtn" onclick="press(12)"> - </button>';  
            document.getElementById("cbtn").innerHTML = code;
        }

        else if(i===13){
            code += '<button id="keybtn13" class="keybtn" onclick="press(13)"> * </button>';  
            document.getElementById("cbtn").innerHTML = code;
        }

        else if(i===14){
            code += '<button id="keybtn14" class="keybtn" onclick="press(14)"> / </button>';  
            document.getElementById("cbtn").innerHTML = code;
        }

        else if(i===15){
            code += '<button id="keybtn15" class="keybtn" onclick="press(15)"> AC </button>';  
            document.getElementById("cbtn").innerHTML = code;
        }

        else if(i===16){
            code += '<button id="keybtn16" class="keybtn" onclick="press(16)"> . </button>';  
            document.getElementById("cbtn").innerHTML = code;
            break;

        }

        else{
        code += '<button id="keybtn'+ i +'" class="keybtn" onclick="press('+ i +')">'+ i +'</button>';
        document.getElementById("cbtn").innerHTML = code;
        }
    }

    if (width<700){
        document.getElementById("image").style.width = "35%";
    }
}



        
    setInterval(function rdate(){
        var d = new Date();
        var dh = d.getHours();
        var dm = d.getMinutes();
        var ds = d.getSeconds();
        var df = dh;
        df += ":";
        df += dm;
        df += ":";
        df += ds;
        var a = document.getElementById("dateco");
        // console.log(a);
        a.innerHTML = df;
        // console.log(df);
    },50);

function on() {
    if (x==0){
        document.getElementById("image").style.width = "38.8%";
        document.getElementById("fbox").style.display = "inline";
        a = '<style>'+
        '#tiom{flex-grow: 2;}'+
        '</style>';
        document.getElementById("jcss").innerHTML = a;
        x = 1;
    }

    else{
        // console.log(width);
            if(width<700){
                document.getElementById("image").style.width = "35%";
            }
            else{
                document.getElementById("image").style.width = "15%";
            }
        a = '<style>'+
        '</style>';
        document.getElementById("jcss").innerHTML = a;
        document.getElementById("fbox").style.display = "none";
        x = 0;
    }
 }


 function bckar() {
    let btn = document.getElementById("clacbar");
    let val = btn.value;  
    let val1 = (val.substring(0, val.length - 1));
    btn.value = val1;
}



 function clacsub() {
    var exp = document.getElementById("clacbar").value;
    try {
        var result = eval(exp);
    }
    catch {
        var expa = exp.split('');
        console.log(expa);
        var expal = expa.length;
        console.log(expal);
        const bar = document.getElementById("clacbar").value;
        if(exp==="Gagan"||exp==="gagan"||exp==="GAGAN"){
                let err = "CREATOR";
                let btn = document.getElementById("clacbar");
                // let keyimgo = document.getElementById("keypad").innerHTML;
                // let keyimg = document.getElementById("keyimgo");
                // let codekeyimg = '<img id="keyimg" src="Profile Picture (Passport Size).jpg" alt="Gagandeep Singh">';
                // keyimg.innerHTML=codekeyimg;

                btn.value += " = " + err;
                d=1;    
            }
            // console.log("Syntax Of Your Exp Is Wrong");
            
    
        else{
            let err = "ERROR";
            let btn = document.getElementById("clacbar");
            btn.value += " = " + err;
            }

            for(let i = 0; i<expal; i++){

                if(expa[i]==="="){
                    let btn = document.getElementById("clacbar");
                    btn.value = bar;
                    // console.log(i);
                }
        }
        
    

        

    }
    // console.log(result);
    // var t = typeof(result);
    //  console.log(t);
    if(typeof(result) === "number"){
        // console.log("The Actual Result is = " + result);
        let btn = document.getElementById("clacbar");
        btn.value += " = " + result;
    }   
 }



 function press(x){
    if(x===11){
        let btn = document.getElementById("clacbar");
        btn.value += "+";
    }

    else if(x===12){
        let btn = document.getElementById("clacbar");
        btn.value += "-";
    }

    else if(x===13){
        let btn = document.getElementById("clacbar");
        btn.value += "*";
    }

    else if(x===14){
        let btn = document.getElementById("clacbar");
        btn.value += "/";
    }

    else if(x===15){
        let btn = document.getElementById("clacbar");
        btn.value = "";
    }

    else if(x===16){
        let btn = document.getElementById("clacbar");
        btn.value += ".";
    }

    else{
        var btn = document.getElementById("clacbar");
        // console.log(x);
        // console.log(btn);
        btn.value += x;
    }
    
    }

    function mousep(event) {
 
        // clientX gives horizontal coordinate
        vp = event.clientX;
        vp += "px";
        document.getElementById("pointimg").style.left = vp;
        console.log(vp);
    
        // clientY gives vertical coordinates
        // var y = event.clientY;
        // console.log(vp);
        // document.getElementById("X").value = x;
        // document.getElementById("Y").value = y;
     }
    
