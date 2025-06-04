const n=16;
const container=document.querySelector("#container");
//n rows and n column
//let's make the container equal to 16*16 of the inner divs
//abhi agar inner div=20*20, so outer=320*320;
for(let i=0; i<n*n; i++)
{
    const temp=document.createElement("div"); //this is the rows
    temp.classList.add("pixel");
    //added the eventlistener while creating the divs itself to save us trouble.
    temp.addEventListener("mouseover", () => {
        console.log(`colored ${i}`);
    });
    container.appendChild(temp);
}
const pixels=document.querySelectorAll(".pixel");
// container.addEventListener("mouseover", (e) =>{
//     e.target.backgroundColor="lightblue";
    
//     console.log("colored");
// })