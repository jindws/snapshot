const React = require('react')
const ReactDOMServer = require('react-dom/server')
const App = require('../../app/App.js').default
const template = require('../template').default

const Index = async (ctx) =>{
        const body = ReactDOMServer.renderToString(<App/>);

        ctx.body = template({
          body,
          title: 'snapshot',
        })
}

module.exports = {
    Index,
}
