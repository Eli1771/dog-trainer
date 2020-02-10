### `Welcome to Attaboy!`

Attaboy! is the fitness-style app for all things dog training. The interface is simple because - at it's core - reinforcement-based dog training is simple. With this SPA you can:
- manage your pack by adding and removing dogs
- manage each dog by adding and removing skills
  - manage each skill by configuring the 'reward rate'. This is the number of times your pet must correctly execute each command before receiving reinforcement. The better they understand the skill, the less reinforcement is needed.
- keep track of your overall progress with the easy and "AI"-assisted note-taking system.

### `To Start:`

- Fork and clone this repository. Navigate to the frontend with `cd dog-trainer/fronted`.
- Run `npm install`.
- Navigate to the backend: `cd ../backend`.
- Run the following:
  - `bundle install`
  - `rails db:migrate`
  - **There is a seed file, but it's only for development purposes**


This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

### `rake start`

Run from the 'backend' directory. Runs full app with foreman in a development build.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

Client server is running on [http://localhost:3000](http://localhost:3000) and proxying requests to the Rails API on [http://localhost:3001](http://localhost:3001).
Exit with ctr-c.

### `npm start`

All npm commands run from the root directory Runs the client-side server in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

### `RAILS`

All rails processes should be run from the 'backend' directory

### `rails s`

Boot the rails server by itself on [http://localhost:3001](http://localhost:3001).

### `rails c`

Enter the rails console to interact with API data. Dog, Skill or Note resources can be cleared and reset with `[resource].all.each {|r| r.delete}`



-----------------


## Learn More
s
You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
