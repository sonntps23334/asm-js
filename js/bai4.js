var id = document.getElementById("ID")
var fname = document.getElementById("fullname")
var email = document.getElementById("email")
var gender = document.getElementsByName("gender")
var nation = document.getElementById("nation")
var genColor = document.getElementById("genders")
var hobbies = document.getElementsByName("hobby")
var colorHobby = document.getElementById("hobbies")
var note = document.getElementById("note")
var alert = document.getElementById("alert")
var emailRegex = /\S+@\S+\.\S+/

var errorName = document.getElementById("error-name")
var errorId = document.getElementById("error-id")
var errorEmail = document.getElementById("error-email")
var errorGender = document.getElementById("error-gender")
var errorHobby = document.getElementById("error-hobby")
var errorNation = document.getElementById("error-nation")
var errorNote = document.getElementById("error-note")
var errors = document.getElementsByClassName("error")

function validate() {
    var success = true
    var hobbyFlag = 0
    var text = ''
    if (fname.value == "") {
        errorName.innerHTML = "<p>Không được để trống họ tên</p>"
        fname.style.border = "1px solid red"
        fname.style.backgroundColor = "#5EAFD8"
        success = false
    } else if (fname.value.length > 30) {
        errorName.innerHTML = "<p>Nhập họ tên không quá 30 ký tự</p>"
        fname.style.border = "1px solid red"
        fname.style.backgroundColor = "#5EAFD8"
        success = false
    }
    if (id.value == "") {
        errorId.innerHTML = "<p>Không được để trống mã sinh viên</p>"
        id.style.border = "1px solid red"
        id.style.backgroundColor = "#5EAFD8"
        success = false
    } else if (id.value.length !=7) {
        errorId.innerHTML = "<p>Mã sinh viên phải 7 kí tự</p>"
        id.style.border = "1px solid red"
        id.style.backgroundColor = "#5EAFD8"
        success = false
    }
    
    if (email.value == "") {
        errorEmail.innerHTML = "<p>Không được để trống email</p>"
        email.style.border = "1px solid red"
        email.style.backgroundColor = "#5EAFD8"
        success = false
    } else if (email.value.match(emailRegex) == null) {
        errorEmail.innerHTML = "<p>Email không đúng định dạng</p>"
        email.style.border = "1px solid red"
        email.style.backgroundColor = "#5EAFD8"
        success = false
    }
    if (!gender[0].checked && !gender[1].checked && !gender[2].checked) {
        errorGender.innerHTML = "Giới tính không được để trống"
        genColor.style.border = "1px solid red"
        genColor.style.borderRadius = "10px"
        genColor.style.height = "45px"
        genColor.style.backgroundColor = "#5EAFD8"
        success = false
    }
    for (let i = 0; i < hobbies.length; i++) {
        if (hobbies[i].checked) hobbyFlag++
    }
    if (hobbyFlag == 0) {
        errorHobby.innerHTML = "Sở thích không được để trống"
        colorHobby.style.border = "1px solid red"
        colorHobby.style.backgroundColor = "#5EAFD8"
        colorHobby.style.borderRadius = "10px"
        success = false
    }
    if (nation.value == "") {
        errorNation.innerHTML = "Quốc tịch không được để trống"
        nation.style.border = "1px solid red"
        nation.style.backgroundColor = "#5EAFD8"
        
        success = false
    }
    if (note.value.length <= 10) {
        errorNote.innerHTML = "Ghi chú phải từ 10 kí tự"
        note.style.border = "1px solid red"
        note.style.backgroundColor = "#5EAFD8"
        success = false
    }
   

    if (success == true) {
        alert("NHẬP ĐÚNG RỒI BẠN TRAI ƠI!!")
    }
    return success
}
function removeError() {
    id.style.border = ""
    id.style.backgroundColor = ""
    fname.style.border = ""
    fname.style.backgroundColor = ""
    email.style.border = ""
    email.style.backgroundColor = ""
    genColor.style.border = ""
    genColor.style.backgroundColor = "white"
    nation.style.border = ""
    nation.style.backgroundColor = ""
    colorHobby.style.border = ""
    colorHobby.style.backgroundColor = ""
    note.style.border = ""
    note.style.backgroundColor = "white"
    
    for (e of errors) e.innerHTML = ""
}
