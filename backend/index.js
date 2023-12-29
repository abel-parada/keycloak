import { PORT } from './utils/config.js';
import {info} from './utils/logger.js';
import express from 'express';

import documents from './Routes/documents.js'

const app = express()

app.listen(PORT, () => {
    info(`Server running on port ${PORT}`);
  });

app.use("/api", documents)