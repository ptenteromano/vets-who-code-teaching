let productOf3Digits = () =>{
  result = []
  for(let i = 100; i <= 999; i++){
    for(let j = 100; j <=999; j++){
      result.push(i*j)
      console.log(result)
    }
  }
}

const words = [
  "taco cat",
  "Racecar",
  "Radar",
  "Redder",
  "Refer",
  "Repaper",
  "Rotator"
];

function palindromes(word_list) {
  // variables
  const palindromes = [];
  const stack = [];
  let word;

  for (idx in word_list) {
    word = word_list[idx];

    build_stack(word, stack);
    palindrome = check_palindrome(word, stack);

    console.log(word, palindrome);
    palindromes.push(palindrome);
  }

  return palindromes;
}

function build_stack(word, stack) {
  let char;

  for (l in word) {
    char = word[l].toLowerCase();

    if (char === " ") continue;

    stack.push(char);
  }
}

function check_palindrome(original_word, stack) {
  let char_orig, char_stack;

  for (l in original_word) {
    char_orig = original_word[l].toLowerCase();

    if (char_orig === " ") continue;

    char_stack = stack.pop();
    if (char_stack !== char_orig) return false;
  }
  return true;
}

palindromes(words);
