
const requiredError=(value)=>{
    return value.length > 0 ? false : true;
}


const checkSingle=(value,singleRule)=>{
    let error = false;
    let msg = "";
    for(let i=0;i<singleRule.length;i++){
        const ruleOpt = singleRule[i];
        switch(ruleOpt.type){
            case "required" : error = requiredError(value); break;
            case "requiredNumber" : error = value>0?false:true; break;
            default : break;
        }
        if(error==true){
            msg = ruleOpt.msg;
            break;
        }
    }
    return {error,msg};
}



const SmartValidate=(rules,data)=>{
    let errors = [];
    for (const key in data) {
        if (data.hasOwnProperty(key)) {
          const value =data[key];
          const singleRule = rules[key] ? rules[key] : [];
          const {error,msg} = checkSingle(value,singleRule);
          if(error===true){
            errors.push(msg);
          }
          //console.log(`Key: ${key}, Value: ${value}`);
        }
      }
    return errors;
}

export {
    SmartValidate
}