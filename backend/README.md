# Back end application with nodejs and express

### Installation/Run

#### Clone repository

#### Run npm install
```cmd
npm install
```

#### Run server (localhost:3000)
```cmd
nodejs server
```

### Api documentation

#### **GET** http://localhost:3000/api/v1.0/contacts

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

#### **POST** http://localhost:3000/api/v1.0/contacts

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

#### **PUT** http://localhost:3000/api/v1.0/contacts

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

#### **PUT** http://localhost:3000/api/v1.0/contacts

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