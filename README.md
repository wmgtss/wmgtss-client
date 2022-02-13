# WMGTSS Client

## Description

This is the frontend component of the WMGTSS project for WM393 Assignment 2, written in [React](https://reactjs.org/) and boostrapped with [Create React App](https://create-react-app.dev/).

**This project requires a large amount of configuration. To view the live app, I strongly suggest navigating to https://wmgtss.com/ to see the production application already running.**

---

## Setup

The following steps **must** be carried out to ensure the application works correctly.

**Important:** Before running this client application, ensure the wmgtss-api project is setup and running.

### Hosts Fix

This section should already have been carried out in the setup for the wmgtss-api project.

For authentication to work, the app must be running on a 'real' domain, and not localhost. To resolve this, until a better fix can be found, edit the `/etc/hosts` file and add the following content to the bottom. On Windows this can be found at `C:\Windows\System32\Drivers\etc\hosts`.

```bash
# WMGTSS Local Development
127.0.0.1 app.com
127.0.0.1 api.app.com
```

### Environment

Create file named `.development.env` at the same directory level as this README, and enter the following line, indicating the new URL of the backend application as set in the previous section.

```
REACT_APP_API_URL=http://api.app.com:5000
BROWSER=none
```

### Installation

```bash
# install npm dependencies
$ npm install
```

---

## Running the app

Simply use the following command to start the application.

```bash
# run in development mode
$ npm start
```

Once it has fully started, navigate to http://app.com/ to see the app running.
