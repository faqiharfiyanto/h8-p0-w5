function kaliTerusRekursif(angka) {
    var angkaString = String(angka)
    if (angkaString.length==1) {
        return angka;
    }
    var hasilKali = 1
    for (var i = 0; i < angkaString.length; i++) {
      hasilKali = hasilKali * Number(angkaString[i]);
    }  
    return kaliTerusRekursif(hasilKali);
}
  
  // TEST CASES
  console.log(kaliTerusRekursif(66)); // 8
  console.log(kaliTerusRekursif(3)); // 3
  console.log(kaliTerusRekursif(24)); // 8
  console.log(kaliTerusRekursif(654)); // 0
  console.log(kaliTerusRekursif(1231)); // 6