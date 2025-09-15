/*******************************************************
 * Functionalities of the custom context menu
 * 
 * @author (Anyanwu Benedict Chukwuemeka)
 * @version (v0.01)
 *******************************************************/

    const contextMenu = document.querySelector(".menu");
    const shareMenu = contextMenu.querySelector(".share-menu");

    window.addEventListener("contextmenu", (e) => 
    {
        // Prevent default action
        e.preventDefault();

        // Return if user is clicking in the menu
        if(e.target.closest(".menu")) return;

        // Definitions
        let x = e.offsetX;
        let y = e.offsetY;
        let winWidth = window.innerWidth;
        let winHeight = window.innerHeight;
        let menuWidth = contextMenu.offsetWidth;
        let menuHeight = contextMenu.offsetHeight;

        // Calculate sub-menu's position
        if((x > (winWidth - menuWidth - shareMenu.offsetWidth)) && ((winWidth - menuWidth - shareMenu.offsetWidth) > shareMenu.offsetWidth)) 
        {
            if((shareMenu.classList.contains("right"))) shareMenu.classList.remove("right");
            if((shareMenu.classList.contains("center"))) shareMenu.classList.remove("center");
            shareMenu.classList.add("left");
        }
        else if((x > (winWidth - menuWidth - shareMenu.offsetWidth)) && ((winWidth - menuWidth - shareMenu.offsetWidth) < shareMenu.offsetWidth))
        {
            if((shareMenu.classList.contains("left"))) shareMenu.classList.remove("left");
            if((shareMenu.classList.contains("right"))) shareMenu.classList.remove("right");
            shareMenu.classList.add("center");
        }
        else
        {
            if((shareMenu.classList.contains("left"))) shareMenu.classList.remove("left");
            if((shareMenu.classList.contains("center"))) shareMenu.classList.remove("center");
            shareMenu.classList.add("right");
        }

        // Get the top & left position for the context menu
        y = (y > winHeight - menuHeight) ? winHeight - menuHeight - 5 : y;
        x = (x > winWidth - menuWidth) ? winWidth - menuWidth - 5 : x;
        
        // Set the top & left positions and display the context menu
        contextMenu.style.setProperty('--menu-pos-top', `${y}px`);
        contextMenu.style.setProperty('--menu-pos-left', `${x}px`);
        contextMenu.classList.add("visible");
    });

    // Hide the context menu when user clicks anywhere
    document.addEventListener("click", () => contextMenu.classList.remove("visible"));

    // Creates a text file for the "Save as.." option
    function customSave()
    {
        const blob = new Blob(['View all my projects \n https://acbennny.netlify.app'], { type: 'text/plain' });
        const a = document.createElement('a');
        a.href = URL.createObjectURL(blob);
        a.download = 'myfile.txt';
        a.click();
        a.remove();
    }
