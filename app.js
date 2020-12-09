const express = require('express')
const { createProxyMiddleware } = require('http-proxy-middleware')
// const targetURl = 'http://fapi.binance.com'
const targetURl = 'http://192.168.3.202:8080/'

const app = express()

app.get('/', (req, res) => {
	res.send('success')
})
app.use(
	'/binance',
	createProxyMiddleware({
		target: targetURl,
		changeOrigin: true,
		pathRewrite: {
			// '^/binance/fapi/': '/api/new-path', // rewrite path
			'^/binance/fapi': '/fapi', // remove base path
		},
	})
)
app.listen(4000)

// http://localhost:3000/api/foo/bar -> http://www.example.org/api/foo/bar
