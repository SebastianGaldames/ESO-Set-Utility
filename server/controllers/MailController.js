
const nodemailer = require('nodemailer');

const postMail = async (req, res, next) => {
    try {
        let data = req.body

        let seoMailData = {
            user: 'EsoSetUtility@gmail.com',
            pass: 'SepasaConstru'
        }

        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: seoMailData
        });

        let text = `
            hola ${data.Nombre} te has suscrito a Eso Set Utility,
            se te informara de cualquier informacion o cambio dentro de la pagina
        `
        
        var mailOptions = {
            from: seoMailData.user,
            to: data.CorreoContacto,
            subject: 'Suscripcion a Eso Set Utility',
            text: text,
        };
        
        transporter.sendMail(mailOptions, function(error, info){
            if (error) {
                res.status(500).send({
                    message: 'Ocurrio un error',
                })
            } else {
                res.status(200).send("Enviado!")
                console.log('Email sent: ' + info.response);
            }
        });
    } catch (e) {
        res.status(500).send({
            message: 'Ocurrio un error',
        })
        next(e)
    }
  }

module.exports = { postMail }
