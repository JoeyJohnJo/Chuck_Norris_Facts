# Chuck Norris Facts

This project is a consumer to the [Chuck Norris Facts API](https://api.chucknorris.io/).

Inside the ``backend`` folder is a Node server that interacts with the service and provides a GraphQL implementation of the API.

Inside the ``frontend`` folder is a React application that consumes the backend services for visualization.

A running version of this project can be found at [this link](https://chucknorrisfacts.pages.dev/).
Note that there might be some downtime or the application may not work correctly at certain times because of the free hosting.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

The things you need before installing the software.

* node
* npm

### Installation

A step by step guide that will tell you how to get the development environment up and running.

Make sure you have node and npm correctly configured in your machine.

### Backend
#### Start the backend service by running the following commands on a terminal window.

```
$ cd backend
$ npm i
$ npm run dev
```

The NodeJs application should now be running on port 4000.

You can verify that the application is running by opening http://localhost:4000 in a browser.

### Frontend

Before running locally, you might want to change the ``VITE_SERVER_URL`` property, so you can use the backend running
on your machine instead of the placeholder provided in a Cloudflare tunnel.

Edit your ``/frontend/.env`` file to match the following:
```
VITE_SERVER_URL=http://localhost:4000
```

#### Start the frontend React application by running the following commands on a terminal window.

```
$ cd frontend
$ npm i
$ npm run dev
```

The React application should now be running on port 3000.

You can verify that the application is running by opening http://localhost:3000 in a browser.
