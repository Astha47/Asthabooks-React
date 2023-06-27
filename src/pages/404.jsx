import './404.css'
import NoDataSVG from '../img/no-data';

function Page404() {
    return (
        <div className="Page404">
            <div className="Page404Container">
                <div className="Page404Image">
                    <NoDataSVG height='100%' width='auto' fill='#FFFFFF' margin='auto'/>
                </div>
                <p>Page 404 :(</p>
            </div>
        </div>
    );
}

export default Page404;