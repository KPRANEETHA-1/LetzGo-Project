let users = [
    {
        name: "The Backpackers",
        location: "Goa",
        members: 44,
        pendingmessage:2,
        bio: "Adventure seekers exploring the beaches and culture of Goa. Join us for unforgettable experiences!",
        profilepic: "https://images.unsplash.com/photo-1498661694102-0a3793edbe74?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDd8fHRyYXZlbGxlcnMlMjBpbiUyMGdyb3VwfGVufDB8fDB8fHww",
        displaypic :"https://imgs.search.brave.com/D91lXafYnJHI9FHnby0M6bI0HCadC9_Y0BkS5HUBQRc/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXM3LmFscGhhY29k/ZXJzLmNvbS81NzMv/NTczMjMzLmpwZw"
    },
    {
        name: "Mountain Trekkers",
        location: "Himalayas",
        members: 28,
        pendingmessage:2,
        bio: "Passionate hikers conquering the majestic peaks of the Himalayas. Breathtaking views and lifelong friendships await!",
        profilepic: "https://images.unsplash.com/photo-1519671845924-1fd18db430b8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTJ8fHRyYXZlbGxlcnMlMjBpbiUyMGdyb3VwfGVufDB8fDB8fHwwhttps://source.unsplash.com/random/400x400?hiker",
        displaypic: "https://images.unsplash.com/photo-1483428400520-675ef69a3bc4?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3Dhttps://plus.unsplash.com/premium_photo-1664303174429-1c4b86b27fcd?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTN8fHRyYXZlbGxlcnMlMjBpbiUyMGdyb3VwfGVufDB8fDB8fHwwhttps://source.unsplash.com/random/1080x1920?himalayas"
    },
    {
        name: "City Explorers",
        location: "Tokyo",
        members: 35,
        pendingmessage:29,
        bio: "Urban adventurers discovering the hidden gems of Tokyo. From street food to neon lights, we're experiencing it all!",
        profilepic: "https://images.unsplash.com/photo-1450297428000-5f0b50540da9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTh8fHRyYXZlbGxlcnMlMjBpbiUyMGdyb3VwfGVufDB8fDB8fHwwhttps://source.unsplash.com/random/400x400?traveler",
        displaypic: "https://images.unsplash.com/photo-1548705085-101177834f47?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTcwfHx0cmF2ZWxsZXJzJTIwaW4lMjBncm91cHxlbnwwfHwwfHx8MA%3D%3Dhttps://images.unsplash.com/photo-1548705085-101177834f47?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTcwfHx0cmF2ZWxsZXJzJTIwaW4lMjBncm91cHxlbnwwfHwwfHx8MA%3D%3Dhttps://images.unsplash.com/photo-1523650954327-a525a8fb55ad?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NzR8fHRyYXZlbGxlcnMlMjBpbiUyMGdyb3VwfGVufDB8fDB8fHwwhttps://source.unsplash.com/random/1080x1920?tokyo"
    },
    {
        name: "Beach Bums",
        location: "Bali",
        members: 22,
        pendingmessage:29,
        bio: "Laid-back travelers soaking up the sun in beautiful Bali. Surfing, yoga, and beachside relaxation are our daily rituals.",
        profilepic: "https://plus.unsplash.com/premium_photo-1661514089709-f8404c015643?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8ODF8fHRyYXZlbGxlcnMlMjBpbiUyMGdyb3VwfGVufDB8fDB8fHwwhttps://source.unsplash.com/random/400x400?beach",
        displaypic: "https://plus.unsplash.com/premium_photo-1664298030033-6d93f10f9883?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTQ5fHx0cmF2ZWxsZXJzJTIwaW4lMjBncm91cHxlbnwwfHwwfHx8MA%3D%3Dhttps://images.unsplash.com/photo-1536607961765-592e80bcc19e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8ODZ8fHRyYXZlbGxlcnMlMjBpbiUyMGdyb3VwfGVufDB8fDB8fHwwhttps://source.unsplash.com/random/1080x1920?bali"
    },
    {
        name: "Cultural Immersion",
        location: "Marrakech",
        members: 18,
        pendingmessage:29,
        bio: "Curious souls diving deep into the rich culture of Marrakech. Explore bustling markets, historic sites, and local traditions with us!",
        profilepic: "https://images.unsplash.com/photo-1506790144-fe3c68e4247d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTA2fHx0cmF2ZWxsZXJzJTIwaW4lMjBncm91cHxlbnwwfHwwfHx8MA%3D%3Dhttps://source.unsplash.com/random/400x400?traveler",
        displaypic: "https://images.unsplash.com/photo-1483428400520-675ef69a3bc4?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3Dhttps://images.unsplash.com/photo-1530541930197-ff16ac917b0e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTMxfHx0cmF2ZWxsZXJzJTIwaW4lMjBncm91cHxlbnwwfHwwfHx8MA%3D%3Dhttps://source.unsplash.com/random/1080x1920?marrakech"
    }
];



 
let curr = 1;
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

function containercreater(){
    document.querySelectorAll(".element")
    .forEach(function (element){
        let div =document.createElement("div");
        div.classList.add(`${element.classList[1]}container`, overflow-hidden);
        div.appendChild(element);
        select(".details").appendChild(div);
    })
}

