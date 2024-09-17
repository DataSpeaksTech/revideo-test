import { Circle, Img, Layout, Rect, Txt, Video, View2D } from "@revideo/2d";
import { all, createRef, waitFor } from "@revideo/core";
import jsonData from "./formatted_agri_loss.json"; // Make sure this path is correct

function* additionals(view: View2D,videoJson : any) {

  var jsonData = videoJson
  const vehiclesCircleRef = createRef<Circle>();
  const computerCircleRef = createRef<Circle>();
  const furnitureCircleRef = createRef<Circle>();

  const vehiclesImgRef = createRef<Img>();
  const computerImgRef = createRef<Img>();
  const furnitureImgRef = createRef<Img>();

  const costRectRef = createRef<Rect>();

  const vehiclesRectRef = createRef<Rect>();
  const computerRectRef = createRef<Rect>();
  const furnitureRectRef = createRef<Rect>();

  const vehiclesTxtRef = createRef<Txt>();
  const computerTxtRef = createRef<Txt>();
  const furnitureTxtRef = createRef<Txt>();

  const everythingLayoutRef1 = createRef<Layout>();
  const everythingLayoutRef2 = createRef<Layout>();

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
    <Layout ref={everythingLayoutRef2}>
      <Circle
        ref={vehiclesCircleRef}
        x={-200}
        y={-200}
        endAngle={0}
        opacity={1}
        size={300}
        lineWidth={10}
        stroke={"blue"}
      >
        <Img
          ref={vehiclesImgRef}
          src={"/images/agri-edii-images/vehicles.png"}
          opacity={0}
          radius={1000}
          size={280}
        />
      </Circle>

      <Rect
        ref={vehiclesRectRef}
        fill={"blue"}
        radius={10}
        width={jsonData.json_response.video.scenes[5].variable_value.bullet_points[0].text.length * 30}
        height={70}
        x={-200}
        y={10}
        opacity={0}
      >
        <Txt
          ref={vehiclesTxtRef}
          text={jsonData.json_response.video.scenes[5].variable_value.bullet_points[0].text}
          fontSize={40}
          fontWeight={400}
          letterSpacing={3}
          fill={"white"}
        />
      </Rect>

      <Circle
        ref={computerCircleRef}
        x={250}
        y={-200}
        endAngle={0}
        opacity={1}
        size={300}
        lineWidth={10}
        stroke={"blue"}
      >
        <Img
          ref={computerImgRef}
          src={"/images/agri-edii-images/computer.png"}
          opacity={0}
          radius={1000}
          size={280}
        />
      </Circle>

      <Rect
        ref={computerRectRef}
        fill={"blue"}
        radius={10}
        width={jsonData.json_response.video.scenes[5].variable_value.bullet_points[1].text.length * 30}
        height={70}
        x={250}
        y={10}
        opacity={0}
      >
        <Txt
          ref={computerTxtRef}
          text={jsonData.json_response.video.scenes[5].variable_value.bullet_points[1].text}
          fontSize={40}
          fontWeight={400}
          letterSpacing={3}
          fill={"white"}
        />
      </Rect>

      <Circle
        ref={furnitureCircleRef}
        x={700}
        y={-200}
        endAngle={0}
        opacity={1}
        size={300}
        lineWidth={10}
        stroke={"blue"}
      >
        <Img
          ref={furnitureImgRef}
          src={"/images/agri-edii-images/furniture.png"}
          opacity={0}
          radius={1000}
          size={280}
        />
      </Circle>

      <Rect
        ref={furnitureRectRef}
        fill={"blue"}
        radius={10}
        width={jsonData.json_response.video.scenes[5].variable_value.bullet_points[2].text.length * 30}
        height={70}
        x={700}
        y={10}
        opacity={0}
      >
        <Txt
          ref={furnitureTxtRef}
          text={jsonData.json_response.video.scenes[5].variable_value.bullet_points[2].text}
          fontSize={40}
          fontWeight={400}
          letterSpacing={3}
          fill={"white"}
        />
      </Rect>

      <Rect
        ref={costRectRef}
        opacity={0}
        x={250}
        y={170}
        width={500}
        height={100}
        radius={15}
        fill={"blue"}
      >
        <Txt
          text={`₹${jsonData.json_response.video.scenes[5].variable_value.numeric_value.total_additional_cost} लाख`}
          fontSize={50}
          fontWeight={500}
          letterSpacing={3}
          fill={"white"}
        />
      </Rect>
    </Layout>
  );

  AnswerFarmerVideoRef().play();

  yield* waitFor(1);

  yield* all(
    vehiclesCircleRef().endAngle(360, 1.2),
    vehiclesImgRef().opacity(1, 1.2),
    vehiclesRectRef().opacity(1,1.2)
  );

  yield* all(
    computerCircleRef().endAngle(360, 1.2),
    computerImgRef().opacity(1, 1.2),
    computerRectRef().opacity(1, 1.2)
  );

  yield* all(
    furnitureCircleRef().endAngle(360, 1.2),
    furnitureImgRef().opacity(1, 1.2),
    furnitureRectRef().opacity(1, 1.2)
  );

  yield* costRectRef().opacity(1, 1);

  yield* waitFor(1);

  yield* everythingLayoutRef2().opacity(0, 0.8);
}

export default additionals;
