import {PostPropsType} from "../Components/ProfileComponent/MyPosts/Post/Post";
import {rerenderEntireTree} from "../render";

type UsersType = {
    id: string
    userName:string
}

type MessagesType = {
    id: string
    message: string
}

type PostsType = {
    postText: string
    avaAddress: string
    userName: string
    likesCount: number

}

export type StateType = {
    users: Array<UsersType>
    messages: Array<MessagesType>
    posts: Array<PostsType>
    newPostText:string
}

export let state = {
    users: [
        {id: '1', userName: 'Viktor Tsoy'},
        {id: '2', userName: 'Corey Taylor'},
        {id: '3', userName: 'Jared Leto'},
        {id: '4', userName: 'Hoy'},
        {id: '5', userName: 'Misha Gorshnev'},
        {id: '6', userName: 'Tim McIlrath'}
    ],
    messages: [
        {id: '1', message: 'Answer your phone'},
        {id: '2', message: 'Add me to your friend =)'},
        {id: '3', message: 'Do you remember anything from the last party?'},
    ],
    posts: [
        {
            postText: 'Hello! I miss you!',
            avaAddress: 'https://b1.culture.ru/c/735787.jpg',
            userName: 'Viktor Tsoy',
            likesCount: 22
        },
        {
            postText: "Hey, let's go fishing next weekend ",
            avaAddress: 'https://salvemusic.com.ua/wp-content/uploads/2020/10/corey-taylor-1024x576.jpg',
            userName: 'Corey Taylor',
            likesCount: 15
        },
        {
            postText: 'How is your React progress?',
            avaAddress: 'https://fs.kinomania.ru/file/person/c/ec/cec6f62cfb44b1be110b7bf70c8362d8.jpeg',
            userName: 'Jared Leto',
            likesCount: 25
        },
        {
            postText: 'Nice photos =) ',
            avaAddress: 'https://peterburg.center/sites/default/files/img/event_m/2020-02/3ealj3jer9q.jpg',
            userName: 'Hoy',
            likesCount: 50
        },
        {
            postText: 'Happy Birthday!',
            avaAddress: 'https://m.the-flow.ru/uploads/images/resize/830x0/adaptiveResize/13/97/19/48/63/425ad4140cd7.png',
            userName: 'Misha Gorshnev',
            likesCount: 44
        },
        {
            postText: 'Happy NewYear',
            avaAddress: 'https://i.pinimg.com/originals/b6/ab/43/b6ab431f8eaddd29b49f6a1ad8b5effc.jpg',
            userName: 'Tim McIlrath',
            likesCount: 33
        }
    ],
    newPostText: 'it-kamasutra'
}



    export const addPost = () => {
    let newPost: PostPropsType = {
        postText: state.newPostText,
        avaAddress: 'https://b1.culture.ru/c/735787.jpg',
        userName:'Viktor Tsoy',
        likesCount:0
        }
        state.posts.push(newPost)
        state.newPostText = ''
    rerenderEntireTree(state)
}

export const updateNewPostText = (newText:string) => {
    state.newPostText = newText
    rerenderEntireTree(state)
}