class user {


    constructor() {

    }


    

    #checkPassword(password) {
        let value = password.length > 8 ? true : false;
        return value;
    }

    async signup(n, e, u, p, m, d) {

        


        let isvalid = this.#checkPassword(p);

        if (isvalid) {
            this.name = n;
            this.email = e;
            this.username = u;
            this.password = p;
            this.mobile = m;
            this.description = d;
            let actual_data=JSON.stringify(this);
try{
   
    const fetch_url = `https://masai-api-mocker.herokuapp.com/auth/register`
    const res = await fetch(fetch_url, {
        method: 'POST',
        body: actual_data,
        headers: {
            'Content-Type': 'application/json'
        }
    });

    const data = await res.json();
    console.log('data', data);
}catch(e){
    console.log('error',e)
  

}
         
        }

        else
        {
            alert("Password should be more than 8 charater ")
        }
    }
}

let d1=new user();


function Signup(e)
{
e.preventDefault();

    const signup_data = document.getElementById("signup_storage");
    const name = signup_data.name.value;
    const email = signup_data.email.value;
    const password = signup_data.password.value;
    const username = signup_data.username.value;
    const mobile = signup_data.mobile.value;
    const description = signup_data.description.value;
    d1.signup(name,email,username,password,mobile,description)
}

document.getElementById("signin").addEventListener("click", () => {
    window.location.href = "login.html";
});