const loader =  document.getElementById('main');
window.addEventListener('load',function()
{
  loader.style.display =  'none';
});

var canvas = document.getElementById('canvas')
const confettiSettings = { target: 'canvas' };
const confetti = new ConfettiGenerator(confettiSettings);
 confetti.render();
// confitti.clear();  
setInterval(()=>{
    confetti.clear();
    canvas.style.display= 'none';
},5000);


var content = [
    {
        img: "photo_2022-05-28_21-33-43.jpg",
        info: "She is the most sweetest person i have ever met♥️.she is so.. caring so lovable ..so adorable...#MY_TWINING_PARTNER.... i love those moments whenever we are twining without any planning 😂 and i love you"
    },
    {
        img: "photo_2022-05-28_21-34-02.jpg",
        info:"Hey, Anchal✨💗 I'm wishing you a very sweet and happy birthday today🥳 May God bless you with lots of happiness and you receive everything that your heart desires🥰Thanks for being such an amazing friend💫..Love you soooo much and We all are lucky to have you"
    },
    {
        img:"IMG-20210806-WA0196.jpg",
        info:"Well you know almost all my secret and I can say anything to you. Thank you for being such friend of mine ! Happy birthday ,Lots of love!"
    }
]

const btn_prev = document.querySelector('.prev-btn');
const btn_next = document.querySelector('.next-btn');

const info = document.getElementById('info');
const img = document.getElementById('person-img');

var index = 0;
btn_next.addEventListener('click',()=>
{
    index++;
    if(index > content.length-1)
    {
        index = 0;
    }
    let val = content[index];
    img.src= val.img;
    info.textContent = val.info;
})

btn_prev.addEventListener('click',()=>
{
    index--;
    if(index === -1)
    {
        index = content.length-1;
    }
    let val = content[index];
    img.src= val.img;
    info.textContent = val.info;
})