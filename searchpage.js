const apikey = `AIzaSyCZlPxu6oZNTOlCKNTZmKZ5UcxGoddNlRc`;

const searchmovie = async(s,d) => {
    try {
        if(s!=null&&d!=null)
        {
            
            const query = document.getElementById('query').value;
            //    console.log(o)
                    const res = await fetch(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=20&q=${query}&key=${apikey}&type=${s}&videoDuration=${d}`);
                    const data = await res.json()
                    const actual_data = data.items;
                   appendvideos(actual_data);
        }
        else
        {
            const query = document.getElementById('query').value;
            //    console.log(o)
                    const res = await fetch(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=20&q=${query}&key=${apikey}`);
                    const data = await res.json()
                    const actual_data = data.items;
                   appendvideos(actual_data);
        }
       


           // window.location.href = "searchpage.html";
            //appendvideos(actual_data)
        

        //  console.log(data);
    } catch (error) {
        console.log(error);
    }

}

function video()
{
    const actual_data=JSON.parse(localStorage.getItem("data"))
console.log(actual_data)
appendvideos(actual_data)

}



const appendvideos = (data) => {
    const container = document.getElementById("searchcontainer");
    container.innerHTML = null;
console.log(data)
    data.forEach((el) => {
        const title = el.snippet.title;
        const videoId = el.id.videoId;

        const thumbnails = el.snippet.thumbnails.high.url;
        const channel_name = el.snippet.channelTitle;

       // console.log(videoId)
        const div = document.createElement('div');
        div.style.display = "flex"
        div.style.marginLeft="1%"
        const img = document.createElement('img');
        img.src = thumbnails;
        img.style.width = "28%"
        img.style.marginTop="1%"
        img.style.marginBottom="1%"
        const div2 = document.createElement('div');
        div2.style.marginTop="1%"
        const tit = document.createElement('h2');
        tit.innerText = title;
        tit.style.marginLeft = "2%";
        tit.style.color="white";
        tit.style.marginTop="2.6%"
        tit.style.width="60%"
        
        const tit2 = document.createElement('h4');
        tit2.innerText="#youtube#fun#video#videoyoutube"
        tit2.style.color="lightsteelblue";
        tit2.style.marginTop="2.6%"
        tit2.style.marginLeft = "2%";
        const tit3 = document.createElement('h3');
        tit3.innerText=channel_name
        tit3.style.color="white";
        tit3.style.marginTop="2.6%"
        tit3.style.marginLeft = "2%";
        console.log(videoId)
       div2.append(tit,tit2,tit3)
        div.addEventListener('click', function() {
            sessionStorage.setItem("video", videoId);
            sessionStorage.setItem("title", title);
            sessionStorage.setItem("ctitle", channel_name);


            window.location.href = "youtubevideo.html";
         

        })
        div.append(img, div2);
        container.append(div);
        // console.log(el)
    });
}
video();

const username = JSON.parse(localStorage.getItem("username"));
const token =JSON.parse(localStorage.getItem("token"));
const img = JSON.parse(localStorage.getItem("img"));
sessionStorage.setItem("image", img);
console.log(img);
let imag=document.getElementById("signup");
if(img!=null &&img.includes("https://")||img.includes("http://"))
{
   
    imag.src=img;
    imag.style.borderRadius="50%";
    imag.style.height="48%";
    imag.style.width="2.8%";
imag.style.marginRight="1%";


}
else{
    imag.src="https://cdn.onlinewebfonts.com/svg/img_357118.png";
    imag.style.borderRadius="50%";
    imag.style.height="48%";
    imag.style.width="2.8%";
imag.style.marginRight="1%";
imag.style.backgroundColor="white"
document.getElementById("signup").addEventListener("click", () => {
    window.location.href = "signup.html";
});
}
function oblogin()
{
    if (token != null) {
        // getprofile(username, token);
        $("#signup").focus(function(){
         $(this).blur(); 
         });
     
       
     
     } else {
        
             window.location.href = 'createaccount.html';
        
         imag.src="https://www.seoclerk.com/pics/want25900-13Uxgt1429382117.png";
     
     }

}

//document.getElementById("type").addEventListener('click',()=>{
//     let type=document.getElementById("name");
// console.log(type)
// //})

function filter(e)
{
    e.preventDefault();

    let main=document.getElementById("type");
    let select=main.name.value;
    let duration=main.duration.value;
    // let oder=main.oder.value;
    

searchmovie(select,duration);


}