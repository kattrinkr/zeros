module.exports = function getZerosCount(number) {
  if ((number >= 1) && (number <= Math.pow(10,8))){
    var answer = 0;
    while (number >= 5) {
    number = Math.floor(number / 5);
    answer = answer + number;
  }
    return answer;
  }
}
