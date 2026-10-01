# IMY220-Project

IMY Photo Sharing Website Project 2026

# Build frontend

docker build -t pictora-frontend ./frontend
docker run -p 5173:5173 pictora-frontend

# Build backend

docker build -t pictora-backend ./backend
docker run -p 5000:5000 pictora-backend



# Run both together instead of separately

# Build and run both containers

docker-compose up --build

# Stop containers

docker-compose down



https://github.com/shanya-06/IMY220-Project

