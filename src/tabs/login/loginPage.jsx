import AsthabooksLogoW from '../../img/AsthabooksLogoW.png'
import './loginPage.css'

function LoginPage() {
    return (
        <div className="LoginPage">
            <div className="LPContainer">
                <div className="LPLogo">
                    <img src={AsthabooksLogoW} alt="" />
                </div>
                <div className="LPForm">
                    <div className="LPAlert"></div>
                    <div className="LPUsername"></div>
                    <div className="LPPassword"></div>
                    <div className="LPConfirm"></div>
                    <div className="LPFooter"></div>
                </div>
            </div>
        </div>
    );
}

export default LoginPage;