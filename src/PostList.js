import React, { Component } from 'react'
import PostData from './data/pokedex.json'

class PostList extends Component {
    render() {
        return(
            <div>
                {PostData.map((postDetail, index)=>{
                    return <button>{postDetail.pokemon}
                    
                    {postDetail.numero}
                    {postDetail.espece}
                    </button>
                })}
            </div>
        )
    }
}

export default PostList