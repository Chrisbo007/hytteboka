

let posts = [
    {
        date:'04.04.2021', 
        title:'Påskeferie',
        text: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.',
        photos: [
            '/img/photos-example2.jpg'
            ],
        signature: '- Kjetil og Christina'
    },
    {
    date:'26.05.2021', 
    title:'Pinsehelgen',
    text: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.',
    photos: [
        '/img/photo-example.jpg'
        ],
    signature: '- Christina, Andreas og Emil'
}

]

function loadPosts(post){
    const div = document.createElement('div')
    div.classList.add('content-hytte__right--text')

    const dateElement = document.createElement('p')
    dateElement.classList.add('date')
    dateElement.innerText = post.date;
    div.appendChild(dateElement);

    const titleElement = document.createElement('h2')
    titleElement.classList.add('headline')
    titleElement.innerText = post.title;
    div.appendChild(titleElement);

    const textElement = document.createElement('p')
    textElement.classList.add('text')
    textElement.innerText = post.text;
    div.appendChild(textElement);

    const photosElement = document.createElement('div')
    photosElement.classList.add('photos')
    post.photos.forEach(url => {
        const image = document.createElement('img')
        image.src = url
        image.classList.add('photo')
        photosElement.appendChild(image);
    });
    div.appendChild(photosElement);

    const signatureElement = document.createElement('p')
    signatureElement.classList.add('note')
    signatureElement.innerText = post.signature;
    div.appendChild(signatureElement);


    document.getElementById('div-posts').prepend(div)

}

function addPost() {

const date = document.getElementsByName('date')[0].value
const title = document.getElementsByName('title')[0].value
const text = document.getElementsByName('text')[0].value
const img = URL.createObjectURL(document.getElementsByName('img')[0].files[0])
const signature = document.getElementsByName('signature')[0].value

    const newPost = {
        date: date, 
        title: title,
        text: text,
        photos: [
                img
            ],
        signature: signature
    }
    loadPosts(newPost)
    toggleNewPost()
}

posts.forEach(post => {
    loadPosts(post)
})

function toggleNewPost() {
    const form = document.getElementById('newPostForm')
    form.classList.toggle('hidden')
}
