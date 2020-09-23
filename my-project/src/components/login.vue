<template>
  <div class="login-form">
      <h2>  Member Login  </h2>
         <div class="form-group">
             
          <textBoxComponent :inputtype="'text'" :userplaceholder="'Username'" :faicon="'fa fa-user'" v-on:datavalue="getemailvlaue" ></textBoxComponent>
           <span v-show="errors !=null " class="alert">{{errors}}</span>
          </div>
           <div class="form-group">
          <textBoxComponent :inputtype="'password'" :userplaceholder="'Password'" :faicon="'fa fa-lock'" v-on:datavalue="getpassvalue"></textBoxComponent>
       <span v-show="errorpass !=null " class="alert">{{errorpass}}</span>
        </div>
         
        <div class=" checkboxform"><checkBoxComponent :textvalue="'Remember me'"></checkBoxComponent></div>
        <a class="link" href="#">Forgot password?</a>
         
         
     <button type="button" class="log-btn" @click=" checkForm" >Log in</button>
  </div>
</template>

<script>
import textBoxComponent from "./components/textBoxComponent";
import checkBoxComponent from "./components/checkBoxComponent";
import apiservic from "../service/apiservic";

export default {
       
     name: 'login',
         data() {
            return {
               errorpass:null,
                errors: null,
                email:null,
                password:null,
               
          }
      },
        components: {
            textBoxComponent, checkBoxComponent
        },
        methods:{
            checkForm: function (e) {
        this.errors = null;
        this.errorpass=null;
      if (!this.email) {
        this.errors='Username required.';
      } else if (!this.validEmail(this.email)) {
        this.errors='Valid Username required.';
      }
      if(!this.password){
          this.errorpass='Password required'
      }

      if (this.errors == null && this.errorpass==null) {
         
        this.loginapi();

      }

      e.preventDefault();
    },
        validEmail: function (email) {
        var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
        },
        getemailvlaue(val){
            this.email=val;
            //alert(val);

        },
        getpassvalue(val){
              this.password=val;
        },
         async loginapi(){
            let vm =this
            let data={
                email:vm.email,
                password:vm.password
            }
         await apiservic.loginapi(data).then(function (resJson) {
             
            alert('login SUCCESS')
            
           
          }).catch(function (err) {
           alert( "User Not Found")
            
          })
            
  
        },
     }

}
</script>

<style>

*{
  box-sizing:border-box;
  -moz-box-sizing:border-box;
  -webkit-box-sizing:border-box;
  font-family:arial;
}
/* body{background:#FF9000;} */
h1{
  color:#ccc;
  /* text-align:center; */
   
  font-size: 50px;
}

.login-form{
  width:350px;
  padding:40px 30px;
  background:#eee;
  margin:auto;
  position: absolute;
  left: 0;
  right: 0;
  top:50%;
  transform: translateY(-50%);
}
.form-group{
  position: relative;
  margin-bottom:15px;
}
.form-control{
  position: relative;
  width:100%;
  height:50px;
  border:none;
  padding:5px 7px 5px 38px;
  background:#fff;
  color:#666;
  border:2px solid #ddd;
  border-radius:4px;
   
}
.form-group .fa{
  position: absolute;
  left:14px;
  top:15px;
  color:#FF9000;
}
.checkboxform{
    text-align: left;
    float: left;
}
.form-group .check{
font-size: 12px;
color:#666;
}
.form-group label{
font-size: 12px;
color:#666;
}

.log-status.wrong-entry .form-control, .wrong-entry .form-control + .fa {
  border-color: #ed1c24;
  color: #ed1c24;
}
.log-btn{
  background:#FF9000;
  display:inline-block;
  width:100%;
  font-size:16px;
  height:50px;
  color:#fff;
  text-decoration:none;
  border:none;
 
}
.link{
  text-decoration:none;
  color:#666;
  float:right;
  font-size:12px;
  margin-bottom:15px;

}
.alert{
 
  font-size:12px;
  color:#f00;
 
}
 

</style>