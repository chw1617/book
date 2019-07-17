import {HTTP} from "../util/http.js"
class classicModule extends HTTP {
    
    getdata(callback){
        this.request({
            url:"/classic/latest",
            success:(res)=>{
                callback(res)
                
              //剥夺return能力，异步
            }
        })
    }
}

export {classicModule}