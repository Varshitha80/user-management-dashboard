// User Management Dashboard
 // Overview
This project is a User Management Dashboard built with React. It allows users to view, add, edit, and delete user profiles. The dashboard fetches user data from a mock API (JSONPlaceholder) and provides a user-friendly interface to manage the information. The application also includes proper error handling and responsive design.

//Features
View Users: Displays a list of users with their details such as ID, Name, Email, and Department.
Add User: Allows adding a new user through a form.
Edit User: Users can edit their details.
Delete User: Users can delete their profile from the list.
Error Handling: Shows error messages for failed API requests or any runtime errors.
Responsive Design: The app adapts to various screen sizes, ensuring it works on both desktop and mobile devices.
//Technologies Used
React: Frontend framework for building user interfaces.
Axios: For making HTTP requests to interact with the mock API.
CSS: For styling components and making the UI responsive.
JSONPlaceholder: A mock REST API for testing and demo purposes.
Project Structure
user-management-dashboard/
├── public/
│   ├── index.html
├── src/
│   ├── components/
│   │   ├── userList/
│   │   ├── UserForm/
│   │   ├── ErrorBoundary/
│   ├── App.js
│   ├── index.js
│   ├── index.css
├── package.json
└── node_modules/

Setup and Installation
Clone the repository:
git clone https://github.com/your-username/user-management-dashboard.git
Navigate to the project folder and install dependencies:
cd user-management-dashboard
npm install
Start the development server:
npm start
This will launch the app on http://localhost:3000.

//Error Boundary
The app includes an ErrorBoundary component to catch JavaScript errors in the component tree and display a fallback UI. This ensures that the app doesn't crash due to unexpected errors.

//Challenges and Future Improvements
Challenge: Working with a mock API that doesn't persist changes. This was handled by simulating state changes.
Future Improvement: Implementing a real backend to persist changes and integrating more advanced features like pagination, authentication, and real-time updates.