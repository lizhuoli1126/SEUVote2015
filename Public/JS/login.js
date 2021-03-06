/**
*登陆注册表单相关javascript
by Jason
*/

var loggedin=false;

var loginID="";

//正则表达式-----------------------------------------------------------------------------------------------------------
var reg_card=/^[\d]{9}$/;
var reg_password=/^[a-z\d]{6,18}$/i;
var reg_email=/^[\w-]+[\.]*[\w-]+[@][\w\-]{1,}([.]([\w\-]{1,})){1,3}$/;

//校内登录表单----------------------------------------------------------------------------------------------------------
var within_school_login_card=document.getElementById("within_school_login_card");
within_school_login_card.vallidation_func=function(){
    if(reg_card.test(within_school_login_card.value))
    {
        return true;
    }
    else
    {
        return false;
    }
}
within_school_login_card.error_info="一卡通号为9位数字";

var within_school_login_password=document.getElementById("within_school_login_password");
within_school_login_password.vallidation_func=function(){
    if(reg_password.test(within_school_login_password.value))
    {
        return true;
    }
    else
    {
        return false;
    }
}
within_school_login_password.error_info="密码格式为6-18位数字或小写字母";

var within_school_login_captcha=document.getElementById("within_school_login_captcha");
within_school_login_captcha.vallidation_func=function(){
    if(within_school_login_captcha.value!="")
    {
        return true;
    }
}
within_school_login_captcha.error_info="请填写验证码";

var within_school_login={
    within_school_login_card: within_school_login_card,
    within_school_login_password: within_school_login_password,
    within_school_login_captcha: within_school_login_captcha
}

var alert_within_school_login_form=$("#alert_within_school_login_form");
var alert_txt_within_school_login_form=document.getElementById("alert_txt_within_school_login_form");

var submit_within_school_login_form=$("#submit_within_school_login_form");

alert_within_school_login_form.click(function(){
    alert_within_school_login_form.slideUp();
});

submit_within_school_login_form.click(function(){
    onSubmit("within_school_login_form");
});

//校外注册表单----------------------------------------------------------------------------------------------------------
var outside_school_register_email=document.getElementById("outside_school_register_email");
outside_school_register_email.vallidation_func=function(){
    if(reg_email.test(outside_school_register_email.value))
    {
        return true;
    }
    else
    {
        return false;
    }
}
outside_school_register_email.error_info="电子邮件格式错误";

var send_email_btn=$("#send_email_btn");
send_email_btn.click(function(){
    sendEmail();
});

var outside_school_register_email_psw=document.getElementById("outside_school_register_email_psw");
outside_school_register_email_psw.vallidation_func=function(){
    if(outside_school_register_email_psw.value!="")
    {
        return true;
    }
}
outside_school_register_email_psw.error_info="请填写邮件验证码";

var outside_school_register_password=document.getElementById("outside_school_register_password");
outside_school_register_password.vallidation_func=function(){
    if(reg_password.test(outside_school_register_password.value))
    {
        return true;
    }
    else
    {
        return false;
    }
}
outside_school_register_password.error_info="密码格式为6-18位数字或小写字母";

var outside_school_register_repassword=document.getElementById("outside_school_register_repassword");
outside_school_register_repassword.vallidation_func=function(){
    if(outside_school_register_repassword.value!=outside_school_register_password.value)
    {
        return false;
    }
    else
    {
        return true;
    }
}
outside_school_register_repassword.error_info="密码重复与密码输入不同";

var outside_school_register={
    outside_school_register_email: outside_school_register_email,
    outside_school_register_email_psw: outside_school_register_email_psw,
    outside_school_register_password: outside_school_register_password,
    outside_school_register_repassword: outside_school_register_repassword
}

var alert_outside_school_register_form=$("#alert_outside_school_register_form");
var alert_txt_outside_school_register_form=document.getElementById("alert_txt_outside_school_register_form");

var submit_outside_school_register=$("#submit_outside_school_register");

alert_outside_school_register_form.click(function(){
    alert_outside_school_register_form.slideUp();
});

submit_outside_school_register.click(function(){
    onSubmit("outside_school_register_form");
});

//校外登录表单----------------------------------------------------------------------------------------------------------
var outside_school_login_email=document.getElementById("outside_school_login_email");
outside_school_login_email.vallidation_func=function(){
    if(reg_email.test(outside_school_login_email.value))
    {
        return true;
    }
    else
    {
        return false;
    }
}
outside_school_login_email.error_info="电子邮件格式错误";

var outside_school_login_password=document.getElementById("outside_school_login_password");
outside_school_login_password.vallidation_func=function(){
    if(reg_password.test(outside_school_login_password.value))
    {
        return true;
    }
    else
    {
        return false;
    }
}
outside_school_login_password.error_info="密码格式为6-18位数字或小写字母";

var outside_school_login_captcha=document.getElementById("outside_school_login_captcha");
outside_school_login_captcha.vallidation_func=function(){
    if(outside_school_login_captcha.value!="")
    {
        return true;
    }
}
outside_school_login_captcha.error_info="请输入验证码";

var outside_school_login={
    outside_school_login_email: outside_school_login_email,
    outside_school_login_password: outside_school_login_password,
    outside_school_login_captcha: outside_school_login_captcha
}

var alert_outside_school_login_form=$("#alert_outside_school_login_form");
var alert_txt_outside_school_login_form=document.getElementById("alert_txt_outside_school_login_form");

var submit_outside_school_login=$("#submit_outside_school_login");

alert_outside_school_login_form.click(function(){
    alert_outside_school_login_form.slideUp();
});

submit_outside_school_login.click(function(){
    onSubmit("outside_school_login_form");
});

//各表单的container与标签-----------------------------------------------------------------------------------------------
var form_container=$("#form_container");

var lb_within_school_login=$("#lb_within_school_login");
var lb_outside_school_register=$("#lb_outside_school_register");
var lb_outside_school_login=$("#lb_outside_school_login");

var within_school_login_form=$("#within_school_login_form");
within_school_login_form.isShown=false;
within_school_login_form.lb=lb_within_school_login;
within_school_login_form.alt=alert_within_school_login_form;
within_school_login_form.alt.txt=alert_txt_within_school_login_form;
within_school_login_form.inputs=within_school_login;

var outside_school_register_form=$("#outside_school_register_form");
outside_school_register_form.isShown=false;
outside_school_register_form.lb=lb_outside_school_register;
outside_school_register_form.alt=alert_outside_school_register_form;
outside_school_register_form.alt.txt=alert_txt_outside_school_register_form;
outside_school_register_form.inputs=outside_school_register;

var outside_school_login_form=$("#outside_school_login_form");
outside_school_login_form.isShown=false;
outside_school_login_form.lb=lb_outside_school_login;
outside_school_login_form.alt=alert_outside_school_login_form;
outside_school_login_form.alt.txt=alert_txt_outside_school_login_form;
outside_school_login_form.inputs=outside_school_login;

//表单对象
var forms_shown={
    within_school_login_form: within_school_login_form,
    outside_school_register_form: outside_school_register_form,
    outside_school_login_form: outside_school_login_form
}

var within_school_login_captcha_display=document.getElementById("within_school_login_captcha_display");
within_school_login_captcha_display.onclick=function(){
    within_school_login_captcha_display.src='/captcha';
}
var outside_school_login_captcha_display=document.getElementById("outside_school_login_captcha_display");
outside_school_login_captcha_display.onclick=function(){
    outside_school_login_captcha_display.src='/captcha';
}

//验证码对象
var captcha={
    within_school_login_form: within_school_login_captcha_display,
    outside_school_login_form: outside_school_login_captcha_display
}

var isFormUp=false;//表单是否出现

var form_playing=false;//表单动画是否在播放

var cancle_btn=$(".cancle_btn");//取消登录按钮
cancle_btn.click(function(){
    hideLoginForm();
});

//表单标签点击事件，叫出相应表单-------------------------------------------------------------------------------------------
$("#lb_within_school_login").click(function(){
    if(!form_playing)
    {
        callupForm("within_school_login_form");
    }
});
$("#lb_outside_school_register").click(function(){
    if(!form_playing)
    {
        callupForm("outside_school_register_form");
    }
});
$("#lb_outside_school_login").click(function(){
    if(!form_playing)
    {
        callupForm("outside_school_login_form");
    }
});

//删除全部表单内容------------------------------------------------------------------------------------------------------

function cleanForm()
{
    for (fm in forms_shown)
    {
        for (input in forms_shown[fm].inputs)
        {
            forms_shown[fm].inputs[input].value="";
        }
    }
}

//叫出总表单-----------------------------------------------------------------------------------------------------------
function showLoginForm()
{
    if(!isFormUp)
    {
        form_container.slideDown(function(){
            if(!form_playing)
            {
                form_playing=true;
                forms_shown["within_school_login_form"].slideDown(function(){
                    forms_shown["within_school_login_form"].isShown=true;
                    forms_shown["within_school_login_form"].lb.addClass("active");
                    captcha["within_school_login_form"].src='/captcha';
                    isFormUp=true;
                    form_playing=false;
                });
            }
        });
    }
}

//隐藏总表单-----------------------------------------------------------------------------------------------------------
function hideLoginForm()
{
    cleanForm();
    for (form in forms_shown)
    {
        if(forms_shown[form].isShown==true)
        {
            forms_shown[form].lb.removeClass("active");
            if(!form_playing)
            {
                form_playing=true;
                forms_shown[form].slideUp(function(){
                    forms_shown[form].isShown=false;
                    form_container.slideUp(function(){
                        isFormUp=false;
                        form_playing=false;
                    });
                });
            }
            break;
        }
    }
}

//叫出某表单-----------------------------------------------------------------------------------------------------------
function callupForm(name)
{
    cleanForm();
    for (form in forms_shown)
    {
        if(forms_shown[form].isShown==true)
        {
            if(form!=name)
            {
                if(!form_playing)
                {
                    form_playing=true;
                    forms_shown[form].lb.removeClass("active");
                    forms_shown[form].slideUp(function(){
                        forms_shown[form].isShown=false;
                        forms_shown[name].slideDown(function(){
                            forms_shown[name].lb.addClass("active");
                            forms_shown[name].isShown=true;
                            if(captcha[name]!=undefined)
                            {
                                captcha[name].src='/captcha';
                            }
                            form_playing=false;
                        });
                    });
                }
                break;
            }
        }
    }
}

//触发相应表单的提醒-----------------------------------------------------------------------------------------------------
function triggerAlert(fm,txt)
{
    forms_shown[fm].alt.slideDown(function(){
        forms_shown[fm].alt.txt.innerHTML=txt;
    });
}

//发送验证邮件事件------------------------------------------------------------------------------------------------------
var send_email_btn_txt=document.getElementById("send_email_btn_txt");//发送邮件按钮的文字
var canSend=true;//是否可发送邮件，即防止用户请求邮件过于频繁
var TIME_COUNT=30;
var timeCount;//计时

function sendEmail()
{
    //alert(canSend);
    if(!canSend)
    {
        alert("请耐心等待邮件送达，若未收到邮件，请稍后重试")
    }
    else
    {
        //alert(outside_school_register_email.value);
        canSend=false;
        var emailAddress=outside_school_register_email.value;
        var emailCheck = /^([\w-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/.test(emailAddress);
        if(!emailCheck)
        {
            canSend=true;
            triggerAlert("outside_school_register_form","邮箱格式错误");
            return;
        }
        $.ajax({
            type: 'POST',
            url: '/email',
            data: {
                "address" : emailAddress
            },
            success: function(data){
                if(data.status=="1")
                {
                    send_email_btn.removeClass("ClickAble");
                    timeCount=TIME_COUNT;
                    timerCounter();
                }
                else
                {
                    canSend=true;
                    triggerAlert("outside_school_register_form","发送邮件失败");
                }
            },
            error: function(){
                canSend=true;
                triggerAlert("outside_school_register_form","系统故障");
            }
        });
    }
}

//控制邮件发送频率的计时器
function timerCounter()
{
    var timer=setTimeout("timerCounter()",1000);
    if(timeCount>0)
    {
        send_email_btn_txt.innerHTML=timeCount+"秒后可再次发送";
        timeCount--;
    }
    else
    {
        canSend=true;
        timeCount=TIME_COUNT;
        send_email_btn_txt.innerHTML="发送验证邮件";
        send_email_btn.addClass("ClickAble");
        clearTimeout(timer);
    }
}

//相应表单的登录事件-----------------------------------------------------------------------------------------------------

var login_running=false;//是否在请求登录

function onSubmit(fm)
{
    error_detected=false;
    for (input in forms_shown[fm].inputs)
    {
        var err=!forms_shown[fm].inputs[input].vallidation_func();
        if(err)
        {
            error_detected=true;
            triggerAlert(fm,forms_shown[fm].inputs[input].error_info);
        }
        if(error_detected)
        {
            break;
        }
    }
    if(!error_detected)
    {
        /*
        for (input in forms_shown[fm].inputs)
        {
            alert(forms_shown[fm].inputs[input].value);
        }
        */
        if(login_running)
        {
            alert("请等待上一操作完成");
        }
        else
        {
            login_running=true;
            triggerLoginRunning();
            switch(fm)
            {
                //校内登录---------------------------------------------------------------------------------------------
                case "within_school_login_form":
                    var post_json={
                        "card": within_school_login.within_school_login_card.value,
                        "password": within_school_login.within_school_login_password.value,
                        "captcha": within_school_login.within_school_login_captcha.value
                    }
                    $.post("/withinLogin",post_json,function(data,status){
                        if(status=="success")
                        {
                            //alert(data);
                            login_running=false;
                            triggerLoginNotRunning();
                            switch(data.status)
                            {
                                case "0":
                                    within_school_login.within_school_login_card.value='';
                                    within_school_login.within_school_login_password.value='';
                                    within_school_login.within_school_login_captcha.value='';
                                    captcha["within_school_login_form"].src='/captcha';
                                    triggerAlert("within_school_login_form","系统故障");
                                    break;
                                case "1":
                                    loginID=within_school_login.within_school_login_card.value;
                                    triggerLoginSuccess(function(){
                                        cleanForm();
                                    });
                                    break;
                                case "2":
                                    within_school_login.within_school_login_captcha.value='';
                                    captcha["within_school_login_form"].src='/captcha';
                                    triggerAlert("within_school_login_form","验证码错误");
                                    break;
                                case "3":
                                    within_school_login.within_school_login_card.value='';
                                    within_school_login.within_school_login_password.value='';
                                    within_school_login.within_school_login_captcha.value='';
                                    captcha["within_school_login_form"].src='/captcha';
                                    triggerAlert("within_school_login_form","一卡通号、密码格式错误");
                                    break;
                                case "4":
                                    within_school_login.within_school_login_card.value='';
                                    within_school_login.within_school_login_password.value='';
                                    within_school_login.within_school_login_captcha.value='';
                                    captcha["within_school_login_form"].src='/captcha';
                                    triggerAlert("within_school_login_form","错误的一卡通号或密码");
                                    break;
                            }
                        }
                    });
                    break;
                //校外注册---------------------------------------------------------------------------------------------
                case "outside_school_register_form":
                    var post_json={
                        "email": outside_school_register.outside_school_register_email.value,
                        "password": outside_school_register.outside_school_register_password.value,
                        "emailPassword": outside_school_register.outside_school_register_email_psw.value,
                    }
                    $.post("/outsideRegister",post_json,function(data,status){
                        if(status=="success")
                        {
                            //alert(data);
                            login_running=false;
                            triggerLoginNotRunning();
                            switch(data.status)
                            {
                                case "0":
                                    outside_school_register.outside_school_register_email.value='';
                                    outside_school_register.outside_school_register_email_psw.value='';
                                    outside_school_register.outside_school_register_password.value='';
                                    outside_school_register.outside_school_register_repassword.value='';
                                    triggerAlert("outside_school_register_form","系统故障");
                                    break;
                                case "1":
                                    //triggerLoginSuccess();
                                    alert("注册成功，请登录");
                                    callupForm("outside_school_login_form");
                                    cleanForm();
                                    break;
                                case "2":
                                    outside_school_register.outside_school_register_email_psw.value='';
                                    triggerAlert("outside_school_register_form","邮件验证码不匹配");
                                    break;
                                case "3":
                                    outside_school_register.outside_school_register_email.value='';
                                    outside_school_register.outside_school_register_email_psw.value='';
                                    outside_school_register.outside_school_register_password.value='';
                                    outside_school_register.outside_school_register_repassword.value='';
                                    triggerAlert("outside_school_register_form","邮箱、密码格式错误");
                                    break;
                                case "4":
                                    outside_school_register.outside_school_register_email.value='';
                                    outside_school_register.outside_school_register_email_psw.value='';
                                    outside_school_register.outside_school_register_password.value='';
                                    outside_school_register.outside_school_register_repassword.value='';
                                    triggerAlert("outside_school_register_form","此用户已存在");
                                    break;

                            }
                        }
                    });
                    break;
                //校外登录---------------------------------------------------------------------------------------------
                case "outside_school_login_form":
                    var post_json={
                        "email": outside_school_login.outside_school_login_email.value,
                        "password": outside_school_login.outside_school_login_password.value,
                        "captcha": outside_school_login.outside_school_login_captcha.value
                    }
                    $.post("/outsideLogin",post_json,function(data,status){
                        if(status=="success")
                        {
                            //alert(data);
                            login_running=false;
                            triggerLoginNotRunning();
                            switch(data.status)
                            {
                                case "0":
                                    outside_school_login.outside_school_login_email.value='';
                                    outside_school_login.outside_school_login_password.value='';
                                    outside_school_login.outside_school_login_captcha.value='';
                                    captcha["outside_school_login_form"].src='/captcha';
                                    triggerAlert("outside_school_login_form","系统故障");
                                    break;
                                case "1":
                                    loginID=outside_school_login.outside_school_login_email.value;
                                    triggerLoginSuccess(function(){
                                        cleanForm();
                                    });
                                    break;
                                case "2":
                                    outside_school_login.outside_school_login_captcha.value='';
                                    captcha["outside_school_login_form"].src='/captcha';
                                    triggerAlert("outside_school_login_form","验证码错误");
                                    break;
                                case "3":
                                    outside_school_login.outside_school_login_email.value='';
                                    outside_school_login.outside_school_login_password.value='';
                                    outside_school_login.outside_school_login_captcha.value='';
                                    captcha["outside_school_login_form"].src='/captcha';
                                    triggerAlert("outside_school_login_form","邮箱、密码格式错误");
                                    break;
                                case "4":
                                    outside_school_login.outside_school_login_email.value='';
                                    outside_school_login.outside_school_login_password.value='';
                                    outside_school_login.outside_school_login_captcha.value='';
                                    captcha["outside_school_login_form"].src='/captcha';
                                    triggerAlert("outside_school_login_form","邮箱未注册");
                                    break;
                                case "5":
                                    outside_school_login.outside_school_login_password.value='';
                                    outside_school_login.outside_school_login_captcha.value='';
                                    captcha["outside_school_login_form"].src='/captcha';
                                    triggerAlert("outside_school_login_form","密码错误");
                                    break;
                            }
                        }
                    });
                    break;
            }
        }
    }
}