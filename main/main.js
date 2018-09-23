module.exports = function main(s) {
 var sum = 0;
 var x = 0;
 for (i = 0;i < s.length;i++){
	 var x = new Number(s[i]);
	 sum = sum + x;
  }
  return sum;
  // Write your code here
};
