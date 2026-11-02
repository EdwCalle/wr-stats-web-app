
# WR Stats

**WR Stats** is a prototype web application designed to help *League of Legends: Wild Rift* players track their daily wins and losses, monitor their performance, and analyze their progress over time.

Since Wild Rift does not provide a publicly accessible API for retrieving player statistics, WR Stats offers a simple way for players to manually record and track their match results.

### Current Features

- Record daily wins and losses.
- Track performance over time.
- Compare results across different ranked seasons.

### Future Plans

The project aims to introduce additional features, including:

- Tracking player ranks (Elo) alongside win rates.
- Analyzing the relationship between rank progression and win rate.
- Providing insights into player performance across multiple seasons.

> **Disclaimer:** This application was developed for learning and demonstration purposes only. It is a prototype and may contain bugs, inaccurate data, or unexpected behavior.

## Tech Stack

- **Frontend:** React + Vite
- **Containerization:** Docker and Docker Compose

## Getting Started with Docker

### Prerequisites

Make sure the following tools are installed:

- [Node.js](https://nodejs.org/)
- [Docker](https://www.docker.com/)

### Installation and Setup

**1. Start the backend API**

Before running WR Stats, make sure the backend API is running locally.

Follow the backend setup instructions to start the API at:

`http://localhost:3000/`

**2. Clone the repository**

```bash
git clone <repository-url>
cd <repository-directory>
```

**3. Configure environment variables**

Create a `.env.development` file in the project root and add the following variables:

```env
NODE_ENV=development
VITE_API_BASE_URL=http://localhost:3000/api/v1
```

Make sure the API URL matches your backend configuration.

**4. Start the application using Docker**

Ensure that port `5173` is available, then run:

```bash
docker compose up -d --build web
```

This command builds the Docker image and starts the web service in detached mode.

**5. Access the application**

Once the container is running, open your browser and navigate to:

**http://localhost:5173/**

The application should now be accessible.
### Demo Account

To explore and test the application, you can log in using the following demo credentials:

| Field | Value |
|---|---|
| **Username** | `demo` |
| **Password** | `user1234` |

> **Note:** This account is intended for testing and demonstration purposes only. Make sure the backend API is running and the sample database has been successfully restored before logging in.

## Project Status

WR Stats is currently a **prototype under development**. Its primary purpose is to explore web development technologies, experiment with application architecture, and demonstrate practical programming skills.

New features and improvements may be introduced as the project evolves.
