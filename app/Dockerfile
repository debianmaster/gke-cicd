# Use Bun's official Alpine-based image
FROM oven/bun:canary-alpine

# Set the working directory in the container
WORKDIR /app

# Copy package.json and install dependencies (in this case, none)
COPY package.json ./
RUN bun install

# Copy the application code into the container
COPY . .

# Expose the port (matching the one used in the app)
EXPOSE 8080

# Start the Bun server
CMD ["bun", "run", "start"]
