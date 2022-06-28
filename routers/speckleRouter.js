import { Router } from "express";

const router = Router()



router.get("/test", (req, res) => {
    res.send({ data: "username" })
})

router.post("/test", (req, res) => {
    console.log(req.body)
    res.send({  })
})

export default router