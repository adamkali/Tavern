![High Resolution Logo - Transparent Background](https://user-images.githubusercontent.com/43151285/192200405-5d34b08b-80ea-4704-a39c-f73495e73cbc.png)

Tavern Is The Entire Production Environment For All of The App's Processes.

This is my side project which has somwhat become an obsession of mine. It morphed from just learning about golang into functional production code very quickly and I am very grateful for that. I have set a deadline, to have Bëor Branches (i.e. pre-alpha production branches) to be done by OCT 3, 2022 and for Boromir Branch (release v1.0) to be ready by the beginning of 2023.

## Getting started.

Pull the repository:
  git pull https://gihub.com/adamkali/Tavern.git
  
Next ensure that all the needed dockerfiles work right out of the box...
  cd ./Tavern/TavernProfile && docker build .
  cd ../TavernDatabase/TavernDB && docker build .
  
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

Once everything is working make a branch, edit, and make a pull request! If it works and does not break anything the pull request will be merged to the main release branch.

Thank you for contributing!
![Splash logo](https://user-images.githubusercontent.com/43151285/192321881-19b0f49a-c178-4531-96a0-37a2745a33c9.png)
- Tavern Team
