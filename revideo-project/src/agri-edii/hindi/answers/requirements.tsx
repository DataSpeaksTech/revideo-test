import {
  Audio,
  Circle,
  Img,
  Layout,
  Polygon,
  Rect,
  Txt,
  Video,
  View2D,
} from "@revideo/2d";

// import jsonData from "../event.json";
//import jsonData from "./formatted_agri_loss.json";

import { all, createRef, createSignal, tween, waitFor } from "@revideo/core";

function* requirementsHindi(view: View2D,videoJson : any) {

  var jsonData = videoJson
  console.log("=====>>>>>>>>>>>>>>>>>"+jsonData)
  const agricultureImgRef = createRef<Img>();
  const rectRef = createRef<Rect>();

  const agricultureCircleRef = createRef<Circle>();

  const titleTxtRef = createRef<Txt>();

  const rectRef1 = createRef<Rect>();
  const rectRef2 = createRef<Rect>();
  const rectRef3 = createRef<Rect>();
  const rectRef4 = createRef<Rect>();
  const rectRef5 = createRef<Rect>();

  const txtRef1 = createRef<Txt>();
  const txtRef2 = createRef<Txt>();
  const txtRef3 = createRef<Txt>();
  const txtRef4 = createRef<Txt>();
  const txtRef5 = createRef<Txt>();

  const annualTxtRef = createRef<Txt>();

  const QuestionFarmerVideoRef = createRef<Video>();
  const AnswerFarmerVideoRef = createRef<Video>();

  const everythingLayoutRef1 = createRef<Layout>();
  const everythingLayoutRef2 = createRef<Layout>();
  const everythingLayoutRef3 = createRef<Layout>();
  const bubbleLayoutRef1 = createRef<Layout>();
  const bubbleLayoutRef2 = createRef<Layout>();

  const totalAnnualCostSignal = createSignal(0);
  const totalAnnualCostCircleRef = createRef<Circle>();
  const chatBubbleRef1 = createRef<Circle>();
  const chatBubbleRef2 = createRef<Circle>();
  const txtRef = createRef<Txt>();
  const chatTxtRef1 = createRef<Txt>();
  const chatTxtRef2 = createRef<Txt>();
  const polygonRef1 = createRef<Polygon>();
  const polygonRef2 = createRef<Polygon>();

  // const fullText = "To start your agricultural implements business";
  // const duration = 2;
  // const charDuration = duration / fullText.length;

  // const titleSignal = createSignal("");

  view.fontFamily("outfit");

  const bgImageRef = createRef<Img>();

  yield view.add(
    <Layout ref={everythingLayoutRef1} scale={2} y={200}>
      <Img
        opacity={1}
        ref={bgImageRef}
        src={"/images/agri-edii-images/farm-bg.jpg"}
        width={1920}
      />
      <Video
        opacity={1}
        loop
        ref={AnswerFarmerVideoRef}
        src={"/farmer-b-preview.webm"}
        size={["75%", "75%"]}
        x={-600}
        y={120}
      />
      <Video
        opacity={1}
        loop
        ref={QuestionFarmerVideoRef}
        src={"/farmer-a-preview.webm"}
        size={["75%", "75%"]}
        x={300}
        y={120}
        scaleX={-1}
      />
    </Layout>
  );

  yield view.add(
    <Layout ref={everythingLayoutRef2}>
      <Rect
        ref={rectRef1}
        opacity={0}
        y={-300}
        x={1360}
        // width={700}
        width={
          jsonData.json_response.video.scenes[1].variable_value.bullet_points[0]
            .text.length * 30
        }
        padding={[0, 400, 0, 400]}
        height={100}
        radius={15}
        fill={"blue"}
      >
        <Txt
          ref={txtRef1}
          text={
            jsonData.json_response.video.scenes[1].variable_value
              .bullet_points[0].text
          }
          fontSize={50}
          fontWeight={400}
          letterSpacing={3}
          fill={"white"}
          textAlign={"center"}
        />
      </Rect>

      <Rect
        ref={rectRef2}
        opacity={0}
        y={-150}
        x={1360}
        // width={700}
        width={
          jsonData.json_response.video.scenes[1].variable_value.bullet_points[1]
            .text.length * 30
        }
        height={100}
        padding={[0, 400, 0, 400]}
        radius={15}
        fill={"blue"}
      >
        <Txt
          ref={txtRef2}
          text={
            jsonData.json_response.video.scenes[1].variable_value
              .bullet_points[1].text
          }
          fontSize={50}
          fontWeight={400}
          letterSpacing={3}
          fill={"white"}
        />
      </Rect>

      <Rect
        ref={rectRef3}
        opacity={0}
        y={0}
        x={1360}
        // width={700}
        width={
          jsonData.json_response.video.scenes[1].variable_value.bullet_points[2]
            .text.length * 30
        }
        height={100}
        padding={[0, 400, 0, 400]}
        radius={15}
        fill={"blue"}
      >
        <Txt
          ref={txtRef3}
          text={
            jsonData.json_response.video.scenes[1].variable_value
              .bullet_points[2].text
          }
          fontSize={50}
          fontWeight={400}
          letterSpacing={3}
          fill={"white"}
        />
      </Rect>

      <Rect
        ref={rectRef4}
        opacity={0}
        x={1360}
        y={150}
        // width={700}
        width={
          jsonData.json_response.video.scenes[1].variable_value.bullet_points[3]
            .text.length * 30
        }
        height={100}
        padding={[0, 400, 0, 400]}
        radius={15}
        fill={"blue"}
      >
        <Txt
          ref={txtRef4}
          text={
            jsonData.json_response.video.scenes[1].variable_value
              .bullet_points[3].text
          }
          fontSize={50}
          fontWeight={400}
          letterSpacing={3}
          fill={"white"}
        />
      </Rect>

      <Rect
        ref={rectRef5}
        opacity={0}
        x={1360}
        y={300}
        // width={700}
        width={
          jsonData.json_response.video.scenes[1].variable_value.bullet_points[4]
            .text.length * 30
        }
        height={100}
        padding={[0, 400, 0, 400]}
        radius={15}
        fill={"blue"}
      >
        <Txt
          ref={txtRef5}
          text={
            jsonData.json_response.video.scenes[1].variable_value
              .bullet_points[4].text
          }
          fontSize={50}
          fontWeight={400}
          letterSpacing={3}
          fill={"white"}
        />
      </Rect>
    </Layout>
  );

  yield view.add(
    <Layout ref={bubbleLayoutRef1}>
      <Circle
        ref={chatBubbleRef1}
        size={350}
        x={300}
        y={-100}
        opacity={0}
        fill={"blue"}
        layout
        padding={100}
        alignItems={"center"}
        zIndex={1}
      >
        <Txt
          width={400}
          text={"PPF"}
          ref={chatTxtRef1}
          fontSize={50}
          fontWeight={500}
          fill={"white"}
          textAlign={"center"}
          textWrap
        />
      </Circle>
    </Layout>
  );
  yield view.add(
    <Layout ref={bubbleLayoutRef2}>
      <Circle
        ref={chatBubbleRef2}
        size={350}
        x={300}
        y={300}
        opacity={0}
        fill={"blue"}
        layout
        padding={100}
        alignItems={"center"}
        zIndex={1}
      >
        <Txt
          width={400}
          text={"ESI"}
          ref={chatTxtRef2}
          fontSize={50}
          fontWeight={500}
          fill={"white"}
          textAlign={"center"}
          textWrap
        />
      </Circle>
    </Layout>
  );

  yield view.add(
    <Layout ref={everythingLayoutRef3} opacity={0}>
      <Rect
        ref={rectRef}
        opacity={0.5}
        x={300}
        y={-400}
        width={0}
        height={110}
        padding={[0, 400, 0, 400]}
        radius={15}
        fill={"blue"}
      >
        <Txt
          ref={txtRef}
          fontSize={50}
          fontWeight={400}
          letterSpacing={3}
          fill={"white"}
        />
      </Rect>

      <Circle
        ref={totalAnnualCostCircleRef}
        fill={"blue"}
        size={150}
        x={300}
        y={100}
        opacity={0}
      >
        <Txt
          ref={annualTxtRef}
          scale={0}
          fontSize={70}
          fill={"white"}
          letterSpacing={4}
          fontWeight={500}
          text={() => `₹${totalAnnualCostSignal().toFixed(2)} लाख`}
        />
      </Circle>
    </Layout>
  );

  AnswerFarmerVideoRef().play();

  yield* all(
    everythingLayoutRef1().position.y(200, 2),
    everythingLayoutRef1().position.x(600, 2)
  );

  yield* all(rectRef1().opacity(1, 1), rectRef1().x(400, 1));
  yield* all(rectRef2().opacity(1, 1), rectRef2().x(400, 1));
  yield* all(rectRef3().opacity(1, 1), rectRef3().x(400, 1));
  yield* all(rectRef4().opacity(1, 1.2), rectRef4().x(400, 1.2));
  yield* all(rectRef5().opacity(1, 2), rectRef5().x(400, 2));

  yield* everythingLayoutRef2().opacity(0, 0.5);

  yield* all(
    everythingLayoutRef3().opacity(1, 0.5),
    txtRef().text(jsonData.json_response.video.scenes[1].text, 2.5),
    rectRef().width(
      jsonData.json_response.video.scenes[1].text.length * 30,
      2.5
    ),
    rectRef().opacity(1, 2.5)
  );

  yield* all(
    bubbleLayoutRef1().opacity(0, 0.5),
    bubbleLayoutRef2().opacity(0, 0.5)
  );

  yield* all(
    totalAnnualCostSignal(0, 0).to(
      jsonData.json_response.video.scenes[1].variable_value.numeric_value
        .total_annual_cost,
      3
    ),
    annualTxtRef().scale(1, 1),
    totalAnnualCostCircleRef().size(500, 1),
    totalAnnualCostCircleRef().opacity(1, 1)
  );

  yield* waitFor(1);

  AnswerFarmerVideoRef().pause();

  yield* everythingLayoutRef3().opacity(0, 0.5);
}

export default requirementsHindi;
