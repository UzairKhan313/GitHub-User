# GitHub User

GitHub User is a React application that allows users to authenticate using Auth0 and search for GitHub users to view their details such as repositories, followers, following, gists, programming languages, and more. The application also uses FusionCharts library to display information in charts.

## Table of Contents

- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Technologies Used](#technologies-used)

## Features

- **Authentication:** Users can authenticate using Auth0 to access the application.
- **Search:** Users can search for GitHub users and view their details.
- **User Details:** Details include repositories, followers, following, gists, programming languages, etc.
- **Navigtaion:** User can Navigate to the login and main pages.
- **Charts:** Information is displayed using FusionCharts library to enhance data visualization.

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/github-user.git
   ```

2. Navigate to the project directory:

```bash
cd github-user

```

3. Create a .env file in the root directory and add the following environment variables:

REACT_APP_auth0Domian = "your auth0 deomain"
REACT_APP_auth0ClientId= "your auth0 client id"

- Create a .env file directly in your project’s root directory. This is the same directory where your package.json file is located. You simply create a new file, name it .env, and start defining your variables in the format REACT_APP_VariableName=VariableValue.

- Get the value of an environment variable in your ReactJS code using process.env.REACT*APP_VariableName. Here, VariableName is the name of your variable. Remember that all user-defined variables in a ReactJS project must start with REACT_APP* to be embedded in your build.

4. Install dependencies:

```bash
npm install
```

5. Run the Development Server:

```bash
npm start
```

- Create a .env file directly in your project’s root directory. This is the same directory where your package.json file is located. You simply create a new file, name it .env, and start defining your variables in the format REACT_APP_VariableName=VariableValue.

- Get the value of an environment variable in your ReactJS code using process.env.REACT*APP_VariableName. Here, VariableName is the name of your variable. Remember that all user-defined variables in a ReactJS project must start with REACT_APP* to be embedded in your build.

## Starter Project

- css provided (global styles, styled components)
- folders/files already setup
- all imports included (warnings)
- index.js for easier imports

`

## React Icons

[React Icons - Main Docs](https://react-icons.github.io/react-icons/)

```jsx
import { FiUsers, FiUserPlus } from 'react-icons/fi'
;<FiUsers className="nameOfTheClass"> </FiUsers>
```

## React Router Dom

version used - "react-router-dom": "6+",

- [react-router-dom - Main Docs](https://reactrouter.com/web/guides/quick-start)

## Gihthub API

- [Root Endpoint](https://api.github.com)
- [Get User](https://api.github.com/users/wesbos)
- [Repos](https://api.github.com/users/john-smilga/repos?per_page=100)
- [Followers](https://api.github.com/users/john-smilga/followers)
- [Rate Limit](https://api.github.com/rate_limit)

  For unauthenticated requests, the rate limit allows for up to 60 requests per hour. Unauthenticated requests are associated with the originating IP address, and not the user making requests.

## Fusion Charts

- [Fusion Charts - Main Docs](https://www.fusioncharts.com/)
- [First React Chart](https://www.fusioncharts.com/dev/getting-started/react/your-first-chart-using-react)
- [List Of Charts](https://www.fusioncharts.com/dev/chart-guide/list-of-charts)
- [Themes](https://www.fusioncharts.com/dev/themes/introduction-to-themes)

## Auth0

- [Auth0 - Main Docs](https://auth0.com/)

- Create Application
- Choose : Single Page Web Applications
- Choose : React
- Go to Settings Tab
- Copy/Paste Domain, ClientID - can be public (or use .env)
- Add Domain -
  for now http://localhost:3000 (DON'T COPY PASTE FROM URL BAR)

  - Allowed Callback URLs
  - Allowed Logout URLs
  - Allowed Web Origins
  - SAVE CHANGES!!!!!!!!!!!!!!!

- Connections
  email,social

- [React SDK Docs](https://auth0.com/docs/libraries/auth0-react)
- [REACT SDK API Docs](https://auth0.github.io/auth0-react/)
