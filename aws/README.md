# Node.js CRUD API

A simple RESTful CRUD API built with Node.js, Express, and PostgreSQL.

## Features

- Create, Read, Update, and Delete operations for user resources
- A simple RESTful CRUD API built with Node.js, Express, and PostgreSQL database integration
- Express.js framework
- Environment variable configuration


### Example Requests

#### Create a user
```
POST /api/users
Content-Type: application/json

{
  "name": "John Doe",
  "email": "john@example.com",
  "age": 30
}
```

#### Get all users
```
GET /api/users
```

#### Get a specific user
```
GET /api/users/60d21b4667d0d8992e610c85
```

#### Update a user
```
PATCH /api/users/60d21b4667d0d8992e610c85
Content-Type: application/json

{
  "name": "Jane Doe"
}
```

#### Delete a user
```
DELETE /api/users/60d21b4667d0d8992e610c85
```

## User Model

The User schema has the following properties:
- `name`: String (required)
- `email`: String (required, unique)
- `age`: Number (optional)
- `createdAt`: Date (automatically set to current date)

## Error Handling

The API includes error handling for:
- Invalid user IDs
- User not found
- Validation errors
- Server errors

All errors return appropriate HTTP status codes and descriptive messages.