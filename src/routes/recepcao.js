const router = require("express").Router()
const db = require("../config/database")

const col_name = "Recepcao"

router.post("/", async (req, res) => {
    const recepcao = req.body;
    const result = await db.collection(col_name).save(recepcao)
    res.send(result)
})

router.get("/", async (req, res) => {
    const result = await db.query(`FOR r IN ${col_name} RETURN r`)
    const recepcoes = await result.all()
    res.send(recepcoes)
})

router.get("/:id", async (req, res) => {
    const id = req.params.id
    const result = await db.query(`FOR r IN ${col_name} FILTER r._key == @id RETURN r`, { id })
    const recepcao = await result.all()
    res.send(recepcao)
})

router.put("/:id", async (req, res) => {
    const id = req.params.id
    const newRecepcao = req.body
    const result = await db.collection(col_name).update(id, newRecepcao)
    res.send(result)
})

router.delete("/:id", async (req, res) => {
    const id = req.params.id
    const result = await db.collection(col_name).remove(id)
    res.send(result)
})

module.exports = router