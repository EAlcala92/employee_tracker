INSERT INTO department (dept_name)
VALUES
('Home')
('Warehouse')
('Consumables')
('Front End')

INSERT INTO job (title, salary, department_id)
VALUES
('Assistant Manager', 64000, 1),
('Team Lead', 52000, 1),
('CAP Member', 47000, 2),
('Team Associate', 40000, 2),
('Money Center', 40000, 3),
('Customer Service', 40000, 3),
('Cashier', 38000, 3)

INSERT INTO empoyee (first_name, last_name, job_id, manager_id)
VALUES
('Blanca', 'Ledesma', 1, Null),
('Flor', 'Sanchez', 3, 1),
('Bryan', 'Rodriguez', 2, 1),
('Ruth', 'Donat', 1, Null),
('Rosalinda', 'Vaca', 1, 1),
('Jorge', 'Nunez', 2, 1),
('Haley', 'Johnson', 3, Null);
