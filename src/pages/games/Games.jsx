import React from 'react'
import CategoryCollection from '../../components/CategoryCollection/CategoryCollection'
import Hero from '../../components/Hero/Hero'
import './Games.css'

const Games = () => {
    const items = [
        {
            subTitle: 'FARM WITH FRIENDS AND FAMILY',
            title: 'Hay Day',
            imgUrl: 'https://cdn.supercell.com/supercell.com/201215100024/supercell.com/files/games_thumbnail_hayday.jpg'
        },
        {
            subTitle: 'LEAD YOUR CLAN TO VICTORY!',
            title: 'Clash Of Clans',
            imgUrl: 'https://cdn.supercell.com/supercell.com/201215100024/supercell.com/files/games_thumbnail_clashofclans.jpg'
        },
        {
            subTitle: 'BUILD. PLAN. BOOM!',
            title: 'Boom Beach',
            imgUrl: 'https://cdn.supercell.com/supercell.com/201215100024/supercell.com/files/games_thumbnail_boombeach.jpg'
        },
        {
            subTitle: 'EPIC REAL-TIME CARD BATTLES',
            title: 'Clash Royale',
            imgUrl: 'https://cdn.supercell.com/supercell.com/201215100024/supercell.com/files/games_thumbnail_clashroyale.jpg'
        },
        {
            subTitle: '3V3 AND BATTLE ROYALE',
            title: 'Brawl Stars',
            imgUrl: 'https://cdn.supercell.com/supercell.com/201215100024/supercell.com/files/games_thumbnail_brawlstars.jpg'
        },
    ]
    return (
        <div>
            <Hero
                heroImage='https://cdn.supercell.com/supercell.com/201215100024/supercell.com/files/styles/hero_image_narrow/public/bg_hero_games.jpg?itok=gQzv5VNB&timestamp=1605709726'
                hasTitle
                title="Games"
                subTitle="Farm, Clash, Boom, Battle, Brawl!"
                btnText="GAMES"
                btnId="games"
            />
            <CategoryCollection id="games" items={items} />
        </div>
    )
}

export default Games
