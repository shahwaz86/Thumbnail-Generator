# AI Thumbnail Generator — Backend

This README describes the backend pieces included in this workspace (controllers, models, routes, and utilities) and documents how user registration, login, and logout work and which routes to call.

## Overview

- Minimal Express backend that handles user registration, login, and logout.
- JWT tokens are generated and set as an HTTP-only cookie named `token` (7-day expiry).
- Passwords are hashed with `bcryptjs` before being saved.

## Quick start

1. Install dependencies:

   npm install

2. Create a `.env` file with the required environment variables (see below).

3. Start the server:

   npm run start

The server entrypoint is [Backend/index.js](index.js).

## Environment variables

- `PORT` — port the Express server listens on.
- `SECRETKEY` — secret used to sign JWT tokens (used by `utils/generateToken.js`).
- `MONGO_URI` (or similar) — MongoDB connection string expected by the DB connection module in `config/db.js`.

Set these variables in a `.env` file in the `Backend/` folder.

## Files of interest

- Controllers: [Backend/controllers/user.controller.js](controllers/user.controller.js)
- Models: [Backend/models/user.js](models/user.js)
- Routes: [Backend/routes/user.routes.js](routes/user.routes.js)
- Token util: [Backend/utils/generateToken.js](utils/generateToken.js)
- Server entry: [Backend/index.js](index.js)

## User model

The `User` model has the following fields (see [models/user.js](models/user.js)):

- `name` (String, required)
- `email` (String, required, unique)
- `role` (String, enum: `admin` | `user`, default `user`)
- `password` (String, required — stored hashed)

## Authentication flow

- Registration hashes the provided password using `bcryptjs` and creates a user document.
- A JWT is generated with payload `{ userId }` and signed with `process.env.SECRETKEY` (expires in 7 days).
- The token is sent to clients in an HTTP-only cookie named `token` (7-day maxAge). The token is also returned in the JSON response body.

Token generation is implemented in [utils/generateToken.js](utils/generateToken.js).

## API Routes

Base path used in the server: `/api/user`

- Register a new user
  - Method: `POST`
  - Path: `/api/user/register`
  - Body (JSON): `{ name, email, role, password }` — all fields required
  - What it does: validates fields, checks existing user, hashes password, creates user, generates token, sets `token` cookie
  - Success response: `201` with user info and `token` in JSON body and cookie

- Login
  - Method: `POST`
  - Path: `/api/user/login`
  - Body (JSON): `{ email, password }`
  - What it does: finds user by email, compares password using `bcrypt.compare`, generates token, sets `token` cookie
  - Success response: `200` with user info and `token` in JSON body and cookie

- Logout
  - Method: `GET`
  - Path: `/api/user/logout`
  - What it does: clears cookie named `token` using `res.clearCookie("token", "")` and returns a success message
  - Success response: `200` with `{ message: "Logout successful" }`

Notes:
- All controller logic is in [controllers/user.controller.js](controllers/user.controller.js).
- Errors are thrown with appropriate HTTP status codes using `express-async-handler`.

## Example requests

- Register (example):

  POST /api/user/register
  Body:
  {
    "name": "Alice",
    "email": "alice@example.com",
    "role": "user",
    "password": "securepassword"
  }

- Login (example):

  POST /api/user/login
  Body:
  {
    "email": "alice@example.com",
    "password": "securepassword"
  }

After successful login or registration the response includes a JSON `token` and the HTTP-only cookie `token` will be set by the server.


