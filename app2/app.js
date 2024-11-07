// Import Bun's built-in HTTP server
import { serve } from "bun";

// Start the server
serve({
  port: 8081,
  hostname: "0.0.0.0",
  fetch(req) {
    // Define the response for the root URL
    if (req.url === "/") {
      return new Response("Hello workshop 2", { status: 200 });
    }
    // Return a 404 for any other routes
    return new Response("Not Found", { status: 404 });
  },
});
