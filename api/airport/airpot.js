const router=require('express').Router()
const axios=require('axios').default
const API_KEY_ENV=process.env.API_KEY
router.get('/',async(req,res)=>{
    let data_airpots=new Array()
    try{
        await axios.get(`http://api.aviationstack.com/v1/airports?access_key=${API_KEY_ENV}&limit=10000`)
                    .then((reponse)=>{
                        data_airpots=reponse.data.data
                        let airpot_haiti=new Array()
                        data_airpots.map((value,index)=>{
                            //console.log('value : ',  value.country_name)
                            if(value.country_name==='Haiti'){
                                airpot_haiti.push(value)
                            }
                            //all_airpot.push(value)
                        })

                        return res.json({count:data_airpots.length,data:airpot_haiti.sort()})
                        
                        //return res.status(200).json({count_value_array:data_airpots.length,data:data_airpots})
                        
                    })
                    .catch((error)=>{
                        console.error(error)
                    })
                    
        //return res.status(200).json({API_KEY:process.env.API_KEY})
    }catch(error){
        console.error(error)
    }
})

module.exports=router