import { createSuccessResponse, formatDate } from '@monorepo/common';
import cors from 'cors';
import express from 'express';
import helmet from 'helmet';

const app = express();
const port = process.env.PORT || 4000;

// Middleware
app.use(cors());
app.use(helmet());
app.use(express.json());

// Routes
app.get('/api/hello', (req, res) => {
  const response = createSuccessResponse({
    message: 'Hello from Express.js API',
    date: formatDate(new Date())
  });
  res.json(response);
});

// Start server
app.listen(port, () => {
  console.log(`Express API listening at http://localhost:${port}`);
});
