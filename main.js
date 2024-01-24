



//Array Manipulation:
    // Create an array named numbers containing the integers from 1 to 5.
    let numbers = [1, 2, 3, 4, 5];

    //Add the number 6 to the end of the array.
    numbers.push(6);

    //Remove the first element of the array
    numbers.shift();

    //Reverse the array.
    numbers.reverse();

    //Join the array elements into a string with a comma as the separator.
    let arrayIntoString = numbers.join(",")

    //Use the map function to create a new array (squaredNumbers) containing the square of each number in the numbers array.
    let squareArray = numbers.map((i) => {
        return i * i;
    })


        //String Manipulation:
            //Create a string variable named message with the value "Hello, World!"
            let message = "Hello, World!"


            //Extract and log the substring "Hello" from the message.
            let substring = message.substring(0, 5);


            //Convert the entire string to uppercase.
            let uppercasetext = message.toUpperCase();


            //Check if the string contains the word "World" (case-insensitive).

            let text = "World";
            let result = message.toLowerCase().includes(text.toLowerCase());

            //Replace "World" with your name in the string.
            let replaceName = message.replace("World", "Mughees");
            console.log(replaceName);


            //Use the map function to create an array of characters from the string.
             const charArray = Array.from(message).map(character => character);
             console.log('-------> ', charArray);





                // Math Operations


                    // Calculate the square root of 25
                            let squareRoot = Math.sqrt(25);

                    // Generate a random number between 1 and 10 (inclusive)
                            const randomNumber = Math.floor(Math.random() * 10) + 1;


                    //Round 3.14159 to the nearest integer.
                            let round = Math.round(3.14159)
                            console.log(round);


                        //Set Operations:
                            //Create two sets, set1 and set2, each containing three unique elements.

                            set2 = new Set([1,2,3,4,5,6]);
                            set1 = new Set([1,2,3])
                            
                            //Calculate the union of set1 and set2.

                            let union = [... new Set([...set1, ...set2])]
                            console.log(union);

                            //Check if set1 is a subset of set2.
                            const subset = [...set1].filter(item => [...set2].includes(item));
                            if( subset.length === [...set1].length){
                                console.log("its a subset",true);
                            }

                            // Remove an element from set2
                                set2.delete(4);
                                console.log(...set2);



                            //Convert set1 to an array.
                            let setToArray = [...set1]
                            console.log(setToArray);


                                    //Map Operations:
                                        //Create an array named originalArray containing at least three numbers.
                                            let originalArray = [1,2,3];
                                        //Use the map function to create a new array (doubledArray) containing each number doubled.
                                            let doubledArray = originalArray.map((e)=> e+e)
           