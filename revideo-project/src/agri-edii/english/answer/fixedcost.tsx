import {
    Layout,
    Txt,
    Rect,
    Circle,
    Audio,
    View2D,
    Img,
    Video,
  } from "@revideo/2d";
  import { all, tween, createRef, createSignal, waitFor } from "@revideo/core";
  // import jsonData from "../event.json";
//   import jsonData from "../formatted_agri_loss.json";
  
  function* fixedcost(view: View2D,videoJson : any) {
  
    var jsonData = videoJson
    const txt1Ref = createRef<Txt>();
    const txt2Ref = createRef<Txt>();
    const txtRentRef = createRef<Txt>();
    const txtDepreciationRef = createRef<Txt>();
    const txtManpowerRef = createRef<Txt>();
    const rectRentRef = createRef<Rect>();
    const rectDepreciationRef = createRef<Rect>();
    const rectManpowerRef = createRef<Rect>();
  
    const everythingLayoutRef1 = createRef<Layout>();
    const everythingLayoutRef2 = createRef<Layout>();
  
    const txtContainerRef = createRef<Layout>();
    const myCircle2 = createRef<Circle>();
    const foreignCircleRef = createRef<Circle>();
    const offerletter = createSignal(0);
  
    const fullText = " Lakhs";
    const duration = 1; // total duration for the entire text animation
    const charDuration = duration / fullText.length; // duration per character
  
    // Create a signal to hold the text
    const textSignal = createSignal("");
  
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
  
    // const audioRef = createRef<Audio>();
  
    // yield view.add(
    //   <Audio
    //     ref={audioRef}
    //     src={"/farmer_combined_tts.mp3"}
    //     play={true}
    //     time={1.39}
    //   />
    // );
  
    yield view.add(
      <Layout ref={everythingLayoutRef2}>
        {/* <Txt
          ref={txt2Ref}
          fontSize={100}
          fontWeight={600}
          y={-800}
          x={0}
          fill={"blue"}
          letterSpacing={3}
        >
          Fixed cost
        </Txt> */}
        <Txt
          text={textSignal}
          fontSize={60}
          fontWeight={700}
          fill="blue"
          y={300}
          x={100}
        />
  
        <Circle
          scale={0}
          ref={myCircle2}
          x={100}
          width={440}
          height={440}
          fill="#B4D4FF"
        >
          <Txt
            ref={txt1Ref}
            fontSize={80}
            fontWeight={500}
            letterSpacing={3}
            fill={"blue"}
            text={() => `₹${offerletter().toFixed(2)}`}
          />
        </Circle>
  
        <Rect
          radius={10}
          fill="blue"
          width={
            jsonData.json_response.video.scenes[7].variable_value.bullet_points[0]
              .text.length * 30
          }
          padding={[0, 200, 0, 200]}
          height={90}
          x={1200}
          y={-195}
          ref={rectRentRef}
        />
        <Txt
          ref={txtRentRef}
          fontSize={40}
          fontWeight={400}
          fill="white"
          padding={20}
          y={-190}
          x={-1400}
        >
          {
            jsonData.json_response.video.scenes[7].variable_value.bullet_points[0]
              .text
          }
        </Txt>
  
        <Rect
          radius={10}
          fill="blue"
          width={
            jsonData.json_response.video.scenes[7].variable_value.bullet_points[1]
              .text.length * 30
          }
          padding={[0, 200, 0, 200]}
          height={90}
          x={1200}
          y={25}
          ref={rectDepreciationRef}
        />
        <Txt
          ref={txtDepreciationRef}
          fontSize={40}
          fontWeight={400}
          fill="white"
          padding={20}
          y={30}
          x={-1400}
        >
          {
            jsonData.json_response.video.scenes[7].variable_value.bullet_points[1]
              .text
          }{" "}
        </Txt>
  
        <Rect
          radius={10}
          fill="blue"
          width={
            jsonData.json_response.video.scenes[7].variable_value.bullet_points[2]
              .text.length * 30
          }
          padding={[0, 200, 0, 200]}
          height={90}
          x={1200}
          y={240}
          ref={rectManpowerRef}
        />
        <Txt
          ref={txtManpowerRef}
          fontSize={40}
          fontWeight={400}
          fill="white"
          padding={20}
          y={240}
          x={-1400}
        >
          {
            jsonData.json_response.video.scenes[7].variable_value.bullet_points[2]
              .text
          }
        </Txt>
      </Layout>
    );
  
    AnswerFarmerVideoRef().play();
  
    yield* everythingLayoutRef1().position.x(600, 0.8);
  
    // yield* all(txt2Ref().position.y(-400, 1));
  
    yield* all(
      myCircle2().position.x(0, 0).to(100, 1),
      txtRentRef().position.x(1200, 0).to(650, 1),
      rectRentRef().position.x(1200, 0).to(650, 1)
    );
    yield* all(
      txtDepreciationRef().position.x(1200, 0).to(650, 1),
      rectDepreciationRef().position.x(1200, 0).to(650, 1)
    );
    yield* all(
      rectManpowerRef().position.x(1200, 0).to(650, 1),
      txtManpowerRef().position.x(1200, 0).to(650, 1)
    );
  
    yield* all(
      myCircle2().scale(0, 0).to(1, 1),
      txt1Ref().scale(0, 0).to(1, 1),
      offerletter(0.0, 0).to(jsonData.json_response.video.scenes[7].variable_value.numeric_value.fixed_cost, 2)
    );
  
    for (let i = 0; i < fullText.length; i++) {
      yield* tween(charDuration, () => {
        textSignal(fullText.substring(0, i + 1));
      });
    }
  
    yield* waitFor(0.5);
  
    yield* everythingLayoutRef2().opacity(0, 1);
  }
  
  export default fixedcost;
  