
function doimucgia(){
    var arrGia=document.getElementsByName("gia")
    var obj = document.getElementById("mucgia")
    mucdangchon = obj.value;
    for(i=0;i<arrGia.length;i++){
        gia=parseFloat(arrGia[i].innerText)
        if(gia<mucdangchon || mucdangchon==-1){
            arrGia[i].parentNode.style.display=""
        }else{
            arrGia[i].parentNode.style.display="none"
        }
    }
    tongtien()
}
function tich1checkbox(i){
    var arrSL=document.getElementsByName("soluong")
    arrSL[i].disabled = !arrSL[i].disabled
    if(arrSL[i].disabled==true){
        arrSL[i].value=0
        arrSL[i].parentNode.nextElementSibling.innerText=""
    }
    tongtien()
}
function thanhtien(obj){
    var soluong=obj.value
    var gia=obj.parentNode.previousElementSibling.innerText
    obj.parentNode.nextElementSibling.innerText=soluong*gia
    tongtien()
   
}
function tongtien(){
    tt=0
    var arrThanhTien = document.getElementsByName("thanhtien")
    for(i=0;i<arrThanhTien.length;i++){
        tien=arrThanhTien[i].innerText
        tt+=Number(tien)
        
    }
    document.getElementById("tinhtong").innerText=tt
}
// $(document).ready(function() {
//     // add multiple select / deselect functionality
//       $("#selectall").click(function() {
//       $('.case').attr('checked', this.checked);
//        });
//    // if all checkbox are selected, check the selectall checkbox  also        

//    $(".case").click(function() {
//       if ($(".case").length == $(".case:checked").length) {
//       $("#selectall").attr("checked", "checked");
       
      
//        }
//       else {
//       $("#selectall").removeAttr("checked");
     
//        }     
//        });
//    });
function checkall(arrSL){
    const checkInputCtrls = document.getElementsByClassName('checkinput')
    for(const element of checkInputCtrls){
        element.checked = arrSL.checked
        var event = new Event("change")
        element.dispatchEvent(event)
    }
}