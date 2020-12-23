import React from 'react'
import CategoryCollection from '../../components/CategoryCollection/CategoryCollection'
import Hero from '../../components/Hero/Hero'

const Home = () => {
    const items = [
        {
            subTitle: 'NEWS',
            title: 'Hay Day Pop Is Closing',
            imgUrl: 'https://cdn.supercell.com/supercell.com/201215100024/supercell.com/files/styles/hero_image_narrow/public/news_hay_day_pop_killed_1500x1130.jpg?itok=Y1UWmfOx&timestamp=1606708757'
        },
        {
            subTitle: 'NEWS',
            title: 'The Art of Supercell: Pre-Order Now',
            imgUrl: 'https://cdn.supercell.com/supercell.com/201215100024/supercell.com/files/styles/hero_image_narrow/public/news_thumbnail_artbook_1500x1130px_0.jpg?itok=foGNvdv5&timestamp=1601020247'
        },
        {
            subTitle: 'NEWS',
            title: 'Clash Short Film Lost & Crowned Out Now',
            imgUrl: 'https://cdn.supercell.com/supercell.com/201215100024/supercell.com/files/styles/hero_image_narrow/public/news_thumbnail_lost_crowned_1500x1130px.jpg?itok=GGEyzO9R&timestamp=1599815377'
        },
        {
            subTitle: 'NEWS',
            title: 'Introducing Brawl Stars for Everyone',
            imgUrl: 'https://cdn.supercell.com/supercell.com/201215100024/supercell.com/files/styles/hero_image_narrow/public/news_thumbnail_brawleveryone.jpg?itok=p2olAE4x&timestamp=1593769015'
        },
        {
            subTitle: 'NEWS',
            title: '10 Learnings from 10 Years',
            imgUrl: 'https://cdn.supercell.com/supercell.com/201215100024/supercell.com/files/styles/hero_image_narrow/public/supercell_10y_keyart_supercell_newsarticle_hero_1500x1130px.jpg?itok=XliiD0cP&timestamp=1589406635'
        },
        {
            subTitle: 'NEWS',
            title: 'Never Lose Your Game',
            imgUrl: 'https://cdn.supercell.com/supercell.com/201215100024/supercell.com/files/styles/hero_image_narrow/public/news_thumbnail_supercellid.jpg?itok=YgBdI4l5&timestamp=1544470158'
        },
    ]
    return (
        <div>
            <Hero
                heroImage="https://cdn.supercell.com/supercell.com/201215100024/supercell.com/files/styles/hero_image_large/public/bg_hero_frontpage.jpg?itok=0oQ2Uxxa&timestamp=1544480104%201x"
                hasTitle
                title="SUPERCELL"
                subTitle="Makers of Hay Day, Clash of Clans, Boom Beach, Clash Royale and Brawl Stars."
            />
            <CategoryCollection id="latest" items={items} />
        </div>
    )
}

export default Home
