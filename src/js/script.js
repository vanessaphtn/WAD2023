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
            const createTime = document.createElement('p')
            const like = document.createElement('img')
            const img = document.createElement('img')
            const profile = document.createElement('img')

            img.className = 'centered-image border'
            h3.textContent = post.content
            h3.className = 'comment-box-image'
            p.textContent= '- ' + post.author.name
            img.src = post.image
            createTime.textContent = post.createTime
            createTime.className = 'date'
            like.src = post.like
            like.className = 'image-bottom-left'
            profile.src = post.profile
            profile.className = 'image-top-left'

            postDiv.appendChild(img)
            postDiv.appendChild(h3)
            postDiv.appendChild(p)
            postDiv.appendChild(createTime)
            postDiv.appendChild(like)
            postDiv.appendChild(profile)

            const body = document.querySelector('section')
            body.appendChild(postDiv)
        }
     })
     .catch(error => console.error(error));



}