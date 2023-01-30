let playvideo = () => {

    var video=sessionStorage.getItem("video");
    console.log(video)
        const videoid = sessionStorage.getItem("video");
        const title1 = sessionStorage.getItem("title");
        const ctitle = sessionStorage.getItem("ctitle");
        const frame = document.getElementById("ifram");
        const title = document.getElementById("title");
        const ctitle1 = document.getElementById("ctitl");
        
        console.log(videoid)
        relatedmovies(videoid);
        commentsection(videoid);
        
        if(video!=null)
        {
            //window.location.href = "youtubevideo.html";
            //console.log(v)
            frame.src = `https://www.youtube.com/embed/${video}?autoplay=1&mute=1`;
            video="";
           
        }
        else
        {
            frame.src = `https://www.youtube.com/embed/${videoid}?autoplay=1&mute=1`;
        }
     
        
    
    
    
        ctitle1.innerText = title1;
        title.innerText = ctitle;
    
   

}




const relatedmovies = async(id) => {
    //console.log(id)
    const res = await fetch(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&relatedToVideoId=${id}&type=video&maxResults=15&key=AIzaSyCZlPxu6oZNTOlCKNTZmKZ5UcxGoddNlRc`);
    const data = await res.json()
    const actual_data = data.items;
    console.log(actual_data)
    appendvideos(actual_data)

}
const appendvideos = (data) => {
    const container = document.getElementById("videocontainer");
    container.innerHTML = null;

    data.forEach((el) => {
        const title = el.snippet.title;
        const videoId = el.id.videoId;

        const thumbnails = el.snippet.thumbnails.high.url;
        const channel_name = el.snippet.channelTitle;

        console.log(videoId)
        const div = document.createElement('div');
        div.style.display = "flex"
        div.style.marginBottom = "2%";
        div.style.marginLeft = "2%";
        div.style.marginTop = "4%";
        const img = document.createElement('img');
        img.src = thumbnails;
        img.style.width = "50%"
        const tit = document.createElement('h4');
        tit.innerText = title;
        tit.style.marginLeft = "2%";
        tit.style.color="white";
        
        img.addEventListener('click', function() {
            sessionStorage.setItem("video", videoId);
            sessionStorage.setItem("title", title);
            sessionStorage.setItem("ctitle", channel_name);
            
            
            
            
            
            window.location.href = "youtubevideo.html";
          


            
            // playvideo(videoId)
        })
        div.append(img, tit);
        container.append(div);
       
       
        // console.log(el)
    });
}




const commentsection = async(id) => {
    //console.log(id)
    
    const res = await fetch(`https://youtube.googleapis.com/youtube/v3/commentThreads?part=snippet%2Creplies&videoId=${id}&maxResults=12&key=AIzaSyCZlPxu6oZNTOlCKNTZmKZ5UcxGoddNlRc`);
    const data = await res.json()
    const actual_data = data.items;
    console.log(actual_data)
   wait(actual_data)
}

function wait(w)
{
    setTimeout(() => {
        appendcommets(w)
    }, 3000);

}



const appendcommets = (comment) => {
    const container = document.getElementById("messagecontainer");
    container.innerHTML = null;

    comment.forEach((el) => {
        const profileimage = el.snippet.topLevelComment.snippet.authorProfileImageUrl;
        const Displaytext = el.snippet.topLevelComment.snippet.textDisplay;

        const Displayname =  el.snippet.topLevelComment.snippet.authorDisplayName;
        console.log(profileimage,Displaytext,Displayname)

       
         const div = document.createElement('div');
         div.style.display = "flex"
        // // div.style.marginBottom = "2%";
        // // div.style.marginLeft = "2%";
        // // div.style.marginTop = "4%";
        const div2 = document.createElement('div');
         const profileimg= document.createElement('img');
         profileimg.src = profileimage;
         profileimg.style.width = "4%"
         profileimg.style.marginTop = "2%"
         profileimg.style.marginRight = "2%"
         profileimg.style.height = "4%"
         profileimg.style.borderRadius="50%"
         const name = document.createElement('h3');
       name.innerText = Displayname;
        
         name.style.color="white";
         const text = document.createElement('h4');
       text.innerText = Displaytext;
       
        text.style.color="white";
       
     div2.append(name,text)
        div.append(profileimg,div2);
        container.append(div);
        // console.log(el)
    });
}
const username = JSON.parse(localStorage.getItem("username"));
const token =JSON.parse(localStorage.getItem("token"));

const img = JSON.parse(localStorage.getItem("img"));
console.log(img)
//console.log(username,token,img);
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