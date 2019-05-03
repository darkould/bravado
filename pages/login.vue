    <template>
        <div>
           <b-container id="login">
            <p id="mainheader">BRAVADO</p>
            <nuxt-link to="/">Homepage</nuxt-link>
            <b-col md="6">
            <b-form @submit="OnSubmit" v-if="show">
              <p id="header" class="text-center">LOGIN</p>
               
                <b-form-group id="input-group-1" label="Mail Address:" label-for="email">
                     <b-form-input
                     id="input-email-login"
                     v-model="login.email"
                     type="text" 
                     required
                  placeholder="Enter Your Mail Address"
                     ></b-form-input>
                </b-form-group>

    
          <b-form-group id="input-group-2" label="Password:" label-for="input-pw1">
                <b-form-input
                  id="input-pw"
                  v-model="login.password"
                  type="password"
                  required
                  placeholder="Enter Password"
                ></b-form-input>
              </b-form-group>

                   <b-button type="submit" variant="primary">Login</b-button>
                   <router-link to="/pages/register.vue" >
                   <b-button type="button" variant="outline-info">Register</b-button>
                   </router-link>
                   
              
              </b-form>
                </b-col>
                
            </b-container>
            </div>
    
    </template>
    <script>
    export default {
      data () {
        return {
          login:{
            email: '',
            password: '',
            submitted: false
          },
           show: true
        }
    },
    computed: {
        //...mapState('account', ['status'])
    },
    
    methods: {
        //...mapActions('account', ['login', 'logout']),
        handleSubmit (e) {
            this.submitted = true;
            const { email, password } = this;
            if (email && password) {
                this.login({ email, password })
            }
        }
    }
};
    
    </script>
    
    <style>
#mainheader {
  font-size: 50px;
  text-align: center;
  background-color: lightblue;
  color: black;
  padding: 40px;
}
#header {
  font-size: 30px;
  text-align: center;

  color: black;
  padding: 10px;
}
</style>