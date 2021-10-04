import React, { useEffect, useState } from "react";

import { doc, getDoc } from "firebase/firestore";
import { db } from "../../firebase";
import { useRouter } from "next/dist/client/router";
import { Button, Col, Divider, Image, Layout, Row, Skeleton, Spin } from "antd";

const Detail = () => {
  const router = useRouter();
  const [data, setData] = useState<any>({});
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchDetail = async () => {
      // @ts-ignore
      const docRef = doc(db, "data", router.query.id);
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        setData(docSnap.data());
        console.log(docSnap.data());
        setLoading(false);
      } else {
        // doc.data() will be undefined in this case
        console.log("Dokumen tidak ditemukan!");
      }
    };
    if (router.query.id) fetchDetail();
  }, [router]);

  return (
    <Layout style={{ padding: 24, minHeight: "100vh" }}>
      <Spin spinning={loading} size="large">
        <Row gutter={16} justify="center" align="middle">
          <Col className="gutter-row" span={10}>
            {loading ? (
              <Skeleton.Image />
            ) : (
              <Image width={500} src={data.image} alt="product-image" />
            )}
          </Col>
          <Col className="gutter-row" span={10}>
            <Divider orientation="left">Description</Divider>
            <p>
              {data.description ||
                "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Beatae vero temporibus illo nulla, placeat velit animi? Earum odio eligendi temporibus ducimus, quo iusto repudiandae possimus harum suscipit sapiente voluptatibus quisquam? "}
            </p>
            <Divider orientation="left">Current Price</Divider>
            <h2>{data.price || "Rp. 0"}</h2>
            <Button target="_blank" href={data.url}>
              Go To Product
            </Button>
          </Col>
        </Row>
      </Spin>
    </Layout>
  );
};

export default Detail;
