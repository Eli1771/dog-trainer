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
- Launch the app with `rake start`. The Rails API will exist on port 3001, while the client server will be available on port 3000 (goto [http://localhost:3000](http://localhost:3000) if it doesn't launch automatically). Both servers are being managed simoultaneously with the foreman gem.

### `Making backend changes:`

Enter the rails console to interact with API data by running `rails s` from the `backend` directory. Dog, Skill or Note resources can be cleared and reset with `[resource].all.each {|r| r.delete}`.

### `Making frontend changes:`

If you would prefer to write in Sass over CSS, first navigate to `frontend/src` and run `sass --watch styles/input.scss:App.css` to allow styles to be mapped your page live.




This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
