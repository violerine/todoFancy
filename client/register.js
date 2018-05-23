var register = new Vue({
    el: '#register',
    data:{
        name:'',
        username:'',
        password:'',
    },
    methods:{
        register(){
            axios.post('http://35.197.144.182/register',
            {
                name:this.name, 
                username:this.username, 
                password:this.password})

            .then(user=>{
                alert("successfully create new account")
                window.location="login.html"
                console.log(user)
            })
            .catch(err=>{
                alert("maaf terjadi kesalahan")
                console.log(err)
            })
        }
    }

})