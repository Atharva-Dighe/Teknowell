function calculateSalary()
        {
            id=document.getElementById("ID").value;
            console.log(id);
            name=document.getElementById("name").value;
            console.log(name)
            mSalary=parseInt(document.getElementById("mSalary").value);
            console.log(mSalary);
            td=parseInt(document.getElementById("td").value);
            console.log(mSalary);
            pf=parseInt(document.getElementById("pf").value);
            console.log(pf);
            hra=parseInt(document.getElementById("hra").value);
            console.log(hra);
            ta=parseInt(document.getElementById("ta").value);
            console.log(ta);
            ab=parseInt(document.getElementById("ab").value);
            console.log(ab);
            fSalary=parseInt(((mSalary/td)*(td-ab)) + hra + ta - pf);
            // fSalary.style.fontStyle="italic";
            console.log(fSalary);
            if (fSalary >=0)
                show.innerHTML=("Final Salary of Employee <br> ID: "+id+"  "+name+ "<br>is Rs " +fSalary+" /-");
            else
                alert("Enter Valid Values");
        }