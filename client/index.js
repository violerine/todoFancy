const todolist = new Vue({
    el:('#index'),
    created:function(){
        this.getToDo()
    },
    data:{
        todoList:[],
        title:'',
        content:'',
        userId:localStorage.getItem('userId')
    },
    methods:{
        getToDo(){
            var userid= localStorage.getItem('userId')
            if(userid==null || userid==undefined){
                window.location=('login.html')
            }
            console.log(userid)
            // axios.get(`http://localhost:8000/task/${userid}`)
            axios.get(`http://35.197.144.182/task/${userid}`)
            .then(tasks=>{
                this.todoList=tasks.data
            })
            .catch(err=>{
                console.log(err)
            })
        },
        newToDo(){
            console.log(localStorage.getItem('userId'))
            axios.post(`http://35.197.144.182/task/new`,{
                userid:this.userId,
                title:this.title,
                content:this.content
            })
            .then(post=>{
                location.reload()
                console.log(post)
            })
            .catch(err=>{
                console.log(err)
            })
        },
        deleteToDo(todo){
            var userid=localStorage.getItem('userId')
            axios.delete(`http://35.197.144.182/task/delete/${todo}`)
            .then(deleted=>{
                window.location.reload()
            })
            .catch(err=>{
                console.log(err)
            })
        },
        logOut(){
            localStorage.clear()
            window.location="login.html"
        }
    }
})