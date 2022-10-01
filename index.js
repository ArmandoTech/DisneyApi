import "dotenv/config";
import { connDb } from "./src/db.js";
import { PORT } from "./src/env/server.js";
import { server } from "./src/server.js";

// Syncing all the models at once..
connDb.sync({ force: true }).then(() => {
	server.listen(PORT, () => {
		console.log(`Server running on port: ${PORT} 😎`); // eslint-disable-line no-console
	});
});
