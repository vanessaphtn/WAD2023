window.onload = function() {

     // Fetch JSON data from the endpoint
     //fetch('https://api.npoint.io/570d69004738d7654a3c')
     fetch('./json/post.json')
     .then(response => response.json())
     .then(json => {

        for(let post of json){
            console.log(post.title, post.body)
            const postDiv = document.createElement('div')
            postDiv.className = 'image-box'
            const h3 = document.createElement('h3')
            const p = document.createElement('p')

            const img = document.createElement('img')
            img.className = 'centered-image'
            h3.textContent = post.content
            p.textContent= post.author.name
            img.src = post.image
            postDiv.appendChild(h3)
            postDiv.appendChild(p)
            postDiv.appendChild(img)

            const body = document.querySelector('section')
            body.appendChild(postDiv)
        }
     })
     .catch(error => console.error(error));



}