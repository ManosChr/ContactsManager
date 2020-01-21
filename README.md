# Contact Manager

## Description

> This application displays a list of personal contacts.
> The user can create new contacts and edit or delete existing ones.
> The app uses form validation. Name and Email fields are required.
> The user has the ability to add one or more phone numbers for each contact.
>
>**The app uses:**
>* Back-End: Nodejs, Express and MongoDB
>* Front-End: React

## Instructions for running locally

- clone repo

```
git clone https://github.com/ManosChr/ContactsManager.git
```

- cd to backend folder

```
cd ContactsManager/backend
```

- install locally (generates static files)

```
npm install
```

- cd to frontend folder

```
cd ContactsManager/frontend
```

- install locally (generates static files)

```
npm install
```

- install mongoDB locally if not installed

```
cd ContactsManager/backend
```

- Run server (localhost:5000)

```
node server.js
```

```
cd ContactsManager/frontend
```

- serving locally with live reload

```
npm start
```

## Back end specifications

#### Run server (localhost:5000)
```cmd
node server.js
```

### Api documentation

#### **GET** http://localhost:5000/api/v1.0/contacts

**Response** (array of contact objects)

Status **200**

```javacript
[
  {
    "phones": [
      "contact phone"
    ],
    "_id": "contact id",
    "surname": "contact surname",
    "email": "contact email"
  }
]
```

#### **POST** http://localhost:5000/api/v1.0/contacts

**Request**

contact object without _id, email(email format), surname required, list of phones(10 digit string))

```javacript
[
  {
    "phones": [
      "contact phone"
    ],
    "surname": "contact surname",
    "email": "contact email"
  }
]
```

**Response**(contact created)

Status **200**

```javacript
[
  {
    "phones": [
      "contact phone"
    ],
    "_id": "contact id",
    "surname": "contact surname",
    "email": "contact email"
  }
]
```

#### **PUT** http://localhost:5000/api/v1.0/contacts

**Request**

contact object with _id, email(email format), surname required, list of phones(10 digit string))

```javacript
[
  {
    "phones": [
      "contact new phone"
    ],
    "_id": "contact id",
    "surname": "contact new surname",
    "email": "contact new email"
  }
]
```

**Response**(contact updated)

Status **200**

```javacript
[
  {
    "phones": [
      "contact phone"
    ],
    "_id": "contact id",
    "surname": "contact surname",
    "email": "contact email"
  }
]
```

#### **DELETE** http://localhost:5000/api/v1.0/contacts

**Request**

Path parameter contact _id

****Response****(contact deleted)

Status **200**

```javacript
[
  {
    "phones": [
      "contact phone"
    ],
    "_id": "contact id",
    "surname": "contact surname",
    "email": "contact email"
  }
]
```

#### **Error codes**

With 200 status code
- VALIDATION_ERROR-100
- SERVER_ERROR-101