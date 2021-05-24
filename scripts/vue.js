window.addEventListener("load",()=>
{
    const vue = new Vue({
        el: '#root',
        data: {
            navLinks: [
                {
                   name:"Home",
                    link:"#home"
                },
                {
                   name:"Rates",
                    link:"#"
                },
                {
                   name:"Testimonials",
                    link:"#"
                },
                {
                   name:"FAQ  ",
                    link:"#"
                },
                {
                   name:"Blog",
                    link:"#"
                },
                {
                   name:"Contact",
                    link:"#"
                },
            ],
            socialList:[
                {
                    name:'facebook',
                    class:"fa fa-facebook" ,
                    link:"#"
                    
                },
                {
                    name:'twitter',
                    class:"fa fa-twitter" ,
                    link:"#"
                },
                {
                    name:'instagram',
                    class:"fa fa-instagram" ,
                    link:"#"
                },
                {
                    name:'youtube',
                    class:"fa fa-youtube-play" ,
                    link:"#"
                }
            ],
            recentPosts:[
                {
                    name: "Heading Out To College?",
                    link:"#"
                },
                {
                    name: "Moving Your Bussiness?",
                    link:"#"
                },
                {
                    name: "Outstanding Quality?",
                    link:"#"
                },
                {
                    name: "Cast of Moving?",
                    link:"#"
                },
                {
                    name: "Best Moving Tips?",
                    link:"#"
                },
            ]
        },
        methods: {
    
        },
        computed:{
    
        },
        mounted(){
    
        },
    })
})
