-- Inserts para la tabla Weapon
-- Armas para Humanos
INSERT INTO Weapon (Weapon_id, Name, Damage, Acuracy, Category, Race_id) VALUES
(1, 'Andúril, la Llama del Oeste', 25, 75, 'Melee', 1),
(2, 'Arco de Legolas', 20, 80, 'Ranged', 1),
(3, 'Lanza de Boromir', 28, 70, 'Melee', 1),
(4, 'Ballesta de Aragorn', 22, 85, 'Ranged', 1),
(5, 'Martillo de Gimli', 30, 65, 'Melee', 1),

-- Armas para Elfos
(6, 'Arco Élfico', 23, 90, 'Ranged', 2),
(7, 'Glamdring', 28, 80, 'Melee', 2),
(8, 'Daga de Legolas', 20, 95, 'Melee', 2),
(9, 'Espada de Galadriel', 25, 85, 'Melee', 2),
(10, 'Espada Élfica', 30, 75, 'Melee', 2),

-- Armas para Enanos
(11, 'Hacha de Thorin', 35, 70, 'Melee', 3),
(12, 'Ballesta de Balin', 28, 85, 'Ranged', 3),
(13, 'Martillo de Durin', 40, 65, 'Melee', 3),
(14, 'Escudo de Dwalin', 30, 75, 'Melee', 3),
(15, 'Hacha de Dori', 33, 70, 'Melee', 3),

-- Armas para Magos
(16, 'Bola de Fuego', 40, 50, 'Magia', 4),
(17, 'Bastón de Hielo', 35, 60, 'Magia', 4),
(18, 'Bastón de Trueno', 38, 55, 'Magia', 4),
(19, 'Bastón de Gandalf', 42, 45, 'Magia', 4),
(20, 'Narya, Anillo de Fuego', 45, 40, 'Magia', 4),

-- Armas para Orcos
(21, 'Hacha Orca', 32, 70, 'Melee', 5),
(22, 'Arco Orco', 25, 85, 'Ranged', 5),
(23, 'Daga Morgul', 30, 80, 'Melee', 5),
(24, 'Garrote de Mordor', 35, 75, 'Melee', 5),
(25, 'Grond, Martillo del Inframundo', 38, 70, 'Melee', 5);
-- Inserts para la tabla Race
INSERT INTO Race (Race_id, Max_Life, Name) VALUES
(1, 100, 'Human'),
(2, 100, 'Elf'),
(3, 100, 'Dwarf'),
(4, 100, 'Wizard'),   -- Mago
(5, 100, 'Orc');     -- Orco 
-- Inserts para la tabla Maps
-- Agregar mapas basados en la raza es opcional, pero aquí está el ejemplo para Humans
INSERT INTO Maps (Map_id, Name, Race_id) VALUES
(1, 'Rivendell', 2),   -- Elf
(2, 'Moria', 3),       -- Dwarf
(3, 'Hogwarts', 4),    -- Wizard
(4, 'Mordor', 5);      -- Orc