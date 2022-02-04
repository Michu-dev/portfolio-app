---
permalink: /index.html
---
<h1 align="center">
    Portfolio App 💼
</h1>

## About
The portfolio app implemented using [React](https://reactjs.org/), [Tailwind CSS](https://tailwindcss.com/) and [Font Awesome](https://fontawesome.com/). The main goal was just to introduce myself.

## Running the App
To run this website locally the npm package manager must be installed on your system.Then just follow the steps:
1. Clone the repo
   ```
   git clone https://github.com/Michu-dev/portfolio-app
   ```
2. Navigate into the Portfolio directory
   ```
   cd portfolio-app
   ```
3. Run this commands:
   ```
   npm install
   npm start
   ```

## Important note
In the components folder there is missing config.js file with emailjs data. You have to create it and fill in it in the following way:
```
const config = {
    service_id: 'YOUR_SERVICE_ID',
    template_id: 'YOUR_TEMPLATE_ID',
    user_id: 'YOUR_USER_ID'
};

export default config;
```
