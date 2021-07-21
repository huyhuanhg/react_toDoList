import '../../css/alert.css';
import '../../css/task-list-btn.css';

import {Button, Space} from "antd";

import history from "../../utils/history";
import { Redirect } from "react-router-dom";

function DeletePage({computedMatch, deleteTask, getTask}) {
    let k = parseInt(computedMatch.params.key);

    if (!getTask(k)){
        return (<Redirect to={'/'}/>);
    }

    const { taskName, status, startDate } = getTask(k);
    return (
        <div className="alert-delete">
            <h2>Bạn chắc chắn muốn xóa:</h2>
            <hr/>
            <div className="alert-content">
                <p><span>Tên công việc:</span> {taskName}</p>
                <p><span>Ngày bắt đầu:</span> {startDate}</p>
                <p><span>Tình trạng:</span> {status ? "Đã hoàn thành" : "Đang thực hiện"}</p>
            </div>
            <div className="alert-control">
                <Space>
                    <Button type="primary delete btn-custom" onClick={()=>{
                        deleteTask(k);
                        return history.push('/');
                    }}>
                        Xóa
                    </Button>
                    <Button type="primary btn-custom" onClick={()=>{
                        history.push('/');
                    }}>
                        Hủy
                    </Button>
                </Space>
            </div>
        </div>

    );
}

export default DeletePage;
