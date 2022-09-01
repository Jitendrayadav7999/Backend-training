const axios = require("axios")

const getMemes = async function (req, res) {
    try {
        let result = await axios.get("https://api.imgflip.com/get_memes")
        let data = result.data
        res.status(200).send({ data: data })

    } catch (error) {
        console.log(error)
        res.status(500).send({ msg: error.message })
    }

}

const createMemes = async function(req, res){
    try {
        let id = req.query.template_id
        let test =req.query.text0
        let test1 =req.query.text1
        let username =req.query.username
        let password = req.query.password
        let options = {
          method: "post",
          url :`https://api.imgflip.com/caption_image?template_id=${id}&text0=${test}&test1=${test1}&username=${username}&password=${password}`
        }
        let result = await axios(options)
        res.status(200).send({data:result.data})
    } catch (error) {
        console.log(error)
        res.status(500).send({ msg: error.message })
    }
}

module.exports.getMemes = getMemes
module.exports.createMemes = createMemes