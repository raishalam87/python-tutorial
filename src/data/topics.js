// File: src/data/topics.js
const topics = [
 {
  id: 1,
  title: "What is Python?",
  description: `
    <p><strong>Python</strong> is an interpreted, dynamically-typed programming language.</p>
    
    <h3>Explanation of terms</h3>
    <ul>
      <li><strong>Interpreted:</strong> Python code is run line by line by an interpreter (not compiled at once).</li>
      <li><strong>Dynamically-typed:</strong> You don’t need to define variable types. Python figures it out at runtime.</li>
      <li><strong>Programming language:</strong> A way to give instructions to a computer.</li>
    </ul>

    <h3>👨‍💻 Who developed Python?</h3>
    <p>Guido van Rossum (Netherlands)</p>

    <h3>📅 When was Python released?</h3>
    <p>January 26, 1991</p>

    <h3>💡 Where is Python Used?</h3>
    <ul>
      <li>🤖 Artificial Intelligence (AI) & Machine Learning</li>
      <li>📊 Data Analytics & Data Science</li>
      <li>🎮 Game Development</li>
      <li>🌐 Web Development</li>
    </ul>
  `,
  syntax: "",
  example: `print("Hello, World!")`
},
{
  id: 2,
  title: "Scope in Python",
  description: `
    <p><strong>Scope</strong> refers to the region of the code where a variable can be accessed.</p>

    <h3>1. Local Scope</h3>
    <p>A variable declared inside a function is local to that function.</p>

    <h3>2. Global Scope</h3>
    <p>A variable declared outside any function is global and accessible everywhere.</p>

    <h3>3. Enclosing Scope (Nested Functions)</h3>
    <p>Inner functions can access variables from the enclosing outer function.</p>

    <h3>4. Built-in Scope</h3>
    <p>These are names preassigned in Python, like <code>len()</code>, <code>range()</code>.</p>
  `,
  syntax: `# Local Scope
def greet():
    name = "Raish"
    print("Hello", name)

# Global Scope
x = 10
def show():
    print("x is", x)

# Enclosing Scope
def outer():
    msg = "Hi"
    def inner():
        print(msg)

# Built-in Scope
len(["a", "b", "c"])`,
  example: `# Local Scope Example
def greet():
    name = "Raish"
    print("Hello", name)

greet()
# print(name)  # ❌ Error

# Global Scope Example
x = 10
def show():
    print("x is", x)

show()
print("Accessing outside too:", x)

# Enclosing Scope Example
def outer():
    msg = "Hello from outer"
    def inner():
        print(msg)
    inner()

outer()

# Built-in Scope Example
fruits = ["apple", "banana", "mango"]
print("Number of fruits:", len(fruits))`
}
,
{
  id: 3,
  title: "Variables",
  description: `
    <p>A <strong>variable</strong> is like a container or label used to store data in a Python program.</p>

    <h3>Explanation:</h3>
    <ul>
      <li>Variables help us store values like numbers, text, etc.</li>
      <li>You can reuse variables to make your programs flexible.</li>
      <li>In Python, you don't need to declare the type — Python figures it out automatically.</li>
    </ul>

    <h3>📝 Rules for Naming Variables in Python:</h3>
    <ul>
      <li>Must start with a letter or an underscore (_)</li>
      <li>✅ Valid: <code>name</code>, <code>_value</code> | ❌ Invalid: <code>1name</code>, <code>@value</code></li>
      <li>Can only contain letters, numbers, and underscores</li>
      <li>✅ Valid: <code>student_name</code>, <code>marks1</code> | ❌ Invalid: <code>student-name</code>, <code>marks#</code></li>
      <li>Case-sensitive: <code>age</code> and <code>Age</code> are different</li>
      <li>No spaces allowed: use underscore instead</li>
      <li>✅ Valid: <code>total_marks</code> | ❌ Invalid: <code>total marks</code></li>
    </ul>

    <h3>Types of Variables (Based on Scope):</h3>
    <ul>
      <li>🔹 <strong>Local Variable</strong>: Defined inside a function. Only accessible there.</li>
      <li>🔹 <strong>Global Variable</strong>: Defined outside all functions. Accessible everywhere.</li>
    </ul>
  `,
  syntax: `# Declaring different types of variables
name = "Raish"       # string
age = 22             # number
is_student = True    # boolean

# Global variable
x = "I'm a global variable"

# Local variable inside a function
def my_function():
    y = "I'm a local variable"
    print(x)  # Accessing global
    print(y)  # Accessing local
`,
  example: `# Example: Using Variables

name = "Raish"
age = 22
is_student = True

print("Name:", name)
print("Age:", age)
print("Is student:", is_student)

# Example: Scope of Variables

x = "I'm a global variable"

def my_function():
    y = "I'm a local variable"
    print(x)  # Accessing global
    print(y)  # Accessing local

my_function()

# Uncommenting the line below will give an error because y is local
# print(y)
`
}
,
{
  id: 4,
  title: "Data Types",
  description: `
    <p>Python has different types of data to store different kinds of values.</p>
    <p><strong>There are 4 basic data types:</strong></p>
    <ol>
      <li><strong>String (str)</strong> – Used to store text values.</li>
      <li><strong>Integer (int)</strong> – Used to store whole numbers.</li>
      <li><strong>Float (float)</strong> – Used to store decimal numbers.</li>
      <li><strong>Boolean (bool)</strong> – Used to store <code>True</code> or <code>False</code>.</li>
    </ol>

    <h3>💡 Real-Life Example:</h3>
    <ul>
      <li><strong>name</strong> = "Riya Sharma" → Student's name (text)</li>
      <li><strong>age</strong> = 17 → Student's age (integer)</li>
      <li><strong>is_student</strong> = True → Is she a student? (boolean)</li>
      <li><strong>grade</strong> = 89.5 → Percentage marks (float)</li>
    </ul>
  `,
  syntax: `# String (text)
name = "Alice"
print("Name is:", name)

# Integer (whole number)
age = 14
print("Age is:", age)

# Float (decimal number)
price = 99.99
print("Price is:", price)

# Boolean (True/False)
is_student = True
print("Is student:", is_student)
`,
  example: `# Real-life example with different data types

name = "Riya Sharma"         # Student's name (string)
age = 17                     # Student's age (integer)
is_student = True            # Is she a student? (boolean)
grade = 89.5                 # Student's percentage (float)

# Printing all details
print("Student Name:", name)
print("Age:", age)
print("Passed as student:", is_student)
print("Final Grade:", grade)
`
}
,
{
  id: 5,
  title: "Operators",
  description: `
    <p>Operators in Python are special symbols that perform operations on variables and values.</p>

    <h3>Types of Operators:</h3>
    <ol>
      <li><strong>Arithmetic Operators</strong>: Used to perform mathematical operations like add, subtract, multiply.</li>
      <li><strong>Comparison Operators</strong>: Compare two values and return True or False.</li>
      <li><strong>Logical Operators</strong>: Combine multiple conditions (and, or, not).</li>
      <li><strong>Assignment Operators</strong>: Assign values to variables.</li>
    </ol>

    <h3>🧠 Examples of Common Operators:</h3>
    <ul>
      <li><strong>Arithmetic:</strong> <code>+, -, *, /, %, **, //</code></li>
      <li><strong>Comparison:</strong> <code>==, !=, &gt;, &lt;, &gt;=, &lt;=</code></li>
      <li><strong>Logical:</strong> <code>and, or, not</code></li>
      <li><strong>Assignment:</strong> <code>=, +=, -=, *=, /=</code></li>
    </ul>
  `,
  syntax: `# Arithmetic Operators
a = 10
b = 3
print(a + b)  # Addition
print(a - b)  # Subtraction
print(a * b)  # Multiplication
print(a / b)  # Division
print(a % b)  # Modulus
print(a ** b) # Exponentiation
print(a // b) # Floor Division

# Comparison Operators
print(a == b)  # Equal
print(a != b)  # Not equal
print(a > b)   # Greater than
print(a < b)   # Less than

# Logical Operators
x = True
y = False
print(x and y)
print(x or y)
print(not x)

# Assignment Operators
c = 5
c += 2  # Same as: c = c + 2
print(c)
`,
  example: `# Real-life use case of operators

# Student's scores
math = 85
science = 90

# Arithmetic
total = math + science
print("Total Marks:", total)

# Comparison
print("Math > Science?", math > science)

# Logical
passed_math = math >= 40
passed_sci = science >= 40
print("Passed All Subjects?", passed_math and passed_sci)

# Assignment
bonus = 5
bonus += 2
print("Bonus Marks:", bonus)
`
}
,
{
  id: 6,
  title: "Conditional Statements",
  description: `
    <p><strong>Conditional statements</strong> are used to perform different actions based on different conditions. They help your program make decisions.</p>

    <h3>📘 Types of Conditional Statements:</h3>
    <ul>
      <li><strong>if</strong></li>
      <li><strong>if-else</strong></li>
      <li><strong>if-elif-else</strong></li>
      <li><strong>Nested if</strong></li>
    </ul>

    <h3>🔹 What is <code>if</code> in Python?</h3>
    <p>The <code>if</code> statement runs a block of code only if a certain condition is <strong>True</strong>.</p>

    <h3>🔹 What is <code>if-else</code> in Python?</h3>
    <p>The <code>if-else</code> statement lets us run one block if a condition is <strong>True</strong>, and another block if it is <strong>False</strong>.</p>

    <h3>🔹 What is <code>elif</code> (Else If)?</h3>
    <p><code>elif</code> is used when we need to check <strong>multiple conditions</strong>. It comes after <code>if</code> and before <code>else</code>.</p>

    <h3>📝 Practice Questions:</h3>
    <ol>
      <li>Check whether a number is even or odd.</li>
      <li>Check if a person is eligible to vote (age ≥ 18).</li>
      <li>Ask the user for a password and check if it's strong (length ≥ 8).</li>
      <li>Take marks from the user and print Grade (A+, A, B, etc.) based on score.</li>
      <li>Find the greatest among three numbers (a, b, c).</li>
      <li>Check whether a number is positive, negative, or zero.</li>
      <li>Take a temperature value and print whether it’s Cold, Warm, or Hot.</li>
      <li>Check traffic light color and print action: Stop, Wait, or Go.</li>
      <li>Take a day name and print whether it’s a Weekday or Weekend.</li>
      <li>Ask the user for their percentage and print if they passed with distinction, first class, second class, or failed.</li>
    </ol>
  `,
  syntax: `# If Statement
age = 18
if age >= 18:
    print("✅ You are eligible to vote.")

# If-Else Statement
name = "Raish"
age = 16
if age >= 18:
    print(name, "is eligible to vote.")
else:
    print(name, "is not eligible to vote.")

# Elif Statement
marks = 85
if marks >= 90:
    print("Grade: A+")
elif marks >= 75:
    print("Grade: A")
elif marks >= 60:
    print("Grade: B")
else:
    print("Grade: Needs Improvement")
`,
  example: `# Real-life example using all conditions

user_name = "Raish"
age = 20

if age >= 18:
    print(user_name, "is eligible to vote.")
else:
    print(user_name, "is not eligible to vote.")

# Grade system using elif
score = 77

if score >= 90:
    print("Grade: A+")
elif score >= 75:
    print("Grade: A")
elif score >= 60:
    print("Grade: B")
else:
    print("Grade: C or Fail")
`
}
,
{
  id: 7,
  title: "String Slicing",
  description: `
    <p><strong>Slicing</strong> allows you to extract a portion of a string using index positions.</p>

    <h3>📘 Syntax:</h3>
    <pre><code>string[start:stop]
string[start:stop:step]</code></pre>
    <ul>
      <li><code>start</code>: Index to begin the slice (inclusive)</li>
      <li><code>stop</code>: Index to end the slice (exclusive)</li>
      <li><code>step</code>: Step size (optional)</li>
    </ul>

    <h3>✅ Real-life Analogy:</h3>
    <p>Just like cropping a part of an image or selecting a few letters from a word, slicing helps you work with part of a string.</p>

    <h3>📝 Practice Questions:</h3>
    <ol>
      <li>Reverse a string (e.g. "Python" → "nohtyP")</li>
      <li>Check if a string is a palindrome (e.g. "madam")</li>
      <li>Print the first 3 characters of a string</li>
      <li>Print the last 4 characters of a string</li>
      <li>Print every second character of a string</li>
      <li>Remove the first and last characters of a string</li>
      <li>Get characters from index 2 to 5 of a string</li>
      <li>Reverse a number using string slicing (e.g. 1234 → 4321)</li>
      <li>Check if the first and last characters of a string are same</li>
      <li>Count the number of vowels in a string</li>
    </ol>
  `,
  syntax: `# String Slicing Syntax
text = "PythonProgramming"

print(text[0:6])     # Python
print(text[6:])      # Programming
print(text[-6:])     # amming
print(text[::2])     # Pto rgamn`,
  example: `# Real-life example

message = "WelcomeToPython"

# Extract "Welcome"
print(message[0:7])

# Extract "Python"
print(message[-6:])

# Print every 2nd character
print(message[::2])

# Reverse the message
print(message[::-1])
`
}
,

{
  id: 8,
  title: "Loops in Python",
  description: `
    <h2>🔁 Python Loops</h2>
    <p>Loops let you run a block of code repeatedly, which is useful when performing tasks multiple times.</p>

    <h3>📌 Types of Loops:</h3>
    <ul>
      <li><strong>for loop</strong> – Iterates over a sequence like a list, string, or range.</li>
      <li><strong>while loop</strong> – Keeps running as long as a condition is <code>True</code>.</li>
    </ul>

    <h3>📘 What is <code>range()</code> in Python?</h3>
    <p><code>range()</code> generates a sequence of numbers:</p>
    <ul>
      <li><code>range(5)</code> → 0, 1, 2, 3, 4</li>
      <li><code>range(2, 6)</code> → 2, 3, 4, 5</li>
      <li><code>range(1, 10, 2)</code> → 1, 3, 5, 7, 9</li>
    </ul>

    <h3>🧠 What is Indexing?</h3>
    <p>Indexing lets you access characters by their position in strings or lists:</p>
    <pre><code>text = "Python"
text[0] → "P"
text[1] → "y"
text[-1] → "n"</code></pre>

    <h3>🧪 Example: Using <code>range()</code> with <code>for</code> loop</h3>
    <pre><code>for i in range(1, 6):
    print(i)</code></pre>

    <h3>💡 Practice Questions:</h3>
    <ol>
      <li>Print numbers from 1 to 10 using a for loop</li>
      <li>Print even numbers from 1 to 20</li>
      <li>Print numbers in reverse from 10 to 1</li>
      <li>Print multiplication table of 5</li>
      <li>Print each character of your name</li>
      <li>Print the sum of numbers from 1 to 100</li>
      <li>Print the following pattern:<br/>
        <pre>
*
**
***
****
*****
        </pre>
      </li>
      <li>Print reverse triangle:<br/>
        <pre>
*****
****
***
**
*
        </pre>
      </li>
      <li>Print pyramid pattern:<br/>
        <pre>
    *
   ***
  *****
 *******
        </pre>
      </li>
      <li>⭐ Print diamond pattern (challenge)</li>
    </ol>
  `,
  syntax: `# For loop from 1 to 5
for i in range(1, 6):
    print(i)

# While loop example
count = 1
while count <= 5:
    print("Count is:", count)
    count += 1`,
  example: `# Real-life example: Print characters of a name
name = "Raish"
for letter in name:
    print(letter)

# Sum of numbers from 1 to 10 using while
total = 0
i = 1
while i <= 10:
    total += i
    i += 1
print("Sum is:", total)
`
},
{
  id: 9,
  title: "Python Lists",
  description: `
    <p>Lists are ordered, mutable (changeable) collections in Python. They can store elements of different data types like numbers, strings, and even other lists.</p>

    <h3>📌 Syntax:</h3>
    <pre><code>my_list = [10, 20, "hello", 3.14]</code></pre>

    <h3>✅ Example:</h3>
    <pre><code>
# Example: Working with list
fruits = ["apple", "banana", "cherry"]
print(fruits[0])       # Output: apple

fruits.append("orange")  
print(fruits)          # Output: ['apple', 'banana', 'cherry', 'orange']
    </code></pre>

    <h3>📝 Practice Questions:</h3>
    <ol>
      <li>Create a list of 5 subjects and print each one.</li>
      <li>Add and remove items from a list.</li>
      <li>Find the largest number in a list.</li>
      <li>Sort a list in ascending order.</li>
      <li>Reverse a list using slicing.</li>
    </ol>
  `
},
{
  id: 10,
  title: "Python Tuples",
  description: `
    <p>Tuples are ordered, immutable (unchangeable) collections. Use them when your data should not be modified.</p>

    <h3>📌 Syntax:</h3>
    <pre><code>my_tuple = (10, 20, "hello")</code></pre>

    <h3>✅ Example:</h3>
    <pre><code>
# Example: Tuple indexing
coordinates = (4, 5)
print(coordinates[0])    # Output: 4
print(type(coordinates)) # Output: <class 'tuple'>
    </code></pre>

    <h3>📝 Practice Questions:</h3>
    <ol>
      <li>Create a tuple of 4 fruits.</li>
      <li>Access the last item using negative indexing.</li>
      <li>Convert a list to tuple and vice versa.</li>
      <li>Check if an item exists in a tuple.</li>
      <li>Use tuple unpacking to assign values.</li>
    </ol>
  `
},
{
  id: 11,
  title: "Python Sets",
  description: `
    <p>Sets are unordered collections of unique items. Duplicates are automatically removed.</p>

    <h3>📌 Syntax:</h3>
    <pre><code>my_set = {1, 2, 3, 4}</code></pre>

    <h3>✅ Example:</h3>
    <pre><code>
# Example: Set operations
nums = {1, 2, 2, 3, 4}
print(nums)  # Output: {1, 2, 3, 4}

nums.add(5)
nums.remove(3)
print(nums)  # Output: {1, 2, 4, 5}
    </code></pre>

    <h3>📝 Practice Questions:</h3>
    <ol>
      <li>Create a set of colors and add a new one.</li>
      <li>Remove an item from a set.</li>
      <li>Find the union and intersection of two sets.</li>
      <li>Check if a set is a subset of another.</li>
      <li>Use a loop to print all items in a set.</li>
    </ol>
  `
},
{
  id: 12,
  title: "Python Dictionaries",
  description: `
    <p>Dictionaries store data in key-value pairs. They are unordered and mutable.</p>

    <h3>📌 Syntax:</h3>
    <pre><code>my_dict = {"name": "Raish", "age": 17}</code></pre>

    <h3>✅ Example:</h3>
    <pre><code>
# Example: Dictionary operations
student = {
  "name": "Raish",
  "age": 17,
  "grade": "A+"
}

print(student["name"])     # Output: Raish
student["age"] = 18        # Update value
student["city"] = "Delhi"  # Add new key

print(student)
    </code></pre>

    <h3>📝 Practice Questions:</h3>
    <ol>
      <li>Create a dictionary of a student’s details and print each key-value pair.</li>
      <li>Update and delete items in a dictionary.</li>
      <li>Check if a key exists in a dictionary.</li>
      <li>Loop through keys and values using a for loop.</li>
      <li>Use the <code>get()</code> method to safely access keys.</li>
    </ol>
  `
}
,
{
  id: 13,
  title: "Python Stack",
  description: `
    <p><strong>📦 What is a Stack in Python?</strong></p>
    <p>A <strong>stack</strong> is a linear data structure that follows the <strong>LIFO (Last In, First Out)</strong> principle. This means the <em>last item added</em> is the <em>first one to be removed</em>.</p>

    <h3>🛠 Common Stack Operations:</h3>
    <ul>
      <li><code>push</code> – Add an item to the top of the stack</li>
      <li><code>pop</code> – Remove the top item from the stack</li>
      <li><code>peek</code> – View the top item without removing it</li>
    </ul>

    <h3>🔹 Example 1: Stack using Python List</h3>
    <pre><code>
stack = []

# Push items
stack.append("Apple")
stack.append("Banana")
stack.append("Cherry")

# Pop item
print("Popped:", stack.pop())

# Peek at the top
print("Top item:", stack[-1])

# View full stack
print("Stack:", stack)
    </code></pre>

    <h3>🔸 Example 2: Managing Multiple Stacks Using Dictionary</h3>
    <pre><code>
stacks = {
    "fruits": [],
    "numbers": []
}

# Push into stacks
stacks["fruits"].append("Mango")
stacks["fruits"].append("Apple")
stacks["numbers"].append(10)
stacks["numbers"].append(20)

# Pop from each stack
print("Fruit popped:", stacks["fruits"].pop())
print("Number popped:", stacks["numbers"].pop())

# Show remaining stacks
print("Stacks:", stacks)
    </code></pre>

    <h3>🧪 Playground Example:</h3>
    <pre><code>
def push(stack, item):
    stack.append(item)
    print(f"Pushed: {item}")

def pop(stack):
    if not stack:
        print("Stack is empty!")
    else:
        print(f"Popped: {stack.pop()}")

# Try it!
my_stack = []
push(my_stack, "Notebook")
push(my_stack, "Pen")
pop(my_stack)
pop(my_stack)
pop(my_stack)
    </code></pre>

    <h3>📝 Practice Questions:</h3>
    <ol>
      <li>Push 5 elements into a stack and then pop all of them.</li>
      <li>Write a function to check the top item in a stack.</li>
      <li>Use a loop to simulate push and pop based on user input.</li>
      <li>Create two stacks (e.g., <code>books</code> and <code>pens</code>) and perform operations.</li>
      <li>Simulate undo-redo functionality using two stacks.</li>
    </ol>
  `,
  playground: `
def push(stack, item):
    stack.append(item)
    print(f"Pushed: {item}")

def pop(stack):
    if not stack:
        print("Stack is empty!")
    else:
        print(f"Popped: {stack.pop()}")

# Try it!
my_stack = []
push(my_stack, "Notebook")
push(my_stack, "Pen")
pop(my_stack)
pop(my_stack)
pop(my_stack)
  `
}
,
{
  id: 14,
  title: "Functions in Python",
  description: `
    <p><strong>🔧 What is a Function in Python?</strong></p>
    <p>A <strong>function</strong> is a block of reusable code that performs a specific task. It helps make your code modular, cleaner, and easier to maintain.</p>

    <h3>📌 Syntax:</h3>
    <pre><code>def function_name(parameters):
    # code block
    return result</code></pre>

    <h3>📘 Examples:</h3>
    <ol>
      <li><strong>No Parameters</strong>
        <pre><code>def say_hello():
    print("Hello! Welcome to Python.")

say_hello()</code></pre>
      </li>
      
      <li><strong>With Parameters</strong>
        <pre><code>def greet(name):
    print("Hi", name)

greet("Raish")</code></pre>
      </li>

      <li><strong>Return Value</strong>
        <pre><code>def square(num):
    return num * num

print("Square of 4 is:", square(4))</code></pre>
      </li>

      <li><strong>Default Argument</strong>
        <pre><code>def welcome(name="Student"):
    print("Welcome,", name)

welcome()
welcome("Raish")</code></pre>
      </li>
    </ol>

    <h3>📝 Practice Questions on Functions:</h3>
    <ol>
      <li>Write a function to add two numbers.</li>
      <li>Write a function to check if a number is even or odd.</li>
      <li>Create a function that returns the square of a number.</li>
      <li>Write a function that calculates the factorial of a number.</li>
      <li>Define a function to check whether a number is prime.</li>
      <li>Write a function to print the multiplication table of any number.</li>
      <li>Make a function that returns the greatest among three numbers.</li>
      <li>Define a function to count vowels in a string.</li>
      <li>Write a function to check if a string is a palindrome.</li>
      <li>Create a function to calculate simple interest (P, R, T).</li>
    </ol>
  `,
  syntax: `# Function Syntax
def greet(name):
    print("Hello", name)`,
  example: `# Function without parameters
def say_hello():
    print("Hello! Welcome to Python.")

say_hello()

# Function with parameters
def greet(name):
    print("Hi", name)

greet("Raish")

# Function with return value
def square(num):
    return num * num

print("Square of 4 is:", square(4))

# Function with default argument
def welcome(name="Student"):
    print("Welcome,", name)

welcome()
welcome("Raish")`
}
,
{
  id: 15,
  title: "Recursion in Python",
  description: `
    <p><strong>🔁 What is Recursion in Python?</strong></p>
    <p><strong>Recursion</strong> is a programming technique where a function calls itself to solve smaller subproblems. This continues until it reaches a <strong>base case</strong> — a condition that stops the recursion.</p>

    <h3>📌 Syntax of Recursion:</h3>
    <pre><code>def recursive_function():
    if base_case:
        return result
    else:
        return recursive_function()  # function calls itself</code></pre>

    <h3>📘 Example 1: Factorial</h3>
    <pre><code>def factorial(n):
    if n == 0 or n == 1:
        return 1
    return n * factorial(n - 1)

print("Factorial of 5:", factorial(5))</code></pre>

    <h3>📘 Example 2: Fibonacci</h3>
    <pre><code>def fibonacci(n):
    if n <= 1:
        return n
    return fibonacci(n-1) + fibonacci(n-2)

# Print first 6 Fibonacci numbers
for i in range(6):
    print(fibonacci(i), end=" ")</code></pre>

    <h3>📘 Example 3: Sum of Natural Numbers</h3>
    <pre><code>def sum_natural(n):
    if n == 1:
        return 1
    return n + sum_natural(n - 1)

print("Sum of first 5 natural numbers:", sum_natural(5))</code></pre>

    <h3>📝 Practice Questions on Recursion:</h3>
    <ol>
      <li>Write a recursive function to calculate the factorial of a number.</li>
      <li>Create a recursive function to generate Fibonacci numbers up to n terms.</li>
      <li>Write a recursive function to find the sum of digits of a number.</li>
      <li>Create a recursive function to find the power of a number (<code>x<sup>n</sup></code>).</li>
      <li>Write a recursive function to reverse a string.</li>
      <li>Use recursion to count down from a given number to 1.</li>
      <li>Find the Greatest Common Divisor (GCD) using recursion.</li>
      <li>Write a recursive function to check if a string is a palindrome.</li>
      <li>Use recursion to find the product of elements in a list.</li>
      <li>Use recursion to print numbers from 1 to n.</li>
    </ol>
  `,
  syntax: `# Recursion Syntax
def recursive_function():
    if base_case:
        return result
    else:
        return recursive_function()`,
  example: `# Example 1: Factorial
def factorial(n):
    if n == 0 or n == 1:
        return 1
    return n * factorial(n - 1)

print("Factorial of 5:", factorial(5))

# Example 2: Fibonacci
def fibonacci(n):
    if n <= 1:
        return n
    return fibonacci(n-1) + fibonacci(n-2)

for i in range(6):
    print(fibonacci(i), end=" ")

# Example 3: Sum of Natural Numbers
def sum_natural(n):
    if n == 1:
        return 1
    return n + sum_natural(n - 1)

print("\\nSum of first 5 natural numbers:", sum_natural(5))`
},
{
  id: 16,
  title: "File Handling in Python",
  description: `
    <p><strong>📂 What is File Handling?</strong></p>
    <p>File handling in Python allows you to create, read, write, and delete files. It is essential for storing and retrieving data from external files like <code>.txt</code>, <code>.csv</code>, etc.</p>

    <h3>📌 File Modes:</h3>
    <ul>
      <li><code>'r'</code> – Read (default mode)</li>
      <li><code>'w'</code> – Write (creates new file or overwrites)</li>
      <li><code>'a'</code> – Append (adds to end of file)</li>
      <li><code>'x'</code> – Create (fails if file exists)</li>
      <li><code>'b'</code> – Binary mode</li>
      <li><code>'t'</code> – Text mode (default)</li>
    </ul>

    <h3>📘 Why Use File Handling?</h3>
    <ul>
      <li>To store user data permanently</li>
      <li>To read data from existing files</li>
      <li>To save logs, reports, etc.</li>
    </ul>
  `,
  syntax: `# Open a file
file = open("data.txt", "r")

# Read content
content = file.read()

# Always close the file
file.close()

# With 'with' statement (auto close)
with open("data.txt", "r") as file:
    content = file.read()`,
  example: `# Writing to a file
with open("example.txt", "w") as file:
    file.write("Hello, this is a test file.")

# Reading from a file
with open("example.txt", "r") as file:
    data = file.read()
    print("File Content:", data)

# Appending data to the file
with open("example.txt", "a") as file:
    file.write("\\nAdding a second line.")`
},
{
  id: 17,
  title: "Exception Handling in Python",
  description: `
    <p><strong>⚠️ What is Exception Handling?</strong></p>
    <p>Exception Handling in Python is used to manage errors or unexpected situations that occur during program execution. It prevents the program from crashing and lets you handle errors gracefully.</p>

    <h3>📌 Common Exceptions:</h3>
    <ul>
      <li><code>ZeroDivisionError</code> – Dividing by zero</li>
      <li><code>ValueError</code> – Invalid value type</li>
      <li><code>FileNotFoundError</code> – File not found</li>
      <li><code>IndexError</code> – Invalid list index</li>
      <li><code>TypeError</code> – Wrong data type used</li>
    </ul>

    <h3>🧠 Why Use Exception Handling?</h3>
    <ul>
      <li>To avoid program crashes</li>
      <li>To show user-friendly error messages</li>
      <li>To handle unexpected inputs and issues</li>
    </ul>
  `,
  syntax: `# Basic try-except block
try:
    # risky code
    result = 10 / 0
except ZeroDivisionError:
    print("You cannot divide by zero!")

# Using else and finally
try:
    num = int(input("Enter a number: "))
    print("Square is:", num * num)
except ValueError:
    print("Please enter a valid number.")
else:
    print("Operation successful.")
finally:
    print("This block always runs.")`,
  example: `# Example 1: Handle ZeroDivisionError
try:
    a = 5
    b = 0
    print("Result:", a / b)
except ZeroDivisionError:
    print("Cannot divide by zero!")

# Example 2: Handle multiple exceptions
try:
    num = int("abc")
    print(10 / num)
except ValueError:
    print("Invalid number format.")
except ZeroDivisionError:
    print("Division by zero!")

# Example 3: Using finally
try:
    f = open("data.txt")
    print(f.read())
except FileNotFoundError:
    print("File does not exist.")
finally:
    print("Finished trying to open the file.")`
},
{
  id: 18,
  title: "Python Modules",
  description: `
    <p><strong>📦 What is a Module in Python?</strong></p>
    <p>A <strong>module</strong> is a file containing Python code (functions, variables, classes) that can be reused in other Python programs. It helps organize and reuse code efficiently.</p>

    <h3>🔍 Why Use Modules?</h3>
    <ul>
      <li>Code Reusability</li>
      <li>Better Code Organization</li>
      <li>Access to built-in Python functionality</li>
    </ul>

    <h3>📂 Types of Modules:</h3>
    <ul>
      <li><strong>Built-in Modules</strong> – Pre-installed with Python (e.g., <code>math</code>, <code>random</code>, <code>datetime</code>)</li>
      <li><strong>User-defined Modules</strong> – Created by users (custom Python files)</li>
    </ul>
  `,
  syntax: `# Importing built-in module
import math
print(math.sqrt(16))  # Output: 4.0

# Importing with alias
import random as rd
print(rd.randint(1, 10))

# Importing specific function
from datetime import date
print(date.today())

# Creating a user-defined module (save as mymodule.py)
def greet(name):
    return "Hello " + name

# Using user-defined module (in another file)
import mymodule
print(mymodule.greet("Raish"))`,
  example: `# Example 1: Using math module
import math
print("Square root of 25 is:", math.sqrt(25))

# Example 2: Random number generator
import random
print("Random number between 1 and 100:", random.randint(1, 100))

# Example 3: User-defined module
# mymodule.py
def add(a, b):
    return a + b

# main.py
import mymodule
print("Sum is:", mymodule.add(3, 7))`
}
,
{
  id: 19,
  title: "Lambda Functions in Python",
  description: `
    <p><strong>⚡ What is a Lambda Function?</strong></p>
    <p>A <strong>lambda function</strong> is a small anonymous function in Python. It can have any number of arguments, but only one expression. It's mainly used when a simple function is required for a short period of time.</p>

    <h3>📌 Syntax:</h3>
    <pre><code>lambda arguments: expression</code></pre>

    <p>This is the same as a normal function but written in one line.</p>

    <h3>✅ Examples:</h3>
    <pre><code>
# 1. Add two numbers
add = lambda a, b: a + b
print("Sum:", add(5, 3))  # Output: 8

# 2. Square of a number
square = lambda x: x * x
print("Square:", square(4))  # Output: 16

# 3. Check even/odd
is_even = lambda x: x % 2 == 0
print("Is 6 even?", is_even(6))  # Output: True

# 4. Sort a list of tuples by second element
pairs = [(1, 2), (3, 1), (5, 0)]
sorted_pairs = sorted(pairs, key=lambda x: x[1])
print("Sorted:", sorted_pairs)  # Output: [(5, 0), (3, 1), (1, 2)]
    </code></pre>

    <h3>💡 Where to Use Lambda:</h3>
    <ul>
      <li>With <code>map()</code>, <code>filter()</code>, and <code>reduce()</code></li>
      <li>In sorting custom objects</li>
      <li>As quick one-liner functions</li>
    </ul>

    <h3>📝 Practice Questions:</h3>
    <ol>
      <li>Create a lambda function to multiply two numbers.</li>
      <li>Use lambda to find the maximum of two values.</li>
      <li>Sort a list of students by marks using lambda.</li>
      <li>Use <code>filter()</code> with lambda to filter even numbers from a list.</li>
      <li>Use <code>map()</code> with lambda to square each number in a list.</li>
    </ol>
  `,
  syntax: `# Lambda to add two numbers
add = lambda x, y: x + y
print(add(2, 3))  # 5

# Lambda to find greater number
greater = lambda a, b: a if a > b else b
print(greater(10, 7))`,
  example: `# Example 1: Lambda inside map()
nums = [1, 2, 3, 4]
squared = list(map(lambda x: x**2, nums))
print("Squares:", squared)

# Example 2: Lambda inside filter()
evens = list(filter(lambda x: x % 2 == 0, nums))
print("Even numbers:", evens)

# Example 3: Lambda with sort()
students = [("Raish", 90), ("Aman", 80), ("Neha", 95)]
sorted_students = sorted(students, key=lambda x: x[1])
print("Sorted by marks:", sorted_students)`
},
{
  id: 20,
  title: "Pandas in Python",
  description: `
    <p><strong>🐼 What is Pandas?</strong></p>
    <p><strong>Pandas</strong> is a powerful Python library used for data manipulation and analysis. It provides two main data structures: <code>Series</code> and <code>DataFrame</code>.</p>

    <h3>🔹 Why Use Pandas?</h3>
    <ul>
      <li>Easy handling of tabular data (rows & columns)</li>
      <li>Great for reading/writing data (CSV, Excel, etc.)</li>
      <li>Built-in tools for filtering, grouping, merging, reshaping, etc.</li>
    </ul>

    <h3>📦 Installation:</h3>
    <pre><code>pip install pandas</code></pre>

    <h3>📌 Common Pandas Objects:</h3>
    <ul>
      <li><code>Series</code> – One-dimensional labeled array</li>
      <li><code>DataFrame</code> – Two-dimensional labeled data (like an Excel table)</li>
    </ul>

    <h3>✅ Examples:</h3>
    <pre><code>
import pandas as pd

# Series Example
data = [10, 20, 30]
s = pd.Series(data)
print("Series:")
print(s)

# DataFrame Example
info = {
  "Name": ["Raish", "Aman", "Neha"],
  "Marks": [85, 90, 95]
}
df = pd.DataFrame(info)
print("DataFrame:")
print(df)
    </code></pre>

    <h3>🔧 Useful DataFrame Operations:</h3>
    <ul>
      <li><code>df.head()</code> – Show first 5 rows</li>
      <li><code>df.tail()</code> – Show last 5 rows</li>
      <li><code>df.describe()</code> – Summary statistics</li>
      <li><code>df['column']</code> – Access column</li>
      <li><code>df.iloc[0]</code> – Access by index</li>
      <li><code>df.loc[0]</code> – Access by label</li>
    </ul>

    <h3>📝 Practice Questions:</h3>
    <ol>
      <li>Create a DataFrame with student names and marks.</li>
      <li>Display only the marks column.</li>
      <li>Calculate the average marks using <code>mean()</code>.</li>
      <li>Add a new column "Grade" based on marks.</li>
      <li>Sort the DataFrame based on marks in descending order.</li>
    </ol>
  `,
  syntax: `import pandas as pd

# Creating a Series
s = pd.Series([1, 2, 3])

# Creating a DataFrame
df = pd.DataFrame({
  "Name": ["Aman", "Neha"],
  "Age": [20, 22]
})`,
  example: `import pandas as pd

# Sample DataFrame
data = {
  "Name": ["Raish", "Aman", "Neha"],
  "Math": [88, 76, 92],
  "Science": [89, 90, 94]
}

df = pd.DataFrame(data)

# Display first few rows
print(df.head())

# Add new column: Total
df["Total"] = df["Math"] + df["Science"]
print("With Total Marks:")
print(df)

# Filter students scoring above 90 in Science
high_scorers = df[df["Science"] > 90]
print("High Scorers in Science:")
print(high_scorers)`
},
{
  id: 21,
  title: "NumPy in Python",
  description: `
    <p><strong>🔢 What is NumPy?</strong></p>
    <p><strong>NumPy</strong> (Numerical Python) is a powerful Python library used for performing mathematical operations on large arrays and matrices. It is faster and more efficient than using lists for numerical tasks.</p>

    <h3>📦 Key Features:</h3>
    <ul>
      <li>Supports multi-dimensional arrays</li>
      <li>Performs mathematical operations faster</li>
      <li>Works well with other libraries like Pandas and Matplotlib</li>
    </ul>

    <h3>📌 Installation:</h3>
    <pre><code>pip install numpy</code></pre>

    <h3>📘 Example 1: Creating Arrays</h3>
    <pre><code>
import numpy as np

arr = np.array([1, 2, 3, 4])
print("Array:", arr)
print("Type:", type(arr))
print("Shape:", arr.shape)
    </code></pre>

    <h3>📘 Example 2: 2D Array (Matrix)</h3>
    <pre><code>
matrix = np.array([[1, 2], [3, 4]])
print("Matrix:\n", matrix)
print("Dimensions:", matrix.ndim)
print("Shape:", matrix.shape)
    </code></pre>

    <h3>📘 Example 3: Useful Functions</h3>
    <pre><code>
a = np.array([10, 20, 30])
b = np.array([1, 2, 3])

print("Sum:", a + b)
print("Square Root:", np.sqrt(a))
print("Max value:", np.max(b))
    </code></pre>

    <h3>🧪 Playground Example:</h3>
    <pre><code>
import numpy as np

# Create array and perform basic math
nums = np.array([5, 10, 15, 20])
print("Original:", nums)
print("Doubled:", nums * 2)
print("Mean:", np.mean(nums))
    </code></pre>

    <h3>📝 Practice Questions:</h3>
    <ol>
      <li>Create a 1D NumPy array of 5 numbers and print it.</li>
      <li>Create a 2D array and print its shape and dimension.</li>
      <li>Add two NumPy arrays element-wise.</li>
      <li>Find the max, min, and average of a NumPy array.</li>
      <li>Use <code>np.zeros()</code> and <code>np.ones()</code> to create arrays.</li>
    </ol>
  `
}
,
{
  id: 22,
  title: "Introduction to Metasploit",
  description: `
    <p><strong>🛡️ What is Metasploit?</strong></p>
    <p><strong>Metasploit</strong> is an open-source cybersecurity tool used to test computer systems for vulnerabilities. It helps ethical hackers and security experts check how secure a system is by simulating real-world attacks in a safe environment.</p>

    <h3>📌 Why is Metasploit used?</h3>
    <ul>
      <li>To test system and network security</li>
      <li>To learn ethical hacking safely</li>
      <li>To understand how hackers attack systems</li>
    </ul>

    <h3>📦 Key Components:</h3>
    <ul>
      <li><strong>Exploits:</strong> Code used to take advantage of a vulnerability</li>
      <li><strong>Payloads:</strong> Code that runs after the exploit (e.g., open terminal access)</li>
      <li><strong>Auxiliary Modules:</strong> Used for scanning, sniffing, or denial of service</li>
    </ul>

    <h3>💡 Note:</h3>
    <p>Metasploit should <strong>only be used for ethical purposes</strong>, such as learning and testing in your own lab setup or with permission.</p>

    <h3>⚙️ Example: Starting Metasploit</h3>
    <pre><code>
# Open terminal and run:
msfconsole

# Search for a known vulnerability
search vsftpd

# Use the exploit module
use exploit/unix/ftp/vsftpd_234_backdoor

# Show options
show options

# Set the target IP
set RHOST 192.168.1.5

# Run the exploit
exploit
    </code></pre>

    <h3>🧪 Playground Tip:</h3>
    <p>This topic cannot be practiced in an online Python playground. You should install Metasploit in a Linux environment like Kali Linux or Termux (for learning only).</p>

    <h3>📝 Practice & Research Questions:</h3>
    <ol>
      <li>What is the purpose of Metasploit in cybersecurity?</li>
      <li>What is the difference between exploit and payload?</li>
      <li>List 3 ethical uses of Metasploit.</li>
      <li>What is <code>msfconsole</code> used for?</li>
      <li>Why should we avoid using Metasploit without permission?</li>
    </ol>
  `
},
{
  id: 22,
  title: "CBSE/ISC Python Practice Questions",
  description: `
    <p><strong>📝 25 Python Coding Practice Questions</strong></p>
    <p>These questions help you prepare for school-level coding exams like CBSE & ISC boards.</p>

    <h3>💡 Basic Logic & Conditionals</h3>
    <ol>
      <li>Write a program to check whether a number is even or odd.</li>
      <li>Write a program to find the largest among three numbers.</li>
      <li>Accept a number and print whether it is a prime number or not.</li>
      <li>Print the factorial of a number using a loop.</li>
      <li>Write a program to display the multiplication table of a number.</li>
    </ol>

    <h3>🔄 Loops & Patterns</h3>
    <ol start="6">
      <li>Print numbers from 1 to 100 that are divisible by 7.</li>
      <li>Print the reverse of a number using a while loop.</li>
      <li>Write a program to print the Fibonacci series up to n terms.</li>
      <li>Display the following pattern using loop:<br><pre>
*
**
***
****
*****</pre></li>
      <li>Write a program to count the digits of a number.</li>
    </ol>

    <h3>📦 Lists & Strings</h3>
    <ol start="11">
      <li>Count how many vowels are present in a given string.</li>
      <li>Accept a list of numbers and print the maximum and minimum.</li>
      <li>Check if a string is a palindrome or not.</li>
      <li>Reverse a list without using built-in reverse() method.</li>
      <li>Write a program to remove duplicates from a list.</li>
    </ol>

    <h3>🗃️ Dictionary & Sets</h3>
    <ol start="16">
      <li>Create a dictionary of 5 students with their marks, and print names of students who scored more than 90.</li>
      <li>Write a program to merge two dictionaries into one.</li>
      <li>Create a set from a list and display unique elements.</li>
      <li>Perform union and intersection operations on two sets.</li>
    </ol>

    <h3>🧠 Functions & Recursion</h3>
    <ol start="20">
      <li>Define a function that returns the sum of two numbers.</li>
      <li>Write a recursive function to calculate factorial of a number.</li>
      <li>Create a function that returns the square of a number.</li>
      <li>Write a recursive function to compute the nth Fibonacci number.</li>
    </ol>

    <h3>📂 File Handling</h3>
    <ol start="24">
      <li>Write a program to create a text file and write 5 lines into it.</li>
      <li>Read a file and count the number of words in it.</li>
    </ol>

    <p>✔️ These questions can be added to a test page, assignment section, or daily practice module.</p>
  `
}












  
  
];

export default topics;
