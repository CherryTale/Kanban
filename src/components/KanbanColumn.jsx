import React, { useState } from 'react';
import { css } from '@emotion/react';
import {
  Button, Modal, Form, Input, DatePicker,Select,Checkbox
} from 'antd';
import { useForm } from 'antd/es/form/Form';
import KanbanCard from './KanbanCard';

const KanbanColumnStyles = css`
  display:flex;
  flex-direction:column;
  flex:1 1;
  border:1px solid gray;
  border-radius:1rem;
  margin-top:0.5rem;
  margin-bottom:0.5rem;

  &>h2{
    margin: 0.6rem 1rem;
    padding-bottom:0.6rem;
    border-bottom:1px solid gray;
  }

  &>ul{
    flex:1;
    flex-basis:0;
    margin:1rem;
    padding:0;
    overflow:auto;
  }
`;

const ButtonStyles = {
  margin: '1rem',
};

const { TextArea } = Input;

export default function KanbanColumn({
  bgColor,
  title,
  setIsDragSource,
  setIsDragTarget,
  onDrop,
  onRemove,
  cardList = [],
  staffList,
  tagList,
  setDraggedItem,
  onAdd,
}) {
  const [showAdd, setShowAdd] = useState(false);
  const [form] = useForm();
  const handleOk = () => {
    form.validateFields().then(() => {
      form.submit();
      setShowAdd(false);
    });
  };
  const handleFinish = (values) => {
    if (values.deadline) {
      values.deadline = values.deadline.format('MM/DD/YYYY');
    }
    console.log(values);
    onAdd({ ...values, createTime: new Date().toString() });
  };
  return (
    <section
      onDragStart={() => setIsDragSource(true)}
      onDragOver={(evt) => {
        evt.preventDefault();
        evt.dataTransfer.dropEffect = 'move';
        setIsDragTarget(true);
      }}
      onDragLeave={(evt) => {
        evt.preventDefault();
        evt.dataTransfer.dropEffect = 'none';
        setIsDragTarget(false);
      }}
      onDrop={(evt) => {
        evt.preventDefault();
        onDrop && onDrop(evt);
      }}
      onDragEnd={(evt) => {
        evt.preventDefault();
        setIsDragSource(false);
        setIsDragTarget(false);
      }}
      css={css`
        ${KanbanColumnStyles} 
        background-color:${bgColor};
      `}
    >
      <h2>
        {title}
      </h2>
      <ul>
        <Modal
          open={showAdd}
          centered
          title="添加新卡片"
          onOk={handleOk}
          onCancel={() => { setShowAdd(false); }}
          destroyOnClose
        >
          <Form form={form} onFinish={handleFinish}>
            <Form.Item
              label="标题"
              name="title"
              rules={[
                {
                  required: true,
                  message: 'Please input your Title!',
                },
              ]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              label="描述"
              name="describe"
            >
              <TextArea rows={4} />
            </Form.Item>
            <Form.Item
              label="截止日期"
              name="deadline"
            >
              <DatePicker />
            </Form.Item>
            <Form.Item
              label="负责人"
              name="staff"
            >
              <Select allowClear options={staffList.map(item=>{return {value:item.name,label:<span>{item.name}</span>}})}/>
            </Form.Item>
            <Form.Item
              label="标签"
              name="tag"
            >
              <Checkbox.Group
                options={tagList.map((item,index)=>{
                  return {
                    label:<span style={{fontSize:"0.8rem",padding:"2px 4px",backgroundColor:item.color,borderRadius:"1rem"}}>{item.name}</span>,
                    value:item.name
                  }
                })}
              />
            </Form.Item>
          </Form>
        </Modal>
        {cardList.map(
          (props) => {
            return (
            <KanbanCard
              onRemove={onRemove}
              key={props.title}
              onDragStart={() => setDraggedItem(props)}
              {...props}
              staffList={staffList}
              tagList={tagList}
            />)
          }
        )}
      </ul>
      <Button
        onClick={() => { setShowAdd(true); }}
        disabled={showAdd}
        shape="round"
        type="dashed"
        ghost
        style={ButtonStyles}
      >
        &#8853; 添加新卡片
      </Button>
    </section>
  );
}
