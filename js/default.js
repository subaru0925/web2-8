for(var i=1;i<10;i++){
var li=document.createElement('li');
li.textContent= i = '回目';
document.getElementById('list').appendChild(li)
}

var HP=100;
while(0<HP){
 var li=document.createElement('li');
 var damage=Math.floor(Math.random()*100);
 HP-=damage;
 HP=(HP<0)?0:HP;
 li.textContent=damage+'のダメージを受けた。残りのHP:'+HP;
 document.getElementById('while').appendChild(li);
 }
 
var include_tax=function(price){
return Math.floor(price+0.08*price);
}

for(var i=1;i<10;i++){
 var li=document.createElement('li');
 var price=Math.floor(Math.random()*1000);
 li.textContent=price+'円(税込み'+include_tax(price)+'円)';
 document.getElementById('price').appendChild(li);
 }
 
var constellatio=['牡羊座','牡牛座','双子座','蟹座','獅子座','乙女座','天秤座','蠍座','射手座','山羊座','水瓶座','魚座'];
for(var i=0;i<12;i++){
 var li=document.createElement('li');
 li.textContent=constellatio[i];
 document.getElementById('array').appendChild(li);
 }
 
var player={name:'ほげほげ',age:20,blood:'A'};
for(key in player){
 var li=document.createElement('li');
 li.textContent=key+':'+player[key];
 document.getElementById('object').appendChild(li);
}
