import { useState } from 'react';

export function Body(){
    const [likes, setLikes] = useState(0);

    const incrementLikes = () => {
        setLikes(likes + 1);
    };

    return(
        <div>
            <button className='bg-blue-500' onClick={incrementLikes}>
                👍 Curtir
            </button>
            <p>Likes: {likes}</p>
        </div>
    )
}