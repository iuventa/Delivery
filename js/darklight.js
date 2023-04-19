let changecolor = () => {


    let button = document.getElementById("toggle").innerHTML;

    console.log(button);

    if(button == '<i class="fa-solid fa-toggle-off"></i>'){
        document.documentElement.style.setProperty("--bgcolor" ,   "#000000");

        document.documentElement.style.setProperty("--black" ,   "#ffffff");
    
        document.documentElement.style.setProperty("--gray" ,   "#d0d0d0");
    
        document.documentElement.style.setProperty("--footercolor" ,   "#3f3000");
    
        document.getElementById("toggle").innerHTML = '<i class="fa-solid fa-toggle-on"></i>';
    
    }
    else{
        document.documentElement.style.setProperty("--bgcolor" ,   "#ffffff");

        document.documentElement.style.setProperty("--black" ,   "#000000");
    
        document.documentElement.style.setProperty("--gray" ,   "#777776");
    
        document.documentElement.style.setProperty("--footercolor" ,   "#FEE395");
    
        document.getElementById("toggle").innerHTML = '<i class="fa-solid fa-toggle-off"></i>';
    }


   
    
}