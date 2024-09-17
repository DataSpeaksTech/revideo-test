import {
  Circle,
  Img,
  Layout,
  Polygon,
  Rect,
  Txt,
  Video,
  View2D,
} from "@revideo/2d";

import { all, createRef, createSignal, tween, waitFor } from "@revideo/core";

// import jsonData from "../event.json";
// import jsonData from "../formatted_agri_loss.json";

function* question1(view: View2D, videoJson: any) {
  var jsonData = videoJson;

  const QuestionFarmerVideoRef = createRef<Video>();
  const AnswerFarmerVideoRef = createRef<Video>();
  const chatBubbleRef = createRef<Rect>();
  const chatTxtRef = createRef<Txt>();

  const everythingLayoutRef1 = createRef<Layout>();
  const everythingLayoutRef2 = createRef<Layout>();
  const rectRef = createRef<Polygon>();

  // const fullText = jsonData.json_response.video.scenes[1].question;

  const titleSignal = createSignal("");

  view.fontFamily("outfit");

  const bgImageRef = createRef<Img>();

  yield view.add(
    <Layout ref={everythingLayoutRef1}>
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
        x={-300}
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
        ref={chatBubbleRef}
        width={800}
        height={400}
        x={-50}
        y={-300}
        opacity={0}
        fill={"white"}
        layout
        padding={100}
        alignItems={"center"}
        zIndex={1}
      >
        <Txt
          width={700}
          ref={chatTxtRef}
          fontSize={50}
          fontWeight={500}
          fill={"blue"}
          textAlign={"center"}
          textWrap
        />
      </Circle>
      <Polygon
        ref={rectRef}
        opacity={0}
        y={-180}
        x={280}
        sides={3}
        size={160}
        fill={"white"}
        rotation={15}
      />
    </Layout>
  );

  QuestionFarmerVideoRef().play();

  yield* all(
    everythingLayoutRef1().scale(2, 1),
    everythingLayoutRef1().position.y(200, 1),
    AnswerFarmerVideoRef().position.x(-600, 1)
  );

  yield* all(
    chatBubbleRef().opacity(1, 1),
    rectRef().opacity(1, 1),
    chatTxtRef().text(jsonData.json_response.video.scenes[1].question, 4)
  );

  QuestionFarmerVideoRef().pause();

  yield* everythingLayoutRef2().opacity(0, 0.75);
}

export default question1;
