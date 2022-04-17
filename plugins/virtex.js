let fs = require('fs')

let handler = async (m) => {

let stc = fs.readFileSync('./src/virtex.js')

conn.fakeReply(m.chat, stc, '0@s.whatsapp.net', '🗿', 'status@broadcast')

}

handler.customPrefix = /^(virtex)$/i

handler.command = new RegExp

module.exports = handler
