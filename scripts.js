let n=50;
const canvasWidth=960;
let pixelWidth=960/n;

const resize=document.querySelector("#resize");
const container=document.querySelector("#container");

grid(n, pixelWidth);

resize.addEventListener("click", () => {
    n=Number(prompt("Add grid size- "));
    pixelWidth=960/n;
    grid(n, pixelWidth);
})


function grid(n, pixelWidth){
    container.innerHTML="";
    for(let i=0; i<n*n; i++)
        {
            const temp=document.createElement("div"); //this is the rows
            temp.classList.add("pixel");
            temp.style.cssText=`width:${pixelWidth}px; height:${pixelWidth}px; box-sizing: border-box; border:1px solid black;`
            //added the eventlistener while creating the divs itself to save us trouble.
            temp.addEventListener("mouseover", (e) => {
                console.log(`colored ${i}`);
                temp.style.backgroundColor="lightblue";
            });
            container.appendChild(temp);
        }
}

// container.addEventListener("mouseover", (e) =>{
//     e.target.backgroundColor="lightblue";
    
//     console.log("colored");
// })