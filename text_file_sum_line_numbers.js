// asked by hirefrederick / MINDBODY

// You have a text file with proper English sentences. Print the sum of each line's numbers. Assume round positive numbers only and proper punctuation.

// Example file contents...
// Today was warm with the temperature of 85 degrees. Four days ago the temperature was also warm.
// Tomorrow should be colder at 70.
// The won't be any rain in the next few days.
// Over the weekend we should expect 70 and 75, while Monday will be cold at 55.
// Next week's weather is expected to be 70, 65, 78, and then 70 the rest of the week.

// Output...
// Line 1: 85
// Line 2: 70
// Line 3: 0
// Line 4: 200
// Line 5: 283

// Exception cases to watch out for...
// - Number followed by . or , or ! or ? so just splitting words by spaces won't work
// - Lines that don't have any numbers must show zero

var text =
  " Today was warm with the temperature of 85 degrees. Four days ago the temperature was also warm.\n\
Tomorrow should be colder at 70.\n\
The won't be any rain in the next few days.\n\
Over the weekend we should expect 70 and 75, while Monday will be cold at 55.\n\
Next week's weather is expected to be 70, 65, 78, and then 70 the rest of the week.";

const sums = str => {
  let lines = str.split("\n");

  lines.forEach((line, index) => {
    let sum = 0;
    line.split(" ").forEach(word => {
      let parsedWord = parseInt(word);
      if (parsedWord) sum += parsedWord;
    });

    console.log("Line", index + 1, ": ", sum);
  });
};

sums(text);
