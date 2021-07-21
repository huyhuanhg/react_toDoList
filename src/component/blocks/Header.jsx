import {Button} from "antd";
import {LOGO} from "../../css/constant";
import history from "../../utils/history";

function Header() {
    return (
        <div className="header-container">
            <div style={LOGO} onClick={() => {
                history.push('/');
            }}>
                Quản lý công việc
            </div>
            <Button type="primary" size="lager" onClick={
                () => {
                    if (history.location.pathname === '/') {
                        history.push('/create')
                    } else {
                        history.goBack();
                    }
                }
            }>{history.location.pathname === '/' ? "Thêm công việc" : "Quay lại"}</Button>
        </div>
    );
}

export default Header;
