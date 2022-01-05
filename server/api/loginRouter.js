const loginRouter = require('express').Router()

loginRouter.get('/', async(req, res, next)=>{
    try {
        
    } catch (error) {
        console.log('error occured in google oauth link')
        next(error)
    }
})