const apikey = `AIzaSyCZlPxu6oZNTOlCKNTZmKZ5UcxGoddNlRc`;
const searchmovie = async() => {
    try {
        const query = document.getElementById('query').value;
       
            const res = await fetch(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=20&q=${query}&key=${apikey}`);
            const data = await res.json()
            const actual_data = data.items;
            localStorage.setItem("data",JSON.stringify(actual_data));


            window.location.href = "searchpage.html";
            //appendvideos(actual_data)
        

        //  console.log(data);
    } catch (error) {
        console.log(error);
    }

}
const popularmovies = async() => {
    const res = await fetch(`https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=20&regionCode=US&key=AIzaSyCZlPxu6oZNTOlCKNTZmKZ5UcxGoddNlRc`);
    const data = await res.json()
    const actual_data = data.items;

    console.log(actual_data)
    appendvideos(actual_data)
}
popularmovies();
// if (appendvideos(data) != null) {

// } else {

// }

const appendvideos = (data) => {
    const container = document.getElementById("container");
    container.innerHTML = null;

    data.forEach((el) => {
        const title = el.snippet.title;
        const videoId = el.id.videoId;
        const video = el.id;
        const thumbnails = el.snippet.thumbnails.high.url;
        const channel_name = el.snippet.channelTitle;

        console.log(videoId)
        const div = document.createElement('div');

        const img = document.createElement('img');
        img.src = thumbnails;
        img.style.marginRight="2%";
        const tit = document.createElement('h4');
        tit.innerText = title;
        const channel = document.createElement('h5');
        channel.innerText = channel_name;
        img.addEventListener('click', function() {
            sessionStorage.setItem("video",  video);
            sessionStorage.setItem("title", title);
            sessionStorage.setItem("ctitle", channel_name);


            window.location.href = "youtubevideo.html";

        })
        div.append(img, tit, channel);
        container.append(div);
        // console.log(el)
    });
}



const username = JSON.parse(localStorage.getItem("username"));
const token =JSON.parse(localStorage.getItem("token"));
const img = JSON.parse(localStorage.getItem("img"))
console.log(username,token,img);
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


