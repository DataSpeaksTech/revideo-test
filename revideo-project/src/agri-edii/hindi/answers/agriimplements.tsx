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

import { tween, all, createRef, createSignal, waitFor } from "@revideo/core";

// Import JSON data
// import jsonData from "./formatted_agri_loss.json";

function* agriimplements(view: View2D, videoJson: any) {
  var jsonData = videoJson;
  // Create references for circles, images, rectangles, and texts
  const selfinjuryCircleRef = createRef<Circle>();
  const sucideCircleRef = createRef<Circle>();
  const addictionCircleRef = createRef<Circle>();
  const dangerousCircleRef = createRef<Circle>();
  const foreignCircleRef = createRef<Circle>();

  const carefulPlanningTxtRef = createRef<Txt>();
  const budgetingTxtRef = createRef<Txt>();
  const rightManpowerTxtRef = createRef<Txt>();
  const machineryTxtRef = createRef<Txt>();
  const financialBackingTxtRef = createRef<Txt>();

  const carefulPlanningImgRef = createRef<Img>();
  const budgetingImgRef = createRef<Img>();
  const rightManpowerImgRef = createRef<Img>();
  const machineryImgRef = createRef<Img>();
  const financialBackingImgRef = createRef<Img>();

  const carefulPlanningRectRef = createRef<Rect>();
  const budgetingRectRef = createRef<Rect>();
  const rightManpowerRectRef = createRef<Rect>();
  const machineryRectRef = createRef<Rect>();
  const financialBackingRectRef = createRef<Rect>();
  const everythingLayoutRef1 = createRef<Layout>();
  const everythingLayoutRef2 = createRef<Layout>();
  const textRectRef = createRef<Rect>();
  const textRectRef1 = createRef<Rect>();
  const profitableTxtRef = createRef<Txt>();

  // Texts and durations
  const fullText1 =
    "Starting an agricultural implements\nmanufacturing business involves";
  const duration1 = 3; // Total duration for the entire text animation
  const charDuration1 = duration1 / fullText1.length; // Duration per character

  const fullText2 = "कृषि उपकरण निर्माण बिजनेस शुरू करने में ";
  const duration2 = 3; // Total duration for the entire text animation
  const charDuration2 = duration2 / fullText2.length; // Duration per character

  // Create signals for text
  const textSignal1 = createSignal("");
  const textSignal2 = createSignal("");

  view.fontFamily("outfit");

  const bgImageRef = createRef<Img>();
  const QuestionFarmerVideoRef = createRef<Video>();
  const AnswerFarmerVideoRef = createRef<Video>();

  // Add layout and elements to the view
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
        opacity={1}
        ref={textRectRef1}
        fill={"#f0f0f0"}
        radius={20}
        x={300}
        padding={20}
      >
        <Txt
          text={textSignal2}
          fontSize={50}
          fontWeight={700}
          fontFamily={"outfit"}
          fill={"blue"}
        />
      </Rect>

      <Circle
        ref={selfinjuryCircleRef}
        size={250}
        endAngle={0}
        stroke={"blue"}
        lineWidth={10}
        x={-200}
        y={-300}
      >
        <Img
          ref={carefulPlanningImgRef}
          src={"/images/agri-edii-images/planning.png"}
          opacity={0}
          width={240}
          radius={400}
        />
        <Rect
          ref={carefulPlanningRectRef}
          fill={"blue"}
          radius={10}
          width={250}
          height={60}
          y={180}
          opacity={0}
        >
          <Txt
            ref={carefulPlanningTxtRef}
            text={
              jsonData.json_response.video.scenes[9].variable_value
                .bullet_points[0].text
            }
            fontSize={40}
            fontWeight={400}
            letterSpacing={3}
            fill={"white"}
          />
        </Rect>
      </Circle>
      <Circle
        ref={sucideCircleRef}
        size={250}
        endAngle={0}
        stroke={"blue"}
        lineWidth={10}
        x={200}
        y={-300}
      >
        <Img
          ref={budgetingImgRef}
          src={"/images/agri-edii-images/budgeting.png"}
          opacity={0}
          width={240}
          radius={400}
        />
        <Rect
          ref={budgetingRectRef}
          fill={"blue"}
          radius={10}
          width={300}
          height={60}
          y={180}
          opacity={0}
        >
          <Txt
            ref={budgetingTxtRef}
            text={
              jsonData.json_response.video.scenes[9].variable_value
                .bullet_points[1].text
            }
            fontSize={40}
            fontWeight={400}
            letterSpacing={3}
            fill={"white"}
          />
        </Rect>
      </Circle>
      <Circle
        ref={addictionCircleRef}
        size={250}
        endAngle={0}
        stroke={"blue"}
        lineWidth={10}
        x={600}
        y={-300}
      >
        <Img
          ref={rightManpowerImgRef}
          src={"/images/agri-edii-images/manpower.png"}
          opacity={0}
          width={240}
          radius={400}
        />
        <Rect
          ref={rightManpowerRectRef}
          fill={"blue"}
          radius={10}
          width={300}
          height={60}
          y={180}
          opacity={0}
        >
          <Txt
            ref={rightManpowerTxtRef}
            text={
              jsonData.json_response.video.scenes[9].variable_value
                .bullet_points[2].text
            }
            fontSize={40}
            fontWeight={400}
            letterSpacing={3}
            fill={"white"}
          />
        </Rect>
      </Circle>
      <Circle
        ref={dangerousCircleRef}
        size={250}
        endAngle={0}
        stroke={"blue"}
        lineWidth={10}
        x={0}
        y={100}
      >
        <Img
          ref={machineryImgRef}
          src={"/images/agri-edii-images/machinery.png"}
          opacity={0}
          width={240}
          radius={400}
        />
        <Rect
          ref={machineryRectRef}
          fill={"blue"}
          radius={10}
          width={300}
          height={60}
          y={180}
          opacity={0}
        >
          <Txt
            ref={machineryTxtRef}
            text={
              jsonData.json_response.video.scenes[9].variable_value
                .bullet_points[3].text
            }
            fontSize={40}
            fontWeight={400}
            letterSpacing={3}
            fill={"white"}
          />
        </Rect>
      </Circle>
      <Circle
        ref={foreignCircleRef}
        size={250}
        endAngle={0}
        stroke={"blue"}
        lineWidth={10}
        x={400}
        y={100}
      >
        <Img
          ref={financialBackingImgRef}
          src={"/images/agri-edii-images/financialBacking.png"}
          opacity={0}
          width={240}
          radius={400}
        />
        <Rect
          ref={financialBackingRectRef}
          fill={"blue"}
          radius={10}
          width={470}
          height={60}
          y={180}
          opacity={0}
        >
          <Txt
            ref={financialBackingTxtRef}
            text={
              jsonData.json_response.video.scenes[9].variable_value
                .bullet_points[4].text
            }
            fontSize={40}
            fontWeight={400}
            letterSpacing={3}
            fill={"white"}
          />
        </Rect>
      </Circle>
      <Rect
        ref={textRectRef}
        width={1200}
        opacity={0}
        radius={10}
        height={
          jsonData.json_response.video.scenes[9].text.length > 57 ? 190 : 100
        }
        fill={"#F9F9F9"}
        y={420}
      >
        <Txt
          ref={profitableTxtRef}
          fontFamily={"outfit"}
          fontSize={60}
          fontWeight={700}
          fill={"black"}
          y={0}
        />
      </Rect>
    </Layout>
  );

  AnswerFarmerVideoRef().play();

  yield* everythingLayoutRef1().position.x(600, 0.5);

  for (let i = 0; i < fullText1.length; i++) {
    yield* tween(charDuration1, () => {
      textSignal1(fullText1.substring(0, i + 1));
    });
  }

  yield* textRectRef1().opacity(0, 0.5);

  yield* waitFor(0.7);

  yield* all(
    selfinjuryCircleRef().endAngle(360, 1),
    carefulPlanningImgRef().opacity(1, 0.6),
    carefulPlanningRectRef().opacity(1, 1),
    carefulPlanningTxtRef().opacity(1, 1)
  );

  yield* all(
    sucideCircleRef().endAngle(360, 1),
    budgetingImgRef().opacity(1, 0.6),
    budgetingRectRef().opacity(1, 1),
    budgetingTxtRef().opacity(1, 1),
    waitFor(2)
  );

  yield* waitFor(1);

  yield* all(
    addictionCircleRef().endAngle(360, 1),
    rightManpowerImgRef().opacity(1, 0.6),
    rightManpowerRectRef().opacity(1, 1),
    rightManpowerTxtRef().opacity(1, 1)
  );

  yield* all(
    dangerousCircleRef().endAngle(360, 1),
    machineryImgRef().opacity(1, 0.6),
    machineryRectRef().opacity(1, 1),
    machineryTxtRef().opacity(1, 1)
  );

  yield* all(
    foreignCircleRef().endAngle(360, 1),
    financialBackingImgRef().opacity(1, 0.6),
    financialBackingRectRef().opacity(1, 1),
    financialBackingTxtRef().opacity(1, 1)
  );

  yield* all(
    textRectRef().opacity(1, 0.5),
    profitableTxtRef().text(jsonData.json_response.video.scenes[9].text, 2)
  );

  const referenceSentence =
    "कृषि उपकरण निर्माण बिजनेस शुरू करने में सावधानीपूर्वक योजना और बजटिंग की जरूरत होती है। सही कर्मचारियों, मशीनरी, और फाइनेंसियल सपोर्ट के साथ, आपका बिजनेस प्रॉफिटेबल होने का वादा करता है।";
  const referenceWordCount = referenceSentence.split(" ").length;

  // Get the sentence from JSON and calculate its word count
  const sentence = jsonData.json_response.video.scenes[9].sentence;
  const sentenceWordCount = sentence.split(" ").length;
  console.log("sentence ===>>>" + sentence);
  // Define base duration and extra word duration
  const baseDuration = 1.5; // Base duration in seconds
  const extraWordDuration = 0.4; // Extra duration per additional word

  // Calculate the wait duration
  const waitDuration =
    sentenceWordCount > referenceWordCount
      ? baseDuration +
        (sentenceWordCount - referenceWordCount) * extraWordDuration
      : baseDuration;

  // Wait for the calculated duration
  yield* waitFor(waitDuration);
  console.log("Duration+++++++++++" + waitDuration);

  AnswerFarmerVideoRef().pause();

  yield* everythingLayoutRef2().opacity(0, 1.5);
}

export default agriimplements;
