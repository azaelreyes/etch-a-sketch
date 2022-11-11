const divContainer = document.getElementById("container");



const btn = document.getElementById("btn");

btn.addEventListener("click", function() {
    const size = prompt("Enter # of squares per side for Sketch? (1-100)");
    
    for (let i = 0; i < (size*size); i++) {
        const divGrid = document.createElement('div');
        divGrid.className ="divGrid";

        const divDimension = 800/size;

        divGrid.style.width = divDimension + "px";
        divGrid.style.height = divDimension + "px";
    
        divGrid.addEventListener('mouseover', (event) => {
            divGrid.classList.add("hoverClass");
    
            setTimeout(() => {
                divGrid.classList.remove("hoverClass");
              }, "3000")
    
        });
        divContainer.appendChild(divGrid);
    };


  });

