const divContainer = document.getElementById("container");

for (let i = 0; i < 256; i++) {
    const divGrid = document.createElement('div');
    divGrid.className ="divGrid";

    divGrid.addEventListener('mouseover', (event) => {
        divGrid.classList.add("hoverClass");

        setTimeout(() => {
            divGrid.classList.remove("hoverClass");
          }, "1000")

    });





    divContainer.appendChild(divGrid);
};

