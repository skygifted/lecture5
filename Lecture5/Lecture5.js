{

    const Cars = ['BMW','TOYOTA','HAYUNDI']

    const keys = Cars.keys()
       
       let text = ''
      for(let x of keys){
      
          text += x 
            
      }
 
  
    console.log(text)
}

{



 const Cars = ['BMW','TOYOTA','HAYUNDI']

 const keys = Cars.entries()
    
    let text = ''
   for(let x of keys){
   
       text += x
         
   }

  // 0,apple



 console.log(text)
}

{


 const Cars = ['BMW','TOYOTA','HAYUNDI']


    



 console.log(Cars.includes('HAYUNDI'))
}


{

    const d = new Date('Mar 25 2022')


  console.log(d)
}

{

    const Months = ['Junaury','February','March']
    const d = new Date()
 
     const Year = d.getFullYear()
     const Month = d.getMonth()
 


  console.log(Months[Month])
}

{


      
    const Months = ['Junaury','February','March']
    const d = new Date()
 
     const Year = d.getFullYear()
     const Month = d.getMonth()
     const DateOFday = d.getDate()
     const Hours = d.getHours()
     const Minutes = d.getMinutes()
     const Seconds = d.getSeconds()
     const MilliSconds = d.getMilliseconds()
     const Day = d.getDay()
     const Time = d.getTime()

     const UTCYear = d.getUTCFullYear()
 


  console.log(UTCYear)
}

{

    const Months = ['Junaury','February','March']
    const d = new Date()
 

     const SetYear = d.setFullYear(2022)
     d.setMonth(4)
 


  console.log(d)
}

{
      
    const round =   Math.round(4.5)
    const ceil =  Math.ceil(4.1)
    const floor = Math.floor(4.1)
    const trunc = Math.trunc(4.1)
    const sign = Math.sign(0)
    const pow = Math.pow(8,2)
    const pow2 = 8 ** 2
    const sqrt = Math.sqrt(100)
    const abs = Math.abs(-4.7)
    const random = Math.random() 

console.log(random)
}

{

    const random = Math.random() 
    const floor = Math.floor(Math.random() * 18956893409)

console.log(floor)
}

{
    const Max = Math.max(30,40,70,60,100)
    const Min = Math.min(30,10,100,300)

console.log(Min)
}

{
       
    const Check = Boolean(10 > 30)

    console.log(Check)
}

{
    const isLoggin = true
    let text 
    const Items = ['Apple','Orange','Toyota']
     
     const has = Items.includes('BMW')

  if ( has ||  isLoggin){
     
      text = 'Yes'
        
  }else{

       text = 'No'
  }


console.log(text)
}