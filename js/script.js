$(function() 
{
    // Slider
    $('#coin-slider').coinslider({width:960,height:540,opacity:1});
});	

Cufon.replace('.menu_nav ul li a, p.infopost a.com span, h1, h2, h3, h4, h5, h6', { hover: true });

function saveStorage(id,id2) 
{
  var data = document.getElementById(id).value; //取值
  var data2 = document.getElementById(id2).value;
  data=data2+":\""+data+"\"";
	var time = new Date().getTime();
  localStorage.setItem(time, data); //保存
  alert("留言成功");
  window.location.replace('reply.html');
  localStorage('msg');
}
function loadStorage(id) 
{
	var result = '<table border = "1">';
	for (var i = 0; i < localStorage.length; i++)
	{
		var key = localStorage.key(i);
		var value = localStorage.getItem(key); //读取
		var date = new Date();
		date.setTime(key);
		var datestr = date.toGMTString(); //格林威治时间
		result += '</td><td>' + value + '</td><td>' + datestr + '</td></tr>';
	}
	result += '</table>';
	var target = document.getElementById(id);
  target.innerHTML = result; 
}
function clearStorage(id) 
{
	localStorage.clear();
	loadStorage('msg');
}