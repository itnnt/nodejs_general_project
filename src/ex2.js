/*@flow*/

function stringLength (str) {
    if (str != null) {
        return str.length;
    }
    return 0;
  }
  
  var length = stringLength(null);