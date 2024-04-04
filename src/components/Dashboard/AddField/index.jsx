import { Dropdown, Menu, Select, Space, Typography, message } from "antd";
import React, { useEffect, useState } from "react";
import { DownOutlined } from "@ant-design/icons";
import { DeleteOutlined, PlusOutlined } from "@ant-design/icons";
import { Button, Form, Input } from "antd";
import { getAllSubCategory } from "service";
import useAxios from "config/api/useAxios";
import { BASE_URL } from "config/api/axios";
import Loading from "components/Loading/Loading";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "firebase.init";
import FieldData from "./FieldData";
const AddFields = () => {
  const [select, setSelect] = useState("text");
  const [subcategory, setSubcategory] = useState([]);
  const [form] = Form.useForm();
  const [loading, setLoading] = useState(false);
  const items = [
    {
      key: "select",
      label: "dropdown",
    },
    {
      key: "text",
      label: "Text",
    },
    {
      key: "number",
      label: "Number",
    },
    {
      key: "textarea",
      label: "Textarea",
    },
  ];
  const handleChange = (value) => {
    console.log(value);
    setSelect(value.key);
  };
  const menu = (
    <Menu onClick={handleChange}>
      {items.map((item) => (
        <Menu.Item key={item.key}>{item.label}</Menu.Item>
      ))}
    </Menu>
  );
  const fetchSubcategory = async () => {
    const data = await getAllSubCategory();
    setSubcategory(data);
  };

  useEffect(() => {
    fetchSubcategory();
  }, []);

  const api = useAxios();
  console.log(subcategory);
  const [user1] = useAuthState(auth);
  const [field, seField] = useState([]);
  const [allow, setAllow] = useState("");
  const handleOption = async (value, id) => {
    setAllow(value);
    const verifyresponse = await api.patch(`/field/${id}`, { data: value });
    if (verifyresponse.data) {
      fetchField();
      message.success("delete Successfully");
    }
  };
  const fetchField = async () => {
    const verifyresponse = await api.get("/field");
    seField(verifyresponse.data.data);
  };
  useEffect(() => {
    fetchField();
  }, []);
  const deleteAds = async (name) => {
    const verifyresponse = await api.delete(`/field/${name}`);
    if (verifyresponse.data) {
      fetchField();
      message.success("delete Successfully");
    }
  };
  const editads = () => {};

  const formProps = {
    layout: "vertical",
  };
  const handleChangeValue = (value) => {
    console.log(`selected ${value}`);
  };
  const onFinish = async (values) => {
    setLoading(true);
    console.log("Received values:", values);
    try {
      const request = await api.post(`${BASE_URL}/field`, {
        type: select,
        ...values,
      });
      message.success("field added");
      setLoading(false);
    } catch (error) {
      setLoading(false);
    }
  };
  const handleSubmit = async (values) => {
    try {
      const request = await api.post(`${BASE_URL}/field`, {
        type: select,
        ...values,
      });
      message.success("field added");
      setLoading(false);
    } catch (error) {
      setLoading(false);
    }
  };

  console.log(select);
  return (
    <div>
      <h1>Add Field</h1>
      <h1>Choose Which Option You want to add</h1>
      <div className="w-[50%]">
        <Dropdown overlay={menu}>
          <Typography.Link>
            <Space>
              {select ? `Selected: ${select}` : "Select Option"}
              <DownOutlined />
            </Space>
          </Typography.Link>
        </Dropdown>
      </div>
      <div className=" container mt-8 p-9 shadow-md ">
        {" "}
        {!loading ? (
          <div>
            {select == "text" && (
              <Form
                form={form}
                onFinish={onFinish}
                initialValues={{ text: [{}] }}
              >
                <Form.Item
                  name={"subcategory"}
                  label="Enter Subcategory"
                  style={{ maxWidth: "893px" }}
                  rules={[
                    {
                      required: true,
                      message: "please enter your subcategory",
                    },
                    { whitespace: true },
                  ]}
                  hasFeedback
                >
                  <Select
                    onChange={handleChangeValue}
                    options={subcategory.map((item) => ({
                      value: item.name,
                      label: item.name,
                    }))}
                  />
                </Form.Item>

                <Form.List name={"text"}>
                  {(fields, { add, remove }) => (
                    <>
                      {fields.map((field, index) => (
                        <Space
                          key={field.key}
                          direction="horizontal"
                          className="flex flex-row items-start "
                          style={{ position: "relative", marginRight: "13px" }}
                        >
                          <Form.Item
                            name={[field.name, "label"]}
                            label={`Add Field - ${index + 1}`}
                            rules={[
                              { required: true, message: "please add a Field" },
                              { whitespace: false },
                              {
                                min: 3,
                                message: "field must be at least 3 characters",
                              },
                            ]}
                            hasFeedback
                          >
                            <Input
                              placeholder="label Name"
                              rules={[
                                {
                                  required: true,
                                  message: "please add a Field",
                                },
                                { whitespace: false },
                                {
                                  min: 3,
                                  message:
                                    "field must be at least 3 characters",
                                },
                              ]}
                            />
                          </Form.Item>
                          <Form.Item
                            name={[field.name, "parameter"]}
                            rules={[{ whitespace: true }]}
                            hasFeedback
                          >
                            <Input
                              placeholder="parameter"
                              rules={[
                                {
                                  required: true,
                                  message: "please add a Field",
                                },
                                { whitespace: false },
                                {
                                  min: 3,
                                  message:
                                    "field must be at least 3 characters",
                                },
                              ]}
                            />
                          </Form.Item>
                          <Form.Item
                            name={[field.name, "name"]}
                            rules={[{ whitespace: true }]}
                            hasFeedback
                          >
                            <Input
                              placeholder="name"
                              rules={[
                                {
                                  required: true,
                                  message: "please add a Field",
                                },
                                { whitespace: false },
                                {
                                  min: 3,
                                  message:
                                    "field must be at least 3 characters",
                                },
                              ]}
                            />
                          </Form.Item>
                          <Button
                            danger
                            onClick={() => remove(field.name)}
                            // style={{ marginTop: "-60px" }}
                            icon={<DeleteOutlined />}
                          />
                        </Space>
                      ))}
                      <Form.Item>
                        <Button
                          icon={<PlusOutlined />}
                          type="dashed"
                          block
                          style={{ maxWidth: "893px" }}
                          onClick={() => add()}
                        >
                          Add a Text Field
                        </Button>
                      </Form.Item>
                    </>
                  )}
                </Form.List>

                <Form.Item>
                  <Button type="primary" htmlType="submit">
                    Add Now
                  </Button>
                </Form.Item>
              </Form>
            )}
            {select == "select" && (
              <Form {...formProps} onFinish={handleSubmit}>
                <Form.Item
                  name={"subcategory"}
                  label="Enter Subcategory"
                  rules={[
                    {
                      required: true,
                      message: "Please enter your subcategory",
                    },
                    { whitespace: true },
                  ]}
                  hasFeedback
                >
                  <Select
                    onChange={handleChangeValue}
                    options={subcategory.map((item) => ({
                      value: item.name,
                      label: item.name,
                    }))}
                  />
                </Form.Item>
                <Form.Item
                  name={"label"}
                  label="Enter Label for Dropdown"
                  rules={[
                    { required: true, message: "Please enter your label" },
                    { whitespace: true },
                  ]}
                  hasFeedback
                >
                  <Input />
                </Form.Item>
                <Form.Item
                  name={"name"}
                  label="Enter Name for Dropdown"
                  rules={[
                    { required: true, message: "Please enter your Field Name" },
                    { whitespace: true },
                  ]}
                  hasFeedback
                >
                  <Input />
                </Form.Item>
                <Form.List name={"options"}>
                  {(fields, { add, remove }) => {
                    return (
                      <>
                        {fields.map((field, index) => {
                          return (
                            <Space
                              key={field.key}
                              direction="horizontal"
                              style={{
                                position: "relative",
                                marginRight: "13px",
                              }}
                            >
                              <Form.Item
                                name={field.name}
                                label={`Add Option - ${index + 1}`}
                                style={{ width: "400px" }}
                                rules={[
                                  {
                                    required: true,
                                    message: "Please add an option",
                                  },
                                  { whitespace: true },
                                  {
                                    min: 3,
                                    message:
                                      "Option must be at least 3 characters",
                                  },
                                ]}
                                hasFeedback
                              >
                                <Input placeholder="Value" name="name" />
                              </Form.Item>
                              <Button
                                danger
                                onClick={() => remove(field.name)}
                                style={{ marginTop: "5px" }}
                                icon={<DeleteOutlined />}
                              />
                            </Space>
                          );
                        })}
                        <Form.Item>
                          <Button
                            icon={<PlusOutlined />}
                            type="dashed"
                            block
                            style={{ maxWidth: "893px" }}
                            onClick={() => add()}
                          >
                            Add an Option
                          </Button>
                        </Form.Item>
                      </>
                    );
                  }}
                </Form.List>
                <Form.Item>
                  <Button type="primary" htmlType="submit">
                    Submit
                  </Button>
                </Form.Item>
              </Form>
            )}
            {select == "number" && (
              <Form
                form={form}
                onFinish={onFinish}
                initialValues={{ text: [{}] }}
              >
                <Form.Item
                  name={"subcategory"}
                  label="Enter Subcategory"
                  style={{ maxWidth: "893px" }}
                  rules={[
                    {
                      required: true,
                      message: "please enter your subcategory",
                    },
                    { whitespace: true },
                  ]}
                  hasFeedback
                >
                  <Select
                    onChange={handleChangeValue}
                    options={subcategory.map((item) => ({
                      value: item.name,
                      label: item.name,
                    }))}
                  />
                </Form.Item>

                <Form.List name={"number"}>
                  {(fields, { add, remove }) => (
                    <>
                      {fields.map((field, index) => (
                        <Space
                          key={field.key}
                          direction="horizontal"
                          className="flex flex-row items-start "
                          style={{ position: "relative", marginRight: "13px" }}
                        >
                          <Form.Item
                            name={[field.name, "label"]}
                            label={`Add Field - ${index + 1}`}
                            rules={[
                              { required: true, message: "please add a Field" },
                              { whitespace: false },
                              {
                                min: 3,
                                message: "field must be at least 3 characters",
                              },
                            ]}
                            hasFeedback
                          >
                            <Input
                              placeholder="label Name"
                              rules={[
                                {
                                  required: true,
                                  message: "please add a Field",
                                },
                                { whitespace: false },
                                {
                                  min: 3,
                                  message:
                                    "field must be at least 3 characters",
                                },
                              ]}
                            />
                          </Form.Item>
                          <Form.Item
                            name={[field.name, "parameter"]}
                            rules={[{ whitespace: true }]}
                            hasFeedback
                          >
                            <Input
                              placeholder="parameter"
                              rules={[
                                {
                                  required: true,
                                  message: "please add a Field",
                                },
                                { whitespace: false },
                                {
                                  min: 3,
                                  message:
                                    "field must be at least 3 characters",
                                },
                              ]}
                            />
                          </Form.Item>
                          <Form.Item
                            name={[field.name, "name"]}
                            rules={[{ whitespace: true }]}
                            hasFeedback
                          >
                            <Input
                              placeholder="name"
                              rules={[
                                {
                                  required: true,
                                  message: "please add a Field",
                                },
                                { whitespace: false },
                                {
                                  min: 3,
                                  message:
                                    "field must be at least 3 characters",
                                },
                              ]}
                            />
                          </Form.Item>
                          <Button
                            danger
                            onClick={() => remove(field.name)}
                            // style={{ marginTop: "-60px" }}
                            icon={<DeleteOutlined />}
                          />
                        </Space>
                      ))}
                      <Form.Item>
                        <Button
                          icon={<PlusOutlined />}
                          type="dashed"
                          block
                          style={{ maxWidth: "893px" }}
                          onClick={() => add()}
                        >
                          Add a Text Field
                        </Button>
                      </Form.Item>
                    </>
                  )}
                </Form.List>

                <Form.Item>
                  <Button type="primary" htmlType="submit">
                    Add Now
                  </Button>
                </Form.Item>
              </Form>
            )}
            {select == "textarea" && (
              <Form
                form={form}
                onFinish={onFinish}
                initialValues={{ text: [{}] }}
              >
                <Form.Item
                  name={"subcategory"}
                  label="Enter Subcategory"
                  style={{ maxWidth: "893px" }}
                  rules={[
                    {
                      required: true,
                      message: "please enter your subcategory",
                    },
                    { whitespace: true },
                  ]}
                  hasFeedback
                >
                  <Select
                    onChange={handleChangeValue}
                    options={subcategory.map((item) => ({
                      value: item.name,
                      label: item.name,
                    }))}
                  />
                </Form.Item>

                <Form.List name={"textarea"}>
                  {(fields, { add, remove }) => (
                    <>
                      {fields.map((field, index) => (
                        <Space
                          key={field.key}
                          direction="horizontal"
                          className="flex flex-row items-start "
                          style={{ position: "relative", marginRight: "13px" }}
                        >
                          <Form.Item
                            name={[field.name, "label"]}
                            label={`Add Field - ${index + 1}`}
                            rules={[
                              { required: true, message: "please add a Field" },
                              { whitespace: false },
                              {
                                min: 3,
                                message: "field must be at least 3 characters",
                              },
                            ]}
                            hasFeedback
                          >
                            <Input
                              placeholder="label Name"
                              rules={[
                                {
                                  required: true,
                                  message: "please add a Field",
                                },
                                { whitespace: false },
                                {
                                  min: 3,
                                  message:
                                    "field must be at least 3 characters",
                                },
                              ]}
                            />
                          </Form.Item>
                          <Form.Item
                            name={[field.name, "parameter"]}
                            rules={[{ whitespace: true }]}
                            hasFeedback
                          >
                            <Input
                              placeholder="parameter"
                              rules={[
                                {
                                  required: true,
                                  message: "please add a Field",
                                },
                                { whitespace: false },
                                {
                                  min: 3,
                                  message:
                                    "field must be at least 3 characters",
                                },
                              ]}
                            />
                          </Form.Item>
                          <Form.Item
                            name={[field.name, "name"]}
                            rules={[{ whitespace: true }]}
                            hasFeedback
                          >
                            <Input
                              placeholder="name"
                              rules={[
                                {
                                  required: true,
                                  message: "please add a Field",
                                },
                                { whitespace: false },
                                {
                                  min: 3,
                                  message:
                                    "field must be at least 3 characters",
                                },
                              ]}
                            />
                          </Form.Item>
                          <Button
                            danger
                            onClick={() => remove(field.name)}
                            // style={{ marginTop: "-60px" }}
                            icon={<DeleteOutlined />}
                          />
                        </Space>
                      ))}
                      <Form.Item>
                        <Button
                          icon={<PlusOutlined />}
                          type="dashed"
                          block
                          style={{ maxWidth: "893px" }}
                          onClick={() => add()}
                        >
                          Add a Text Field
                        </Button>
                      </Form.Item>
                    </>
                  )}
                </Form.List>

                <Form.Item>
                  <Button type="primary" htmlType="submit">
                    Add Now
                  </Button>
                </Form.Item>
              </Form>
            )}
          </div>
        ) : (
          <Loading />
        )}
      </div>
      <div className="container shadow-lg">
        <div className="no-scrollbar mt-5 overflow-x-auto rounded-lg shadow">
          <table className="w-full min-w-[500px] text-left rtl:text-right">
            <thead className="bg-[#20C5F2]">
              <tr className="flex w-full justify-between gap-2">
                {[
                  "#",
                  "subcategory",
                  "options",
                  "type",
                  "name",
                  "label",
                  "Action",
                ].map((title, i) => (
                  <th
                    key={i}
                    scope="col"
                    className={`flex items-center justify-center py-3 font-medium w-${i === 0 ? "14" : i === 1 ? "28" : i === 2 ? "32" : i === 3 ? "48" : i === 4 ? "52" : i === 5 ? "40" : "32"}`}
                  >
                    {title}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {field?.map((fieldData, i) => (
                <FieldData
                  key={fieldData.id}
                  {...fieldData}
                  {...{ deleteAds }}
                  {...{ editads }}
                  index={i}
                  id={fieldData._id}
                />
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AddFields;
