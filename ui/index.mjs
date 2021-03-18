import database from './../database/data.js'

const platform = globalThis.window ? 'browser' : 'console'

;( async ()  => {
    const {default: viewFactory} = await import ( `./../platforms/${platform}/index.mjs`)

    const app = new viewFactory
    app.render(database)
})()
