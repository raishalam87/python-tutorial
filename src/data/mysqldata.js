const mysqlData = [
  {
  id: 1,
  title: "Introduction to MySQL",
  description: `
    <p><strong>MySQL</strong> is an open-source <em>Relational Database Management System (RDBMS)</em>. 
    It is widely used to store, manage, and retrieve structured data in tables.</p>

    <h3>Key Features of MySQL</h3>
    <ul>
      <li>Open-source and free to use</li>
      <li>Stores data in rows and columns (tables)</li>
      <li>Supports SQL (Structured Query Language)</li>
      <li>Fast, reliable, and secure</li>
      <li>Used with many programming languages (Python, Java, PHP, etc.)</li>
    </ul>

    <h3>Basic MySQL Commands</h3>
    <p>Here are some basic SQL commands:</p>
    <ul>
      <li><code>CREATE DATABASE dbname;</code> → Create a new database</li>
      <li><code>USE dbname;</code> → Select a database</li>
      <li><code>CREATE TABLE tablename (...);</code> → Create a new table</li>
      <li><code>INSERT INTO tablename VALUES (...);</code> → Insert data</li>
      <li><code>SELECT * FROM tablename;</code> → Retrieve data</li>
    </ul>

    <h3>Example</h3>
    <pre>
    CREATE DATABASE School;
    USE School;

    CREATE TABLE Students (
      id INT PRIMARY KEY,
      name VARCHAR(50),
      age INT
    );

    INSERT INTO Students VALUES (1, 'Aman', 18);
    INSERT INTO Students VALUES (2, 'Riya', 19);

    SELECT * FROM Students;
    </pre>

    <h3>Practice Question</h3>
    <ol>
      <li>Create a database named <code>Library</code>.</li>
      <li>Inside it, create a table <code>Books</code> with columns (id, title, author).</li>
      <li>Insert 2 records and display them using <code>SELECT</code>.</li>
    </ol>
  `
},
{
  id: 2,
  title: "What is Data in MySQL?",
  description: `
    <p><strong>Data</strong> refers to raw facts and figures that have no meaning on their own. It can be in the form of text, numbers, images, audio, or video.</p>

    <h3>Examples of Data:</h3>
    <ul>
      <li>Short information like a message or status update.</li>
      <li>Multimedia such as photos, videos, or audio shared on WhatsApp.</li>
      <li>Contact details stored in a telephone directory.</li>
      <li>Product orders placed on Amazon.</li>
    </ul>

    <p>In MySQL, <strong>data</strong> is stored in databases and organized in tables so that it can be managed and processed efficiently.</p>
  `
},
{
  id: 3,
  title: "Database",
  description: `
    <p><strong>Database</strong> is an organized collection of data that can be easily accessed, managed, and updated.</p>

    <h3>Examples:</h3>
    <ul>
      <li>Storing student records in a school management system</li>
      <li>Saving customer information in an online shopping website</li>
      <li>Bank transaction records stored for account management</li>
    </ul>
  `
},
{
  id: 4,
  title: "Types of Database",
  description: `
    <p>A <strong>Database</strong> can be categorized mainly into two types: <em>Relational Database</em> and <em>Non-Relational Database</em>.</p>

    <h3>1. Relational Database (RDBMS)</h3>
    <p>A <strong>Relational Database</strong> stores data in <strong>tabular form</strong> using rows and columns. Each table can be related to another using keys.</p>
    
    <p><strong>Examples:</strong> SQL, MySQL, Oracle, PostgreSQL</p>
    
    <p><strong>Real-Life Example:</strong> Imagine your <em>school student records</em>. Every student has details like Name, Roll Number, and Class stored in a table format. You can easily search, update, or relate data (e.g., linking students with their marks).</p>
    
    <div style="background-color: black; color: lightgreen; padding: 10px; border-radius: 8px;">
      <pre>
+---------+---------+-------+
| Roll_No | Name    | Class |
+---------+---------+-------+
| 101     | Aman    | 12A   |
| 102     | Priya   | 12B   |
| 103     | Rahul   | 12A   |
+---------+---------+-------+
      </pre>
    </div>

    <h3>2. Non-Relational Database (NoSQL)</h3>
    <p>A <strong>Non-Relational Database</strong> does not store data in table form. Instead, it can use documents, key-value pairs, graphs, or wide-columns.</p>
    
    <p><strong>Examples:</strong> MongoDB, Cassandra, Redis, CouchDB</p>
    
    <p><strong>Real-Life Example:</strong> Think about <em>Instagram</em>. Each user has a unique profile containing pictures, videos, likes, and comments. This data doesn’t fit well into rows and columns, so it is stored in a flexible document-based structure.</p>
    
    <div style="background-color: black; color: lightgreen; padding: 10px; border-radius: 8px;">
      <pre>
{
  "user_id": 101,
  "name": "Aman",
  "class": "12A",
  "posts": [
    { "id": 1, "type": "image", "likes": 150 },
    { "id": 2, "type": "video", "likes": 200 }
  ]
}
      </pre>
    </div>
  `
},


{
  id: 5,
  title: "Database Management System (DBMS)",
  description: `
    <p><strong>DBMS (Database Management System)</strong> is software that helps in storing, managing, and organizing data in a structured way.</p>
    <p>It allows users to perform operations like <em>inserting, updating, deleting, and retrieving data</em> efficiently.</p>

    <h3>Example:</h3>
    <p>Suppose we want to store student records in a database:</p>

    <div style="background-color: black; color: lightgreen; padding: 10px; border-radius: 8px;">
      <pre>
+------------+---------+-------+
| Roll_No    | Name    | Class |
+------------+---------+-------+
| 101        | Aman    | 12A   |
| 102        | Priya   | 12B   |
| 103        | Rahul   | 12A   |
+------------+---------+-------+
      </pre>
    </div>

    <p>Here, DBMS stores and manages the student information in a tabular format.</p>

    <h3>Key Features of DBMS:</h3>
    <ul>
      <li>Data Organization</li>
      <li>Data Security</li>
      <li>Data Consistency</li>
      <li>Easy Access to Data</li>
    </ul>
  `
}
,
{
  id: 6,
  title: "Introduction to SQL",
  description: `
    <p><strong>SQL (Structured Query Language)</strong> is a standard language used to manage and manipulate databases.</p>
    <p>With SQL, we can perform various operations on data stored in a database.</p>

    <h3>Features of SQL:</h3>
    <ul>
      <li>Create databases and tables</li>
      <li>Insert new records</li>
      <li>Retrieve data using queries</li>
      <li>Update existing records</li>
      <li>Delete records</li>
    </ul>

    <h3>Example: Creating and Using a Table</h3>
    <pre style="background-color:black; color:green; padding:10px; border-radius:8px;">
-- Create a table
CREATE TABLE Students (
    RollNo INT PRIMARY KEY,
    Name VARCHAR(50),
    Age INT,
    Grade VARCHAR(10)
);

-- Insert data into the table
INSERT INTO Students (RollNo, Name, Age, Grade)
VALUES (1, 'Amit', 18, 'A');

-- Retrieve data
SELECT * FROM Students;

-- Update a record
UPDATE Students SET Grade = 'B' WHERE RollNo = 1;

-- Delete a record
DELETE FROM Students WHERE RollNo = 1;
    </pre>

    <h3>Practice Questions</h3>
    <ol>
      <li>Create a table named <code>Books</code> with columns: BookID, Title, Author, and Price.</li>
      <li>Insert two records into the <code>Books</code> table.</li>
      <li>Write a query to display all the records from the <code>Books</code> table.</li>
      <li>Update the price of one book in the table.</li>
      <li>Delete one book from the table using BookID.</li>
    </ol>
  `
}
,
{
  id: 7,
  title: "Data Types in MySQL",
  description: `
    <p>In MySQL, <strong>data types</strong> define the kind of values that can be stored in a column of a table. 
    Choosing the right data type is important for efficiency and accuracy.</p>

    <h3>1. Numeric Data Types</h3>
    <ul>
      <li><code>INT</code> – Stores whole numbers (e.g., 10, -25).</li>
      <li><code>FLOAT</code> – Stores approximate decimal values.</li>
      <li><code>DECIMAL</code> – Stores exact decimal values (useful for money).</li>
    </ul>

    <h3>2. String Data Types</h3>
    <ul>
      <li><code>CHAR(n)</code> – Fixed length string (e.g., CHAR(5)).</li>
      <li><code>VARCHAR(n)</code> – Variable length string (e.g., VARCHAR(50)).</li>
      <li><code>TEXT</code> – Stores long text (up to 65,535 characters).</li>
    </ul>

    <h3>3. Date and Time Data Types</h3>
    <ul>
      <li><code>DATE</code> – Stores date in 'YYYY-MM-DD' format.</li>
      <li><code>DATETIME</code> – Stores both date and time.</li>
      <li><code>TIME</code> – Stores only time.</li>
    </ul>

    <h3>Example</h3>
    <pre><code>
    CREATE TABLE Students (
      StudentID INT,
      Name VARCHAR(50),
      Age INT,
      AdmissionDate DATE,
      Grade DECIMAL(4,2)
    );
    </code></pre>

    <h3>Practice Question</h3>
    <p>Create a table <code>Employees</code> with the following columns:</p>
    <ul>
      <li>EmpID (INT)</li>
      <li>EmpName (VARCHAR(100))</li>
      <li>Salary (DECIMAL)</li>
      <li>JoiningDate (DATE)</li>
    </ul>
  `
}
,
{
  id: 8,
  title: "Retrieve, Update, Delete, Select & Alter in MySQL",
  description: `
    <h2>1. Retrieve Data (SELECT)</h2>
    <p><strong>SELECT</strong> statement is used to fetch data from a table.</p>
    <pre><code>
    -- Example: Retrieve all columns
    SELECT * FROM Students;

    -- Example: Retrieve specific columns
    SELECT Name, Age FROM Students;
    </code></pre>

    <h2>2. Update Data</h2>
    <p><strong>UPDATE</strong> is used to modify existing records in a table.</p>
    <pre><code>
    -- Example: Update age of a student
    UPDATE Students
    SET Age = 21
    WHERE StudentID = 1;
    </code></pre>

    <h2>3. Delete Data</h2>
    <p><strong>DELETE</strong> is used to remove rows from a table.</p>
    <pre><code>
    -- Example: Delete a student with ID 2
    DELETE FROM Students
    WHERE StudentID = 2;
    </code></pre>

    <h2>4. Select All Data</h2>
    <p><strong>SELECT *</strong> retrieves all rows and columns from a table.</p>
    <pre><code>
    -- Example: Show full table
    SELECT * FROM Students;
    </code></pre>

    <h2>5. Alter Table</h2>
    <p><strong>ALTER</strong> is used to add, delete, or modify columns in a table.</p>
    <pre><code>
    -- Example: Add a new column 'Email'
    ALTER TABLE Students
    ADD Email VARCHAR(50);

    -- Example: Modify Age column to allow bigger values
    ALTER TABLE Students
    MODIFY Age INT(3);

    -- Example: Drop a column
    ALTER TABLE Students
    DROP COLUMN Email;
    </code></pre>
  `
},
{
  id: 9,
  title: "Operators in MySQL",
  description: `
    <p><strong>Operators</strong> in MySQL are used to perform operations on data stored in the database. 
    They help in calculations, comparisons, and combining multiple conditions in queries.</p>

    <h3>1. Arithmetic Operators</h3>
    <ul>
      <li><code>+</code> → Addition (e.g., <code>SELECT 10 + 5;</code> → 15)</li>
      <li><code>-</code> → Subtraction (e.g., <code>SELECT 10 - 5;</code> → 5)</li>
      <li><code>*</code> → Multiplication (e.g., <code>SELECT 10 * 5;</code> → 50)</li>
      <li><code>/</code> → Division (e.g., <code>SELECT 10 / 5;</code> → 2)</li>
      <li><code>%</code> → Modulus (Remainder) (e.g., <code>SELECT 10 % 3;</code> → 1)</li>
    </ul>

    <h3>2. Comparison Operators</h3>
    <ul>
      <li><code>=</code> → Equal to (e.g., <code>SELECT 10 = 10;</code> → 1)</li>
      <li><code>!=</code> OR <code>&lt;&gt;</code> → Not equal to (e.g., <code>SELECT 10 != 5;</code> → 1)</li>
      <li><code>&gt;</code> → Greater than (e.g., <code>SELECT 10 &gt; 5;</code> → 1)</li>
      <li><code>&lt;</code> → Less than (e.g., <code>SELECT 10 &lt; 5;</code> → 0)</li>
      <li><code>&gt;=</code> → Greater than or equal to (e.g., <code>SELECT 10 &gt;= 10;</code> → 1)</li>
      <li><code>&lt;=</code> → Less than or equal to (e.g., <code>SELECT 5 &lt;= 10;</code> → 1)</li>
    </ul>

    <h3>3. Logical Operators</h3>
    <ul>
      <li><code>AND</code> → True if both conditions are true</li>
      <li><code>OR</code> → True if any one condition is true</li>
      <li><code>NOT</code> → Reverses the condition</li>
    </ul>

    <h3>4. Special Operators</h3>
    <ul>
      <li><code>BETWEEN</code> → Checks if a value is within a range (e.g., <code>salary BETWEEN 20000 AND 40000</code>)</li>
      <li><code>IN</code> → Checks if value is in a list (e.g., <code>dept IN ('IT','HR','Finance')</code>)</li>
      <li><code>LIKE</code> → Pattern matching (e.g., <code>name LIKE 'A%'</code>)</li>
      <li><code>IS NULL</code> → Checks for NULL values</li>
    </ul>

    <h3>Example</h3>
    <pre>
    CREATE TABLE Employees (
      id INT PRIMARY KEY,
      name VARCHAR(50),
      dept VARCHAR(20),
      salary INT
    );

    INSERT INTO Employees VALUES (1, 'Aman', 'IT', 35000);
    INSERT INTO Employees VALUES (2, 'Riya', 'HR', 28000);
    INSERT INTO Employees VALUES (3, 'Arjun', 'Finance', 42000);

    -- Retrieve employees with salary greater than 30000
    SELECT name, salary 
    FROM Employees 
    WHERE salary &gt; 30000;

    -- Retrieve employees from IT or HR department
    SELECT name, dept 
    FROM Employees 
    WHERE dept IN ('IT','HR');
    </pre>

    <h3>Practice Questions</h3>
    <ol>
      <li>Create a table <code>Products</code> with columns (id, name, price).</li>
      <li>Insert at least 3 products with different prices.</li>
      <li>Write a query to display products with price greater than 500.</li>
      <li>Write a query to display products whose name starts with 'A'.</li>
      <li>Write a query to find products priced between 200 and 1000.</li>
    </ol>
  `
},
{
  id: 10,
  title: "Constraints in MySQL",
  description: `
    <p><strong>Constraints</strong> in MySQL are rules applied on table columns to ensure the accuracy, validity, and reliability of the data. 
    They restrict the type of data that can be inserted into a column.</p>

    <h3>Types of Constraints</h3>
    <ul>
      <li><strong>NOT NULL</strong> → Ensures a column cannot have NULL values.</li>
      <li><strong>UNIQUE</strong> → Ensures all values in a column are different.</li>
      <li><strong>PRIMARY KEY</strong> → Combines NOT NULL + UNIQUE. Each row can be uniquely identified.</li>
      <li><strong>FOREIGN KEY</strong> → Ensures referential integrity between two tables.</li>
      <li><strong>CHECK</strong> → Ensures that values in a column satisfy a specific condition.</li>
      <li><strong>DEFAULT</strong> → Provides a default value for a column when no value is specified.</li>
    </ul>

    <h3>Example</h3>
    <pre>
    CREATE TABLE Students (
      id INT PRIMARY KEY,           -- Primary Key
      name VARCHAR(50) NOT NULL,    -- Cannot be NULL
      age INT CHECK (age &gt;= 15),    -- Age must be 15 or above
      email VARCHAR(100) UNIQUE,    -- No duplicate emails allowed
      city VARCHAR(50) DEFAULT 'Delhi' -- Default value
    );

    CREATE TABLE Marks (
      mark_id INT PRIMARY KEY,
      student_id INT,
      marks INT,
      FOREIGN KEY (student_id) REFERENCES Students(id)  -- Foreign Key
    );
    </pre>

    <h3>Explanation</h3>
    <ul>
      <li><code>PRIMARY KEY</code> → Uniquely identifies each student.</li>
      <li><code>NOT NULL</code> → Name column must always have a value.</li>
      <li><code>CHECK</code> → Restricts age to 15 or above.</li>
      <li><code>UNIQUE</code> → No two students can have the same email.</li>
      <li><code>DEFAULT</code> → If no city is entered, 'Delhi' will be used.</li>
      <li><code>FOREIGN KEY</code> → Links Marks table with Students table.</li>
    </ul>

    <h3>Practice Questions</h3>
    <ol>
      <li>Create a table <code>Library</code> with columns (book_id, title, author, price) where <code>book_id</code> is PRIMARY KEY and price must be greater than 50.</li>
      <li>Create a table <code>Members</code> with columns (id, name, email) where email must be UNIQUE and name cannot be NULL.</li>
      <li>Create a table <code>Borrow</code> with columns (borrow_id, member_id, book_id) where <code>member_id</code> is a FOREIGN KEY referencing <code>Members</code> and <code>book_id</code> is a FOREIGN KEY referencing <code>Library</code>.</li>
    </ol>
  `
},
{
  id: 11,
  title: "Clauses in MySQL",
  description: `
    <p><strong>Clauses</strong> in MySQL are used with SQL statements to filter, sort, group, and limit the data retrieved from a table.</p>

    <h3>1. WHERE Clause</h3>
    <p>Filters records based on a specific condition.</p>
    <pre>
    SELECT name, salary 
    FROM Employees 
    WHERE salary &gt; 30000;
    </pre>

    <h3>2. ORDER BY Clause</h3>
    <p>Sorts the result in ascending (<code>ASC</code>) or descending (<code>DESC</code>) order.</p>
    <pre>
    SELECT name, salary 
    FROM Employees 
    ORDER BY salary DESC;
    </pre>

    <h3>3. GROUP BY Clause</h3>
    <p>Groups rows that have the same values in a column into summary rows.</p>
    <pre>
    SELECT dept, COUNT(*) AS total_employees
    FROM Employees
    GROUP BY dept;
    </pre>

    <h3>4. HAVING Clause</h3>
    <p>Filters groups created by <code>GROUP BY</code>. (Works like WHERE but for groups)</p>
    <pre>
    SELECT dept, AVG(salary) AS avg_salary
    FROM Employees
    GROUP BY dept
    HAVING AVG(salary) &gt; 30000;
    </pre>

    <h3>5. LIMIT Clause</h3>
    <p>Limits the number of rows returned.</p>
    <pre>
    SELECT * 
    FROM Employees
    LIMIT 5;
    </pre>

    <h3>Example</h3>
    <pre>
    CREATE TABLE Employees (
      id INT PRIMARY KEY,
      name VARCHAR(50),
      dept VARCHAR(20),
      salary INT
    );

    INSERT INTO Employees VALUES 
    (1, 'Aman', 'IT', 35000),
    (2, 'Riya', 'HR', 28000),
    (3, 'Arjun', 'Finance', 42000),
    (4, 'Neha', 'IT', 25000),
    (5, 'Sohan', 'HR', 38000);

    -- Employees with salary greater than 30000
    SELECT name, salary FROM Employees WHERE salary &gt; 30000;

    -- Sort employees by salary (highest first)
    SELECT name, salary FROM Employees ORDER BY salary DESC;

    -- Count employees in each department
    SELECT dept, COUNT(*) FROM Employees GROUP BY dept;

    -- Departments with average salary above 30000
    SELECT dept, AVG(salary) FROM Employees GROUP BY dept HAVING AVG(salary) &gt; 30000;

    -- Display only 3 employees
    SELECT * FROM Employees LIMIT 3;
    </pre>

    <h3>Practice Questions</h3>
    <ol>
      <li>Write a query to display employees from department 'IT' with salary more than 30000.</li>
      <li>Write a query to sort all employees by name in ascending order.</li>
      <li>Write a query to count how many employees are there in each department.</li>
      <li>Write a query to display departments having more than 2 employees.</li>
      <li>Write a query to display only the first 2 rows from the Employees table.</li>
    </ol>
  `
},
{
  id: 12,
  title: "Joins in MySQL",
  description: `
    <p><strong>Joins</strong> in MySQL are used to combine records from two or more tables based on a related column between them.</p>

    <h3>Types of Joins</h3>
    <ul>
      <li><strong>INNER JOIN</strong> → Returns rows that have matching values in both tables.</li>
      <li><strong>LEFT JOIN</strong> → Returns all rows from the left table, and the matched rows from the right table.</li>
      <li><strong>RIGHT JOIN</strong> → Returns all rows from the right table, and the matched rows from the left table.</li>
      <li><strong>FULL JOIN (OUTER JOIN)</strong> → Returns all rows when there is a match in either left or right table (not directly supported in MySQL, but can be achieved using UNION).</li>
    </ul>

    <h3>Example</h3>
    <pre>
    CREATE TABLE Students (
      id INT PRIMARY KEY,
      name VARCHAR(50),
      dept_id INT
    );

    CREATE TABLE Departments (
      dept_id INT PRIMARY KEY,
      dept_name VARCHAR(50)
    );

    INSERT INTO Students VALUES 
    (1, 'Aman', 1),
    (2, 'Riya', 2),
    (3, 'Arjun', 1),
    (4, 'Neha', 3);

    INSERT INTO Departments VALUES 
    (1, 'IT'),
    (2, 'HR'),
    (3, 'Finance'),
    (4, 'Marketing');

    -- INNER JOIN: Students with their departments
    SELECT Students.name, Departments.dept_name
    FROM Students
    INNER JOIN Departments 
    ON Students.dept_id = Departments.dept_id;

    -- LEFT JOIN: All students, with department names if available
    SELECT Students.name, Departments.dept_name
    FROM Students
    LEFT JOIN Departments 
    ON Students.dept_id = Departments.dept_id;

    -- RIGHT JOIN: All departments, with student names if available
    SELECT Students.name, Departments.dept_name
    FROM Students
    RIGHT JOIN Departments 
    ON Students.dept_id = Departments.dept_id;

    -- FULL JOIN (using UNION of LEFT and RIGHT)
    SELECT Students.name, Departments.dept_name
    FROM Students
    LEFT JOIN Departments 
    ON Students.dept_id = Departments.dept_id
    UNION
    SELECT Students.name, Departments.dept_name
    FROM Students
    RIGHT JOIN Departments 
    ON Students.dept_id = Departments.dept_id;
    </pre>

    <h3>Explanation</h3>
    <ul>
      <li><code>INNER JOIN</code> → Shows only students that belong to an existing department.</li>
      <li><code>LEFT JOIN</code> → Shows all students even if their department is missing.</li>
      <li><code>RIGHT JOIN</code> → Shows all departments, even if no student belongs to them.</li>
      <li><code>FULL JOIN</code> → Combines LEFT and RIGHT to show all students and all departments.</li>
    </ul>

    <h3>Practice Questions</h3>
    <ol>
      <li>Create two tables: <code>Orders(order_id, customer_id, amount)</code> and <code>Customers(customer_id, name)</code>.</li>
      <li>Insert 3 customers and 4 orders (some customers may not have orders).</li>
      <li>Write a query using INNER JOIN to display customers who placed orders.</li>
      <li>Write a query using LEFT JOIN to display all customers and their orders (if any).</li>
      <li>Write a query using RIGHT JOIN to display all orders along with customer names.</li>
    </ol>
  `
},
{
  id: 13,
  title: "Functions in MySQL",
  description: `
    <p><strong>Functions</strong> in MySQL are built-in methods that perform operations on data and return results. 
    They help in performing calculations, summarizing data, and manipulating text or dates.</p>

    <h3>1. Aggregate Functions</h3>
    <p>These functions operate on a set of values and return a single result.</p>
    <ul>
      <li><code>COUNT()</code> → Returns the number of rows.</li>
      <li><code>SUM()</code> → Returns the total sum of a numeric column.</li>
      <li><code>AVG()</code> → Returns the average value of a numeric column.</li>
      <li><code>MAX()</code> → Returns the maximum value.</li>
      <li><code>MIN()</code> → Returns the minimum value.</li>
    </ul>
    <pre>
    SELECT COUNT(*) FROM Employees;            -- Number of employees
    SELECT SUM(salary) FROM Employees;         -- Total salary
    SELECT AVG(salary) FROM Employees;         -- Average salary
    SELECT MAX(salary) FROM Employees;         -- Highest salary
    SELECT MIN(salary) FROM Employees;         -- Lowest salary
    </pre>

    <h3>2. String Functions</h3>
    <ul>
      <li><code>UPPER()</code> → Converts text to uppercase.</li>
      <li><code>LOWER()</code> → Converts text to lowercase.</li>
      <li><code>LENGTH()</code> → Returns the length of a string.</li>
      <li><code>CONCAT()</code> → Joins two or more strings.</li>
    </ul>
    <pre>
    SELECT UPPER(name) FROM Employees;
    SELECT CONCAT(name, ' works in ', dept) FROM Employees;
    </pre>

    <h3>3. Date Functions</h3>
    <ul>
      <li><code>NOW()</code> → Returns current date and time.</li>
      <li><code>CURDATE()</code> → Returns current date.</li>
      <li><code>YEAR(date)</code> → Extracts year from a date.</li>
      <li><code>MONTH(date)</code> → Extracts month from a date.</li>
    </ul>
    <pre>
    SELECT NOW();
    SELECT CURDATE();
    SELECT YEAR(NOW());
    SELECT MONTH(NOW());
    </pre>

    <h3>Example</h3>
    <pre>
    CREATE TABLE Employees (
      id INT PRIMARY KEY,
      name VARCHAR(50),
      dept VARCHAR(20),
      salary INT,
      joining_date DATE
    );

    INSERT INTO Employees VALUES
    (1, 'Aman', 'IT', 35000, '2022-05-10'),
    (2, 'Riya', 'HR', 28000, '2021-03-15'),
    (3, 'Arjun', 'Finance', 42000, '2020-07-20'),
    (4, 'Neha', 'IT', 25000, '2023-01-12');

    -- Aggregate function example
    SELECT dept, COUNT(*) AS total_employees, AVG(salary) AS avg_salary
    FROM Employees
    GROUP BY dept;

    -- String function example
    SELECT CONCAT(name, ' - ', dept) AS employee_info FROM Employees;

    -- Date function example
    SELECT name, YEAR(joining_date) AS join_year FROM Employees;
    </pre>

    <h3>Practice Questions</h3>
    <ol>
      <li>Write a query to find the total salary of all employees.</li>
      <li>Write a query to find the average salary of employees in each department.</li>
      <li>Write a query to display all employee names in uppercase.</li>
      <li>Write a query to find the employee who has the highest salary.</li>
      <li>Write a query to display the names of employees who joined in the year 2022.</li>
    </ol>
  `
},
{
  id: 14,
  title: "ACID Properties in MySQL",
  description: `
    <p><strong>ACID</strong> properties ensure reliability of transactions in a database system. 
    A transaction is a single logical unit of work (like transferring money from one account to another).</p>

    <h3>1. Atomicity</h3>
    <p>Ensures that a transaction is treated as a single unit. Either all operations succeed or none are applied.</p>
    <p><strong>Example:</strong> If you transfer money from Account A to Account B, both debit and credit must succeed. If debit happens but credit fails, the whole transaction is rolled back.</p>
    <pre><code>
    START TRANSACTION;
    UPDATE accounts SET balance = balance - 500 WHERE acc_no = 101; -- Debit
    UPDATE accounts SET balance = balance + 500 WHERE acc_no = 102; -- Credit
    COMMIT;
    </code></pre>

    <h3>2. Consistency</h3>
    <p>Ensures that the database moves from one valid state to another after a transaction. 
    Constraints, rules, and data validity are preserved.</p>
    <p><strong>Example:</strong> If a bank rule says balance cannot go below 0, any transaction violating this rule will be rolled back.</p>

    <h3>3. Isolation</h3>
    <p>Ensures that multiple transactions occur independently without interference. 
    Intermediate states of a transaction are invisible to others.</p>
    <p><strong>Example:</strong> If two people are booking the last movie ticket at the same time, isolation ensures only one gets it, preventing overbooking.</p>

    <h3>4. Durability</h3>
    <p>Ensures that once a transaction is committed, it remains permanent in the database, even in case of system failure.</p>
    <p><strong>Example:</strong> After transferring money, even if the system crashes, the updated balance is permanently saved.</p>

    <h3>Real-Life Analogy:</h3>
    <ul>
      <li><strong>Atomicity:</strong> "All-or-Nothing" – like sending a WhatsApp message. Either the whole message is delivered, or not delivered at all.</li>
      <li><strong>Consistency:</strong> Like rules in a cricket game – you can't have 7 balls in an over. Rules are always followed.</li>
      <li><strong>Isolation:</strong> Like multiple ATMs working at the same time, but each transaction is processed independently.</li>
      <li><strong>Durability:</strong> Once money is withdrawn and receipt is printed, the transaction won’t vanish even if power goes off.</li>
    </ul>
  `
},
{
  id: 15,
  title: "Normalization in MySQL",
  description: `
    <p><strong>Normalization</strong> is a process in databases used to organize data efficiently. 
    It reduces redundancy (duplicate data) and ensures data integrity by splitting large tables into smaller related tables.</p>

    <h3>Types of Normal Forms</h3>
    <ul>
      <li><strong>1NF (First Normal Form):</strong> Each column should have atomic (indivisible) values. No repeating groups or arrays.</li>
      <li><strong>2NF (Second Normal Form):</strong> Must be in 1NF. No partial dependency – non-key attributes must depend on the whole primary key.</li>
      <li><strong>3NF (Third Normal Form):</strong> Must be in 2NF. No transitive dependency – non-key attributes should not depend on other non-key attributes.</li>
      <li><strong>BCNF (Boyce-Codd Normal Form):</strong> A stronger version of 3NF. Every determinant must be a candidate key.</li>
    </ul>

    <h3>Example (Before Normalization)</h3>
    <pre>
    Table: Students
    +-----------+-------------+-----------+-----------+
    | StudentID | StudentName | Subject1  | Subject2  |
    +-----------+-------------+-----------+-----------+
    | 1         | Rahul       | Math      | Physics   |
    | 2         | Aisha       | English   | History   |
    +-----------+-------------+-----------+-----------+
    </pre>
    <p>❌ Problem: Repeated subjects, not flexible if a student has more subjects.</p>

    <h3>After Normalization</h3>
    <pre>
    Table: Students
    +-----------+-------------+
    | StudentID | StudentName |
    +-----------+-------------+
    | 1         | Rahul       |
    | 2         | Aisha       |
    
    Table: Subjects
    +-----------+-------------+
    | SubjectID | SubjectName |
    +-----------+-------------+
    | 101       | Math        |
    | 102       | Physics     |
    | 103       | English     |
    | 104       | History     |
    
    Table: StudentSubjects (Relationship)
    +-----------+-----------+
    | StudentID | SubjectID |
    +-----------+-----------+
    | 1         | 101       |
    | 1         | 102       |
    | 2         | 103       |
    | 2         | 104       |
    </pre>
    <p>✅ Advantage: No duplicate subjects, easy to add new subjects without changing structure.</p>

    <h3>Real-Life Analogy</h3>
    <ul>
      <li><strong>Without Normalization:</strong> In an Online Shopping table, customer details + order + product stored together → same customer info repeats.</li>
      <li><strong>With Normalization:</strong> Separate tables for <code>Customers</code>, <code>Orders</code>, <code>Products</code>. No duplication, data is consistent.</li>
    </ul>

    <h3>Practice Questions</h3>
    <ol>
      <li>What is Normalization and why is it needed?</li>
      <li>Explain 1NF, 2NF, and 3NF with examples.</li>
      <li>Normalize this table into 1NF:  
        <pre>
        +-------+---------+-----------------+
        | EmpID | Name    | Skills          |
        +-------+---------+-----------------+
        | 101   | Ravi    | Java, Python    |
        | 102   | Meena   | HTML, CSS, JS   |
        </pre>
      </li>
      <li>What is the difference between 3NF and BCNF?</li>
      <li>Give a real-life scenario where normalization improves database efficiency.</li>
    </ol>
  `
},
{
  id:16,
  title: "Relationships in MySQL",
  description: `
    <p><strong>Relationships</strong> in MySQL define how data in one table is connected to data in another table using 
    <code>Primary Keys (PK)</code> and <code>Foreign Keys (FK)</code>. 
    They help maintain <em>data consistency</em> and reduce redundancy.</p>

    <h3>Types of Relationships</h3>
    <ul>
      <li><strong>1. One-to-One:</strong> One record in Table A is related to one record in Table B.</li>
      <li><strong>2. One-to-Many:</strong> One record in Table A is related to many records in Table B.</li>
      <li><strong>3. Many-to-One:</strong> Many records in Table A are related to one record in Table B (reverse of One-to-Many).</li>
      <li><strong>4. Many-to-Many:</strong> Many records in Table A are related to many records in Table B (using a junction table).</li>
    </ul>

    <h3>1. One-to-One Example</h3>
    <pre>
    Table: Students
    +-----------+-------------+
    | StudentID | Name        |
    +-----------+-------------+
    | 1         | Ravi        |
    | 2         | Meena       |

    Table: Passports
    +-------------+-----------+
    | PassportID  | StudentID |
    +-------------+-----------+
    | P101        | 1         |
    | P102        | 2         |
    </pre>
    <p>✅ Each student has exactly one passport.</p>

    <h3>2. One-to-Many Example</h3>
    <pre>
    Table: Teacher
    +-----------+-------------+
    | TeacherID | Name        |
    +-----------+-------------+
    | 1         | Mr. Sharma  |
    | 2         | Mrs. Gupta  |

    Table: Students
    +-----------+-------------+-----------+
    | StudentID | Name        | TeacherID |
    +-----------+-------------+-----------+
    | 101       | Rahul       | 1         |
    | 102       | Priya       | 1         |
    | 103       | Karan       | 2         |
    </pre>
    <p>✅ One teacher teaches many students.</p>

    <h3>3. Many-to-One Example</h3>
    <pre>
    Table: Departments
    +---------+-------------+
    | DeptID  | DeptName    |
    +---------+-------------+
    | 1       | HR          |
    | 2       | IT          |

    Table: Employees
    +---------+-------------+---------+
    | EmpID   | Name        | DeptID  |
    +---------+-------------+---------+
    | 201     | Amit        | 1       |
    | 202     | Riya        | 1       |
    | 203     | Rohit       | 2       |
    </pre>
    <p>✅ Many employees belong to one department.</p>

    <h3>4. Many-to-Many Example</h3>
    <pre>
    Table: Students
    +-----------+-------------+
    | StudentID | Name        |
    +-----------+-------------+
    | 1         | Ankit       |
    | 2         | Neha        |

    Table: Courses
    +-----------+-------------+
    | CourseID  | CourseName  |
    +-----------+-------------+
    | 101       | Math        |
    | 102       | Science     |

    Junction Table: Student_Course
    +-----------+-----------+
    | StudentID | CourseID  |
    +-----------+-----------+
    | 1         | 101       |
    | 1         | 102       |
    | 2         | 101       |
    </pre>
    <p>✅ One student can enroll in many courses, and one course can have many students.</p>

    <h3>Real-Life Analogies</h3>
    <ul>
      <li><strong>One-to-One:</strong> Person ↔ Aadhar Card</li>
      <li><strong>One-to-Many:</strong> Customer ↔ Orders on Amazon</li>
      <li><strong>Many-to-One:</strong> Employees ↔ Company</li>
      <li><strong>Many-to-Many:</strong> Students ↔ Courses in a college</li>
    </ul>

    <h3>Practice Questions</h3>
    <ol>
      <li>Explain One-to-One relationship with an example.</li>
      <li>Create a One-to-Many relationship between "Author" and "Books".</li>
      <li>How is Many-to-One different from One-to-Many?</li>
      <li>Design a Many-to-Many relationship between "Doctors" and "Patients".</li>
      <li>Why is a junction (bridge) table used in Many-to-Many relationships?</li>
    </ol>
  `
}











    

];

export default mysqlData;
