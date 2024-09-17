import { Circle, Layout, Txt, Audio, View2D, Img, Video } from "@revideo/2d";
import { all, createRef, createSignal, waitFor } from "@revideo/core";
// import jsonData from "../event.json";
// import jsonData from "../../../MainProject/event.json";

function* funding(view: View2D, videoJson: any) {
  var jsonData = videoJson;
  const circle1 = createRef<Circle>();
  const circle2 = createRef<Circle>();  
  const mergedCircle = createRef<Circle>();

  const yourContributionCircleTxtRef = createRef<Txt>();
  const bankFinanceCircleTxtRef = createRef<Txt>();
  const yourContributionTxtRef = createRef<Txt>();
  const bankFinanceTxtRef = createRef<Txt>();
  const fundingTxtRef = createRef<Txt>();

  const yourContributionSignal = createSignal(0);
  const bankFinanceSignal = createSignal(0);

  const everythingLayoutRef1 = createRef<Layout>();
  const everythingLayoutRef2 = createRef<Layout>();

  view.fontFamily("outfit");

  const bgImageRef = createRef<Img>();

  const QuestionFarmerVideoRef = createRef<Video>();
  const AnswerFarmerVideoRef = createRef<Video>();

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
      <Txt
        // text={"The funding will come from two sources"}
        ref={fundingTxtRef}
        fontSize={50}
        x={300}
        fill={"blue"}
        fontWeight={500}
        letterSpacing={3}
      />

      <Circle ref={circle1} scale={0} size={400} x={50} fill={"blue"}>
        <Txt
          ref={yourContributionCircleTxtRef}
          fontSize={50}
          letterSpacing={3}
          fontWeight={500}
          fill={"white"}
          text={() => `₹${yourContributionSignal().toFixed(2)} lakhs`}
        />
      </Circle>

      <Txt
        ref={yourContributionTxtRef}
        text={
          jsonData.json_response.video.scenes[3].variable_value.bullet_points[0]
            .text
        }
        x={50}
        y={250}
        opacity={0}
        fontSize={50}
        letterSpacing={3}
        fontWeight={500}
        fill={"blue"}
      />

      <Circle ref={circle2} scale={0} size={400} x={600} fill={"blue"}>
        <Txt
          ref={bankFinanceCircleTxtRef}
          fontSize={50}
          letterSpacing={3}
          fontWeight={500}
          fill={"white"}
          text={() => `₹${bankFinanceSignal().toFixed(2)} lakhs`}
        />
      </Circle>

      <Txt
        ref={bankFinanceTxtRef}
        text={
          jsonData.json_response.video.scenes[3].variable_value.bullet_points[1]
            .text
        }
        x={600}
        y={250}
        opacity={0}
        fontSize={50}
        letterSpacing={3}
        fontWeight={500}
        fill={"blue"}
      />

      <Circle ref={mergedCircle} x={300} fill={"blue"} scale={0}>
        <Txt
          text={`${jsonData.json_response.video.scenes[3].variable_value.bullet_points[2].text}\n₹${jsonData.json_response.video.scenes[3].variable_value.numeric_value.total_project_cost} lakhs`}
          opacity={1}
          fontSize={40}
          letterSpacing={2}
          fontWeight={500}
          fill={"white"}
          textAlign={"center"}
          lineHeight={60}
        />
      </Circle>
    </Layout>
  );

  AnswerFarmerVideoRef().play();
  yield* everythingLayoutRef1().position.x(600, 0.5);

  yield* all(
    fundingTxtRef().text(jsonData.json_response.video.scenes[3].text, 1.5)
  );

  yield* fundingTxtRef().opacity(0, 0.5);

  yield* all(
    circle1().scale(1, 2),
    yourContributionSignal(0, 0).to(
      jsonData.json_response.video.scenes[3].variable_value.numeric_value
        .my_contribution,
      2
    )
  );

  yield* yourContributionTxtRef().opacity(1, 1);

  yield* waitFor(0.3);

  yield* all(
    circle2().scale(1, 2),
    bankFinanceSignal(0, 0).to(
      jsonData.json_response.video.scenes[3].variable_value.numeric_value
        .bank_finance,
      2
    )
  );

  yield* bankFinanceTxtRef().opacity(1, 1);

  yield* waitFor(0.2);

  yield* all(
    circle1().x(200, 1),
    yourContributionCircleTxtRef().opacity(0, 1),
    yourContributionTxtRef().opacity(0, 0.5),
    circle2().x(200, 1),
    bankFinanceCircleTxtRef().opacity(0, 1),
    bankFinanceTxtRef().opacity(0, 0.5),
    mergedCircle().scale(1.2, 1.5),
    mergedCircle().size(500, 1.5)
  );

  yield* waitFor(2.5);

  AnswerFarmerVideoRef().pause();

  yield* everythingLayoutRef2().opacity(0, 0.8);
}

export default funding;
