import React from "react";
import Head from "next/head";
import { Menu } from "antd";
import { AppstoreOutlined, InboxOutlined } from "@ant-design/icons";
import { useRouter } from "next/dist/client/router";

const Wrapper = ({ children }: any) => {
  const { push } = useRouter();
  return (
    <>
      <Head>
        <title> Fabelio Scrapper </title>
      </Head>
      <Menu mode="horizontal" onClick={(e) => push(e.key)}>
        <Menu.Item key="/" icon={<InboxOutlined />}>
          Add Product
        </Menu.Item>
        <Menu.Item key="/products" icon={<AppstoreOutlined />}>
          List Product
        </Menu.Item>
      </Menu>
      {children}
    </>
  );
};

export default Wrapper;
