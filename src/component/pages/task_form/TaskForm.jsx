import { useEffect } from "react";
import { Form, Input, Button, DatePicker, Select } from "antd";
import moment from "moment";

import history from "../../../utils/history";

import "../../../css/form.css";

function TaskForm({
  createTask,
  createKey,
  updateTask,
  type,
  computedMatch,
  taskList,
}) {
  const taskKey = type === 'update' && computedMatch.params.key;
  const taskData = type === 'update' && taskList.find((taskItem) => taskItem.key === parseInt(taskKey));

  const [modifyTaskForm] = Form.useForm();

  useEffect(() => {
    if (taskData) {
      modifyTaskForm.resetFields();
    }
  }, [taskData]);

  const handleStartDate = (startDate) => {
    if (startDate) {
      return moment(startDate).format('YYYY-MM-DD');
    } else {
      return moment().format('YYYY-MM-DD');
    }
  };

  const handleSubmit = ({ startDate, ...values }) => {
    const newStartDate = handleStartDate(startDate);
    if (type === "create") {
      createTask({
        ...values,
        startDate: newStartDate,
      });
    }
    if (type === "update") {
      updateTask({
        ...values,
        startDate: newStartDate,
      });
    }
    return history.push("/");
  };

  const setInitialValues = () => {
    if (type === "create") {
      return {
        status: 0,
        key: createKey(),
      };
    } else {
      if (taskData) {
        const { taskName, status, startDate } = taskData;
        return {
          key: parseInt(taskKey),
          status,
          taskName,
          startDate: moment(startDate),
        };
      }
    }
  };

  return (
    <Form
      labelCol={{ span: 6 }}
      form={modifyTaskForm}
      wrapperCol={{ span: 16 }}
      name="taskForm"
      className="task-form"
      onFinish={handleSubmit}
      initialValues={setInitialValues()}
    >
      <h1 style={{ textAlign: "center" }}>
        {type === "create" ? "Thêm công việc" : "Sửa công việc"}
      </h1>
      <Form.Item style={{ display: "none" }} name="key">
        <Input hidden />
      </Form.Item>
      <Form.Item
        name="taskName"
        label="Tên công việc"
        rules={[
          {
            required: true,
            message: "Vui lòng nhập tên công việc!",
          },
        ]}
      >
        <Input placeholder="Tên công việc" />
      </Form.Item>
      <Form.Item label="Ngày bắt đầu" name="startDate">
        <DatePicker style={{ width: "100%" }} placeholder="Ngày bắt đầu" />
      </Form.Item>
      <Form.Item label="Trạng thái" name="status">
        <Select style={{ width: "100%" }}>
          <Select.Option value={1}>Đã hoàn thành</Select.Option>
          <Select.Option value={0}>Đang thực hiện</Select.Option>
        </Select>
      </Form.Item>
      <Form.Item>
        <Button
          type="primary"
          htmlType="submit"
          style={{ width: "40%", marginLeft: "55%" }}
        >
          {type === "create" ? "Thêm" : "Sửa"}
        </Button>
      </Form.Item>
    </Form>
  );
}

export default TaskForm;
