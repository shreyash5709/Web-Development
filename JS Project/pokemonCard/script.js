let main = document.getElementById("main");
let s = "";
let pokemon = ["https://i.pinimg.com/1200x/7e/08/6a/7e086a46f280630779b60561d0ef88af.jpg",
                "https://i.pinimg.com/736x/70/5a/4a/705a4ae873091c101cabfbb5ff160028.jpg",
                "https://i.pinimg.com/1200x/08/e7/f3/08e7f3f45fd3a34c7e7afdfd2e589e6a.jpg",
                "https://i.pinimg.com/1200x/9e/b6/1d/9eb61de66238ca8d06b2a4a6c86351ec.jpg",
                "https://i.pinimg.com/1200x/12/33/90/1233900222c171c6e6a17e2e5d92dc6e.jpg",
                "https://i.pinimg.com/736x/d5/b8/68/d5b868f5d1a24e6a01de8779de3c38c7.jpg",
                "https://i.pinimg.com/1200x/b7/d8/eb/b7d8eb480facab3a06b00bef168082fd.jpg",
                "https://i.pinimg.com/736x/e1/04/6f/e1046f3ed3334405da1076ababb5a347.jpg",
                "https://i.pinimg.com/1200x/39/bb/41/39bb4178b8463f239a5ed9835e3bd2c4.jpg",
                "https://i.pinimg.com/736x/5f/cd/93/5fcd935888696e99b513f29c957b6d3b.jpg",
                "https://i.pinimg.com/736x/4d/5d/cd/4d5dcd51909ce5fcf8c062c721506544.jpg",
                "https://i.pinimg.com/736x/84/d3/79/84d379cdd34fe5fd8524f25ca01eada9.jpg",
                "https://i.pinimg.com/1200x/85/b3/d1/85b3d11ce6fa02fae323fc4c5f50473a.jpg"
];
for(let i=1; i<=50; i++){
    let x = Math.floor(Math.random()*pokemon.length);
    s += `<div class="card"><img src=${pokemon[x]} alt="pokemon image"></div>`
}
main.innerHTML = s;