import './loadingApp.css'
import AsthabooksLogoW from '../../img/AsthabooksLogoW.png'

function LoadingApp() {
    return (
        <div className="LoadingApp">
            <div className='LAMainContainer'>
                <img src={AsthabooksLogoW} alt="" />
            </div>
        </div>
    );
}

export default LoadingApp;