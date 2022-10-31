import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {
    useNavigate
} from "react-router-dom";



const Category = () => {
    const [categories, setCategories] = useState([]);
    const [categorieVideos, setCategorieVideos] = useState([]);
    const [video, setVideo] = useState();
    const [buttonClicked, setButtonClicked] = useState(false);


    useEffect(() => {
        console.log("Sending GET")
        axios.get(`https://youtube.googleapis.com/youtube/v3/videoCategories?part=snippet&regionCode=US&key=${process.env.REACT_APP_YOUTUBE_API_KEY}`)
            .then(response => {
                console.log(response.data.items)
                let filtered = response.data.items.filter((item) => item.snippet.assignable)
                setCategories(filtered)
            })
    }, [])

    const listPopularVideos = (id) => (e) => {
        e.preventDefault()
        axios.get(`https://youtube.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&regionCode=US&videoCategoryId=${id}&key=${process.env.REACT_APP_YOUTUBE_API_KEY}`)
            .then(vids => {
                console.log(vids.data.items)
                setVideo()
                setCategorieVideos(vids.data.items)
            })
    }

    const videoEmbed = (id) => (e) => {
        e.preventDefault();
        setButtonClicked(!buttonClicked);
        setVideo(id);
    }



    return (
        <div className='container'>
            {
                categories.map((item) => {
                    return (
                        <div key={item.id} className='cat-buttons'>
                            <button onClick={listPopularVideos(item.id)}>{item.snippet.title}</button>
                        </div>)
                })
            }
            {
                categorieVideos.map((item) => {
                    return (
                        <div key={item.id}>
                            <p>{item.snippet.title} <button onClick={videoEmbed(item.id)}>Play</button></p>


                            <p>{item.snippet.description}</p>

                        </div>
                    )
                })
            }

            {video?
                <iframe
                width='640'
                height='390'
                src={`https://youtube.com/embed/${video}`}
                frameBorder='0'
                allow="accelerometer; autoplay"
                allowFullScreen
                title="Embed Youtube Video"
                loading="lazy"></iframe>:null}
        </div>
    );
}
export default Category;