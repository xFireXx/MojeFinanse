
const sqlite3 = require(sqlite3).verbose();

const db = new sqlite3.Database('./finanse.db', sqlite3.OPEN_READWRITE, (err));

