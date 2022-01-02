# Krav Application

---

## **Instalation**

npm i and start with npm run start:dev
Create a db and call it: ""

## Game plan:

1. PostgreSQL

- Create Database
- Create Models: Admin and student (guest?)
- Create Seed Data

Admin Model:

- id
- username
- password

Student Model:

- id
- fname (all lower case)
- lname (all lower case)
- picture to the vaccination card (use profs AWS lesson)
- 1st shot (boolean)
- 2nd shot (boolean)
- booster (boolean)

2. Router

- Get the list of people that checked in
- Compare with list from our db
- Determine if in our db
- If not, add?
- If yes, check if vaccinated
- Model: ID, fname, lname, picture, 1st(boolean), 2nd(boolean), booster(boolean),
- Security...

3. Create login screen
4. Google Oauth
5. Sheets API

### Features to add:

- Change Password for admins
- Give students QR codes to use to sign in
