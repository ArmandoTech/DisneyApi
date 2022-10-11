# Disney API

## Routes doc

# Characters

## (http://localhost:3000/characters)

- Post: Create a character
- Get: Returns all characters
- Patch: Update a character
- Delete: Delete a character

## (http://localhost:3000/characters/detail)

- Get: Returns all the information of the characters

# Movies

## (http://localhost:3000/movies)

- Post: Create a movie
- Get: Returns all movies
- Patch: Update a movie
- Delete: Delete a movie

# Auth

## (http://localhost:3000/auth/register)

- Post: Password, email and name are required. Password is encrypted and an welcome email is sent.

## (http://localhost:3000/auth/login)

- Post: Password, email and name are required. Returns a JSON with the token of the user (valid for 24h).
