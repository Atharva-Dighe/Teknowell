function check() {
    number = document.getElementById("ip").value;
    // alert(number);

    //Odd-Even
    if (number) {
        if (number % 2 == 0)
            displayResult.innerHTML = `${number} is Even`;
        else
            displayResult.innerHTML = `${number} is Odd`;
    }

    //Prime

    if (number) {
        if (number < 2)
            displayResult.innerHTML += `<br> ${number} is not a Prime number`;
        else if (number == 2)
            displayResult.innerHTML += `<br> ${number} is a Prime number`;
        else if (number > 2) {
            let sqRoot = Math.sqrt(number);
            if (number % 2 == 0)
                displayResult.innerHTML += `<br> ${number} is not a Prime number`;
            else if (number) {
                let isPrime = true;
                for (let i = 3; i <= sqRoot; i += 2) {
                    if (number % i == 0) {
                        isPrime = false;
                        break;
                    }
                }
                if (isPrime)
                    displayResult.innerHTML += `<br> ${number} is  Prime `;
                else
                    displayResult.innerHTML += `<br> ${number} is not Prime `
            }
        }
    }

    //Perfect

    if (number) {
        let sum = 0;
        for (let i = 1; i < number; i++) {
            if (number % i == 0)
                sum += i;
        }
        if (sum == number)
            displayResult.innerHTML += `<br> ${number} is a  Perfect number`;
        else
            displayResult.innerHTML += `<br> ${number} is not a  Perfect number`;
    }

    //Positive-Negative 
    if (number) {
        if (number > 0)
            displayResult.innerHTML += `<br> ${number} is Positive`;
        else if (number < 0)
            displayResult.innerHTML += `<br> ${number} is Negative`;
        else
            displayResult.innerHTML += `<br> ${number} is Neither Positive, nor Negative`;
    }


    //Factorial
    if (number) {
        if (number > 0) {
            let fact = 1;
            for (let i = number; i > 0; i--) {
                fact = fact * i;
            }
            displayResult.innerHTML += `<br> Factorial of ${number} is ${fact}`;
        }
        else if (number == 0) {
            displayResult.innerHTML += `<br> Factorial of 0 is 0`;
        }
        else if (number < 0) {
            displayResult.innerHTML += `<br> Factorial of Negative Number doesn't exists`;
        }
    }

    //Armstrong

    if (number) {
        let sum = digit = 0;
        numStr = (number.toString());
        // console.log("No converted to String: ",numStr);
        n = numStr.length;
        // console.log("Length of string is : ",n);
        for (let i = 0; i < n; i++) {
            let digit = parseInt(numStr[i]);
            sum += Math.pow(digit, n);

        }
        // console.log("Sum of all digits in string is: ",sum);
        if (sum == number)
            displayResult.innerHTML += `<br> ${number} is Armstrong`;
        else
            displayResult.innerHTML += `<br> ${number} is not Armstrong`;
    }

}