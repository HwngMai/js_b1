document.getElementById('btnBai4').onclick = function(){
    var canh1 = Number(document.getElementById('canh1').value);
    var canh2 = Number(document.getElementById('canh2').value);
    var dienTich = '';
    var chuVi = '';
    dienTich = canh1 * canh2;
    chuVi = (canh1 + canh2) * 2;
    document.getElementById('ketQuaBai4').innerHTML = 'Diện tích và Chu vi của hình chữ nhật lần lượt là: ' + dienTich + ` | ` + chuVi;
}