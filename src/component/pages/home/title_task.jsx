import {Button, Space} from "antd";
import history from "../../../utils/history";

export const columns = [
    {
        title: 'STT',
        dataIndex: 'stt',
        key: 'stt',
        align: "center",
        width: "5%",
        render: (text, record, index) => index + 1
    },
    {
        title: 'Tên',
        dataIndex: 'taskName',
        key: 'taskName',
        align: "center",
        width: "27.5%",
    },
    {
        title: 'Ngày bắt đầu Aaaa  ',
        dataIndex: 'startDate',
        key: 'startDate',
        align: "center",
        width: "27.5%",
    },
    {
        title: 'Trạng thái',
        dataIndex: 'status',
        key: 'status',
        align: "center",
        width: "20%",
        render: (text, record) => {
            return (
                <Button type={record.status ? "primary" : "primary doing"} ghost onClick={()=>{
                    console.log(record)
                }}>
                    {!record.status ? "Chưa hoàn thành" : "Đã hoàn thành"}
                </Button>
            )
        }
    },
    {
        title: 'Hành động',
        key: 'action',
        align: "center",
        width: "20%",
        render: (text, record) => (
            <Space size="middle">
                <Button type="primary update" onClick={() => {
                    history.push(`/update/${record.key}`)
                }}> Sửa </Button>
                <Button type="primary delete" onClick={() => {
                    history.push(`/delete/${record.key}`)
                }}> Xóa </Button>
            </Space>
        ),
    },
];
