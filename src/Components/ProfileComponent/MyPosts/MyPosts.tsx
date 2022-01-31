import React from 'react';
import classes from './MyPosts.module.css'
import Post from "./Post/Post";

const MyPosts = () => {

    const posts = [
        {
            postText: 'Hello! I miss you!',
            avaAdress: 'https://b1.culture.ru/c/735787.jpg',
            userName: 'Viktor Tsoy', likesCount: 22
        },
        {
            postText: "Hey, let's go fishing next weekend ",
            avaAdress: 'https://salvemusic.com.ua/wp-content/uploads/2020/10/corey-taylor-1024x576.jpg',
            userName: 'Corey Taylor',
            likesCount: 15
        },
        {
            postText: 'How is your React progress?',
            avaAdress: 'https://fs.kinomania.ru/file/person/c/ec/cec6f62cfb44b1be110b7bf70c8362d8.jpeg',
            userName: 'Jared Leto',
            likesCount: 25
        },
        {
            postText: 'Nice photos =) ',
            avaAdress: 'https://peterburg.center/sites/default/files/img/event_m/2020-02/3ealj3jer9q.jpg',
            userName: 'Hoy',
            likesCount: 50
        },
        {
            postText: 'Happy Birthday!',
            avaAdress: 'https://m.the-flow.ru/uploads/images/resize/830x0/adaptiveResize/13/97/19/48/63/425ad4140cd7.png',
            userName: 'Misha Gorshnev',
            likesCount: 44
        },
        {
            postText: 'Happy NewYear',
            avaAdress: 'https://i.pinimg.com/originals/b6/ab/43/b6ab431f8eaddd29b49f6a1ad8b5effc.jpg',
            userName: 'Tim McIlrath',
            likesCount: 33
        }
    ]


    return (
        <div>
            <div className={classes.myPostsTitle}>
                <h3>My post</h3>
                <div>
                    <div>
                        <textarea></textarea>
                    </div>
                    <div>
                        <button>add Post</button>
                    </div>
                </div>
            </div>
            <div className={classes.posts}>
                {posts.map(m => <Post avaAddress={m.avaAdress}
                                      postText={m.postText}
                                      userName={m.userName}
                                      likesCount={m.likesCount}/>)}
            </div>
        </div>
    );
};

export default MyPosts;