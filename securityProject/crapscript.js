var url = document.URL
console.log(url)
var urlsegs = url.split("?")
var expression = urlsegs[urlsegs.length-1]
var unexpression = unescape(expression)
var ans = eval(unexpression);
document.getElementById("answer").innerHTML = ans;
