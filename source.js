console.log("Welcome to Spotify");
let songindex=0;
let audioElement=new Audio('./Spotify Clone/songs/1.mp3');
let masterPlay=document.getElementById('masterPlay');
let myProgressBar=document.getElementById('myProgressBar');
let gif=document.getElementById('gif');
let masterSongName = document.getElementById('masterSongName');
 let songItems=  Array.from(document.getElementsByClassName('songItem'));
let songs=[

    {songName:"Tum Se Hi",filePath:"./Spotify Clone/songs/1.mp3",coverPath:"./Spotify Clone/covers/1.jpg"},
    {songName:"Tum HI HO",filePath:"./Spotify Clone/songs/2.mp3",coverPath:"./Spotify Clone/covers/2.jpg"},
    {songName:"Aarambh Hai",filePath:"./Spotify Clone/songs/3.mp3",coverPath:"./Spotify Clone/covers/3.jpg"},
    {songName:"Thomas",filePath:"./Spotify Clone/songs/9.mp3",coverPath:"./Spotify Clone/covers/4.jpg"},
    {songName:"ALva",filePath:"./Spotify Clone/songs/5.mp3",coverPath:"./Spotify Clone/covers/5.jpg"},
    {songName:"Avenger",filePath:"./Spotify Clone/songs/6.mp3",coverPath:"./Spotify Clone/covers/6.jpg"},
    {songName:"Avenger",filePath:"./Spotify Clone/songs/0.mp3",coverPath:"./Spotify Clone/covers/6.jpg"},

]
songItems.forEach((element,i)=>
{  console.log(element,i);
    element.getElementsByTagName("img")[0].src=songs[i].coverPath;
    element.getElementsByClassName("songname")[0].innerText=songs[i].songName;
})
masterPlay.addEventListener('click', ()=>{
 if(audioElement.paused||audioElement.currentTime<0)
    {
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        gif.style.opacity=0.8;
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
        gif.style.opacity=0;
    }

})
audioElement.addEventListener('timeupdate',()=>
{
    console.log('timeupdate');
    progress=parseInt((audioElement.currentTime/audioElement.duration)*100);
    myProgressBar.value=progress;

})
myProgressBar.addEventListener('change',()=>{
    audioElement.currentTime= (myProgressBar.value * audioElement.duration)/100;
})
const makeAllPlays=()=>
{
    Array.from(document.getElementsByClassName('songplay')).forEach((element)=>{
        element.classList.remove('fa-pause-circle');
        element.classList.add('fa-play-circle');
            
    })
}
Array.from(document.getElementsByClassName('songplay')).forEach((element)=>{
    element.addEventListener('click', (e)=>{
       
            makeAllPlays();
            console.log("Here");
            songindex=parseInt(e.target.id);
            e.target.classList.remove('fa-play-circle');
            e.target.classList.add('fa-pause-circle');
        
            // console.log(songindex);
            masterSongName.innerText=songs[songindex].songName;
            audioElement.src=`./songs/${songindex}.mp3`;
            audioElement.currentTime=1;
            audioElement.play();

            masterPlay.classList.remove('fa-play-circle');
            masterPlay.classList.add('fa-pause-circle');
        })
    })
document.getElementById('next').addEventListener('click',()=>{
    if(songindex==6)
    songindex=1;
    else{
        songindex+=1;
    }
    
    masterSongName.innerText = songs[songindex-1].songName;
    audioElement.src=`./Spotify Clone/songs/${songindex}.mp3`;
    audioElement.currentTime=0;
       audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        gif.style.opacity=1;
    })
document.getElementById('previous').addEventListener('click',()=>{
    if(songindex<=0)
    songindex=0;
    else{
        songindex-=1;
    }
    masterSongName.innerText = songs[songindex].songName;
    audioElement.src=`./Spotify Clone/songs/${songindex+1}.mp3`;
    audioElement.currentTime=0;
   audioElement.play();
     masterPlay.classList.remove('fa-play-circle');
     masterPlay.classList.add('fa-pause-circle');
     gif.style.opacity=0.8;
})
