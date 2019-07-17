//导入配置对象
import {config} from "../config.js";
//错误信息提示,由于多次需要使用错误信息，就需要封装一个函数
const errTip = {
    1:"出现一个错误",
    1005:"appKey不存在",
    3000:"期刊不存在"
}



class HTTP {
    //封装一个请求方法
    request(params){
        wx.request({
            url:config.api_basc_url+params.url,
            method:params.method,
            data:params.data,
            header:{
                "content-type":"application/json",
                appKey:config.appKey
            },
            success:(res)=>{
                let code = res.statusCode.toString();
                //startsWith
                // endsWith
                //let startStr = code.charAt(0);
                if(code.startsWith(2)){
                    params.success(res.data)
                }else{
                   let error_code = res.data.error_code;
                   this.showErr(error_code)
                }

            },
            fail:(err)=>{
                this.showErr(1)
            }
        })
    }
    showErr(statusCode){
        wx.showToast({
            title:errTip[statusCode],
            icon:"none",
            duration:2000
        })
    }
}

export {HTTP};

