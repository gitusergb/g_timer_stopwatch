const StrConverter=(str)=>{
    let ss=+str.ss;
    let min=+str.mm*60;
    let hh=+str.hh*60*60;
  return ss+min+hh;
  }
  export default StrConverter;