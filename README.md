# Movie Explorer

Movie Explorer is a web application that allows users to search and filter a list of movies by title, rating, and category. The frontend is built using React.js, and the backend is powered by Django. This application demonstrates how to integrate React with Django and provides a simple user interface for movie exploration.

## Features

- **Search Movies:** Users can search movies by title.
- **Filter by Rating and Category:** Users can filter movies based on their rating and category.
- **Responsive Design:** The frontend is styled using CSS for a clean and modern look.

## Project Structure

- **Frontend:** React.js, located in the `movie-explorer-frontend` directory.
- **Backend:** Django, located in the `movie_explorer` directory.

## Installation and Setup

### Prerequisites

- Node.js and npm (for the React frontend)
- Python 3 (for the Django backend)

### Backend Setup (Django)

1. Clone the repository:
    ```bash
    git clone https://github.com/<your-username>/<repo-name>.git
    cd <repo-name>
    ```

2. Navigate to the backend directory:
    ```bash
    cd movie_explorer
    ```

3. Run the Django development server:
    ```bash
    python manage.py runserver
    ```

The Django server will start at `http://localhost:8000`.

### Frontend Setup (React)

1. Navigate to the frontend directory:
    ```bash
    cd ../movie-explorer-frontend
    ```

2. Install the required Node.js packages:
    ```bash
    npm install
    ```

3. Start the React development server:
    ```bash
    npm start
    ```

The React app will start at `http://localhost:3000`.

### Accessing the Application

Once both servers are running:

- **Frontend:** Navigate to `http://localhost:3000` to view the React frontend.
- **Backend:** The backend API can be accessed at `http://localhost:8000/api/`.

### Notes

- Ensure that the React app is correctly proxying API requests to the Django backend. The proxy configuration should be set in the `package.json` of the React app:
    ```json
    "proxy": "http://localhost:8000"
    ```

- You can modify the movie data in the `movies/data.py` file within the Django app.
