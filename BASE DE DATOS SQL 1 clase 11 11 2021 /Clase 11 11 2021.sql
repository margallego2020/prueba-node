-- EJERCICIO 1

INSERT INTO genres (name, ranking, active) 
VALUES ('Investigación', 13, 1)

-- EJERCICIO 2

UPDATE genres
SET name = 'Investigación Cientifica'
WHERE name = 'Investigación'


-- EJERCICIO 3
DELETE FROM genres where id=13

-- EJERCICIO 4
SELECT * FROM movies 

-- EJERCICIO 5
SELECT first_name, last_name,  rating FROM actors 

-- EJERCICIO 6
SELECT title as Titulo FROM series

-- MICRO DESAFIO 2

-- EJERCICIO 1
SELECT first_name, last_name, rating FROM actors 
WHERE rating > 7.5

-- EJERCICIO 2
SELECT title, rating, awards FROM movies 
WHERE rating > 7.5 AND awards > 2 

-- EJERCICIO 3
SELECT title, rating  FROM movies 
ORDER BY rating 


-- MICRO DESAFIO 3

-- EJERCICIO 1
SELECT title FROM movies 
LIMIT 3

-- EJERCICIO 2
SELECT title, rating FROM movies 
ORDER BY rating DESC 
LIMIT 5

-- EJERCICIO 3
SELECT title, rating FROM movies 
ORDER BY rating DESC 
LIMIT 5
OFFSET 5


-- EJERCICIO 4.1
SELECT first_name, last_name  FROM actors 
LIMIT 10

-- EJERCICIO 4.2
SELECT first_name, last_name  FROM actors 
LIMIT 10
OFFSET 20 -- 3 era página


-- MICRO DESAFIO 4

-- EJERCICIO 1
SELECT title, rating FROM movies 
WHERE title
LIKE "%Harry Potter%" 

-- EJERCICIO 2
SELECT first_name FROM actors 
WHERE first_name  
LIKE "Sam%"

-- EJERCICIO 3
SELECT title, release_date FROM movies 
WHERE release_date BETWEEN '2004-01-01' AND '2008-12-31'

-- O 

SELECT title, release_date FROM movies 
WHERE EXTRACT( YEAR FROM RELEASE_DATE) BETWEEN 2004 AND 2008






