function userWords() 
{
    const wordArray = [];
    for (i = 0; i < 3; i++) 
    {
        //prompt("Please enter a word: ");
        wordArray.push(prompt("Please enter a word:"));
    }

    document.getElementById("input1").innerHTML = wordArray[0];
    document.getElementById("input2").innerHTML = wordArray[1];
    document.getElementById("input3").innerHTML = wordArray[2];

    const mixedArray = wordArray.map(x => doSomething(x));
    {
        
    }

    //alert(wordArray[3])

    console.log(mixedArray);

    document.getElementById("mix1").innerHTML = mixedArray[0];
    document.getElementById("mix2").innerHTML = mixedArray[1];
    document.getElementById("mix3").innerHTML = mixedArray[2];
    
}

function doSomething(x)
{
    //let up = x.toUpperCase();
    //return up;

    let words = x.split("");
    [words[0], words[words.length - 1]] = [words[words.length - 1], words[0]];
    const mixedString = words.join("");
    return mixedString;

}

function showS1()
{
    screen1.style.display = "block";
    screen2.style.display = "none";
}

function showS2()
{
    screen1.style.display = "none";
    screen2.style.display = "block";
}

function sectionFile() 
{
    screen1.style.display = "none";
    screen2.style.display = "none";
}

sectionFile();