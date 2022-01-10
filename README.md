# Krav Application

---

## **Instalation**

npm i and start with npm run start:dev
Create a db and call it: "krav"
Make sure to add .env file and fill out out properly

## Game plan:

1. ~~PostgreSQL~~
2. ~~Router~~

In order to get these features, I will need to see the data from the API
Get the list of students from the API based on the date inputed. Find these students by fname + lname
What should be done in case of typos?

- Get all students by date
- Get all students by date and time
- Get the list of people that checked in
- Compare with list from our db
- Determine if in our db
- If not, add?
- If yes, check if vaccinated
- Model: ID, fname, lname, picture, 1st(boolean), 2nd(boolean), booster(boolean),
- Security...

3. ~~Create login screen~~

---

4. Google Oauth

- Create .env file
- Add app key from google's API
- Instructions here : https://developers.google.com/identity/sign-in/web/sign-in and https://developers.google.com/identity/protocols/oauth2
- NavBar must include signIn/signOut
- Use Cookies (do i need to?)
- Prof's procedure:
- - API Routes
- - GET /api/callback/third-party (with code)
- - exchange code for token
- - find out user from token
- - return a jwt token from our app
- - GET /api/auth with header token
- - return user

---

5. Create search screen
6. Create results screen
7. Sheets API
8. Encrypt admin passwords

### Features to add:

- Change Password for admins
- Give students QR codes to use to sign in
