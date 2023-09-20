import figlet from "figlet";
import { foo, bar } from "data";
import { Hono } from 'hono'
import { logger } from 'hono/logger'


const app = new Hono()

app.use('*', logger())
.get('/', (c) => {
    const msg = figlet.textSync(foo+bar)
    return c.text(msg)
})
.get('/home', (c) => {
    return c.json({name: 'hok', age: 13})
})

export default app
