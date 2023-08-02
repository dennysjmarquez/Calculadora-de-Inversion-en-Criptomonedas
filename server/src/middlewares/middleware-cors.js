const cors = require('cors')
const middlewareCors = (options = {}) => {
	const allowedOrigins = ['http://127.0.0.1:5173', 'http://localhost:5173']
	const corsOptions = {
		origin: function (origin, callback) {
			if (allowedOrigins.indexOf(origin) !== -1 || !origin) {
				callback(null, true)
			} else {
				callback(new Error('Not allowed by CORS'))
			}
		},
		...options
	}

	return cors(corsOptions)
}

module.exports = middlewareCors
