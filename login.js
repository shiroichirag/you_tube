class usersignin{

constructor()
{

}


async signin(u,p,i)
{
    this.username = u;
    this.password = p;

    const login_url = `https://masai-api-mocker.herokuapp.com/auth/login`


    const res = await fetch(login_url, {
        method: 'POST',
        body: JSON.stringify(this),
        headers: {
            'Content-Type': 'application/json'
        }
    });

    //let signin = new sigin_storage(username, password);
    const data = await res.json();
    console.log('data', data);
    window.location.href = "index.html";
    localStorage.setItem("token",JSON.stringify(data.token))
    localStorage.setItem("username",JSON.stringify(username))
    localStorage.setItem("img",JSON.stringify(i))
    

    console.log(i)
}


}

let us=new usersignin();
function SignIn(e)
{
e.preventDefault();
const sigin = document.getElementById("signIn_storage");

    const username = sigin.username.value;
    const password = sigin.password.value;
    const img=sigin.image.value;

    us.signin(username,password,img);



}