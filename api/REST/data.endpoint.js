const posts = [
    {
        id: 1,
        name: 'name',
        email: 'name@ww.pl',
        password: '123'
    },
    {
        id: 2,
        name: 'name',
        email: 'name@ww.pl',
        password: '123'
    }
] 
const dataEndpoint = (router) => {
    router.get('/api/posts', async (request, response, next) => {
        response.status(200).send({posts: posts});
    });
 
 
    router.post('/api/posts', async (request, response, next) => {
        posts.push(request.body.newPost);
 
        response.status(200).send({post: posts[posts.length - 1]});
    });
 
    router.get('../api/post/:id');
 };
 