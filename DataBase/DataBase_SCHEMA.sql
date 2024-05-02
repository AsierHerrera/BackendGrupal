SELECT * FROM mydb.User;
-- Cambiar a la base de datos "mydb"
USE mydb;

-- Insertar múltiples filas en la tabla "User"
INSERT INTO User (User_id, Name, Licence, Email, Password)
VALUES 
    (1, 'Anna', TRUE, 'anna@example.com', 'contraseña123'),
    (2, 'Asier', TRUE, 'asier@example.com', 'contraseña456'),
    (3, 'Bego', TRUE, 'bego@example.com', 'contraseña789'),
    (4, 'Luis', TRUE, 'luis@example.com', 'contraseña101112');
