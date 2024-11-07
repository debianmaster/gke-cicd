const server = Bun.serve({
    port: 8081,
    fetch(req) {
      return new Response("App 2 ");
    },
  });
  
  console.log(`Listening on http://localhost:${server.port} ...`);