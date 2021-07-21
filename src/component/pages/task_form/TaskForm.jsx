import {Form, Input, InputNumber, Button, DatePicker, Select} from 'antd';
import moment from "moment";

import history from '../../../utils/history';


import '../../../css/form.css';
import {Redirect} from "react-router-dom";

function TaskForm({createTask, createKey, updateTask, type, computedMatch, getTask}) {

    if (type === 'update'){
        let k = parseInt(computedMatch.params.key);
        if (!getTask(k)){
            return (<Redirect to={'/'}/>);
        }
    }

    let handleStartDate = (startDate) => {
        if (!startDate) {
            let today = new Date();
            return `${today.getFullYear()}-${today.getMonth() + 1}-${today.getDate()}`;
        } else {
            return `${startDate.year()}-${startDate.month() + 1}-${startDate.date()}`;
        }
    }

    const handleSubmit = ({startDate, ...values}) => {
        startDate = handleStartDate(startDate);
        if (type === 'create') {
            createTask({
                ...values,
                startDate
            });
        }
        if (type === 'update') {
            updateTask({
                ...values,
                startDate
            })
        }
        return history.push('/');
    }

    const setInitialValues = () => {
        if (type === 'create') {
            return {
                status: 0,
                key: createKey()
            }
        } else {
            let k = parseInt(computedMatch.params.key);
            const { taskName, status, startDate } = getTask(k);
            return {
                key: k,
                status,
                taskName,
                startDate: moment(startDate)
            }
        }
    }

    return (
        <Form labelCol={{span: 6}}
              wrapperCol={{span: 16}}
              name="taskForm"
              className="task-form"
              onFinish={handleSubmit}
              initialValues={setInitialValues()}
        >
            <h1 style={{textAlign: "center"}}>{type === 'create' ? 'Thêm công việc' : "Sửa công việc"}</h1>
            <Form.Item style={{display: "none"}} name="key">
                <Input hidden/>
            </Form.Item>
            <Form.Item name="taskName" label="Tên công việc"
                       rules={[
                           {
                               required: true,
                               message: "Vui lòng nhập tên công việc!"
                           }
                       ]}
            >
                <Input placeholder="Tên công việc"/>
            </Form.Item>
            <Form.Item label="Ngày bắt đầu" name="startDate">
                <DatePicker style={{width: "100%"}} placeholder="Ngày bắt đầu"/>
            </Form.Item>
            <Form.Item label="Trạng thái" name="status">
                <Select style={{width: "100%"}}>
                    <Select.Option value={1}>Đã hoàn thành</Select.Option>
                    <Select.Option value={0}>Đang thực hiện</Select.Option>
                </Select>
            </Form.Item>
            <Form.Item>
                <Button type="primary" htmlType="submit" style={{width: "40%", marginLeft: '55%'}}>
                    {type === 'create' ? 'Thêm' : "Sửa"}
                </Button>
            </Form.Item>
        </Form>
    );
}

export default TaskForm;
