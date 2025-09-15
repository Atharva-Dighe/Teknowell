let qty = 0;
        let prcXqty = 0;
        let arr = [];


        function add(arg1, arg2) {

            //Accessing Values
            // alert("Add");
            arg1.innerHTML = parseInt(arg1.innerHTML) + 1;
            let a = arg1.id;
            let b = parseInt(arg1.textContent);
            console.log("arg:", arg1);
            console.log("ID:", a);
            console.log("Value:", b);

            function total(arg2) {
                console.log("Total function started")
                // Extracting Price using Reg-ex        
                console.log("Name=", a);
                let c = arg2.textContent;
                let d = c.match(/[0-9]+/);
                let price = parseInt(d[0]);
                console.log("Text Content:", c);
                console.log("Price Extracted:", price);
                //Pushing in Array - Calculating Total
                let item = arr.find(item => item.Name === a);
                if (item) {
                    console.log("If Condition (when " + a + " isfound)");
                    console.log("QTY=", b);
                    console.log("Price=", price);
                    // prcXqty = (price * b)
                    item.Quantity = b;
                    item.TotalPrice = (price * b);
                    console.log("TotalPrice=" + (price) + "*" + (b));
                    let finalBill = arr.reduce((acc, curr) => acc + (curr.TotalPrice), 0);
                    console.log("Final Bill after calculating is", finalBill);
                    billDisplay.innerHTML = ("Final Bill after calculation is " + finalBill);
                }
                else {
                    console.log("Else Condition (" + a + " not found)");
                    prcXqty = (price * b);
                    console.log("prcXqty=" + (price) + "*" + (b));
                    arr.push({ Name: a, Price: price, Quantity: b, TotalPrice: prcXqty });
                    let finalBill = arr.reduce((acc, curr) => acc + (curr.TotalPrice), 0);
                    console.log("Final Bill after calculating is", finalBill);
                    billDisplay.innerHTML = ("Final Bill after calculation is " + finalBill);
                }
                // console.log("Quantity=", qty);
                // console.log("Prce*Qty=", prcXqty);
                console.log(arr);
            } total(arg2);
            // let finalBill = arr.reduce((acc, curr) => acc + (curr.TotalPrice), 0);
            // console.log("Final Bill after calculating is", finalBill);
            // billDisplay.innerHTML = ("Final Bill after calculation is " + finalBill);
            console.log("-------------------------------------------");
        }


        function remove(arg1, arg2) {
            if (parseInt(arg1.innerHTML) > 0) {
                arg1.innerHTML = parseInt(arg1.innerHTML) - 1;
                let a = arg1.id;
                let b = parseInt(arg1.innerHTML);
                console.log("Arg1:", arg1);
                console.log("ID:", a);
                console.log("Value:", b);

                function total(arg2) {
                    let c = arg2.textContent;
                    let d = c.match(/[0-9]+/);
                    let price = parseInt(d[0]);
                    console.log("Text Content:", c);
                    console.log("Price Extracted:", price);

                    let item = arr.find(item => item.Name === a);
                    if (item) {
                        // console.log("If Condition");
                        // console.log("QTY=",b)
                        // console.log("Price=",price)
                        prcXqty = (price * b)
                        item.Quantity = b
                        item.TotalPrice = (price * b);
                        // console.log("TotalPrice="+(price)+"*"+(b))
                    }
                    console.log("Quantity=", b);
                    console.log("Prce*Qty=", prcXqty)
                    for (let i = arr.length - 1; i >= 0; i--) {
                        if (arr[i].Quantity === 0) {
                            arr.splice(i, 1); // Remove the element at index i
                        }
                    }
                    console.log(arr);
                } total(arg2);
                let finalBill = arr.reduce((acc, curr) => acc + (curr.TotalPrice), 0);
                console.log("Final Bill after calculating is", finalBill);
                billDisplay.innerHTML = ("Final Bill after calculation is " + finalBill);
            }
        }


        function cartt() {
            localStorage.setItem('arr',JSON.stringify(arr));
            window.open("../Pages/cart.html"); 
        }
        function search() {
            alert("Search");
        }
        function login() {
            alert("Login");
        }