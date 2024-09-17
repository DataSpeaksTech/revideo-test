import {
  Circle,
  Img,
  Layout,
  Line,
  Polygon,
  Txt,
  Video,
  View2D,
} from "@revideo/2d";

import { all, createRef, createSignal, tween, waitFor } from "@revideo/core";
// import jsonData from "./formatted_agri_loss.json";

function* variablecost(view: View2D, videoJson: any) {
  var jsonData = videoJson;
  const triangleTxtRef = createRef<Txt>();
  const variableCostTxtRef = createRef<Txt>();
  const triangleRef = createRef<Polygon>();

  const accidentCircleRef = createRef<Circle>();
  const totalDisablementCircleRef = createRef<Circle>();
  const hospitalizationCircleRef = createRef<Circle>();

  const accidentLineRef = createRef<Line>();
  const totalDisablementLineRef = createRef<Line>();
  const hospitalizationLineRef = createRef<Line>();

  const accidentImgRef = createRef<Img>();
  const totalDisablementImgRef = createRef<Img>();
  const hospitalizationImgRef = createRef<Img>();

  const everythingLayoutRef1 = createRef<Layout>();

  const numberSignal = createSignal(0);
  const variableCostSignal = createSignal("");

  view.fontFamily("outfit");

  const bgImageRef = createRef<Img>();
  const QuestionFarmerVideoRef = createRef<Video>();
  const AnswerFarmerVideoRef = createRef<Video>();

  yield view.add(
    <Layout ref={everythingLayoutRef1} scale={2} y={200} x={600}>
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
    <Layout ref={everythingLayoutRef1}>
      <Circle
        ref={triangleRef}
        size={300}
        opacity={0}
        stroke={"blue"}
        fill={"blue"}
        lineWidth={10}
        y={90}
        x={-300}
      >
        <Txt
          opacity={0}
          y={20}
          ref={triangleTxtRef}
          fontSize={50}
          letterSpacing={3}
          textAlign={"center"}
          fill={"white"}
          fontWeight={700}
          text={() => `₹${numberSignal().toFixed(2)}\nलाख`}
        />
      </Circle>

      <Txt
        ref={variableCostTxtRef}
        fontSize={60}
        textAlign={"center"}
        fill={"blue"}
        fontWeight={700}
        y={300}
        x={-300}
      />

      <Circle
        ref={accidentCircleRef}
        size={300}
        endAngle={0}
        stroke={"blue"}
        lineWidth={10}
        y={-350}
        x={-300}
        zIndex={1}
      >
        <Img
          ref={accidentImgRef}
          src={"images/agri-edii-images/raw.png"}
          opacity={0}
          width={295}
          radius={500}
        />
      </Circle>

      <Circle
        ref={totalDisablementCircleRef}
        size={300}
        endAngle={0}
        stroke={"blue"}
        lineWidth={10}
        x={100}
        y={-100}
      >
        <Img
          ref={totalDisablementImgRef}
          src={"images/agri-edii-images/other.png"}
          opacity={0}
          width={295}
          radius={500}
        />
      </Circle>

      <Circle
        ref={hospitalizationCircleRef}
        size={300}
        endAngle={0}
        stroke={"blue"}
        lineWidth={10}
        x={-700}
        y={-100}
      >
        <Img
          ref={hospitalizationImgRef}
          opacity={0}
          src={"images/agri-edii-images/utility.png"}
          width={290}
          radius={500}
        />
      </Circle>

      <Line
        ref={accidentLineRef}
        lineWidth={10}
        stroke={"blue"}
        points={[
          [-300, -60],
          [-300, -60],
        ]}
      />

      <Line
        ref={totalDisablementLineRef}
        lineWidth={10}
        stroke={"blue"}
        points={[
          [-300, 50],
          [-300, 50],
        ]}
      />

      <Line
        ref={hospitalizationLineRef}
        lineWidth={10}
        stroke={"blue"}
        points={[
          [-200, 50],
          [-200, 50],
        ]}
      />
    </Layout>
  );

  const variableCostText = "वेरिएबल कॉस्ट्स";

  // Play the video
  AnswerFarmerVideoRef().play();

  // Update layout position
  yield* everythingLayoutRef1().position.x(600, 0.5);

  // Update the text for variable costs
  yield* variableCostTxtRef().text(variableCostText, 0.1);

  // Show the triangle
  yield* triangleRef().opacity(1, 0.1);

  // Animate accident line and circle
  yield* all(
    accidentLineRef().points(
      [
        [-300, -60],
        [-300, -200],
      ],
      0.4
    ),
    accidentCircleRef().endAngle(360, 0.5)
  );

  yield* all(accidentImgRef().opacity(1, 0.5));

  // Animate total disablement line and circle
  yield* all(
    totalDisablementLineRef().points(
      [
        [-200, 50],
        [-40, -40],
      ],
      0.4
    ),
    totalDisablementCircleRef().endAngle(360, 0.5),
    totalDisablementImgRef().opacity(1, 0.5)
  );

  // Animate hospitalization line and circle
  yield* all(
    hospitalizationLineRef().points(
      [
        [-300, 50],
        [-565, -40],
      ],
      0.5
    ),
    hospitalizationCircleRef().endAngle(360, 0.5),
    hospitalizationImgRef().opacity(1, 0.5)
  );

  yield* triangleTxtRef().opacity(1, 0.5);

  // Use JSON data to set the variable cost value
  yield* tween(2, (value) => {
    numberSignal(
      value *
        jsonData.json_response.video.scenes[8].variable_value.numeric_value
          .variable_cost
    );
  });

  yield* waitFor(1.5);

  yield* everythingLayoutRef1().opacity(0, 0.8);
}

export default variablecost;
