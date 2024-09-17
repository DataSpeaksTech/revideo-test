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
//   import jsonData from "../formatted_agri_loss.json";
  
  import { all, createRef, waitFor } from "@revideo/core";
  
  function* totalProjectCost(view: View2D,videoJson : any) {
  
    var jsonData = videoJson
    const rupeeImgRef = createRef<Img>();
  
    const moneyRectRef = createRef<Rect>();
  
    const moneyTxtRef = createRef<Txt>();
    const totalProjectCostTxtRef = createRef<Txt>();
  
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
  
    // const videoRef = createRef<Video>();
  
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
  
    // const audioRef = createRef<Audio>();
  
    // yield view.add(
    //   <Audio
    //     ref={audioRef}
    //     src={"/farmer_combined_tts.mp3"}
    //     play={true}
    //     time={0.32}
    //   />
    // );
  
    yield view.add(
      <Layout ref={everythingLayoutRef2}>
        <Txt
          ref={totalProjectCostTxtRef}
          fontSize={70}
          x={300}
          y={350}
          fontWeight={500}
          letterSpacing={3}
          fill={"blue"}
        />
  
        <Img
          ref={rupeeImgRef}
          scale={0.2}
          opacity={0}
          zIndex={1}
          x={300}
          src={"/images/agri-edii-images/rupee.png"}
          width={300}
        />
  
        <Rect
          ref={moneyRectRef}
          opacity={0}
          height={110}
          radius={10}
          // x={190}
          x={300}
          width={450}
          fill={"orange"}
        >
          <Txt
            ref={moneyTxtRef}
            text={`₹ ${jsonData.json_response.video.scenes[2].variable_value.numeric_value.total_project_cost} lakhs`}
            fontSize={60}
            fontWeight={500}
            letterSpacing={4}
            fill={"white"}
          />
        </Rect>
  
        <Rect
          ref={rectRef1}
          opacity={0}
          y={-300}
          x={1360}
          // width={700}
          width={
            jsonData.json_response.video.scenes[2].variable_value.bullet_points[0]
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
              jsonData.json_response.video.scenes[2].variable_value
                .bullet_points[0].text
            }
            fontSize={50}
            fontWeight={400}
            letterSpacing={3}
            fill={"white"}
          />
        </Rect>
  
        <Rect
          ref={rectRef2}
          opacity={0}
          y={-150}
          x={1360}
          // width={700}
          width={
            jsonData.json_response.video.scenes[2].variable_value.bullet_points[1]
              .text.length * 30
          }
          padding={[0, 400, 0, 400]}
          height={100}
          radius={15}
          fill={"blue"}
        >
          <Txt
            ref={txtRef2}
            text={
              jsonData.json_response.video.scenes[2].variable_value
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
            jsonData.json_response.video.scenes[2].variable_value.bullet_points[2]
              .text.length * 30
          }
          padding={[0, 400, 0, 400]}
          height={100}
          radius={15}
          fill={"blue"}
        >
          <Txt
            ref={txtRef3}
            text={
              jsonData.json_response.video.scenes[2].variable_value
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
          y={150}
          x={1360}
          // width={700}
          width={
            jsonData.json_response.video.scenes[2].variable_value.bullet_points[3]
              .text.length * 30
          }
          padding={[0, 400, 0, 400]}
          height={100}
          radius={15}
          fill={"blue"}
        >
          <Txt
            ref={txtRef4}
            text={
              jsonData.json_response.video.scenes[2].variable_value
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
            jsonData.json_response.video.scenes[2].variable_value.bullet_points[4]
              .text.length * 30
          }
          padding={[0, 400, 0, 400]}
          height={100}
          radius={15}
          fill={"blue"}
        >
          <Txt
            ref={txtRef5}
            text={
              jsonData.json_response.video.scenes[2].variable_value
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
  
    AnswerFarmerVideoRef().play();
    // QuestionFarmerVideoRef().remove();
  
    yield* everythingLayoutRef1().position.x(600, 0.5);
  
    yield* totalProjectCostTxtRef().text(jsonData.json_response.video.scenes[2].text, 0.5);
    yield* all(rupeeImgRef().scale(1, 1), rupeeImgRef().opacity(1, 1));
  
    yield* all(
      rupeeImgRef().x(100, 1),
      moneyRectRef().opacity(1, 1),
      moneyRectRef().x(455, 1)
    );
  
    yield* all(
      rupeeImgRef().opacity(0, 1),
      moneyRectRef().opacity(0, 1),
      moneyTxtRef().opacity(0, 1),
      totalProjectCostTxtRef().opacity(0, 1)
    );
  
    yield* all(rectRef1().opacity(1, 1), rectRef1().x(400, 1.5));
    yield* all(rectRef2().opacity(1, 1.2), rectRef2().x(400, 1.2));
    yield* all(rectRef3().opacity(1, 1), rectRef3().x(400, 1));
    yield* all(rectRef4().opacity(1, 1), rectRef4().x(400, 1));
    yield* all(rectRef5().opacity(1, 1), rectRef5().x(400, 1));
  
    yield* waitFor(3.5);
  
    AnswerFarmerVideoRef().pause();
  
    yield* everythingLayoutRef2().opacity(0, 0.5);
  
    // audioRef().pause();
    // audioRef().remove();
  }
  
  export default totalProjectCost;
  