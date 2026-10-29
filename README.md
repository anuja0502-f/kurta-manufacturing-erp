# Kurta Manufacturing ERP (MERN)

A starter MERN application based on the uploaded Kurta Manufacturing ERP presentation.

## Modules
- Admin dashboard
- Inventory: raw materials and finished products
- Production: production orders and stages
- Sales & Orders: customers, order quantities, dispatch
- Shared MongoDB database through Express REST APIs

## Requirements
- Node.js 18+
- MongoDB Community Server or MongoDB Atlas

## Run backend
```bash
cd backend
cp .env.example .env
npm install
npm run dev
```
Edit `.env` and set `MONGO_URI` to your MongoDB connection string. Backend defaults to `http://localhost:5000`.

## Run frontend
Open a second terminal:
```bash
cd frontend
npm install
npm run dev
```
Open the Vite URL shown in the terminal (normally `http://localhost:5173`).

## API routes
- `GET /api/health`
- `GET/POST /api/inventory`
- `PUT/DELETE /api/inventory/:id`
- `GET/POST /api/production`
- `PUT /api/production/:id`
- `GET/POST /api/customers`
- `GET/POST /api/orders`
- `PUT /api/orders/:id/dispatch`

## Important notes
- This is a learning/project starter, not a production-ready ERP.
- Inventory and production actions are intentionally simple. Add authentication, role-based access, audit logs, stronger transaction handling, and tests before real business use.
- Seed data is not automatically inserted. Add records through the UI after connecting MongoDB.
