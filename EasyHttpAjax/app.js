const http = new easyHTTP;

//get posts
// const posts = http.get('https://jsonplaceholder.typicode.com/posts',function(err,response){
//   if(err){
//     console.log(err);
//   }else{
//     console.log(response);
//   }
// });


const data = {
  title: 'Custom POsts',
  body: 'This is a custom post'
}

//creat posts
// http.post('https://jsonplaceholder.typicode.com/posts', data,function(err,response){
//   if(err){
//     console.log(err);
//   }else{
//     console.log(response);
//   }
// });

//Update Post
http.put('https://jsonplaceholder.typicode.com/posts/1', data,function(err,response){
  if(err){
    console.log(err);
  }else{
    console.log(response);
  }
});

//Delete
const posts = http.delete('https://jsonplaceholder.typicode.com/posts/1',function(err,response){
  if(err){
    console.log(err);
  }else{
    console.log(response);
  }
});

