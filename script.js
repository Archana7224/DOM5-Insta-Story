var arr = [
    {dp:"https://media.istockphoto.com/id/2169185238/photo/devils-trumpet-flower-with-green-foliage.webp?a=1&b=1&s=612x612&w=0&k=20&c=qBsp2t_THEatRxZ4W39NYs2cO7KRqPd6XTy9bYxxdzg=",
    story:"https://images.unsplash.com/photo-1518343265568-51eec52d40da?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8ZGFyayUyMHNob3J0JTIwaW1hZ2VzfGVufDB8fDB8fHww"},
    {dp: "https://images.unsplash.com/photo-1488730792340-bdc88feffb98?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGRhcmslMjBzaG9ydCUyMGltYWdlc3xlbnwwfHwwfHx8MA%3D%3D",
    story:"https://images.unsplash.com/photo-1487139975590-b4f1dce9b035?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Zmxvd2VyfGVufDB8fDB8fHww"},
    {dp: "https://plus.unsplash.com/premium_photo-1676478746990-4ef5c8ef234a?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Zmxvd2VyfGVufDB8fDB8fHww",
    story: "https://images.unsplash.com/32/RgJQ82pETlKd0B7QzcJO_5912578701_92397ba76c_b.jpg?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Zmxvd2VyfGVufDB8fDB8fHww}"},
    {dp: "https://images.unsplash.com/photo-1447875569765-2b3db822bec9?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Zmxvd2VyfGVufDB8fDB8fHww",
    story: "https://images.unsplash.com/photo-1546842931-886c185b4c8c?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGZsb3dlcnxlbnwwfHwwfHx8MA%3D%3D"},
    {dp: "https://images.unsplash.com/photo-1476209446441-5ad72f223207?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGZsb3dlcnxlbnwwfHwwfHx8MA%3D%3D",
    story: "https://images.unsplash.com/photo-1523224042829-4731dd15a3bb?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGZsb3dlcnxlbnwwfHwwfHx8MA%3D%3D"},
]

var storiyan = document.querySelector("#storiyan")
var clutter = ""
arr.forEach(function(elem,idx){
    clutter += `<div class="story">
                <img data-id="${idx}" src="${elem.dp}" alt="">
            </div>`
});

storiyan.innerHTML = clutter;

storiyan.addEventListener("click", function (dets) {
    document.querySelector("#full-screen").style.display = "block"
    document.querySelector("#full-screen").style.backgroundImage = `url(${arr[dets.target.dataset.id].story})`

    setTimeout(function(){
        document.querySelector("#full-screen").style.display = "none"
    },3000)

});

  
