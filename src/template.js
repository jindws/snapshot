module.exports =  ({ body, title }) => {
    return `<!DOCTYPE html>
      <html>
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <meta http-equiv="X-UA-Compatible" content="ie=edge">
            <title>${title}</title>
        </head>

        <body>
          <div id="root">${body}</div>
          <script type="text/javascript" src="../dist/css.js" charset="utf-8"></script>
          <script type="text/javascript" src="../dist/app.js" charset="utf-8"></script>
        </body>
      </html>`
};
