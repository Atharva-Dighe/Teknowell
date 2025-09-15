function validate()
        {
            name=document.getElementById("name").value;
            pw=document.getElementById("pw").value;
            name=name.trim();
            pw=pw.trim();
            console.log(name);
            console.log(pw);

            if(name=="Atharva" && pw=="1234")
                window.open("./Ass4.html");
            else
                alert("Invalid ID Password");
        }