let n=50;
const canvasWidth=480;
let pixelWidth=canvasWidth/n;
let rgbMode=false;

const resize=document.querySelector("#resize");
const container=document.querySelector("#container");
const rgb=document.querySelector("#rgb");
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
    rgbMode=!rgbMode;
    console.log("rgb mode on");
});

function grid(n, pixelWidth){
    container.innerHTML="";
    for(let i=0; i<n*n; i++)
        {
            const temp=document.createElement("div");
            temp.classList.add("pixel");
            temp.style.cssText=`width:${pixelWidth}px; height:${pixelWidth}px; box-sizing: border-box; border:thin solid black;`
            //added the eventlistener while creating the divs itself to save us trouble.
            temp.addEventListener("mouseover", (e) => {
                console.log(`colored ${i}`);
                if(rgbMode){
                    const r=Math.floor(Math.random()*256);
                    const g=Math.floor(Math.random()*256);
                    const b=Math.floor(Math.random()*256);
                    temp.style.backgroundColor=`rgb(${r}, ${g}, ${b})`;
                }
                else{
                    temp.style.backgroundColor="lightblue";
                }

            });
            container.appendChild(temp);
        }
}


