import {Route} from "react-router-dom";

import Header from "../blocks/Header";

function Main({exact, path, component: Component, ...args}) {
    return (
        <Route
            exact={exact}
            path={path}
            render={(routeProps) => {
                return (
                    <>
                        <Header />
                        <div className="main-container">
                            <Component {...routeProps} {...args} />
                        </div>
                    </>
                )
            }}
        />
    );
}
export default Main;
