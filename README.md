# Disney API

### Getting started

1. Clone the respository.

   ```shell
   git clone https://github.com/ArmandoTech/DisneyApi
   cd DisneyApi
   ```

2. Install all dependencies with NPM.

   ```shell
   npm install
   ```

3. Create .env file at respository root and add this params in it:

   ```shell
   // Database
    PORT=3000
    DB_HOST=localhost
    DB_USER=dbUser
    DB_PASSWORD=dbPassword
    DB_NAME=dbName

    // Secret for jwt
    SECRET=SomethingSecret

    // SendGrid
    SENDGRID_API_KEY=
    SENDGRID_MAILER=something@mail.com
   ```

4. Execute development server

   ```shell
   npm run dev
   ```

5. If application is working, you can see the message "Server running on port: ${PORT} 😎" on console.

## Routes doc

# Characters

## (http://localhost:3000/characters)

- Post: Create a character
- Get: Returns all characters
- Patch: Update a character
- Delete: Delete a character

#### Query: http://localhost:3000/characters?movies=titleMovie

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
