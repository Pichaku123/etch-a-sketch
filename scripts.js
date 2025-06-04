let n=50;
const canvasWidth=480;
let pixelWidth=canvasWidth/n;
let rgbMode=false;
let darkenMode=false;

const resize=document.querySelector("#resize");
const container=document.querySelector("#container");
const rgb=document.querySelector("#rgb");
const darken=document.querySelector("#darken");
const reset=document.querySelector("#reset");


grid(n, pixelWidth);    //just to create a default 50x50 grid

resize.addEventListener("click", () => {
    n=Number(prompt("Add grid size(<99)- "));
    while(n>99)
    {
        alert("Please enter width <99.");
        n=Number(prompt("Add grid size(<99)- "));
    }
    pixelWidth=canvasWidth/n;
    grid(n, pixelWidth);
});

rgb.addEventListener("click", (e) => {
    darkenMode=false;
    rgbMode=!rgbMode;
    console.log("rgb mode on");
});

darken.addEventListener("click", (e) => {
    rgbMode=false;
    darkenMode= !darkenMode;
    console.log("dark mode on");
});

reset.addEventListener("click", () => {
    const pixels=document.querySelectorAll(".pixel");
    pixels.forEach((pixel) => {
        pixel.style.backgroundColor= "white";
        pixel.setAttribute("dark", 0);
    })
});

function grid(n, pixelWidth){
    container.innerHTML="";
    for(let i=0; i<n*n; i++)
        {
            const temp=document.createElement("div");
            temp.classList.add("pixel");
            temp.style.cssText=`width:${pixelWidth}px; height:${pixelWidth}px; box-sizing: border-box; border:thin solid black;`;
            temp.setAttribute("dark", 0);
            //added the eventlistener while creating the divs itself to save us trouble.
            temp.addEventListener("mouseover", (e) => {
                console.log(`colored ${i}`);
                let opac=Number(temp.getAttribute("dark")) || 0; //0-1
                if(rgbMode){
                    const r=Math.floor(Math.random()*256);
                    const g=Math.floor(Math.random()*256);
                    const b=Math.floor(Math.random()*256);
                    temp.style.backgroundColor=`rgb(${r}, ${g}, ${b})`;
                }
                else if(darkenMode){
                    opac+=0.1;
                    temp.style.backgroundColor=`rgba(0,0,0,${opac})`;
                    temp.setAttribute("dark", opac);
                }
                else{
                    temp.style.backgroundColor="black";
                }

            });
            container.appendChild(temp);
        }
}


