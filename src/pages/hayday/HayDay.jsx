import React from 'react'
import Hero from '../../components/Hero/Hero';
import CategoryCollection from '../../components/CategoryCollection/CategoryCollection';
import ParaOne from './ParaOne'
import ParaTwo from './ParaTwo'

const HayDay = () => {
    const items = [
        {
            title: 'TOO MUCH WOOL',
            youtubeUrl: 'https://www.youtube.com/watch?v=5BQOgUWU59w',
            embeddedUrl: "https://www.youtube.com/embed/5BQOgUWU59w"
        },
        {
            title: 'CAKE',
            youtubeUrl: 'https://www.youtube.com/watch?v=OStAo1NTi2k',
            embeddedUrl: "https://www.youtube.com/embed/OStAo1NTi2k"
        }
    ]
    return (
        <div>
            <Hero
                heroImage="https://cdn.supercell.com/supercell.com/201215100024/supercell.com/files/styles/hero_image_large/public/bg_hero_hayday.jpg?itok=JMThcu0r&timestamp=1544552030 1x"
            />
            <ParaOne />
            <hr/>
            <ParaTwo />
            <CategoryCollection isYoutube id="games" items={items} />
        </div>
    )
}

export default HayDay
