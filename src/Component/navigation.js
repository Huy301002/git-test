import React,{ Component} from 'react';
export default class Navigation extends Component {
    render(){
        return (
            <div className='task'>
                <nav>
                <a className='active' href='#home'>Home</a>
                <a className='active' href='#category'>category</a>
                <a className='active' href='#about'>About</a>
                <a className='active' href='#Year'>Year</a>
                <a className='active' href='#series'>Series</a>
                </nav>
            </div>
        )
    }
}