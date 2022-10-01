![High Resolution Logo - Transparent Background](https://user-images.githubusercontent.com/43151285/192200405-5d34b08b-80ea-4704-a39c-f73495e73cbc.png)

Tavern Is The Entire Production Environment For All of The App's Processes.

This is my side project which has somwhat become an obsession of mine. It morphed from just learning about golang into functional production code very quickly and I am very grateful for that. I have set a deadline, to have Bëor Branches (i.e. pre-alpha production branches) to be done by OCT 3, 2022 and for Boromir Branch (release v1.0) to be ready by the beginning of 2023.

## Getting started.

Pull the repository:
 ```
git clone --recursive https://github.com/adamkai/Tavern.git
 ```
  
Next either inject your databse with `dump.sh` to appropriately populate the database, or use ...
```
docker compose docker-compose.yaml
```
  
A good way to start is to make sure that you can get information. So run POST requests on postman or thunderclient oor what have you
```
http://localhost:8000/api/signup
BODY: {
  "username": "YOUR USERNAME",
  "password": "YOUR PASSWORD",
  "user_email": "YOUR EMAIL"
}
```

```
http://localhost:8000/api/verify
BODY: {
  "user_email": "EMAIL THAT YOU GOT THE PIN FROM",
  "user_phone": "PHONE NUMBER YOU GOT THE PIN FROM", // not currently supported but needed in request for future use
  "pin": "PIN FROM EMAIL OR PHONE FROM: XXX00000"
}
```

Once everything is working make a branch, edit, and make a pull request! If it works and does not break anything the pull request will be merged to the main release branch. Also please read the README.md s to see design patterns and any issues already opened. You are free to make a pull request as needed. If you are not a part of the Tavern Team you will have to create 
```
cd Tavern/TavernProfile/Tavern-Backend/TavernProfile-env
nano .local.yaml
nano .prod.yaml
```
and provide these env vars:
```
database:
  host: localhost
  port: 3306
  username: root
  password: MYSQL_ROOT_ENV
  database: taverndatabase
server:
  port: 8000
  host: localhost
cors:
  origins:
    - "*"
  methods:
    - GET
    - POST
    - PUT
    - DELETE
    - OPTIONS
  headers:
    - "*"
  credentials: true
email:
  host: smtp.gmail.com
  port: 587
  username: A_GMAIL_ACCOUNT_WITH_APP_PRIVELAGES
  password: GMAIL_APP_PASSWORD
```
For both of the env files.

Thank you for contributing!
![Splash logo](https://user-images.githubusercontent.com/43151285/192321881-19b0f49a-c178-4531-96a0-37a2745a33c9.png)
- Tavern Team
