# Use an official Node.js runtime as a parent image
FROM node:17

# Set the working directory in the container
WORKDIR /app

# Copy the package.json and package-lock.json files to the working directory

COPY . .

# Install dependencies
RUN npm install --legacy-peer-deps

# Copy the rest of the application code to the working directory





# Set the command to run the web server
CMD ["npm", "start"]

# Expose port 5000 for the web server
EXPOSE 5000
