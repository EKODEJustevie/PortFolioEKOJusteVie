const CoverImg = document.getElementById('Coverimg');

let CoverBackgroundimg = ["aircraftmaintenance.png","chess.png","CODEVENOM Fullstack Development Wallpaper.jpeg","iron .jpg","arduino.webp","télécharger.jpeg"
    ,"5 Graphics Settings Worth Tweaking in Every PC Game.jpeg", "HD Desktop Wallpapers _ Laptop Wallpapers.jpeg", "r.jpeg", "Física.jpeg", "télécharger (2).jpeg", "télécharger (3).jpeg", "télécharger (4).jpeg", "télécharger (5).jpeg", 
    "télécharger (6).jpeg", "télécharger (7).jpeg", "The Simplest Formula.jpeg", "Visual Studio Code Wallpapers - Wallpaper Cave.jpeg", "哈哈哈.jpeg"
];  
const MyAge = 19;
const Bio ="Hello! moi c'est Juste-Vie, j'ai "+ MyAge + " ans Je suis étudiant en école d'ingénieurie à Mundiapolis. J'aime la Technologies, d'exploration spatiale, le sport et la nature.Je vous invite à en découvrir plus avec mon site, 🙂 enjoy !";

function CoverBackground(){
    const Random = Date.now();
    CoverImg.src = `images/cover/${CoverBackgroundimg[Random % CoverBackgroundimg.length]}`;
}
CoverBackground();
setInterval(CoverBackground, 60000);

 function typeWriter(element, text, speed = 200) {
            let i = 0;
            element.innerHTML = '';
            
            function type() {
                if (i < text.length) {
                    element.innerHTML += text.charAt(i);
                    i++;
                    setTimeout(type, speed);
                } else {
                    
                    setInterval(() => {
                        element.style.borderColor = element.style.borderColor === 'transparent' ? '#d0d0d0ff' : 'transparent';
                    }, 1000);
                }
            }
            type();
        }

        setTimeout(() => {
            const element = document.getElementById('typewriter-text');
            typeWriter(element, Bio, 100);
        }, 5000);



let Forme = document.getElementById('FormeProfil');
let imgP = document.getElementById('imgProfile');

alignImgAndForm();



function alignImgAndForm(){

}




const Blocks = document.querySelectorAll('.BlockEtudes');
let  currentBlock = null; 

let offsetX = 0;
let offsetY = 0;

Blocks.forEach(block => {
    block.addEventListener('mousedown', e =>{
        currentBlock = block;
        offsetX = e.clientX - block.offsetLeft;
        offsetY = e.clientY - block.offsetTop;
        block.style.cursor = 'grabbing';
    });
});

document.addEventListener('mouseup', () => {
    if(currentBlock){
        currentBlock.style.cursor = 'grab';
        currentBlock = null;
    }
    
});

document.addEventListener('mousemove', e => {
    if(currentBlock){
        currentBlock.style.left = (e.clientX -offsetX)+ 'px';
        currentBlock.style.top = (e.clientY - offsetY)+ 'px';
        updatesLines();
    }
});

    function getCenter(el) {
      const rect = el.getBoundingClientRect();
      const scrollLeft = window.scrollX || document.documentElement.scrollLeft;
      const scrollTop = window.scrollY || document.documentElement.scrollTop;

      return {
        x: rect.left + rect.width / 2 + scrollLeft,
        y: rect.top + rect.height / 2 + scrollTop
      };
    }


function updatesLines(){
    const p1 = getCenter(document.getElementById('Block1'));
    const p2 = getCenter(document.getElementById('Block2'));
    const p3 = getCenter(document.getElementById('Block3'));
    const p4 = getCenter(document.getElementById('Block4'));
    const p5 = getCenter(document.getElementById('Block5'));
    const p6 = getCenter(document.getElementById('Block6'));

document.getElementById('line1').setAttribute(
  'd',
  `M${p1.x},${p1.y} C${p1.x+100},${p1.y} ${p2.x-100},${p2.y} ${p2.x},${p2.y}`
);

document.getElementById('line2').setAttribute(
  'd',
  `M${p2.x},${p2.y} C${p2.x+100},${p2.y} ${p3.x-100},${p3.y} ${p3.x},${p3.y}`
);

document.getElementById('line3').setAttribute(
  'd',
  `M${p3.x},${p3.y} C${p3.x+100},${p3.y} ${p5.x-100},${p5.y} ${p5.x},${p5.y}`
);

document.getElementById('line4').setAttribute(
  'd',
  `M${p4.x},${p4.y} C${p4.x+100},${p4.y} ${p5.x-100},${p5.y} ${p5.x},${p5.y}`
);

document.getElementById('line5').setAttribute(
  'd',
  `M${p5.x},${p5.y} C${p5.x+100},${p5.y} ${p6.x-100},${p6.y} ${p6.x},${p6.y}`
);
}






const programming = document.getElementById('Prog');
const Electro = document.getElementById('Electro');
const Logiciels = document.getElementById('Logiciels');
const Cybersécurité = document.getElementById('Cybersécurité');
const ButtonCompts = document.querySelectorAll('.comptBtn');

ButtonCompts.forEach(item =>{
    item.addEventListener('click', ()=>{
        ButtonCompts.forEach(r =>{
            r.classList.remove('BtnOrange');
        });
        item.classList.add('BtnOrange');
        changeCompétence(item.dataset.btn);
    })
    
    
    
})

function changeCompétence(l){
    const ComptsClass = document.querySelectorAll('.ctnCompétences');
    ComptsClass.forEach(item => {
        item.classList.add('CtnrNone');
    })
    switch(l){
        case "prog": programming.classList.remove('CtnrNone');
        break;
        case "elect": Electro.classList.remove('CtnrNone');
        break;
        case "logi": Logiciels.classList.remove('CtnrNone');
        break;
        case "cyber": Cybersécurité.classList.remove('CtnrNone');
        break;
        default: ButtonCompts.classList.remove('CtnrNone');
        break;
    }
    

}


