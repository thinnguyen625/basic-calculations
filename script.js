plusButton = document.getElementById("plusButton");
plusOperation = function () {

    number1 = document.getElementById("number1").value;
    number2 = document.getElementById("number2").value;
    if(isNaN(number1)){
        document.getElementById("info").value =`Giá trị nhập vào ở ô thứ nhất không phải là số`
        return false
    }
    if(isNaN(number2)){
        document.getElementById("info").value =`Giá trị nhập vào ở ô thứ hai không phải là số`
        return false
    }
    let check = false
    let sum = 0
    let ele = document.getElementsByName('phepTinh');
    for (i = 0; i < ele.length; i++) {
        if (ele[i].checked) {
            switch (ele[i].value) {
                case 'Cong':
                    sum = parseFloat(number1) + parseFloat(number2)
                    check = true
                    break
                case 'Tru':
                    sum = parseFloat(number1) - parseFloat(number2)
                    check = true
                    break
                case 'Nhan':
                    sum = parseFloat(number1) * parseFloat(number2)
                    check = true
                    break
                case 'Chia':
                    sum = parseFloat(number1) / parseFloat(number2)
                    check = true
                    break
            }
            break
        }
    }
    document.getElementById("result").value = sum
    console.log(sum)
    document.getElementById("info").value = check ? '' : 'Chưa chọn phép tính'
}

plusButton.addEventListener("click", plusOperation);

function notify1(){
    document.getElementById("result").value = null
    let number = document.getElementById("number1").value;
    if(isNaN(number)){
        document.getElementById("info").value =`Giá trị nhập vào ở ô thứ nhất không phải là số`
        return false
    }else{
        return true
    }
}
function notify2(){
    document.getElementById("result").value = null
    let number = document.getElementById("number2").value;
    if(isNaN(number)){
        document.getElementById("info").value =`Giá trị nhập vào ở ô thứ nhất không phải là số`
        return false
    }else{
        return true
    }
}