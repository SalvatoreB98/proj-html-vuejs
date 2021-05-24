window.addEventListener("load",()=>
{
    const vue = new Vue({
        el: '#root',
        data: {
            navLinks: [
                {
                    title:"Home",
                    link:"#home"
                },
                {
                    title:"Rates",
                    link:"#"
                },
                {
                    title:"Testimonials",
                    link:"#"
                },
                {
                    title:"FAQ  ",
                    link:"#"
                },
                {
                    title:"Blog",
                    link:"#"
                },
                {
                    title:"Contact",
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
        },
        methods: {
    
        },
        computed:{
    
        },
        mounted(){
    
        },
    })
})
