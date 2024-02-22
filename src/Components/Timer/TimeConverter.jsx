const TimeConverter=(time)=>{
    let ss=time%60;
    if(ss<10)ss=`0${ss}`
    let min=Math.floor(time/60);
    if(min<10)min=`0${min}`
    let hh=Math.floor(min/60);
    if(hh<10)hh=`0${hh}`  
  return {
    hh:hh,
    mm:min,
    ss:ss
  }
  }
  export default TimeConverter;