const tuplesSetsDictsTest = [
  // --- Tuples (10)
  {
    id: 1,
    question: "What is a tuple in Python?",
    options: ["Immutable list", "Mutable list", "Dictionary", "Set"],
    correctAnswer: "Immutable list",
  },
  {
    id: 2,
    question: "Which of the following defines a tuple?",
    options: ["tuple = [1,2,3]", "tuple = (1,2,3)", "tuple = {1,2,3}", "tuple = <1,2,3>"],
    correctAnswer: "tuple = (1,2,3)",
  },
  {
    id: 3,
    question: "What is the output of type((10))?",
    options: ["<class 'tuple'>", "<class 'int'>", "<class 'list'>", "Error"],
    correctAnswer: "<class 'int'>",
  },
  {
    id: 4,
    question: "What is the correct way to define a tuple with one element?",
    options: ["(5)", "(5,)", "[5]", "tuple(5)"],
    correctAnswer: "(5,)",
  },
  {
    id: 5,
    question: "Which operation is not allowed on a tuple?",
    options: ["Indexing", "Iteration", "Modification", "Membership test"],
    correctAnswer: "Modification",
  },
  {
    id: 6,
    question: "What will len((1, 2, 3)) return?",
    options: ["2", "3", "1", "Error"],
    correctAnswer: "3",
  },
  {
    id: 7,
    question: "Tuples are usually used for:",
    options: ["Storing changing data", "Storing unique data", "Storing fixed data", "Sorting data"],
    correctAnswer: "Storing fixed data",
  },
  {
    id: 8,
    question: "What is the result of (1, 2) + (3, 4)?",
    options: ["[1,2,3,4]", "(1,2,3,4)", "Error", "None"],
    correctAnswer: "(1,2,3,4)",
  },
  {
    id: 9,
    question: "Can a tuple contain different data types?",
    options: ["Yes", "No", "Only strings", "Only numbers"],
    correctAnswer: "Yes",
  },
  {
    id: 10,
    question: "Which method is used to count occurrences in tuple?",
    options: ["count()", "index()", "find()", "total()"],
    correctAnswer: "count()",
  },

  // --- Sets (10)
  {
    id: 11,
    question: "What is a set in Python?",
    options: ["Ordered and mutable", "Unordered and immutable", "Unordered and mutable", "Ordered and immutable"],
    correctAnswer: "Unordered and mutable",
  },
  {
    id: 12,
    question: "How to define a set?",
    options: ["set = [1,2]", "set = (1,2)", "set = {1,2}", "set = <1,2>"],
    correctAnswer: "set = {1,2}",
  },
  {
    id: 13,
    question: "Which function is used to add element to a set?",
    options: ["add()", "append()", "insert()", "put()"],
    correctAnswer: "add()",
  },
  {
    id: 14,
    question: "What will happen if you add a duplicate element to a set?",
    options: ["It will be added", "It will replace old one", "Error", "It will be ignored"],
    correctAnswer: "It will be ignored",
  },
  {
    id: 15,
    question: "What does set1 & set2 return?",
    options: ["Union", "Difference", "Intersection", "Error"],
    correctAnswer: "Intersection",
  },
  {
    id: 16,
    question: "Which method removes and returns a random item from a set?",
    options: ["pop()", "remove()", "discard()", "del()"],
    correctAnswer: "pop()",
  },
  {
    id: 17,
    question: "What does set1 | set2 mean?",
    options: ["Intersection", "Union", "Difference", "Symmetric difference"],
    correctAnswer: "Union",
  },
  {
    id: 18,
    question: "Which method removes a specific element from a set?",
    options: ["delete()", "pop()", "remove()", "discard()"],
    correctAnswer: "remove()",
  },
  {
    id: 19,
    question: "Can a set contain duplicate elements?",
    options: ["Yes", "No", "Only if sorted", "Only if integers"],
    correctAnswer: "No",
  },
  {
    id: 20,
    question: "Which keyword checks if an item is in a set?",
    options: ["exist", "has", "in", "is"],
    correctAnswer: "in",
  },

  // --- Dictionaries (10)
  {
    id: 21,
    question: "What is a dictionary in Python?",
    options: ["Unordered key-value pair", "Ordered list", "Immutable structure", "List of keys"],
    correctAnswer: "Unordered key-value pair",
  },
  {
    id: 22,
    question: "How to define a dictionary?",
    options: ["dict = [1: 'a']", "dict = {1: 'a'}", "dict = (1, 'a')", "dict = <1: 'a'>"],
    correctAnswer: "dict = {1: 'a'}",
  },
  {
    id: 23,
    question: "Which method returns all keys of a dictionary?",
    options: ["dict.keys()", "dict.all()", "dict.get()", "dict.values()"],
    correctAnswer: "dict.keys()",
  },
  {
    id: 24,
    question: "What will dict.get('key') return if key doesn't exist?",
    options: ["Error", "None", "0", "''"],
    correctAnswer: "None",
  },
  {
    id: 25,
    question: "What is the output of len({'a':1, 'b':2})?",
    options: ["2", "1", "3", "Error"],
    correctAnswer: "2",
  },
  {
    id: 26,
    question: "Which method adds new key-value pair?",
    options: ["append()", "add()", "update()", "insert()"],
    correctAnswer: "update()",
  },
  {
    id: 27,
    question: "What does dict.values() return?",
    options: ["List of keys", "List of values", "All items", "Tuple of values"],
    correctAnswer: "List of values",
  },
  {
    id: 28,
    question: "Which method removes a key from dictionary?",
    options: ["del", "remove()", "discard()", "drop()"],
    correctAnswer: "del",
  },
  {
    id: 29,
    question: "Can dictionary keys be of different types?",
    options: ["Yes", "No", "Only integers", "Only strings"],
    correctAnswer: "Yes",
  },
  {
    id: 30,
    question: "Which method returns both keys and values?",
    options: ["items()", "pairs()", "tuples()", "data()"],
    correctAnswer: "items()",
  },
];

export default tuplesSetsDictsTest;
