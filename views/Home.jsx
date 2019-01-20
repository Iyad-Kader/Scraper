const React = require('react');

const Home = props =>
  <html lang='en'>
    <head>
      <meta charSet='UTF-8' />
      <meta name='viewport' content='width=device-width, initial-scale=1.0' />
      <meta httpEquiv='X-UA-Compatible' content='ie=edge' />
      <title>StackScraper</title>

      <link rel='stylesheet' href='./css/style.css' />
    </head>
    <body>
      <h1>Stack saver app</h1>
      <button id='scrapeData'>Scrape</button>
      {
        props.stacks.map(stack => (
          <div>
            <a href={`http://stackoverflow.com${stack.url}`}>{stack.title}</a>\
            <br />
            <button id={stack._id}>
            Save
            </button>
          </div>
        ))
      }
      <script src='./js/app.js' />
    </body>
  </html>;

module.exports = Home;
