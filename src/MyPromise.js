function Promise(fn) {
    var data = undefined, reason = undefined;
    var succallbacks = [];
    var failcallbacks = [];
    var status = "pending";
    this.then = function (fulfilled, rejected) {
        return new Promise(function(resolve,reject) {    //返回一个新的promise
            function suc(value) {   //成功
                var ret = typeof fulfilled === 'function' && fulfilled(value) || value;
                if( ret && typeof ret ['then'] == 'function'){    //判断 then中的 返回的是否是promise对象，如果是注册then方法
                    ret.then(function(value){
                        resolve(value);
                    });
                } else {
                    resolve(ret);
                }
            }
            function errback(reason) {  //失败
                reason = typeof rejected === 'function'  && rejected(reason) || reason;
                reject(reason);
            }

            if (status === 'pending') {
                succallbacks.push(suc);
                failcallbacks.push(errback);
            } else if(status === 'fulfilled'){
                suc(data);
            } else {
                errback(reason);
            }
        })

    }

    function resolve(value) {
        setTimeout(function () {   //加入延时
            status = "fulfilled";
            data = value;
            succallbacks.forEach((callback) => {
                callback(value);
            })
        }, 0)

    }

    function reject(value) {
        setTimeout(function () {
            status = "rejected";
            reason = value;
            failcallbacks.forEach((callback) => {
                callback(value);
            })

        }, 0)
    }

    fn(resolve, reject);
}

let p = new Promise((resolve, reject) => {
                setTimeout(() => {
                resolve(1);
            }, 1000)
        }) ;

p.then(data =>{
    console.log(data);
    return  new Promise((resolve,reject) => {    //then 方法返回的是一个promise对象，故执行 promise中的then注册该结果，在resolve
               setTimeout(() => { resolve(2);},1000)})
}).then(data =>{
    console.log(data);
})
