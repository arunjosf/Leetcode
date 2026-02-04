# Write your MySQL query statement below
SELECT e.name As Employee, e.salary AS Salary, d.name AS Department
FROM Employee e
JOIN Department d
ON e.departmentId = d.id 
WHERE(e.departmentId, e.salary) IN(
    SELECT departmentId, MAX(salary)
    FROM Employee
    GROUP BY departmentId
);
