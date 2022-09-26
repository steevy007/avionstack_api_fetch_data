const router=require('express').Router()
const axios=require('axios').default
const API_KEY_ENV=process.env.API_KEY

router.get('/',async(req,res)=>{
    let data_flights=new Array()
    try{
        await axios.get(`http://api.aviationstack.com/v1/flights?access_key=${API_KEY_ENV}`)
                    .then((reponse)=>{
                        data_flights=reponse.data.data
                        let airpot_haiti=new Array()
                        data_flights.map((value,index)=>{
                            if(value.departure.icao==='ZSPD' || value.departure.icao==='MTCH'){
                                console.log(value)
                            }
                        })

                        return res.json({count_value:data_flights.length,data:data_flights})
                        
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