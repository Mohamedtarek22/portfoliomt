const router= require("express").Router()
const nodemailer =require("nodemailer")


router.post('/contact',(req,res)=>{
    let data =req.body
    if (data.name.length===0||data.email.length ===0 || data.message.length===0){
        console.log("no")
        return res.json({
					msg: "Please Fill All The Fields",
				});
                
    }

    
        let smtpTransporter = nodemailer.createTransport({
					service: "Gmail",
					port: 465,
					auth: {
						user: "medo.sakr121@gmail.com",
						pass: "wetwwezykvbxnfxb",
					},
				});
        let mailOptions = {
					from: data.email,
					to: "medo.sakr121@gmail.com",
					subject: `Message From ${data.name}`,
					html: `
                <h3> Informations</h3>
                <ul>
                <li>Name: ${data.name} </li>
                <li>Email: ${data.email} </li>
                
                </ul>
                <h3>Message</h3>
                <p>${data.message} </p>`
				};
                smtpTransporter.sendMail(mailOptions,(error)=>{
                    try{
                         res.status(200).json({msg: "Thank you for contacting Me 😍"})
                         console.log("yes")
                    }catch(error){
                        if (error) return res.status(500).json({msg:"there is server error"})
                    }
                }
            )
    


})
module.exports=router