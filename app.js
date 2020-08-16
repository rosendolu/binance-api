const express = require('express')
const { createProxyMiddleware } = require('http-proxy-middleware')
const targetURl = 'https://fapi.binance.com'

const app = express()
app.use(
	'/fapi',
	createProxyMiddleware({
		target: targetURl,
		changeOrigin: true,
	})
)
app.listen(3000)

// http://localhost:3000/api/foo/bar -> http://www.example.org/api/foo/bar
