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
  
  // import jsonData from "../event.json";
//   import jsonData from "../formatted_agri_loss.json";
  
  function* agriimplements(view: View2D,videoJson : any) {
  
    var jsonData = videoJson
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
    const introtext = "";
    // const fullText = jsonData.json_response.video.scenes[9].text;
    const duration = 2; // total duration for the entire text animation
    // const charDuration = duration / fullText.length; // duration per character
  
    const textSignal = createSignal("");
  
    const profitableTxtRef = createRef<Txt>();
  
    const fullText1 =
      "Starting an agricultural implements\nmanufacturing business involves";
    const duration1 = 3; // total duration for the entire text animation
    const charDuration1 = duration1 / fullText1.length; // duration per character
  
    // Create a signal to hold the text
    const textSignal1 = createSignal("");
    const textRectRef1 = createRef<Rect>();
  
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
        <Rect
          opacity={1}
          ref={textRectRef1}
          fill={"#f0f0f0"}
          radius={20}
          x={300}
          padding={20}
        >
          <Txt
            text={textSignal1}
            fontSize={50}
            fontWeight={500}
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
            // width={
            //   jsonData.json_response.video.scenes[9].variable_value
            //     .bullet_points[0].text.length * 30
            // }
            width={250}
            // padding={[0, 100, 0, 100]}
            height={60}
            y={180}
            radius={10}
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
            // width={
            //   jsonData.json_response.video.scenes[9].variable_value
            //     .bullet_points[1].text.length * 30
            // }
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
            // width={
            //   jsonData.json_response.video.scenes[9].variable_value
            //     .bullet_points[2].text.length
            // }
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
            // width={
            //   jsonData.json_response.video.scenes[9].variable_value
            //     .bullet_points[3].text.length
            // }
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
            // width={
            //   jsonData.json_response.video.scenes[9].variable_value
            //     .bullet_points[4].text.length * 30
            // }
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
          width={1355}
          opacity={0}
          radius={10}
          textWrap
          height={jsonData.json_response.video.scenes[9].text.length > 57 ? 190 : 100} 
          fill={"#f0f0f0"}
          x={250}
          y={430}
          
         
        > 
          <Txt
          width={1350}
          
            ref={profitableTxtRef}
            fontSize={50}
            fontWeight={400}
            fontFamily={"outfit"}
            fill={"blue"}
            letterSpacing={2}
            textAlign={"center"}
            textWrap
            
            
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
      budgetingTxtRef().opacity(1, 1)
    );
  
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
  
    const referenceSentence = "Starting an agricultural implements manufacturing business involves careful planning and budgeting. With the right manpower, machinery, and financial backing, your venture promises to be well-rounded and potentially very successful";
    const referenceWordCount = referenceSentence.split(' ').length;
  
    // Get the sentence from JSON and calculate its word count
    const sentence = jsonData.json_response.video.scenes[9].sentence;
    const sentenceWordCount = sentence.split(' ').length;
  console.log("sentence ===>>>"+sentence)
    // Define base duration and extra word duration
    const baseDuration = 1.2; // Base duration in seconds
    const extraWordDuration = 0.4; // Extra duration per additional word
  
    // Calculate the wait duration
    const waitDuration = sentenceWordCount > referenceWordCount
      ? baseDuration + (sentenceWordCount - referenceWordCount) * extraWordDuration
      : baseDuration;
  
    // Wait for the calculated duration
    yield* waitFor(waitDuration);
  
    AnswerFarmerVideoRef().pause();
  
  
  
    //yield* waitFor(1);
  
    yield* everythingLayoutRef2().opacity(0, 2);
  }
  
  export default agriimplements;
  