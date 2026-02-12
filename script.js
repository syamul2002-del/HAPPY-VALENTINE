const titleText="Happy Valentine Dayy 🎉";
const paragraph1="Aku mau bilang sesuatu buat kamu. Makasih udah hadir di hidup aku, sejak ada kamu hidup aku lebih berwarna dan lebih bahagia.";
const paragraph2="Aku nggak tau lagi harus gimana kalau suatu saat kamu pergi dari hidup aku. Rasanya pasti hampa dan sepi banget tanpa kamu.";
const paragraph3="Jadi tolong jangan pernah ninggalin aku yaa 🥺 I love you lebih dari yang bisa aku jelasin dengan kata-kata 💕";
const paragraph4="Sekali lagii... Selamat hari valentine ! Semoga cinta kita selalu tumbuh dan berkembang setiap harinya 🌹";

const titleElement=document.getElementById("title");
const p1=document.getElementById("p1");
const p2=document.getElementById("p2");
const p3=document.getElementById("p3");
const p4=document.getElementById("p4");

function openLetter(){
  const envelope = document.getElementById("envelope");
  const bgMusic = document.getElementById("bgMusic");
  
  envelope.classList.remove("close");
  envelope.classList.add("open");
  
  // Play music from 59 seconds
  bgMusic.currentTime = 59;
  bgMusic.play().catch(err => console.log("Audio play failed:", err));

  setTimeout(()=>{
    document.getElementById("opening").style.display="none";
    document.getElementById("main-content").style.display="flex";
    typeTitle();
  }, 2500);
}

let index=0;
function typeTitle(){
  if(index<titleText.length){
    titleElement.innerHTML+=titleText.charAt(index);
    index++;
    setTimeout(typeTitle,120);
  }else{
    setTimeout(()=>{
      typeParagraph(paragraph1,p1,()=>{
        typeParagraph(paragraph2,p2,()=>{
          typeParagraph(paragraph3,p3,()=>{
            typeParagraph(paragraph4,p4);
          });
        });
      });
    },300);
  }
}

function typeParagraph(text,element,callback){
  let i=0;
  function typing(){
    if(i<text.length){
      element.innerHTML+=text.charAt(i);
      i++;
      setTimeout(typing,45);
    }else if(callback){
      setTimeout(callback,400);
    }
  }
  typing();
}
