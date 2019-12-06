//作业1
function sayInfo(age) {
    console.log("name:"+this.name)
    console.log("age:"+age)
  }
  var user = {
    name: "zzx"
  }
Function.prototype.call2=function(target){
let args =[]
target.fn = this
for(let i=1;i<arguments.length;i++){
    args.push(arguments[i])
}target.fn(args.join(' '));
  }
  sayInfo.call2(user,100)

  //作业2
  //防抖
  function debounce(func,wait,immediate) {
    let timeout;

    return function () {
        let context = this;
        let args = arguments;

        if (timeout) clearTimeout(timeout);
        if (immediate) {
            var callNow = !timeout;
            timeout = setTimeout(() => {
                timeout = null;
            }, wait)
            if (callNow) func.apply(context, args)
        }
        else {
            timeout = setTimeout(function(){
                func.apply(context, args)
            }, wait);
        }
    }
}
//节流
function throttle(func, wait ,type) {
    if(type===1){
        var previous = 0;
    }else if(type===2){
        var timeout;
    }
    return function() {
        let context = this;
        let args = arguments;
        if(type===1){
            let now = Date.now();
            if (now - previous > wait) {
                func.apply(context, args);
                previous = now;
            }
        }else if(type===2){
            if (!timeout) {
                timeout = setTimeout(() => {
                    timeout = null;
                    func.apply(context, args)
                }, wait)
            }
        }
    }
}