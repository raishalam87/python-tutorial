const questions = [
  {
    id: 1,
    type: "mcq",
    marks: 1,
    question: "Which of the following is a valid variable name in Python?",
    options: ["1variable", "variable_1", "variable-1", "variable.1"],
    answer: "variable_1"
  },
  {
    id: 2,
    type: "mcq",
    marks: 1,
    question: "What is the output of: print(2 ** 3)?",
    options: ["5", "6", "8", "9"],
    answer: "8"
  },
  {
    id: 3,
    type: "mcq",
    marks: 1,
    question: "Which keyword is used to define a function in Python?",
    options: ["func", "define", "def", "function"],
    answer: "def"
  },
  {
    id: 4,
    type: "mcq",
    marks: 1,
    question: "What is the data type of: [1, 2, 3]?",
    options: ["list", "tuple", "set", "dictionary"],
    answer: "list"
  },
  {
    id: 5,
    type: "mcq",
    marks: 1,
    question: "What will be the output of: print('Hello' + 'World')?",
    options: ["Hello World", "HelloWorld", "Hello+World", "Error"],
    answer: "HelloWorld"
  },
  {
    id: 6,
    type: "mcq",
    marks: 1,
    question: "Which of the following is a mutable data type?",
    options: ["Tuple", "String", "List", "Integer"],
    answer: "List"
  },
  {
    id: 7,
    type: "mcq",
    marks: 1,
    question: "Which symbol is used to comment a single line in Python?",
    options: ["//", "/*", "#", "--"],
    answer: "#"
  },
  {
    id: 8,
    type: "mcq",
    marks: 1,
    question: "What does len('Python') return?",
    options: ["5", "6", "7", "Error"],
    answer: "6"
  },
  {
    id: 9,
    type: "mcq",
    marks: 1,
    question: "What is the output of: type(3.14)?",
    options: ["int", "float", "str", "double"],
    answer: "float"
  },
  {
    id: 10,
    type: "mcq",
    marks: 1,
    question: "Which method is used to add an item to a list?",
    options: ["add()", "append()", "insert()", "extend()"],
    answer: "append()"
  },
  {
    id: 11,
    type: "mcq",
    marks: 1,
    question: "What is the index of 'b' in the list ['a', 'b', 'c']?",
    options: ["0", "1", "2", "-1"],
    answer: "1"
  },
  {
    id: 12,
    type: "mcq",
    marks: 1,
    question: "Which loop is used when the number of iterations is known?",
    options: ["while", "for", "do-while", "repeat"],
    answer: "for"
  },
  {
    id: 13,
    type: "mcq",
    marks: 1,
    question: "Which keyword is used to handle exceptions?",
    options: ["catch", "except", "try", "error"],
    answer: "except"
  },
  {
    id: 14,
    type: "mcq",
    marks: 1,
    question: "Which data type is used to store key-value pairs?",
    options: ["list", "tuple", "set", "dictionary"],
    answer: "dictionary"
  },
  {
    id: 15,
    type: "mcq",
    marks: 1,
    question: "What will be the output of: bool(0)?",
    options: ["True", "False", "0", "None"],
    answer: "False"
  },
  {
    id: 16,
    type: "mcq",
    marks: 1,
    question: "Which function is used to get input from the user?",
    options: ["get()", "scan()", "input()", "read()"],
    answer: "input()"
  },
  {
    id: 17,
    type: "mcq",
    marks: 1,
    question: "What does the 'break' statement do?",
    options: ["Skips iteration", "Ends loop", "Ends function", "Starts next iteration"],
    answer: "Ends loop"
  },
  {
    id: 18,
    type: "mcq",
    marks: 1,
    question: "What is the output of: 'Python'[1]?",
    options: ["P", "y", "t", "h"],
    answer: "y"
  },
  {
    id: 19,
    type: "mcq",
    marks: 1,
    question: "What is the extension of Python files?",
    options: [".java", ".py", ".txt", ".exe"],
    answer: ".py"
  },
  {
    id: 20,
    type: "mcq",
    marks: 1,
    question: "Which module in Python is used for math operations?",
    options: ["random", "math", "datetime", "sys"],
    answer: "math"
  },
  {
    id: 21,
    type: "mcq",
    marks: 1,
    question: "What is the result of: 10 // 3?",
    options: ["3.33", "3", "4", "Error"],
    answer: "3"
  },
  {
    id: 22,
    type: "mcq",
    marks: 1,
    question: "Which keyword is used to define a class?",
    options: ["class", "Class", "def", "function"],
    answer: "class"
  },
  {
    id: 23,
    type: "mcq",
    marks: 1,
    question: "Which of the following is not a keyword in Python?",
    options: ["pass", "eval", "assert", "loop"],
    answer: "loop"
  },
  {
    id: 24,
    type: "mcq",
    marks: 1,
    question: "What is the purpose of 'return' in a function?",
    options: ["Exit loop", "Print value", "Send value back", "None"],
    answer: "Send value back"
  },
  {
    id: 25,
    type: "mcq",
    marks: 1,
    question: "Which operator is used for exponentiation?",
    options: ["^", "**", "//", "%"],
    answer: "**"
  },
  {
    id: 26,
    type: "mcq",
    marks: 1,
    question: "Which of the following is used for string formatting?",
    options: ["%", "&", "$", "#"],
    answer: "%"
  },
  {
    id: 27,
    type: "mcq",
    marks: 1,
    question: "Which method is used to remove an item from a list?",
    options: ["pop()", "delete()", "remove()", "clear()"],
    answer: "pop()"
  },
  {
    id: 28,
    type: "mcq",
    marks: 1,
    question: "Which of the following is immutable?",
    options: ["List", "Tuple", "Set", "Dictionary"],
    answer: "Tuple"
  },
  {
    id: 29,
    type: "mcq",
    marks: 1,
    question: "Which function converts a string to an integer?",
    options: ["str()", "int()", "float()", "input()"],
    answer: "int()"
  },
  {
    id: 30,
    type: "mcq",
    marks: 1,
    question: "Which method returns the number of items in a list?",
    options: ["size()", "count()", "length()", "len()"],
    answer: "len()"
  }
];

export default questions;
