const express = require('express')
const router = express.Router()
const Tip = require('@/models/tipModel.js')


router.get('/tip', (req,res) => {
    res.render('articles/new')
})
// Getting all
router.get('/tip', async (req, res) => {
    try {
        const tip = await Tip.find()
        res.json(tip)
    } catch (err) {
        res.status(500).json({ message: err.message })
    }
})

// Getting One
router.get('/tip', getTip, (req, res) => {
    res.json(res.tip)
})

// Creating one
router.post('/tip', async (req, res) => {
    const tip = new Tip({
        description: req.body.descrTip,
        keyword: req.body.keywordTip,
        email: req.body.emailTip,
        firstname: req.body.firstnameTip,
        lastname: req.body.lastnameTip
    })
    try{
       await tip.save();
    }catch (e) {
        res.render('/tip', {tip:tip})

    }

})

// Updating One
// router.patch('/:id', getSubscriber, async (req, res) => {
//     if (req.body.name != null) {
//         res.subscriber.name = req.body.name
//     }
//     if (req.body.subscribedToChannel != null) {
//         res.subscriber.subscribedToChannel = req.body.subscribedToChannel
//     }
//     try {
//         const updatedSubscriber = await res.subscriber.save()
//         res.json(updatedSubscriber)
//     } catch (err) {
//         res.status(400).json({ message: err.message })
//     }
// })

// Deleting One
// router.delete('/:id', getSubscriber, async (req, res) => {
//     try {
//         await res.subscriber.remove()
//         res.json({ message: 'Deleted Subscriber' })
//     } catch (err) {
//         res.status(500).json({ message: err.message })
//     }
// })

// async function getSubscriber(req, res, next) {
//     let subscriber
//     try {
//         subscriber = await Subscriber.findById(req.params.id)
//         if (subscriber == null) {
//             return res.status(404).json({ message: 'Cannot find subscriber' })
//         }
//     } catch (err) {
//         return res.status(500).json({ message: err.message })
//     }
//
//     res.subscriber = subscriber
//     next()
// }

module.exports = router