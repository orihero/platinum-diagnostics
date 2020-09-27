import React from 'react'

import {
    Header,
    Navigation,
    SideMenu,
    SideNavigation,
    Footer,
} from '../../../components'

import styles from './index.module.scss'

const Contact = () => {

    return(
        <div className={styles.cont}>
            <Header />
            <Navigation current={'contact'} />
            <div className={styles.content}>
                <SideMenu />
                <div className={styles.main}>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa, fugit eveniet? Magnam vel quibusdam veniam voluptatum porro, esse nemo quis, ex, mollitia debitis voluptatibus? Temporibus quod officiis rem repellendus velit error, est quaerat, saepe cum eaque, itaque obcaecati aperiam! Nemo, perspiciatis quod. Voluptatem nemo inventore maiores voluptatibus laudantium accusamus rerum cumque error tempora reiciendis. Iure accusantium officiis voluptate dicta totam eum, asperiores, fugiat, nemo a doloremque est deleniti quisquam cumque nisi et veritatis reiciendis inventore praesentium quibusdam cum voluptatem excepturi minus illum! Alias cum ducimus amet quaerat nihil eos beatae repudiandae, quam veniam, commodi culpa perspiciatis iste inventore atque illum qui minima fugiat voluptates eum distinctio fugit exercitationem! Natus porro cupiditate amet esse sequi exercitationem enim architecto nihil. Ducimus explicabo eveniet saepe libero. Sapiente perspiciatis doloremque dolore voluptatibus numquam cum quos dolorem quae, perferendis autem ex quod omnis distinctio, at molestias minima, dignissimos quibusdam enim animi aperiam. Id officiis esse, eum veritatis quas nam, optio ea nihil temporibus, explicabo minima quasi dolor dolore ducimus doloribus aut dignissimos commodi sunt soluta. Quam nisi ipsum assumenda possimus quas impedit quod illo aliquam, natus laborum pariatur iste deleniti magnam vel provident? Ipsa sit quaerat provident exercitationem veritatis sapiente assumenda impedit! A fugit nobis sint voluptatem sed mollitia at dolor voluptates quis soluta aliquid nam voluptatibus unde repudiandae sequi alias id iste voluptate dolorum dicta vel vero molestiae, culpa asperiores? Vel nemo dolorem, nesciunt officiis unde minima? Nulla adipisci quas ipsa reprehenderit quisquam maxime necessitatibus? Soluta accusamus architecto molestias quaerat sequi blanditiis rerum nihil maiores qui odit, accusantium porro iste itaque placeat perspiciatis facere illum minus aliquid, pariatur corporis ipsam omnis fugiat ullam! Doloremque exercitationem distinctio necessitatibus ipsum tempore facilis consequuntur id minus, inventore iste nihil eveniet officiis cumque dolorum omnis nisi provident similique? Quas voluptates voluptatibus sequi culpa! Quibusdam animi non cum asperiores nisi, ex doloremque rem voluptate! Veniam maxime ullam hic possimus qui est dolores commodi nam cupiditate quis, corrupti eligendi cumque officiis, consequuntur consequatur quae error, modi corporis? Eos totam incidunt provident, dolore expedita assumenda repellat nobis veniam pariatur, quisquam vel consequuntur voluptate atque deserunt officiis aliquid architecto et esse voluptas soluta animi? Voluptatum ad ratione vel illum voluptatem vitae asperiores explicabo! Corporis dolore rem facilis excepturi eveniet sed culpa similique nemo doloribus sit iure, unde magnam cumque laboriosam fugit non fugiat nesciunt id enim quo, molestiae tempora earum. Earum tenetur maxime at animi fugiat! In corrupti magnam exercitationem iure alias, qui nam impedit dolor ut iste veniam excepturi ratione inventore quisquam totam aut ipsa mollitia nostrum eos architecto laborum recusandae. Ex sint voluptatibus quis quisquam temporibus itaque nihil reprehenderit ducimus non corporis soluta tempore error deleniti nostrum eaque eveniet adipisci amet officia consequuntur nulla, et animi? Magnam impedit obcaecati earum animi optio suscipit eius, reiciendis corporis consectetur sed, eaque, et dignissimos vitae accusamus sapiente ipsum qui quidem? Laboriosam debitis ea quidem enim, eos dolor doloribus ducimus nam sit quisquam aperiam aspernatur dolore labore numquam vero culpa nostrum quasi harum non omnis voluptates dicta, tempora exercitationem! Sequi, quia beatae. Eum, quae.
                    </p>
                </div>
                <SideNavigation current={'contactInfo'} />
            </div>
            <Footer current={'contact'} />
        </div>
    )
}

export default Contact