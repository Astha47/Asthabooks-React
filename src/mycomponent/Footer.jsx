import './Footer.css'
import AsthabooksLogoW from '../img/AsthabooksLogoW.png'

function Footer() {
    return ( 
        <div className="Footer">
            <div className="FooterTitle">
                <img src={AsthabooksLogoW} alt="" />
            </div>

            <div className='FooterContent'>
                <div className="FooterFirstRow">
                    <div className="FooterSecondRow">
                        <h3>Tentang Asthabooks</h3>
                        <ul style={{ listStyle: 'none' }}>
                            <li>Tujuan pengembangan</li>
                            <li>Petunjuk dan ketentuan</li>
                            <li>Tentang Developer</li>
                        </ul>
                    </div>
                    <div className="FooterSecondRow">
                        <h3>Kontributor</h3>
                        <ul style={{ listStyle: 'none' }}>
                            <li>Tentang Kontributor</li>
                            <li>Daftar Kontribusi</li>
                            <li>Menjadi Kontributor</li>
                        </ul>
                    </div>
                </div>
                <div className="FooterFirstRow">
                    <div className="FooterSecondRow">
                        <h3>Laman Lainnya</h3>
                        <ul style={{ listStyle: 'none' }}>
                            <li>AsthaBlogs</li>
                            <li>AsthaGallery</li>
                            <li>AsthaProjects</li>
                        </ul>
                    </div>
                    <div className="FooterSecondRow">
                        <h3>Follow Me</h3>
                        <ul style={{ listStyle: 'none' }}>
                            <li>Instagram</li>
                            <li>Twitter</li>
                            <li>Facebook</li>
                            <li>LinkedIn</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;