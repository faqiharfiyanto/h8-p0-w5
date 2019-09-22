function changeVocals (str) {
    var result = ''
    for (var i=0; i<str.length; i++) {
        var udahSama = false
        var abjad = ['ab ij uv ef op','AB IJ UV EF OP']
        for (var j=0; j<abjad[0].length; j++) {
            if (str[i]==abjad[0][j] && str[i]!=' ' && abjad[0][j+1]!= ' ') {
                result+=abjad[0][j+1]
                udahSama = true
            } else if (str[i]==abjad[1][j] && str[i]!=' ' && abjad[1][j+1]!= ' ') {
                result+=abjad[1][j+1]
                udahSama = true
            }
        }
        if (udahSama == false) {
            result+=str[i]
        }
    }
    return result
  }
//   console.log(changeVocals('Musayidah Hisyam Syaroni'))
  function reverseWord (str) {
      var arrString = str.split('')
      var temp = []
      for (var i=0; i<arrString.length; i++) {
          temp.unshift(arrString[i])
      }
      var result = temp.join('')
      return result
  }
  
//   console.log(reverseWord('Musayidah Hisyam Syaroni'))
  function setLowerUpperCase (str) {
      var result = ''
    for (var i=0; i<str.length; i++) {
        var abjad = 'abcdefghijklmnopqrstuvwxyz'
        var temp = false
        for (var j=0; j<abjad.length; j++) {
            if (str[i]==abjad[j]) {
                result+=str[i].toUpperCase()
                temp = true
            }
        }
        if (temp == false) {
            result+=str[i].toLowerCase()
        }
    }
    return result
  }
//   console.log(setLowerUpperCase('Musayidah Hisyam Syaroni'))
  function removeSpaces (str) {
      var arrString = str.split(' ')
      var tanpaSpasi = arrString.join('')
      return tanpaSpasi
    }
//   console.log(removeSpaces('Musayidah Hisyam Syaroni'))
  function passwordGenerator (name) {
      if (name.length<5) {
          return 'Minimal karakter yang diinputkan adalah 5 karakter'
      }
      var hurufVokalnya = changeVocals(name)
      var depanBlakangnya = reverseWord(hurufVokalnya)
      var gedheKecilnya = setLowerUpperCase(depanBlakangnya)
      var apusSpasinya = removeSpaces(gedheKecilnya)
      
      return apusSpasinya
    }
// console.log(passwordGenerator('Musayidah Hisyam Syaroni'))
  console.log(passwordGenerator('Sergei Dragunov')); // 'VPNVGBRdJFGRFs'
  console.log(passwordGenerator('Dimitri Wahyudiputra')); // 'BRTVPJDVYHBwJRTJMJd'
  console.log(passwordGenerator('Alexei')); // 'JFXFLb'
  console.log(passwordGenerator('Alex')); // 'Minimal karakter yang diinputkan adalah 5 karakter'