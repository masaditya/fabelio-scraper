import { addDoc, collection } from "@firebase/firestore";
import { Button, Card, Col, Input, Layout, Row } from "antd";
import type { NextPage } from "next";
import { useRouter } from "next/dist/client/router";
import Head from "next/head";
import { useCallback, useEffect, useState } from "react";
import { db } from "../firebase";

const Home: NextPage = () => {
  const [link, setLink] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const onSubmit = useCallback(async () => {
    setLoading(true);
    const raw = await fetch(`/api/scrap?url=${link}`);
    const data = await raw.json();
    await addData(data);
    setLoading(false);
    setLink("");
    setTimeout(() => {
      router.push("/products");
    }, 1000);
  }, [link, router]);

  const addData = async (data: {
    image: string;
    url: string;
    description: string;
    price: string;
  }) => {
    const docRef = await addDoc(collection(db, "data"), data);
    console.log(docRef);
  };

  return (
    <Layout>
      <Row style={{ minHeight: "100vh" }} align="middle" justify="center">
        <Col xs={24} md={12} lg={6}>
          <Card
            style={{ textAlign: "center" }}
            title={`Input URL Product Fabelio`}
          >
            <Input
              style={{ marginBottom: 20 }}
              onChange={(e) => setLink(e.target.value)}
              value={link}
              placeholder="https://fabelio.com/...."
              disabled={loading}
            />
            <Button
              disabled={loading}
              type="primary"
              onClick={onSubmit}
              loading={loading}
              block
            >
              Submit
            </Button>
          </Card>
        </Col>
      </Row>
    </Layout>
  );
};

export default Home;
