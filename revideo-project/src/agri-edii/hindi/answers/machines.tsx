import {
  Audio,
  Circle,
  Img,
  Layout,
  Rect,
  Txt,
  Video,
  View2D,
} from "@revideo/2d";
// import jsonData from "../event.json";
// import jsonData from "./formatted_agri_loss.json";

import { all, createRef, waitFor } from "@revideo/core";

function* machines(view: View2D, videoJson: any) {
  var jsonData = videoJson;
  const lathesCircleRef = createRef<Circle>();
  const shapersCircleRef = createRef<Circle>();
  const grindersCircleRef = createRef<Circle>();
  const drillingCircleRef = createRef<Circle>();

  const lathesImgRef = createRef<Img>();
  const shapersImgRef = createRef<Img>();
  const grindersImgRef = createRef<Img>();
  const drillingImgRef = createRef<Img>();

  // const videoRef = createRef<Video>();

  const totalingRectRef = createRef<Rect>();

  const lathesRectRef = createRef<Rect>();
  const shapersRectRef = createRef<Rect>();
  const grindersRectRef = createRef<Rect>();
  const drillingRectRef = createRef<Rect>();

  const lathesTxtRef = createRef<Txt>();
  const shapersTxtRef = createRef<Txt>();
  const grindersTxtRef = createRef<Txt>();
  const drillingTxtRef = createRef<Txt>();

  const everythingLayoutRef1 = createRef<Layout>();
  const everythingLayoutRef2 = createRef<Layout>();

  const QuestionFarmerVideoRef = createRef<Video>();
  const AnswerFarmerVideoRef = createRef<Video>();

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
      <Circle
        ref={lathesCircleRef}
        x={0}
        y={-300}
        endAngle={0}
        opacity={1}
        size={360}
        lineWidth={10}
        stroke={"blue"}
        fill={"white"}
        zIndex={1}
      >
        <Img
          ref={lathesImgRef}
          src={"images/agri-edii-images/lathes.png"}
          opacity={0}
          radius={1000}
          size={340}
        />
      </Circle>

      <Rect
        ref={lathesRectRef}
        fill={"blue"}
        radius={10}
        width={
          jsonData.json_response.video.scenes[4].variable_value.bullet_points[0]
            .text.length * 30
        }
        padding={[0, 100, 0, 100]}
        height={70}
        x={0}
        y={-60}
        opacity={0}
      >
        <Txt
          ref={lathesTxtRef}
          text={
            jsonData.json_response.video.scenes[4].variable_value
              .bullet_points[0].text
          }
          fontSize={40}
          fontWeight={400}
          letterSpacing={3}
          fill={"white"}
        />
      </Rect>

      <Circle
        ref={shapersCircleRef}
        x={600}
        y={-300}
        endAngle={0}
        opacity={1}
        size={360}
        lineWidth={10}
        stroke={"blue"}
        fill={"white"}
        zIndex={1}
      >
        <Img
          ref={shapersImgRef}
          src={"images/agri-edii-images/shapers.png"}
          opacity={0}
          radius={1000}
          size={340}
        />
      </Circle>

      <Rect
        ref={shapersRectRef}
        fill={"blue"}
        radius={10}
        width={
          jsonData.json_response.video.scenes[4].variable_value.bullet_points[1]
            .text.length * 30
        }
        padding={[0, 100, 0, 100]}
        height={70}
        x={600}
        y={-60}
        opacity={0}
      >
        <Txt
          ref={shapersTxtRef}
          text={
            jsonData.json_response.video.scenes[4].variable_value
              .bullet_points[1].text
          }
          fontSize={40}
          fontWeight={400}
          letterSpacing={3}
          fill={"white"}
        />
      </Rect>

      <Circle
        ref={grindersCircleRef}
        x={0}
        y={230}
        endAngle={0}
        opacity={1}
        size={360}
        lineWidth={10}
        stroke={"blue"}
        fill={"white"}
        zIndex={1}
      >
        <Img
          ref={grindersImgRef}
          src={"images/agri-edii-images/grinder.png"}
          opacity={0}
          radius={1000}
          size={340}
        />
      </Circle>

      <Rect
        ref={grindersRectRef}
        fill={"blue"}
        radius={10}
        width={
          jsonData.json_response.video.scenes[4].variable_value.bullet_points[2]
            .text.length * 30
        }
        padding={[0, 100, 0, 100]}
        height={70}
        x={0}
        y={470}
        opacity={0}
      >
        <Txt
          ref={grindersTxtRef}
          text={
            jsonData.json_response.video.scenes[4].variable_value
              .bullet_points[2].text
          }
          fontSize={40}
          fontWeight={400}
          letterSpacing={3}
          fill={"white"}
        />
      </Rect>

      <Circle
        ref={drillingCircleRef}
        x={600}
        y={230}
        endAngle={0}
        opacity={1}
        size={360}
        lineWidth={10}
        stroke={"blue"}
        fill={"white"}
        zIndex={1}
      >
        <Img
          ref={drillingImgRef}
          src={"images/agri-edii-images/drilling.png"}
          opacity={0}
          radius={1000}
          size={340}
        />
      </Circle>

      <Rect
        ref={drillingRectRef}
        fill={"blue"}
        radius={10}
        width={
          jsonData.json_response.video.scenes[4].variable_value.bullet_points[3]
            .text.length * 30
        }
        padding={[0, 100, 0, 100]}
        height={70}
        x={600}
        y={470}
        opacity={0}
      >
        <Txt
          ref={drillingTxtRef}
          text={
            jsonData.json_response.video.scenes[4].variable_value
              .bullet_points[3].text
          }
          fontSize={40}
          fontWeight={400}
          letterSpacing={3}
          fill={"white"}
        />
      </Rect>

      <Rect
        ref={totalingRectRef}
        opacity={0}
        width={380}
        x={300}
        y={30}
        height={85}
        radius={15}
        fill={"blue"}
      >
        <Txt
          text={`₹ ${jsonData.json_response.video.scenes[4].variable_value.numeric_value.total_machines_cost} लाख`}
          fontSize={50}
          fontWeight={500}
          letterSpacing={3}
          fill={"white"}
        />
      </Rect>
    </Layout>
  );

  AnswerFarmerVideoRef().play();

  yield* everythingLayoutRef1().position.x(600, 1);

  yield* all(
    lathesCircleRef().endAngle(360, 1),
    lathesImgRef().opacity(1, 1.5),
    lathesRectRef().opacity(1, 1.5)
  );

  yield* all(
    // lathesCircleRef().x(-450, 0.5),
    // lathesCircleRef().y(-270, 0.5),
    shapersCircleRef().endAngle(360, 1),
    shapersImgRef().opacity(1, 1),
    shapersRectRef().opacity(1, 1)
  );

  yield* all(
    // shapersCircleRef().x(450, 0.5),
    // shapersCircleRef().y(-270, 0.5),
    grindersCircleRef().endAngle(360, 1),
    grindersImgRef().opacity(1, 1),
    grindersRectRef().opacity(1, 1)
  );

  yield* all(
    // grindersCircleRef().x(-450, 0.5),
    // grindersCircleRef().y(270, 0.5),
    drillingCircleRef().endAngle(360, 1),
    drillingImgRef().opacity(1, 1.5),
    drillingRectRef().opacity(1, 1.5)
  );

  yield* all(
    totalingRectRef().opacity(1, 1.3),
    // drillingCircleRef().x(450, 0.5),
    // drillingCircleRef().y(270, 0.5)
    waitFor(3)
  );

  yield* everythingLayoutRef2().opacity(0, 0.8);
}

export default machines;
