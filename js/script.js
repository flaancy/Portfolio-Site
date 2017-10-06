
function openPage(pageName, elmnt, color) {
    var i, tabcontent, tablinks;
    //esconde o conteudo aberto
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    tablinks = document.getElementsByClassName("tablink");
    for (i = 0; i < tablinks.length; i++) {
        //cleans javascript definitions like color 
        tablinks[i].style.backgroundColor = "";
        tablinks[i].style.color = "";
    }
    // Show the specific tab content
    document.getElementById(pageName).style.display = "block";
    // Add the specific color to the button used to open the tab content
    elmnt.style.color = "white";
    elmnt.style.backgroundColor = color; 
}


