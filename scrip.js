let users = [
    {
        name: "The Backpackers",
        location: "Goa",
        members: 44,
        pendingmessage:2,
        bio: "Adventure seekers exploring the beaches and culture of Goa. Join us for unforgettable experiences!",
        profilepic: "https://images.unsplash.com/photo-1498661694102-0a3793edbe74?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDd8fHRyYXZlbGxlcnMlMjBpbiUyMGdyb3VwfGVufDB8fDB8fHww",
        displaypic: "https://www.himalaya-ayuryoga.de/wp-content/uploads/2021/07/Himalaya-Yoga-Ayurveda-Zentrum-Annapurna-BC12-min-scaled.jpg"
    },
    {
        name: "Mountain Trekkers",
        location: "Himalayas",
        members: 28,
        pendingmessage:2,
        bio: "Passionate hikers conquering the majestic peaks of the Himalayas. Breathtaking views and lifelong friendships await!",
        profilepic: "https://images.unsplash.com/photo-1519671845924-1fd18db430b8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTJ8fHRyYXZlbGxlcnMlMjBpbiUyMGdyb3VwfGVufDB8fDB8fHwwhttps://source.unsplash.com/random/400x400?hiker",
        displaypic: "https://static.toiimg.com/img/70499774/Master.jpg"
    },
    {
        name: "The Backpackers",
        location: "Goa",
        members: 35,
        pendingmessage:29,
        bio: "Urban adventurers discovering the hidden gems of Tokyo. From street food to neon lights, we're experiencing it all!",
        profilepic: "https://images.unsplash.com/photo-1450297428000-5f0b50540da9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTh8fHRyYXZlbGxlcnMlMjBpbiUyMGdyb3VwfGVufDB8fDB8fHwwhttps://source.unsplash.com/random/400x400?traveler",
        displaypic: "https://www.oakvillehomeleisure.ca/wp-content/uploads/2018/11/toasting-marshmallows-on-the-fire-picture-id805043236.jpg"
    },
    {
        name: "Beach Bums",
        location: "Bali",
        members: 22,
        pendingmessage:29,
        bio: "Laid-back travelers soaking up the sun in beautiful Bali. Surfing, yoga, and beachside relaxation are our daily rituals.",
        profilepic: "https://plus.unsplash.com/premium_photo-1661514089709-f8404c015643?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8ODF8fHRyYXZlbGxlcnMlMjBpbiUyMGdyb3VwfGVufDB8fDB8fHwwhttps://source.unsplash.com/random/400x400?beach",
        displaypic: "https://www.oyorooms.com/travel-guide/wp-content/uploads/2023/03/Nightlife.jpg"
    },
    {
        name: "Cultural Immersion",
        location: "Marrakech",
        members: 18,
        pendingmessage:29,
        bio: "Curious souls diving deep into the rich culture of Marrakech. Explore bustling markets, historic sites, and local traditions with us!",
        profilepic: "https://images.unsplash.com/photo-1506790144-fe3c68e4247d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTA2fHx0cmF2ZWxsZXJzJTIwaW4lMjBncm91cHxlbnwwfHwwfHx8MA%3D%3Dhttps://source.unsplash.com/random/400x400?traveler",
        displaypic: "https://www.bandsforhire.net/images/blog23/summer-party-ideas.jpg"
    }
];

 
let curr = 0;
let isAnimating = false;


function setdata(){
    document.querySelector(".prflimg img").src=users[curr].profilepic;
    document.querySelector(".navbar h5").textContent = users[curr].pendingmessage;
    document.querySelector(".name h3").textContent = users[curr].name;
    document.querySelector(".detailscontainer .location h3").textContent = users[curr].location;
    document.querySelector(".detailscontainer .people h3").textContent = users[curr].people;
    document.querySelector(".bio p").textContent = users[curr].bio;

}

(function setInitial (){
     document.querySelector(".maincard img").src=users[curr].displaypic;
     document.querySelector(".incomingcard img").src=users[curr+1].displaypic;
     setdata(curr);
     curr =2;
})();


function changeimage() {
    if(!isAnimating){
        isAnimating = true;  // Set isAnimating to true at the start
        let tl = gsap.timeline({
            onComplete: function(){
                isAnimating = false;
                let main = document.querySelector(".maincard");
                let incoming = document.querySelector(".incomingcard");
                
                incoming.classList.remove("z-[2]");
                incoming.classList.add("z-[3]");
                incoming.classList.remove("incomingcard");
                
                main.classList.remove("z-[3]");
                main.classList.add("z-[2]");
                gsap.set(main, {
                    scale: 1,
                    opacity: 1
                });
                
                if (curr == users.length) curr = 0;
                document.querySelector(".maincard img").src = users[curr].displaypic;
                
                curr++;
                main.classList.remove("maincard");
                incoming.classList.add("maincard");
                main.classList.add("incomingcard");
            }
        });
        
        tl.to(".maincard", {
            scale: 1.1,
            opacity: 0,
            ease: "circ.out",
            duration: 0.9
        }, "a")
        .from(".incomingcard", {
            scale: 0.9,
            opacity: 0,
            ease: "circ.out",
            duration: 1.1
        }, "a");
    }
}
    
    let deny = document.querySelector(".deny");
    let accept = document.querySelector(".accept");

deny.addEventListener("click", function() {
     changeimage();
     setdata(curr-1);
     gsap.to(".details.element",{
        y: "100%",
        opacaity: 0,
        stagger: .1,
        ease: power4.easeinOut,
        duration: 1.5
    })
    
});

accept.addEventListener("click", function() {
    changeimage();
    setdata(curr-1);
    gsap.to(".details.element",{
       y: "100%",
       opacaity: 0,
       stagger: .1,
       ease: power4.easeinOut,
       duration: 1.5
   })
   
});

function containercreater(){
    document.querySelectorAll(".element")
    .forEach(function (element){
        let div =document.createElement("div");
        div.classList.add(`${element.classList[1]}container`, overflow-hidden);
        div.appendChild(element);
        select(".details").appendChild(div);
    })
}

