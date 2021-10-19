const validator={
  maskify:function(x){
    if(x<=4){
      return x
    }else{
      let mask=x.substring(0,x.length-4).replace(/[a-z\d]/gi,"#")+x.substring(x.length-4,x.length)
      return mask
    }
  },
  isValid:function(x){
    let numberArray=Array.from(x)
    numberArray.reverse()
    let doubleNumber=numberArray.map((y,index)=>index%2!==0?y*2:y)
    let cipherSum=doubleNumber.map((z)=>z>9?z=1+(z%10):parseInt(z))
    let sumArray=cipherSum.reduce((a,b)=>a+b)
    if(sumArray%10==0){
      return true
    }else{
      return false
    }
  },
}
export default validator