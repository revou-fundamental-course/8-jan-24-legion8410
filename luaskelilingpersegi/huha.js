// Fungsi untuk menghitung luas persegi
function hitungLuasPersegi(sisi) {
    return sisi * sisi;
  }
  
  // Fungsi untuk menghitung keliling persegi
  function hitungKelilingPersegi(sisi) {
    return 4 * sisi;
  }
  
  // Contoh penggunaan
  var sisiPersegi = 5;
  
  var luasPersegi = hitungLuasPersegi(sisiPersegi);
  var kelilingPersegi = hitungKelilingPersegi(sisiPersegi);
  
  console.log("Luas Persegi: " + luasPersegi);
  console.log("Keliling Persegi: " + kelilingPersegi);
  