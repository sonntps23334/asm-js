var priceRange = document.getElementById("price-range")
var mylist = document.getElementById("mylist")
var rows = mylist.getElementsByTagName("tr")
var cost = document.getElementsByClassName("cost")
var qty = document.getElementsByName("qty")
var checkboxes = document.getElementsByName("checkbox")
var totalcost = document.getElementById("totalcost")
var vc = document.getElementById("voucher")
var vcx = document.getElementById("voucher")


//Hien thi "none" hoac ""
function styleDisplay(mess) { for (e of rows) e.style.display = mess }

//Hien thi theo range, 0 la infinity
function iteratePriceRange(lower, upper) {
    styleDisplay("none")
    if (upper == 0) {
        upper = Infinity
    } else if (lower == 0 && upper == 0) {
        styleDisplay("")
    }
    for (let i = 0; i < rows.length; i++) {
        var price = +rows[i].children[2].innerText.substring(0)
        if (price > lower && price <= upper) {
            rows[i].style.display = ""
        }
    }
}

//hien thi price theo value cua select
function showEachList() {
    switch (priceRange.value) {
        case "1":
            iteratePriceRange(0, 3000000)
            break;
        case "2":
            iteratePriceRange(3000000, 6000000)
            break;
        case "3":
            iteratePriceRange(6000000, 10000000)
            break;
        case "4":
            iteratePriceRange(10000000, 20000000)
            break;
        case "5":
            iteratePriceRange(20000000, 1000000000000000000)
            break;
        case "6":
            iteratePriceRange(0, 0)
            break;
    }
}

function turnQtyInput(source) {
    var row = source.parentElement.parentElement
    var qtyInput = row.getElementsByTagName("input")[1]
    if (source.checked == true) {
        qtyInput.disabled = false

    } else {
        qtyInput.disabled = true
        resetCost(source)
    }
}

function checkAll(source) {
    for (let i = 0; i < rows.length; i++) {
        checkboxes[i].checked = source.checked
        qty[i].disabled = !source.checked
    }
    resetCost("all")
}

function countCost() {
    var sum = 0
   
    for (let i = 0; i < rows.length; i++) {
        var price = +rows[i].getElementsByTagName("td")[2].innerText.substring(0)
        cost[i].innerText = qty[i].value * price
        sum += +cost[i].innerText.substring(0)
    }
    totalcost.innerHTML = sum.toLocaleString()
    document.getElementById("kq").innerHTML = sum.toLocaleString()

        document.getElementById("kq2").innerHTML = sum.toLocaleString() 
   
    
} 

function resetCost(source) {
    if (source == "all") {
        for (let i = 0; i < rows.length; i++) {
            rows[i].getElementsByTagName("input")[1].value = 0
        }
        countCost()
    }
    var row = source.parentElement.parentElement
    row.getElementsByTagName("input")[1].value = 0
    countCost()
}
function validate(coupon) {
    countCost()
    var sum = 0 
    codes = new Object();
    codes.son = 20;
    codes.GOLD = 30;
    codes.GOLD40 = 40;
    codes.GOLD50 = 50;
    console.log(coupon)
    if (codes[coupon]) {
        for (let i = 0; i < rows.length; i++) {
        var price = +rows[i].getElementsByTagName("td")[2].innerText.substring(0)
        cost[i].innerText = qty[i].value * price
        sum += +cost[i].innerText.substring(0)}
        vc = sum*0.2
        vcx = sum - vc
        document.getElementById("kq1").innerHTML = vc.toLocaleString() 
        document.getElementById("kq2").innerHTML = vcx.toLocaleString() 
        Swal.fire({
  imageUrl: './image/vc.png',
  imageHeight: 100,
  title: 'Thành công',
  html: '<font color="#ffffff">Chúc mừng bạn đã được giảm giá 20%</font>',
  imageAlt: 'A tall image'
})
        //window.alert("Đã nhập thành công mã giảm 20%")
    } else {
        Swal.fire({
  icon: 'error',
  title: 'SAI GÒI MÁ!',
  html: '<font color="#ffffff"><b>Nhập voucher chưa má</b></font>',
  
})
    }
  }
  function tb(){
    Swal.fire({
title: 'Xác nhận',
html: '<font color="#FFF"><b>Bạn chắc chắn mua đúng sản phẩm! <td><span id="totalcost" class="tong"></span><td></b></font>',
icon: 'warning',
showCancelButton: false,
showDenyButton: true,
confirmButtonColor: '#3085d6',
cancelButtonColor: '#d33',
confirmButtonText: 'Chắc',
denyButtonText: `Không`
}).then((result) => {
if (result.isConfirmed) {
Swal.fire(
'Thành công!',
'<font color="#FFF"><b>Bạn đã mua hàng thành công vui lòng đợi hệ thống xử lý</b></font>',
'success'
)
}
if (result.isDenied) {
Swal.fire('Đã từ chối mua hàng.Hẹn gặp lại', '', 'error')
}

})
setTimeout(function () { 
location.reload();
},5000);
}