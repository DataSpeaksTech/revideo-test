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
//   import jsonData from "../../../MainProject/event.json";
  
  import { all, createRef, createSignal, waitFor } from "@revideo/core";
  
  function* annualSales(view: View2D,videoJson : any) {
  
    var jsonData = videoJson
    const annualSalesCircleRef = createRef<Circle>();
  
    const annualSalesRsTxtRef = createRef<Txt>();
    const annualSalesTxtRef = createRef<Txt>();
    const taxesTxtRef = createRef<Txt>();
    const depreciationTxtRef = createRef<Txt>();
    const netProfitTxtRef = createRef<Txt>();
  
    const productionCostTxtRef = createRef<Txt>();
  
    // const videoRef = createRef<Video>();
  
    const productionCostCircleRef = createRef<Circle>();
    const taxesCircleRef = createRef<Circle>();
    const depreciationCircleRef = createRef<Circle>();
  
    const everythingLayoutRef1 = createRef<Layout>();
    const everythingLayoutRef2 = createRef<Layout>();
  
    const annualSalesSignal = createSignal(0);
    const productionCostSignal = createSignal(0);
  
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
        <Circle
          ref={annualSalesCircleRef}
          fill={"blue"}
          size={150}
          x={250}
          // x={450}
          // y={-150}
          opacity={0}
        >
          <Txt
            ref={annualSalesRsTxtRef}
            fontSize={50}
            opacity={1}
            scale={0}
            fill={"white"}
            letterSpacing={4}
            fontWeight={500}
            text={() => `₹${annualSalesSignal().toFixed(2)} lakhs`}
          />
        </Circle>
  
        <Txt
          ref={annualSalesTxtRef}
          text={jsonData.json_response.video.scenes[6].variable_value.bullet_points[0].text}
          fontSize={50}
          opacity={0}
          x={250}
          y={300}
          fontWeight={500}
          letterSpacing={3}
          fill={"blue"}
        />
  
        <Circle
          ref={productionCostCircleRef}
          opacity={0}
          size={400}
          x={100}
          y={-100}
          fill={"blue"}
        >
          <Txt
            ref={productionCostTxtRef}
            fontSize={50}
            fontWeight={500}
            letterSpacing={4}
            fill={"white"}
            text={() => `₹${productionCostSignal().toFixed(2)} lakhs`}
          />
        </Circle>
  
        <Txt
          ref={productionCostTxtRef}
          text={jsonData.json_response.video.scenes[6].variable_value.bullet_points[1].text}
          fontSize={50}
          opacity={0}
          x={600}
          y={-50}
          fontWeight={500}
          letterSpacing={3}
          fill={"blue"}
        />
  
        <Circle ref={taxesCircleRef} opacity={0} x={0} size={300} fill={"blue"}>
          <Txt
            ref={taxesTxtRef}
            text={jsonData.json_response.video.scenes[6].variable_value.bullet_points[2].text}
            fontSize={50}
            fontWeight={500}
            letterSpacing={4}
            fill={"white"}
          />
        </Circle>
  
        <Circle
          ref={depreciationCircleRef}
          opacity={0}
          x={0}
          size={400}
          fill={"blue"}
        >
          <Txt
            ref={depreciationTxtRef}
            text={jsonData.json_response.video.scenes[6].variable_value.bullet_points[3].text}
            fontSize={50}
            fontWeight={500}
            letterSpacing={4}
            fill={"white"}
          />
        </Circle>
  
        <Txt
          ref={netProfitTxtRef}
          text={jsonData.json_response.video.scenes[6].variable_value.bullet_points[4].text}
          fontSize={70}
          opacity={0}
          x={250}
          y={300}
          fontWeight={500}
          letterSpacing={3}
          fill={"blue"}
        />
      </Layout>
    );
  
    const scene = jsonData.json_response.video.scenes[6].variable_value.numeric_value;
  
  // Determine the value to use for the signal
  const netValue = scene.net_profit !== undefined ? scene.net_profit : scene.net_loss;
  
    AnswerFarmerVideoRef().play();
  
    yield* everythingLayoutRef1().position.x(600, 0.5);
  
    yield* all(
      annualSalesTxtRef().opacity(1, 2),
      annualSalesCircleRef().opacity(1, 1),
      annualSalesCircleRef().size(500, 2),
      annualSalesRsTxtRef().scale(1, 2),
      annualSalesSignal(0, 0).to(
        jsonData.json_response.video.scenes[6].variable_value.numeric_value
          .annual_sales,
        2
      )
    );
  
    yield* all(annualSalesCircleRef().x(150, 1), annualSalesTxtRef().x(150, 1));
  
    yield* all(
      annualSalesSignal(
        jsonData.json_response.video.scenes[6].variable_value.numeric_value
          .annual_sales,
        0
      ).to(
        jsonData.json_response.video.scenes[6].variable_value.numeric_value
          .net_value,
        2
      ),
      annualSalesTxtRef().fontSize(50, 1),
      // annualSalesTxtRef().x(-600, 1),
      // annualSalesTxtRef().y(250, 1),
      annualSalesTxtRef().opacity(0, 1),
      annualSalesRsTxtRef().fontSize(50, 1),
      annualSalesCircleRef().size(400, 1),
      annualSalesCircleRef().x(0, 1),
      productionCostCircleRef().x(600, 1),
      productionCostCircleRef().y(-300, 1),
      productionCostCircleRef().opacity(1, 1),
      productionCostSignal(0, 0).to(
        jsonData.json_response.video.scenes[6].variable_value.numeric_value
          .production_cost,
        2
      ),
      productionCostTxtRef().opacity(1, 2)
    );
  
    yield* waitFor(3);
  
   
  
    yield* all(
      productionCostCircleRef().opacity(0, 1),
      productionCostTxtRef().opacity(0, 1),
      annualSalesTxtRef().opacity(0, 2),
      annualSalesCircleRef().size(350, 2),
      annualSalesSignal(
        jsonData.json_response.video.scenes[6].variable_value.numeric_value
          .net_value, 1
      ),
      taxesCircleRef().opacity(1, 2),
      taxesCircleRef().x(500, 2),
      taxesCircleRef().y(-250, 2),
      depreciationCircleRef().x(500, 2),
      depreciationCircleRef().y(200, 2),
      depreciationCircleRef().opacity(1, 2)
    );
  
    yield* all(
      taxesCircleRef().opacity(0, 0.2),
      depreciationCircleRef().opacity(0, 0.2),
      annualSalesCircleRef().x(250, 2),
      annualSalesCircleRef().y(-100, 2),
      annualSalesCircleRef().size(600, 2),
      netProfitTxtRef().opacity(1, 2),
      annualSalesRsTxtRef().fontSize(90, 2)
    );
  
    const referenceSentence = "Annual sales are projected to be Rs. 196 lakhs, with production costs at Rs. 233.57 lakhs. After taxes and depreciation, your net loss is expected to be Rs. 34.77 lakhs";
    const referenceWordCount = referenceSentence.split(' ').length;
    
    // Get the sentence from JSON and calculate its word count
    const sentence = jsonData.json_response.video.scenes[6].sentence;
    const sentenceWordCount = sentence.split(' ').length;
  console.log("sentence ===>>>"+sentence)
  
  console.log("/\/\/referenceWordCount ===>>>"+referenceWordCount)
  console.log("|||sentenceWordCount ===>>>"+sentenceWordCount)
    // Define base duration and extra word duration
    const baseDuration = 0.8; // Base duration in seconds
    const extraWordDuration = 0.4; // Extra duration per additional word
  
    // Calculate the wait duration
    const waitDuration = sentenceWordCount > referenceWordCount
      ? baseDuration + (sentenceWordCount - referenceWordCount) * extraWordDuration
      : baseDuration;
      console.log("Duration+++++++++++ >>>"+ waitDuration);
    // Wait for the calculated duration
    yield* waitFor(waitDuration);
  
    //yield* waitFor(1.5)
  
    yield* everythingLayoutRef2().scale(1.1, 1.5);
    yield* everythingLayoutRef2().opacity(0, 0.8);
  }
  
  
  export default annualSales;
  