window.addEventListener("load",()=>
{
    Vue.component('todo-item', {
        template: '<li>This is a todo</li>'
      })
      
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
                    link:"#testimonials"
                },
                {
                   name:"FAQ  ",
                    link:"#"
                },
                {
                   name:"Blog",
                    link:"#blog"
                },
                {
                   name:"Contact",
                    link:"#contact"
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
            ],
            activeLink: 0,
            animationHero: '',
            isMenuOpen : false
        },
        methods: {
            setActiveLink(index){
                this.activeLink = index;
            },
            setAnimation(){
                setTimeout(()=>{
                    this.animationHero = 'animation-hero';
                },300)
            },
            openCloseMenu(){
                this.isMenuOpen = !this.isMenuOpen;
            }
        },
        computed:{
    
        },
        mounted(){
            this.setAnimation();
        },
    })
})
