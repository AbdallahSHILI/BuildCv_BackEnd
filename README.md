# BuildCV Backend

A Node.js backend application with Google OAuth authentication.

## Features

- Google OAuth 2.0 authentication
- Express.js server
- Session management
- Protected routes
- RESTful API endpoints

## Prerequisites

- Node.js (v14 or higher)
- npm or yarn
- Google OAuth credentials

## Installation

1. Clone the repository and navigate to the project directory

2. Install dependencies:

```bash
npm install
```

3. Create a `.env` file based on `.env.example`:

```bash
cp .env.example .env
```

4. Configure your environment variables in `.env`:
   - Get Google OAuth credentials from [Google Cloud Console](https://console.cloud.google.com/)
   - Create a new project or use an existing one
   - Enable Google+ API
   - Create OAuth 2.0 credentials
   - Add authorized redirect URIs: `http://localhost:3000/auth/google/callback`

## Usage

### Development

```bash
npm run dev
```

### Production

```bash
npm start
```

The server will run on `http://localhost:3000` (or the port specified in your `.env` file).

## API Endpoints

### Authentication Routes

- `GET /auth/google` - Initiate Google OAuth
- `GET /auth/google/callback` - Google OAuth callback
- `GET /auth/profile` - Get user profile (protected)
- `GET /auth/status` - Check authentication status
- `POST /auth/logout` - Logout user
- `GET /auth/logout` - Logout user (GET method)

### General Routes

- `GET /` - API information and available endpoints

## Project Structure

```
├── controllers/
│   └── googleAuth.js      # Google authentication logic
├── routes/
│   └── authRoutes.js      # Authentication routes
├── server.js              # Main application file
├── package.json           # Project dependencies
├── .env.example          # Environment variables template
├── .gitignore            # Git ignore rules
└── README.md             # Project documentation
```

## Google OAuth Setup

1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Create a new project or select an existing one
3. Enable the Google+ API
4. Go to "Credentials" and create "OAuth 2.0 Client IDs"
5. Add authorized redirect URIs:
   - `http://localhost:3000/auth/google/callback` (for development)
   - Your production callback URL
6. Copy the Client ID and Client Secret to your `.env` file

## Environment Variables

- `PORT` - Server port (default: 3000)
- `NODE_ENV` - Environment (development/production)
- `GOOGLE_CLIENT_ID` - Google OAuth Client ID
- `GOOGLE_CLIENT_SECRET` - Google OAuth Client Secret
- `GOOGLE_CALLBACK_URL` - Google OAuth callback URL
- `SESSION_SECRET` - Secret key for session management
- `CLIENT_URL` - Frontend application URL

## License

ISC
