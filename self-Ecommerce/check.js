users=[{id:1,uname:'Anish',upass:'123'},{id:2,uname:'Admin',upass:'000'}];

loginCheckbtn = document.getElementById("logincheck");
loginCheckbtn.addEventListener('click', () =>{
    username = document.getElementById("username").value;
    password = document.getElementById("password").value;
    users.forEach(ele =>{
        if(ele.upass === password && ele.uname===username){
            window.open('./homePage.html');
        }
        else{
            alert("Check details")
        }
    })
})