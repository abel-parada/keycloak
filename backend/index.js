import { PORT } from './utils/config.js';
import {info} from './utils/logger.js';
import express from 'express';

const app = express()

app.listen(PORT, () => {
    info(`Server running on port ${PORT}`);
  });