"use strict";(self["webpackChunkmedicstore"]=self["webpackChunkmedicstore"]||[]).push([[830],{986:function(a,s,l){l.r(s),l.d(s,{default:function(){return b}});var e=l(252);const i=a=>((0,e.dD)("data-v-aec79dba"),a=a(),(0,e.Cn)(),a),d={class:"container"},n={class:"form"},t=(0,e.uE)('<div class="logo" data-v-aec79dba><div class="logo-img" data-v-aec79dba><i class="fa-solid fa-pills top-left" data-v-aec79dba></i><i class="fa-solid fa-syringe top-right" data-v-aec79dba></i><i class="fa-solid fa-stethoscope round-left" data-v-aec79dba></i><i class="fa-solid fa-prescription-bottle-medical" data-v-aec79dba></i></div></div><h2 data-v-aec79dba>Reset Password</h2><div class="credentials" data-v-aec79dba><div class="input" data-v-aec79dba><div class="value" data-v-aec79dba><label for="email" class="input-label" data-v-aec79dba><i class="fa-solid fa-user" data-v-aec79dba></i></label><input type="email" name="email" id="email" placeholder=" " required data-v-aec79dba><label for="email" class="active" data-v-aec79dba>Email address <span data-v-aec79dba>.....</span></label></div></div><div class="input" data-v-aec79dba><div class="value" data-v-aec79dba><label for="password" class="input-label" data-v-aec79dba><i class="fa-solid fa-key" data-v-aec79dba></i></label><input type="password" name="password" id="password" placeholder=" " data-v-aec79dba><label for="password" class="active" data-v-aec79dba>Password <span data-v-aec79dba>.....</span></label></div></div><button type="submit" data-v-aec79dba>Log In</button></div>',3),o={class:"footer"},c=(0,e.Uk)(" New to "),r=i((()=>(0,e._)("span",null,[(0,e.Uk)("Medic"),(0,e._)("span",null,"Store")],-1))),u=(0,e.Uk)(" ? "),p=(0,e.Uk)("signin");function v(a,s,l,i,v,f){const m=(0,e.up)("router-link");return(0,e.wg)(),(0,e.iD)("div",d,[(0,e._)("div",n,[(0,e._)("form",null,[t,(0,e._)("div",o,[c,r,u,(0,e.Wm)(m,{to:"/account/signin",class:"link"},{default:(0,e.w5)((()=>[p])),_:1})])])])])}var f={name:"Signin"},m=l(744);const _=(0,m.Z)(f,[["render",v],["__scopeId","data-v-aec79dba"]]);var b=_},105:function(a,s,l){l.r(s),l.d(s,{default:function(){return F}});var e=l(252),i=l(963);const d=a=>((0,e.dD)("data-v-786a5568"),a=a(),(0,e.Cn)(),a),n={class:"container"},t={class:"form"},o=(0,e.uE)('<div class="logo" data-v-786a5568><div class="logo-img" data-v-786a5568><i class="fa-solid fa-pills top-left" data-v-786a5568></i><i class="fa-solid fa-syringe top-right" data-v-786a5568></i><i class="fa-solid fa-stethoscope round-left" data-v-786a5568></i><i class="fa-solid fa-prescription-bottle-medical" data-v-786a5568></i></div></div><h2 data-v-786a5568>Log in to your account</h2>',2),c={class:"credentials"},r={class:"input"},u={class:"value"},p=d((()=>(0,e._)("label",{for:"email",class:"input-label"},[(0,e._)("i",{class:"fa-solid fa-user"})],-1))),v=d((()=>(0,e._)("label",{for:"email",class:"active"},[(0,e.Uk)("Email address "),(0,e._)("span",null,".....")],-1))),f={class:"input"},m={class:"value"},_=d((()=>(0,e._)("label",{for:"password",class:"input-label"},[(0,e._)("i",{class:"fa-solid fa-key"})],-1))),b=d((()=>(0,e._)("label",{for:"password",class:"active"},[(0,e.Uk)("Password "),(0,e._)("span",null,".....")],-1))),w=d((()=>(0,e._)("button",{type:"submit"},"Log In",-1))),g={class:"footer"},y=(0,e.Uk)(" New to "),h=d((()=>(0,e._)("span",null,[(0,e.Uk)("Medic"),(0,e._)("span",null,"Store")],-1))),k=(0,e.Uk)(" ? "),U=(0,e.Uk)("signup");function C(a,s,l,d,C,P){const V=(0,e.up)("router-link");return(0,e.wg)(),(0,e.iD)("div",n,[(0,e._)("div",t,[(0,e._)("form",{onSubmit:s[2]||(s[2]=(0,i.iM)(((...a)=>d.loginFunc&&d.loginFunc(...a)),["prevent"]))},[o,(0,e._)("div",c,[(0,e._)("div",r,[(0,e._)("div",u,[p,(0,e.wy)((0,e._)("input",{type:"email",name:"email",id:"email",placeholder:" ","onUpdate:modelValue":s[0]||(s[0]=a=>d.user.email=a),required:""},null,512),[[i.nr,d.user.email]]),v])]),(0,e._)("div",f,[(0,e._)("div",m,[_,(0,e.wy)((0,e._)("input",{type:"password",name:"password",id:"password","onUpdate:modelValue":s[1]||(s[1]=a=>d.user.password=a),placeholder:" "},null,512),[[i.nr,d.user.password]]),b])]),w]),(0,e._)("div",g,[y,h,k,(0,e.Wm)(V,{to:"/account/signup",class:"link"},{default:(0,e.w5)((()=>[U])),_:1})])],32)])])}var P=l(669),V=l.n(P),S=l(262),q={name:"Signin",setup(){let a=(0,S.qj)({email:"",password:""});const s={headers:{"Content-Type":"applicaltion/json"}},l=()=>{V().post("/api/login",a,s).then((a=>a)).catch((a=>a))};return{user:a,loginFunc:l}}},D=l(744);const E=(0,D.Z)(q,[["render",C],["__scopeId","data-v-786a5568"]]);var F=E},760:function(a,s,l){l.r(s),l.d(s,{default:function(){return G}});var e=l(252),i=l(963);const d=a=>((0,e.dD)("data-v-86413658"),a=a(),(0,e.Cn)(),a),n={class:"container"},t={class:"form"},o=(0,e.uE)('<div class="logo" data-v-86413658><div class="logo-img" data-v-86413658><i class="fa-solid fa-pills top-left" data-v-86413658></i><i class="fa-solid fa-syringe top-right" data-v-86413658></i><i class="fa-solid fa-stethoscope round-left" data-v-86413658></i><i class="fa-solid fa-prescription-bottle-medical" data-v-86413658></i></div></div><h2 data-v-86413658>signup for an account</h2>',2),c={class:"credentials"},r={class:"input"},u={class:"value"},p=d((()=>(0,e._)("label",{for:"name",class:"input-label"},[(0,e._)("i",{class:"fa-solid fa-user"})],-1))),v=d((()=>(0,e._)("label",{for:"name",class:"active"},[(0,e.Uk)("Name "),(0,e._)("span",null,".....")],-1))),f={class:"input"},m={class:"value"},_=d((()=>(0,e._)("label",{for:"email",class:"input-label"},[(0,e._)("i",{class:"fa-solid fa-envelope"})],-1))),b=d((()=>(0,e._)("label",{for:"email",class:"active"},[(0,e.Uk)("Email address "),(0,e._)("span",null,".....")],-1))),w={class:"input"},g={class:"value"},y=d((()=>(0,e._)("label",{for:"address",class:"input-label"},[(0,e._)("i",{class:"fa-solid fa-house-user"})],-1))),h=d((()=>(0,e._)("label",{for:"address",class:"active"},[(0,e.Uk)("address "),(0,e._)("span",null,".....")],-1))),k={class:"input"},U={class:"value"},C=d((()=>(0,e._)("label",{for:"speciality",class:"input-label"},[(0,e._)("i",{class:"fa-solid fa-ranking-star"})],-1))),P=d((()=>(0,e._)("label",{for:"speciality",class:"active"},[(0,e.Uk)("speciality "),(0,e._)("span",null,".....")],-1))),V={class:"input"},S={class:"value"},q=d((()=>(0,e._)("label",{for:"password",class:"input-label"},[(0,e._)("i",{class:"fa-solid fa-key"})],-1))),D=d((()=>(0,e._)("label",{for:"password",class:"active"},[(0,e.Uk)("Password "),(0,e._)("span",null,".....")],-1))),E={class:"input"},F={class:"value"},I=d((()=>(0,e._)("label",{for:"confirm-password",class:"input-label"},[(0,e._)("i",{class:"fa-solid fa-key"})],-1))),j=d((()=>(0,e._)("label",{for:"confirm-password",class:"active"},[(0,e.Uk)("Confirm Password "),(0,e._)("span",null,".....")],-1))),L=d((()=>(0,e._)("button",{type:"submit"},"Log In",-1))),M={class:"footer"},N=(0,e.Uk)(" Already have an account ? "),W=(0,e.Uk)("signin");function Z(a,s,l,d,Z,T){const A=(0,e.up)("router-link");return(0,e.wg)(),(0,e.iD)("div",n,[(0,e._)("div",t,[(0,e._)("form",{onSubmit:s[6]||(s[6]=(0,i.iM)(((...a)=>d.signupFunc&&d.signupFunc(...a)),["prevent"]))},[o,(0,e._)("div",c,[(0,e._)("div",r,[(0,e._)("div",u,[p,(0,e.wy)((0,e._)("input",{type:"name",name:"name",id:"name",placeholder:" ","onUpdate:modelValue":s[0]||(s[0]=a=>d.user.name=a),required:""},null,512),[[i.nr,d.user.name]]),v])]),(0,e._)("div",f,[(0,e._)("div",m,[_,(0,e.wy)((0,e._)("input",{type:"email",name:"email",id:"email",placeholder:" ","onUpdate:modelValue":s[1]||(s[1]=a=>d.user.email=a),required:""},null,512),[[i.nr,d.user.email]]),b])]),(0,e._)("div",w,[(0,e._)("div",g,[y,(0,e.wy)((0,e._)("input",{type:"address",name:"address",id:"address",placeholder:" ","onUpdate:modelValue":s[2]||(s[2]=a=>d.user.address=a)},null,512),[[i.nr,d.user.address]]),h])]),(0,e._)("div",k,[(0,e._)("div",U,[C,(0,e.wy)((0,e._)("input",{type:"speciality",name:"speciality",id:"speciality",placeholder:" ","onUpdate:modelValue":s[3]||(s[3]=a=>d.user.speciality=a)},null,512),[[i.nr,d.user.speciality]]),P])]),(0,e._)("div",V,[(0,e._)("div",S,[q,(0,e.wy)((0,e._)("input",{type:"password",name:"password",id:"password",placeholder:" ","onUpdate:modelValue":s[4]||(s[4]=a=>d.user.password=a)},null,512),[[i.nr,d.user.password]]),D])]),(0,e._)("div",E,[(0,e._)("div",F,[I,(0,e.wy)((0,e._)("input",{type:"password",name:"password",id:"confirm-password",placeholder:" ","onUpdate:modelValue":s[5]||(s[5]=a=>d.user.confirmPassword=a)},null,512),[[i.nr,d.user.confirmPassword]]),j])]),L]),(0,e._)("div",M,[N,(0,e.Wm)(A,{to:"/account/signin",class:"link"},{default:(0,e.w5)((()=>[W])),_:1})])],32)])])}var T=l(669),A=l.n(T),R=l(262),x={name:"Signin",setup(){let a=(0,R.qj)({name:"",email:"",password:"",confirmPassword:"",address:"",speciality:""});const s={headers:{"Content-Type":"applicaltion/json"}},l=()=>{A().post("/api/signup",a,s).then((a=>a)).catch((a=>a))};return{user:a,signupFunc:l}}},z=l(744);const B=(0,z.Z)(x,[["render",Z],["__scopeId","data-v-86413658"]]);var G=B}}]);
//# sourceMappingURL=signup.9fb3de0f.js.map