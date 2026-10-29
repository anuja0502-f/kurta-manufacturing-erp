import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import inventoryRoutes from './src/routes/inventoryRoutes.js';
import productionRoutes from './src/routes/productionRoutes.js';
import customerRoutes from './src/routes/customerRoutes.js';
import orderRoutes from './src/routes/orderRoutes.js';
import billingRoutes from './src/routes/billingRoutes.js';

dotenv.config();
const app = express();
app.use(cors({ origin: process.env.CLIENT_URL || 'http://localhost:5173' }));
app.use(express.json());

app.get('/api/health', (_req, res) => res.json({ status: 'ok', app: 'Kurta Manufacturing ERP' }));
app.use('/api/inventory', inventoryRoutes);
app.use('/api/production', productionRoutes);
app.use('/api/customers', customerRoutes);
app.use('/api/orders', orderRoutes);
app.use('/api/billing', billingRoutes);

app.use((err, _req, res, _next) => {
  console.error(err);
  res.status(err.status || 500).json({ message: err.message || 'Server error' });
});

const PORT = process.env.PORT || 5000;
mongoose.connect(process.env.MONGO_URI || 'mongodb://127.0.0.1:27017/kurta_manufacturing_erp')
  .then(() => {
    console.log('MongoDB connected');
    app.listen(PORT, () => console.log(`Kurta ERP API running on http://localhost:${PORT}`));
  })
  .catch(err => {
    console.error('MongoDB connection failed:', err.message);
    process.exit(1);
  });
