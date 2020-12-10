/**
 @file template per sito vetrina di una catena di barber shops.

 @author Giuseppe Perna <giuseppeperna.cg@gmail.com>
 */

const date = new Date();
let currentYear = date.getFullYear();

 //Init Vue Object
 const barberShop = new Vue({
     el:"#barberShop",
     data: {
        currentYear,
        contacts:{
            name:"Avada Barbers",
            street:"123 New York Street",
            city:"New York City",
            email:"info@yourwebsite.com",
            telephone:"+1 (555) 555-1212",
        },
        headerIcons:[
            {class:"shopping-cart"}, 
            {class:"bars"}          
        ],
        footerLinks: [
            {name:"ThemeFusion", url:"https://theme-fusion.com/"},
            {name:"Wordpress", url:"https://it.wordpress.com/"},
        ],
        socials:[
            {icon:"facebook-f", url:"https://it-it.facebook.com/"},
            {icon:"twitter", url:"https://twitter.com/login?lang=it"},
            {icon:"youtube", url:"https://www.youtube.com/"},
            {icon:"instagram", url:"https://www.instagram.com/"},
        ],
        ctaBtn: {
            hero:"learn more",
            award:"meet your new barber",
            services:"read about our services",
            products:"shop our product range",
            featuredProduct:"buy now",
            blog:"read more from our blog",
            shop:"shop our range now",
            appointment:"book your appointment",
        },
        services: [
        {
            image:"avadabarbers-trimcut.png",
            title:"Trim & Cut",
            text:"Avada Barbers are experts in the lickety split trim and hair cut. Quick but careful and ridiculously good looking.",
            alt:"trim-cut",
        },
        {
            image:"avadabarbers-wash.png",
            title:"Wash & Dry",
            text:"Take a seat in our fine leather chairs, lean back and let us lather you a fresh head in a luxurious fashion.",
            alt:"wash",
        },
        {
            image:"avadabarbers-beardtrim.png",
            title:"Beard Tidy",
            text:"Tame the tangles and untidy facial hairs like a gentleman with our Beard Tidy services from Avada Barbers.",
            alt:"beard-trim",
        }
        ],
        products: [
        {
            image:"brush.png",
            name:"Brush",
            price:"$15.00",
            alt:"brush"
        },
        {
            image:"scissors.png",
            name:"Scissors",
            price:"$85.00",
            alt:"scissors"
        },
        {
            image:"hot_oil.png",
            name:"Hot Oil",
            price:"$15.00",
            alt:"hot-oil",
        },
        {
            image:"straight_razor.png",
            name:"Straight Razor",
            price:"$30.00",
            alt:"straight-razor",
        },
        ],
        featuredProduct: {
            image:"shaving_butter.png",
            alt:"shaving-butter",
            name:"Shaving Butter",
            description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque laoreet enim est, vel molestie dolor ultrices ut. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        },
        reviews: [
        {
            text:"Lorem ipsum dolor sit amet, \
            consectetur adipiscing elit. Morbi mollis eleifend ante ut sagittis. Sed sodales, urna et imperdiet placerat, ex nisi aliquam orci, ac varius odio libero et arcu.",
            image:"review-1.jpg",
            alt:"review-1",
            name:"John Doe",
        },
        {
            text:"Lorem ipsum dolor sit amet, \
            consectetur adipiscing elit. Morbi mollis eleifend ante ut sagittis. Sed sodales, urna et imperdiet placerat, ex nisi aliquam orci, ac varius odio libero et arcu.",
            image:"review-2.jpg",
            alt:"review-2",
            name:"Pete Jones",
        },
        {
            text:"Lorem ipsum dolor sit amet, \
            consectetur adipiscing elit. Morbi mollis eleifend ante ut sagittis. Sed sodales, urna et imperdiet placerat, ex nisi aliquam orci, ac varius odio libero et arcu.",
            image:"review-3.jpg",
            alt:"review-3",
            name:"Mark Wilson"
        },
        ],
        blogPosts: [
        {
            image:"avadabarbers-blog-1.jpg",
            alt:"blog-1",
            title:"Avada Barbers Now Open",
            text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ut dapibus magna. Praesent semper,",
        },
        {
            image:"avadabarbers-blog-2.jpg",
            alt:"blog-2",
            title:"Choosing The Right Barber",
            text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ut dapibus magna. Praesent semper,",
        },
        {
            image:"avadabarbers-blog-3.jpg",
            alt:"blog-3",
            title:"Quick Service Guide",
            text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ut dapibus magna. Praesent semper,",
        },
        ],   
     },
     mounted() {
     },
     methods: {
         scrollTop() {
            window.scrollTo({top: 0, behavior: 'smooth'});
         },
     }
 });