# Weather

## Description

Check the current weather condition of a place of your
choice. Just enter name of the place be a city, country, ...

# To run project (Instructions)

1. Clone repository
2. Rename ".env.example" to ".env"
3. Configure / add the environment variables to the .env file
4. Genereate key pair for jwt signing with `ssh-keygen -t rsa -b 4096 -m PEM -f jwt.key`
   in the root of the project. NB: Do not add a passphrase
5. Install dependencies with "npm i"
6. Run server with "npm run dev"
   ps: There is a script for production too but... 😊
