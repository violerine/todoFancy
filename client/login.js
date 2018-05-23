var login = new Vue({
    el: '#login',
    created:function(){
        console.log("masuk gaa",localStorage.getItem('userId'))

    },
    data:{
        username:'',
        password:'',
    },
    methods:{
        login(){
            axios.post('http://localhost:8000/login',
            {
                username:this.username, 
                password:this.password
            })
            .then(userlogged=>{
                console.log(userlogged)
                alert("successfully logged in")
                window.location="index.html"
                console.log("dataID",userlogged.data.id)
                localStorage.setItem('token',userlogged.data.token)
                localStorage.setItem('userId',userlogged.data.id)
                localStorage.setItem('userName',userlogged.data.name)
                
            })
            .catch(err=>{
                return alert("maaf terjadi kesalahan")
                console.log(err)
            })
        }
    }

})