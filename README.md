
# Google timer_stopwatch React App

### Logo:
 <!-- ![Project Logo/Icon](public/logo.png)  -->

  <a href="#"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQaUbe5RQzV35g3v9QK60PZ92HJzn6ethX35Q&usqp=CAU" />
    </a>
  
---

## Deployment
<!-- 
[![Netlify Status](https://api.netlify.com/api/v1/badges/YOUR_NETLIFY_SITE_ID/deploy-status)](https://app.netlify.com/sites/YOUR_NETLIFY_SITE_ID) -->

Check out the deployed version of this project on [Netlify](https://tiny-florentine-d15ffe.netlify.app/).

---


### Stopwatch : 
![Screenshot](https://i.ibb.co/8rqDH6S/stopw.png)
### Timer : 
![Screenshot](https://i.ibb.co/nj3CdSr/timer.png)

## Table of Contents
- [Introduction](#introduction)
- [Learning Objectives](#learning-objectives)
- [Final Goal](#final-goal)
- [Minimum Viable Product (MVP)](#minimum-viable-product)
- [Stretch Goals](#stretch-goals)
- [Project Structure](#project-structure)
- [Coding Guidelines](#coding-guidelines)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

## Introduction

Welcome to the `timer_stopwatch` React App! This project aims to create a clone of the Google countdown timer and stopwatch, focusing on fundamental React concepts and practices.

### Learning Objectives

- Using listeners in React.
- Modifying state using `setInterval`.
- Utilizing lifecycle methods.
- Conditional rendering with if-else or `&&`.

### Final Goal

The goal is to implement a fully functional stopwatch and timer, mimicking the Google timer functionality.

### Minimum Viable Product

Focus on the following functionalities for the MVP:

- Stopwatch with start, stop, and reset buttons.
- Display of seconds and milliseconds.
- Timer allowing manual entry of time in seconds.
- Start, stop, and reset options for the timer.
- Toggle between timer and stopwatch using tabs.
- Prevent incrementing twice if clicked already.

### Stretch Goals

If you complete the MVP, consider adding the following features:

- Display minutes and hours for both stopwatch and timer.
- Allow input of time in seconds, minutes, and hours for the timer.
- Maintain the state of time between components.

## Project Structure

The project adheres to specific guidelines to ensure consistency and cleanliness:

1. All components must be in separate files within a `Components` folder.
2. CSS can be shared between components and should be placed in the `Components` folder.
3. Static files like images must be in the `public` folder.
4. Component files should have the same name as the component (e.g., `App.js`).

## Coding Guidelines

Follow these coding guidelines for a disciplined approach:

1. Indent your code correctly.
2. Stick to one naming style.
3. Call `ReactDOM.render` only once in `index.js`.

## Author

- Gauri Bidwai (fw27_265)

## Thank you!

Thank you for checking out the `timer_stopwatch` React App. Feel free to contribute, report issues, or provide feedback!




<!-- <p>

- You can finish this question over the week, if you are not able to solve in the same day

- Make a react app with the name timer_stopwatch

- Make sure to include this MarkDown file in your submission with checked boxes for all parts you have completed.

</p>

<p>

1) NOTE: Follow the instructions carefully and follow coding discipline

2) NOTE2: Indent your code correctly and stick to one kind of naming style

3) NOTE3: All components must be in different files and within a Components folder. CSS can be shared between components if desired. CSS modules must also be in your components folder.

4) NOTE4: All static files like images must be in the public folder.

5) NOTE5: All components files must have the same name as their compoenents. Eg: App must be in App.js.

6) NOTE6: You must only call ReactDOM.render once in your index.js file!


</p>

### Within the react App, delete all files from the src folder and create your own files!

#### ***Learning objectives*** :
- Using listeners in react.
- Modifying state using `setInterval`
- Using lifecycle methods. ( you can check in componentDidUpdate if seconds are 0, and initiate a stop, write a cleanup with componentWillUnmount )
- If else rendering or using && to render based on condition

### ***Final Goal*** :
- The goal of this project should be to create a clone of the Google countdown timer and stopwatch.
- You can see this by either searching google for `stopwatch`
- Or visiting this ```link https://www.google.com/search?q=stopwatch```.

### Minimum Viable Product
- MVP or minimum viable product is the least amount of functionality you must have done by the end of the day.

###  No need to focus on styles for the MVP.
 You must have implemented a stopwatch that lets you start, stop and reset.
 - The stopwatch must display the number of seconds and milliseconds.
 - The timer must allow a user to manually enter the time using an inputbox, in seconds.
 - The user should be able to start, stop and reset the timer.
 - The user should be able to toggle between the timer and the stopwatch using tabs just like the google timer.
 - The timer should not increment twice if its already clicked


###  ***Stretch Goals***
If you are able to complete the MVP in time, implement this additional functionality. This must be completed by the end of the next day.

 - The stopwatch must also display the minutes and hours.

 - The timer must also display the minutes and hours.

 - The timer must allow the user to input the time in seconds minutes and hours just like the Google timer.

- if you want the state of time to be maintained then either lift the state up to the parent component Or use CSS to hide the other component

## 🗒️ Author

- Gauri Bidwai(fw27_265)

## Thank you!
 -->


<!-- # Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify) -->
