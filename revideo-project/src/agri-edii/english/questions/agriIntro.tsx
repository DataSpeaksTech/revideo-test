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
// import jsonData from "../../../MainProject/formatted_agri_loss.json";

function* agriIntro(view: View2D, videoJson: any) {
  var jsonData = videoJson;
  const introTxtRef = createRef<Txt>();

  const introText =
    "Economics of starting your Agricultural Implements Business";

  // const fullText = jsonData.json_response.video.scenes[1].question;
  const duration = 0.8;
  const charDuration = duration / introText.length;

  const titleSignal = createSignal("");

  view.fontFamily("outfit");

  const bgImageRef = createRef<Img>();

  yield view.add(
    <Layout
      alignItems="center"
      justifyContent="center"
      width="100%"
      height="100%"
    >
      <Txt
        ref={introTxtRef}
        fontSize={120}
        fontWeight={700}
        fill={"blue"}
        textAlign={"center"}
        textWrap
      />
    </Layout>
  );

  for (let i = 0; i < introText.length; i++) {
    yield* tween(charDuration, () => {
      introTxtRef().text(introText.substring(0, i + 1));
    });
  }

  yield* waitFor(0.25);

  yield* introTxtRef().opacity(0, 0.5);
}

export default agriIntro;
