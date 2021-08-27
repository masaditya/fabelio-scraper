import { Table, Layout, Image, Button } from "antd";
import type { NextPage } from "next";
import { useRouter } from "next/dist/client/router";
import Head from "next/head";
import { useEffect, useState } from "react";
import { collection, getDocs, addDoc } from "firebase/firestore";
import { db } from "../firebase";

const Products: NextPage = () => {
  const [product, setProduct] = useState<any[]>([]);
  const router = useRouter();

  useEffect(() => {
    const fetchData = async () => {
      const querySnapshot = await getDocs(collection(db, "data"));
      let data: any[] = [];
      querySnapshot.forEach((doc) => {
        data.push({ id: doc.id, ...doc.data() });
      });
      setProduct(data);
    };
    fetchData();
  }, []);

  

  const columns = [
    {
      title: "Image",
      dataIndex: "image",
      key: "image",
      render: (img: string) => <Image src={img} />,
    },
    {
      title: "Price",
      dataIndex: "price",
      key: "price",
    },
    {
      title: "Description",
      dataIndex: "description",
      key: "description",
    },
    {
      title: "Detail",
      dataIndex: "id",
      key: "id",
      render: (id: string) => (
        <Button onClick={() => router.push(`/products/${id}`)}> Detail </Button>
      ),
    },
  ];

  return (
    <Layout style={{ padding: 24, minHeight: "100vh" }}>
      <Table columns={columns} dataSource={product} rowKey="id" />
    </Layout>
  );
};

export default Products;
