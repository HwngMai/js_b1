document.getElementById('btnBai1').onclick = function(){
    var soNgayLam = Number(document.getElementById('soNgayLam').value);
    var tongLuong = '';
    tongLuong = 100000 * soNgayLam;
    document.getElementById('ketQuaBai1').innerHTML = 'Tổng lương là: ' + tongLuong.toLocaleString() + ' vnd';
}
