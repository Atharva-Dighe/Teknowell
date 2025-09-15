function toggle()
        {
            let state = document.getElementById("bulb");
            let link= state.getAttribute("src");
            if(link=="https://www.w3schools.com/js/pic_bulboff.gif")
        {
                document.getElementById("bulb").src="https://www.w3schools.com/js/pic_bulbon.gif";
                btn.innerText="OFF";
                // bulb.setAttribute("src","./Asgn-5 Food Order/Images/bulbOn.jpeg");
        }
            else if(link=="https://www.w3schools.com/js/pic_bulbon.gif")
        {
                document.getElementById("bulb").src="https://www.w3schools.com/js/pic_bulboff.gif";
                btn.innerHTML="ON";
                // bulb.setAttribute("src","./Asgn-5 Food Order/Images/bulbOff.png");
        }
        }