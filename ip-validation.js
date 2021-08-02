const isValidIP = (str) => {

  const ip = str.split('.');

  //Check for . and number of . :
  if ((!str.includes('.')) || (ip.length > 4) || (ip.length < 4)) return false;

  for (let i = 0; i < ip.length; i++) {

    //Check if there are anything but numbers:
    if (isNaN(ip[i]) == true) return false;
    if ((ip[i][0] === 'e') || (ip[i][1] === 'e') || (ip[i][2] === 'e')) return false;
    if (ip[i] === '') return false;
    if (ip[i].includes(' ')) return false;

    //Check for negative numbers and numbers higher than 255::
    if ((ip[i] < 0) || (ip[i] > 255)) return false;

    //Check for leading zeros:
    if ( ((ip[i] < 10) && (ip[i][1] == 0)) || ((ip[i] < 100) && (ip[i][0] == 0 ))) {
      if (ip[i] !== '0') return false;
    }  
  }
  return true;
}

exports.isValidIP = isValidIP;