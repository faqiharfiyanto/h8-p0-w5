function meleeRangedGrouping (str) {
    if (str == '') {
        return []
    }
    var result = [[],[]]
    var splitOne = str.split(',')
    var tempOne = []
    
    for (var i=0; i<splitOne.length; i++) {
        tempOne.push(splitOne[i].split('-'))
    }

    for (var i=0; i<tempOne.length; i++) {
        if (tempOne[i][1]=='Ranged') {
            result[0].push(tempOne[i][0])
        } else {
          result[1].push(tempOne[i][0])
        }
    }
    return result
}

// TEST CASE

console.log(meleeRangedGrouping('Razor-Ranged,Invoker-Ranged,Meepo-Melee,Axe-Melee,Sniper-Ranged'));
// [ ['Razor', 'Invoker', 'Sniper'], ['Meepo', 'Axe'] ]

console.log(meleeRangedGrouping('Drow Ranger-Ranged,Chen-Ranged,Dazzle-Ranged,Io-Ranged'));
// [ ['Drow Ranger', 'Chen', 'Dazzle', 'Io'], [] ]

console.log(meleeRangedGrouping('')); // []