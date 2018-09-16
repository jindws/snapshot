const React = require('react')
const ReactDOMServer = require('react-dom/server')
const App = require('../../app/App.js')
const template = require('../template').default

const Index = async (ctx) =>{
        const isMobile = true;
        const initialState = { isMobile };
        const body = ReactDOMServer.renderToString(<App.default {...initialState}/>);

        ctx.body = template({
          body,
          title: 'Hello World from the server',
          initialState: JSON.stringify(initialState)
        })
}

module.exports = {
    Index,
}
