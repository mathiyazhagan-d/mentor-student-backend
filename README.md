
# Mentor-Student Backend

This project is the backend API for managing mentors and students. It provides endpoints for creating, reading, updating, and deleting mentors and students. The backend is built using Node.js, Express.js, and MongoDB.

## Live Demo

Check out the live demo:

- Mentors API: [https://mentor-student-backend-mgt3.onrender.com/mentors](https://mentor-student-backend-mgt3.onrender.com/mentors)
- Students API: [https://mentor-student-backend-mgt3.onrender.com/students](https://mentor-student-backend-mgt3.onrender.com/students)

## Technologies Used

- Node.js
- Express.js
- MongoDB
- Mongoose
- CORS

## Getting Started

To run this project locally, follow these steps:

1. Clone this repository: `git clone <repository-url>`
2. Navigate to the project directory: `cd mentor-student-backend`
3. Install dependencies: `npm install`
4. Set up environment variables:
   - Create a `.env` file in the root directory
   - Define `PORT` and `MONGODB_URI` variables in the `.env` file
5. Start the development server: `npm start`
6. The server will start running at the specified port, and you can access the API endpoints locally.

## API Endpoints

- Mentors API: `/mentors`
- Students API: `/students`

### Example Requests

- Get all mentors: `GET /mentors`
- Get a specific mentor by ID: `GET /mentors/:id`
- Create a new mentor: `POST /mentors`
- Update a mentor by ID: `PUT /mentors/:id`
- Delete a mentor by ID: `DELETE /mentors/:id`

- Get all students: `GET /students`
- Get a specific student by ID: `GET /students/:id`
- Create a new student: `POST /students`
- Update a student by ID: `PUT /students/:id`
- Delete a student by ID: `DELETE /students/:id`

## Database Setup

This application uses MongoDB as its database. Make sure to provide the MongoDB URI in the environment configuration.


