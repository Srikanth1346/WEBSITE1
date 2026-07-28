


// ===== Sticky Header =====
window.addEventListener("scroll", () => {
    const header = document.querySelector("header");
    if (window.scrollY > 80) {
        header.style.background = "#111";
        header.style.boxShadow = "0 5px 20px rgba(0,0,0,0.3)";
    } else {
        header.style.background = "#111";
        header.style.boxShadow = "none";
    }
});

// ===== Smooth Scrolling =====
document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', function(e) {
        const target = document.querySelector(this.getAttribute('href'));

        if(target){
            e.preventDefault();
            target.scrollIntoView({
                behavior:'smooth'
            });
        }
    });
});

// ===== Counter Animation =====
const counters = document.querySelectorAll(".stats h3");

const runCounter = () => {

    counters.forEach(counter=>{

        const target = parseInt(counter.innerText);

        let count = 0;

        const update = ()=>{

            count += Math.ceil(target/80);

            if(count<target){

                counter.innerText=count+"+";
                requestAnimationFrame(update);

            }else{

                counter.innerText=target+"+";

            }

        }

        update();

    });

}

const observer=new IntersectionObserver(entries=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

runCounter();

observer.disconnect();

}

});

});

observer.observe(document.querySelector(".stats"));


// ===== Contact Form =====

document.querySelector("form").addEventListener("submit",function(e){

e.preventDefault();

alert("Thank you! We will contact you shortly.");

this.reset();

});


// ===== Back To Top =====

const topBtn=document.createElement("button");

topBtn.innerHTML="⬆";

topBtn.className="topBtn";

document.body.appendChild(topBtn);

window.addEventListener("scroll",()=>{

if(window.scrollY>500){

topBtn.style.display="block";

}else{

topBtn.style.display="none";

}

});

topBtn.onclick=()=>{

window.scrollTo({

top:0,

behavior:"smooth"

});

};