import {Table, Space} from 'antd';

import {columns} from "./home/title_task";

import '../../css/task-list-btn.css';

function HomePage({taskList}) {
    return (
        <div>
            <Table columns={columns} dataSource={taskList} a="a"/>
        </div>
    );
}

export default HomePage;
