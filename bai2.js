document.getElementById('btnBai2').onclick = function(){
    var so1 = Number(document.getElementById('so1').value);
    var so2 = Number(document.getElementById('so2').value);
    var so3 = Number(document.getElementById('so3').value);
    var so4 = Number(document.getElementById('so4').value);
    var so5 = Number(document.getElementById('so5').value);
    var trungBinh = '';
    trungBinh = (so1 + so2 + so3 + so4 + so5) / 5;
    document.getElementById('ketQuaBai2').innerHTML = 'Trung bình cộng của 5 số trên là: ' + trungBinh.toLocaleString();
}