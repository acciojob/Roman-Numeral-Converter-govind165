function convertToRoman(num) {
  	const obj = {
      0:['M',1000], 
      1:['D', 500], 
      2:['C', 100], 
      3:['L', 50], 
      4:['X', 10], 
      5:['V', 5], 
      6:['I', 1]
    };
 let romanNumeral = '';
  for (let i = 0; i < romanMatrix.length; i++) {
    const value = romanMatrix[i][0];
    const symbol = romanMatrix[i][1];
	  
    while (num >= value) {
      romanNumeral += symbol;
      num -= value;
    }
  }

  return romanNumeral;
}

}

 console.log(convertToRoman(36));




// do not edit below this line
module.exports = convertToRoman
