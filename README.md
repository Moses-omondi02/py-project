# VolunteerConnect

A comprehensive platform connecting NGOs with volunteers for community service opportunities. Built with React frontend and Flask backend.

## Features

- **NGO Dashboard**: NGOs can post volunteer opportunities with details like location, hours, and requirements
- **Volunteer Portal**: Users can browse available tasks, sign up for opportunities, and track their volunteer history
- **Admin Panel**: Administrative interface for managing users, tasks, and signups
- **Authentication**: Secure login and signup system
- **Responsive Design**: Mobile-friendly interface built with React and Chakra UI
- **Real-time Updates**: Live task and signup management

## How It Works

VolunteerConnect is a comprehensive platform that bridges the gap between NGOs and volunteers, making community service more accessible and organized.

### Core Functionality

1. **NGO Registration & Task Creation**
   - NGOs register accounts and create detailed volunteer opportunities
   - Tasks include location, required hours, categories, and descriptions
   - NGOs can specify due dates and volunteer requirements

2. **Volunteer Discovery & Signup**
   - Volunteers browse tasks by category, location, or NGO
   - Detailed task information helps volunteers make informed decisions
   - One-click signup process with optional messages to NGOs

3. **Admin Oversight**
   - System administrators monitor platform activity
   - View user statistics, task creation, and volunteer signups
   - Manage platform growth and ensure quality interactions

### User Journey

**For NGOs:**
1. Register and create an NGO profile
2. Post volunteer opportunities with comprehensive details
3. Review volunteer applications and messages
4. Coordinate with signed-up volunteers

**For Volunteers:**
1. Create a personal account
2. Browse available opportunities matching interests
3. Sign up for tasks with personal messages
4. Complete volunteer work and track contributions

**For Admins:**
1. Access admin dashboard with system metrics
2. Monitor user registrations and task creation
3. Review signup activity and platform usage

### Key Benefits

- **Streamlined Matching**: Smart categorization helps volunteers find suitable opportunities
- **Transparent Communication**: Direct messaging between NGOs and volunteers
- **Impact Tracking**: Users can see their volunteer history and contributions
- **Scalable Platform**: Built to handle growing numbers of NGOs and volunteers
- **Mobile-First Design**: Accessible on all devices for on-the-go volunteering

## Tech Stack

### Frontend
- React 19
- Vite (build tool)
- React Router (navigation)
- Formik & Yup (form handling and validation)
- Axios (API calls)

### Backend
- Flask (Python web framework)
- SQLAlchemy (ORM)
- Flask-Migrate (database migrations)
- Flask-CORS (cross-origin requests)
- SQLite/PostgreSQL (database)

### Deployment
- Frontend: Render (https://project-frontend-0h6o.onrender.com)
- Backend: Render (https://project-backend-ta5p.onrender.com)
- Database: PostgreSQL on Render

## Installation

### Prerequisites
- Node.js (v18 or higher)
- Python (v3.8 or higher)
- Git

### Backend Setup

1. Navigate to the server directory:
```bash
cd server
```

2. Create a virtual environment:
```bash
python -m venv venv
source venv/bin/activate  # On Windows: venv\Scripts\activate
```

3. Install dependencies:
```bash
pip install -r requirements.txt
```

4. Set up the database:
```bash
flask db upgrade
```

5. Run the development server:
```bash
python app.py
```

The backend will be available at `http://localhost:5000`

### Frontend Setup

1. Navigate to the client directory:
```bash
cd client
```

2. Install dependencies:
```bash
npm install
```

3. Create environment file:
```bash
cp .env.example .env
# Edit .env with your API URL
```

4. Run the development server:
```bash
npm run dev
```

The frontend will be available at `http://localhost:5173`

### Running the Application

To fully experience the application with persistent data, ensure both the backend and frontend servers are running simultaneously. The backend manages the database and API endpoints, while the frontend provides the user interface. Running both together allows for real-time data synchronization and full functionality.

## Usage

### For NGOs
1. Register an account
2. Post volunteer opportunities with task details
3. Monitor signups and manage volunteers

### For Volunteers
1. Browse available tasks by category and location
2. Sign up for opportunities that match your interests
3. Track your volunteer history

### For Admins
1. Access the admin panel to view system statistics
2. Manage users, tasks, and volunteer signups

## API Endpoints

### Tasks
- `GET /api/tasks` - Get all tasks
- `POST /api/tasks` - Create a new task (NGOs only)

### Authentication
- `POST /api/login` - User login
- `POST /api/signup` - User registration

### Signups
- `POST /api/signups` - Volunteer for a task

### Admin
- `GET /api/admin/users` - Get all users
- `GET /api/admin/signups` - Get all signups
- `GET /api/admin/data` - Get system statistics

## Environment Variables

### Backend
- `DATABASE_URL` - Database connection string
- `SECRET_KEY` - Flask secret key
- `FLASK_ENV` - Environment (development/production)

### Frontend
- `VITE_API_URL` - Backend API URL (set to https://project-backend-ta5p.onrender.com)

## Deployment

### Backend (Render)
1. Connect your GitHub repository to Render
2. Set build command: `pip install -r requirements.txt`
3. Set start command: `python app.py`
4. Configure environment variables

### Frontend (Render)
1. Connect your GitHub repository to Render
2. Set build command: `npm run build`
3. Set publish directory: `build`
4. Configure environment variables

## Project Structure

```
py-project/
├── client/                 # React frontend
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   └── api.js
│   ├── package.json
│   └── vite.config.js
├── server/                 # Flask backend
│   ├── app.py
│   ├── models.py
│   ├── config.py
│   ├── requirements.txt
│   └── instance/
└── README.md
```

## Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature-name`
3. Commit your changes: `git commit -am 'Add feature'`
4. Push to the branch: `git push origin feature-name`
5. Submit a pull request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Authors

This project was developed by Pascal Denzel and Erick Moses.

## Support

For questions or support, please open an issue on GitHub or contact the development team.
