const ServerError = require('../utils/ServerError')
const conn = require('../services/db')

exports.getAllSharks = (_, res, next) => {
  conn.query("SELECT * FROM shark", (err, data, _) => {
    if (err) return next(new ServerError(err))
    res.status(200).json({
      status: 'success',
      length: data?.length,
      data: data
    })
  })
}

exports.getAllTankShark = (req, res, next) => {
  conn.query(`SELECT * FROM shark WHERE tankID = ${req.params.id}`, (err, data, _) => {
    if (err) return next(new ServerError(err))
    res.status(200).json({
      status: 'success',
      length: data?.length,
      data: data
    })
  })
}

exports.updateOneShark = (req, res, next) => {
  conn.query(`UPDATE shark SET tankID = ${req.body.tankID} WHERE id = ${req.params.id}`,
    (err, data, _) => {
      if (err) return next(new ServerError(err))
      res.status(200).json({ msg: "OK" })
    }
  )
}
