# Write your MySQL query statement below
SELECT
(SELECT Max(salary) FROM Employee
 WHERE salary < (SELECT MAX(salary) FROM Employee))
 AS SecondHighestSalary