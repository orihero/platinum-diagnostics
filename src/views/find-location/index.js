import React from 'react'

import Header from '../../components/header'
import Navigation from '../../components/navigation'
import SideMenu from '../../components/side-menu'
import Footer from '../../components/footer'

import styles from './index.module.scss'

const FindLocation = () => {

    return(
        <div className={styles.cont}>
            <Header />
            <Navigation current={'find-location'} find={true}/>
            <div className={styles.content}>
                <SideMenu />
                <div className={styles.main}>
                    <p>
                        find Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque iste quas iusto ducimus, cumque corrupti autem sunt dolores adipisci quis suscipit dolor? Aliquid ipsa cum repudiandae, est voluptate assumenda, harum praesentium cupiditate fugiat possimus temporibus asperiores. Cum delectus eos culpa temporibus sint quod deserunt praesentium dolorum reiciendis veniam, mollitia sed voluptas aliquam, unde consectetur libero quae animi ex magni? Officia esse aperiam et ut soluta? Obcaecati quod odit impedit eveniet illo, repudiandae eligendi veritatis nobis nam quam placeat, enim at adipisci voluptatum consequuntur perspiciatis vero atque! Quos nihil labore accusamus fuga cum reprehenderit dignissimos nulla sint, facilis illum quibusdam aliquid cumque et totam maiores consequuntur delectus aperiam non eum quae nesciunt quisquam animi. Beatae, expedita minus quas quos quis quia non possimus quae officiis iste quam aperiam repudiandae consequuntur distinctio a assumenda aut! Vero quaerat praesentium, temporibus aspernatur fuga placeat magni a facere beatae inventore officia, adipisci deserunt expedita in! Quibusdam perspiciatis ab architecto autem, laudantium ex vero, non praesentium nihil repellat sequi? Beatae assumenda fugiat veritatis officia sint tempore ipsum doloribus mollitia rem labore nostrum, sequi itaque, eius ab repellendus aperiam minima debitis, voluptatem aspernatur dolores omnis reprehenderit consequatur inventore in. Pariatur id iusto iure, saepe eaque ducimus adipisci!
                    </p>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default FindLocation