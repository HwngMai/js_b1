document.getElementById('btnBai5').onclick = function(){
    var soNe= Number(document.getElementById('soNe').value);
    var a = '';
    var b = '';
    var tongKiSo = '';
    // Hàng đơn vị
    a = soNe % 10;
    console.log('a: ', a);
    // Hàng chục
    b = Math.floor(soNe / 10); 
    console.log('b: ', b);
    tongKiSo = a + b; 
    console.log('tongKiSo: ', tongKiSo);
    document.getElementById('ketQuaBai5').innerHTML = tongKiSo;
}