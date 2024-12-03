var user = prompt  ('yoshingizni kiriting!')
if( user > 0 && user <= 18){ 
    alert("Yoshsiz. O'qishingiz kerak")
}
if( user > 18 && user <= 50){ 
    alert('Ishlashingiz kerak!')
}
if( user > 50 && user <= 59){ 
    alert('Yaqinda pensiyaga chiqasiz!')
}
if( user > 59 && user <= 150){ 
    alert("Pensionerga o'xshaysiz, hali tirik bo'lsangiz :)")
}
else{
    if (isNaN(user)){
    alert('son kiritilmadi!')
}
}