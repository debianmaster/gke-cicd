const server = Bun.serve({
    port: 8080,
    fetch(req) {
      return new Response("App 2 ");
    },
  });
  
  console.log(`Listening on http://localhost:${server.port} ...`);