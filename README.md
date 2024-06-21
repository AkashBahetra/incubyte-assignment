### Scripts

#### `npm run start:dev`

Starts the application in development using `nodemon` and `ts-node` to do hot reloading.

#### `npm run start`

Starts the app in production by first building the project with `npm run build`, and then executing the compiled JavaScript at `build/index.js`.

#### `npm run build`

Builds the app at `build`, cleaning the folder first.

#### `npm run test`

Runs the `jest` tests once.

#### `npm run test:dev`

Run the `jest` tests in watch mode, waiting for file changes.

#### `npm run prettier-format`

Format your code.

#### `npm run prettier-watch`

Format your code in watch mode, waiting for file changes.

### Incubyte assignment requirements :

1. Create a simple String calculator with a method signature
2. Allow the add method to handle any amount of numbers.
3. Allow the add method to handle new lines between numbers (instead of commas).
4. Support different delimiters
5. Calling add with a negative number will throw an exception: "negative numbers not allowed <negative_number>".