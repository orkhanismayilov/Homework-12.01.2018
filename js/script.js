// Taking number of repeats from user
var entered = Number(prompt("Enter the number of repeats"));
// Taking text from user
var text = prompt("Enter the text");
// Creating temporary variable for using in while
var temp = text;
// Default number of repeats
var n = 1;

// Function to process the repeat
function repeat(entered) {
    while (entered > n) {
        text += (" " + temp);
        n++;
    }
    return text;
}

// Condition of processing
if (entered > 0) {
    if (entered > 1) {
        console.log(repeat(entered));
        document.getElementById("repeats").innerHTML = "Total number of repeats: " + entered;
        document.getElementById("result").innerHTML = repeat(entered);
    } else {
        console.log(text);
        document.getElementById("result").innerHTML = text;
    }
} else {
    console.warn("Wrong data!");
    document.getElementById("result").innerHTML = "Wrong data!"
}