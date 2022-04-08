function choso(){
    var a = Math.round(Math.random()*10);
    var b = Math.round(Math.random()*10);
    var c = Math.round(Math.random()*10);
    document.getElementById("a").value = a;
    document.getElementById("b").value = b;
    document.getElementById("c").value = c;
    var btn = document.getElementById("btngiai");
    btn.disabled=false;
    btn.className='nut';
}
var ptb2 = {
    giai:function(){
       
        var a = document.getElementById("a").value;
        var b = document.getElementById("b").value;
        var c = document.getElementById("c").value;
    
             if(a>10 || b>10 || c>10){
                alert("Lỗi gòi nè. Không được nhập lớn hơn 10 đâu");
                location.reload();
        }
             else if(a==0){
            //pt1
             if(b==0){
                 if(c==0)
                {
                    document.getElementById("kq").innerHTML="<p>Vô Số Nghiệm</p>"
                }
                else{
                    document.getElementById("kq").innerHTML="<p>Vô Nghiệm</p>"
                }
            }
            else{
                var x = -c/b;
                str = `<p>Pt có nghiệm kép: ${x.toFixed(2)}</p>`;
                document.getElementById("kq").innerHTML=str;
            }
        }
        else
        {
            var delta = b * b - 4*a*c;
           
            if(delta < 0){
                //ptvn
                document.getElementById("kq").innerHTML="<p>Vô Nghiệm</p>"
            }
                            else if(delta == 0){
                //pt nghiệm kép
                var x = -b/(2*a);
                x = x.toFixed(2);
                str = `<p>Pt có nghiệm kép: ${x}</p>`;
                document.getElementById("kq").innerHTML = str;
            }
            else{
                //2 nghiệm
                var x1 = (-b - Math.sqrt(delta))/(2*a);
                var x2 = (-b + Math.sqrt(delta))/(2*a);
                var str = `<p>Pt có 2 nghiệm phân biệt </p>
                           <p>X<sub>1</sub> = ${x1.toFixed(2)} </p>
                           <p>X<sub>2</sub> = ${x2.toFixed(2)} </p>`;
                document.getElementById("kq").innerHTML=str;
            }
        }
        btn = document.getElementById("btngiai");
        btn.className="nut_khoa";
        btn.disabled=true;
    }
   
}
 function error() {
    var a = document.getElementById("a").value;
        var b = document.getElementById("b").value;
        var c = document.getElementById("c").value;

if (isNaN(a)){
document.getElementById("kq").innerHTML = "<x>Chỉ được nhập số.</x>";
return false;
}else if(isNaN(b)){
document.getElementById("kq").innerHTML = "<x>Chỉ được nhập số.</x>";
return false; 
}else if(isNaN(c)){
document.getElementById("kq").innerHTML = "<x>Chỉ được nhập số.</x>";
return false;
}
else {
return true;
}
}
function pt(){
    var a = document.getElementById("a").value;
        var b = document.getElementById("b").value;
        var c = document.getElementById("c").value;
        
        var str = ` ${a}x<sup>2</sup>+${b}x+${c}=0 `;
            document.getElementById("pt").innerHTML =str;
if (isNaN(a)){
            document.getElementById("pt").innerHTML = "<x>Lỗi.</x>";
            return false;
            }else if(isNaN(b)){
            document.getElementById("pt").innerHTML = "<x>Lỗi.</x>";
            return false; 
            }else if(isNaN(c)){
            document.getElementById("pt").innerHTML = "<x>Lỗi.</x>";
            return false;
            }
            else {
            return true;
            }
        }

function tg(){
    var d = new Date();
    var nam = d.getFullYear();
    var thang = d.getMonth()+1;
    var ngay = d.getDate();
    var gio = d.getHours();
    var phut = d.getMinutes();
    var giay = d.getSeconds();
    var str = ` Bây giờ là ${ngay}/${thang}/${nam}  ${gio}:${phut}:${giay} `;
    document.getElementById("dongho").innerHTML=str;
}
setInterval("tg()", 1000);

var solangiai = 0;
    function dem(){
        solangiai++;
        document.getElementById("solangiai").innerHTML=solangiai;
    }