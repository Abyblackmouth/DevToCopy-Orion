const button = document.querySelector("#save");

button.addEventListener("click", async (event) => {
  event.preventDefault();
  const image = document.querySelector("#img-post");
  const titlePost = document.querySelector("#title-post");
  const postContent = document.querySelector("#postContent");
  const tags =document.querySelector("#tags")
  const post = {
    image: image.value,
    tittle: titlePost.value,
    content: postContent.value,
    tags:tags.value
  };
  console.log(post);
   await CreateData(post)
});

const CreateData = async (post) =>{
    const response  = await fetch('http://localhost:3000/posts/',{
        method:'POST',
        headers:{
            "Content-type": "application/json;charset=UTF-8"
        },
        // body: JSON.stringify(post),
        body:post,
    })

}