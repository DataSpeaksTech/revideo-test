import { Audio, Img, makeScene2D, View2D } from "@revideo/2d";
import { createRef, useScene } from "@revideo/core";


import jsonData from "./event.json"

function convertS3ToUsableURL(s3Url: string) {
    // Extracting the bucket name and object key from the S3 URL
    const regex = /^s3:\/\/([^\/]+)\/(.+)$/;
    const match = s3Url.match(regex);
    if (!match || match.length < 3) {
      throw new Error("Invalid S3 URL");
    }
  
    const bucketName = match[1];
    const objectKey = match[2];
  
    // Constructing the object URL
    const region = "ap-south-1"; // Change this to your S3 bucket's region
    const objectUrl = `https://${bucketName}.s3.${region}.amazonaws.com/${objectKey}`;
  
    return objectUrl;
  }


  import {
    additionalsEnglish,
    annualSalesEnglish,
    fundingEnglish,
    machinesEnglish,
    requirementsEnglish,
    totalProjectCostEnglish,
    fixedcostEnglish,
    variablecostEnglish,
    agriimplementsEnglish,
  } from "../agri-edii/english/answer";

  import {
    question1English,
    question2English,
    question3English,
    question4English,
    question5English,
    question6English,
    question7English,
    agriIntro
  } from "../agri-edii/english/questions";


  import {
    question1Hindi,
    question2Hindi,
    question3Hindi,
    question4Hindi,
    question5Hindi,
    question6Hindi,
    question7Hindi,
  } from "../agri-edii/hindi/questions";
  
  import {
    additionalsHindi,
    annualSalesHindi,
    fundingHindi,
    machinesHindi,
    requirementsHindi,
    totalProjectCostHindi,
    fixedcostHindi,
    variablecostHindi,
    agriimplementsHindi,
  } from "../agri-edii/hindi/answers";







  export default makeScene2D(function* (view) {
  try {
    const scenes = useScene();
    const project_name = scenes.variables.get(
      "project_name",
      "calcium report"
    )();
    console.log("🚀 ~ makeScene2D ~ project_name:", project_name);

    const render_id = scenes.variables.get("render_id", "123")();
    console.log("🚀 ~ makeScene2D ~ render_id:", render_id);
    const videoJson = scenes.variables.get("video_json", jsonData)();
    console.log("🚀 ~ makeScene2D ~ videoJson:", videoJson);

    const audio = scenes.variables.get("language", "english")();
    console.log("🚀audio:", audio);

    console.log("project_name-> ", project_name);

    const template = videoJson.template_selected;
    console.log("####----Template----> ", template);

    const language_selected = videoJson.language_selected;
    console.log("]]]]]]]-+++-language_selected-===>>>>> ", language_selected);

   

    if (
      // template === "agri_plan_convo"
      true
    ) {
      if (
        // language_selected === "english"
        true
      ) {
        view.fill("white");
        // yield* agriIntro(view,videoJson);
        yield view.add(
          <Audio
            src={
              convertS3ToUsableURL(videoJson.combined_audio_s3_english) ||
              "farmer-with-bgm.mp3"
            }
            play={true}
            time={0}
          />
        );
        if (videoJson.json_response.background_music_volume) {
          yield view.add(
            <Audio src={"bgm.mp3"} play={true} time={0} volume={0.4} />
          );
        }
        yield* question1English(view, videoJson);
        yield* requirementsEnglish(view, videoJson);
        yield* question2English(view, videoJson);
        yield* totalProjectCostEnglish(view, videoJson);
        yield* question3English(view, videoJson);
        yield* fundingEnglish(view, videoJson);
        yield* question4English(view, videoJson);
        yield* machinesEnglish(view, videoJson);
        yield* additionalsEnglish(view, videoJson);
        yield* question5English(view, videoJson);
        yield* annualSalesEnglish(view, videoJson);
        yield* question6English(view, videoJson);
        yield* fixedcostEnglish(view, videoJson);
        yield* variablecostEnglish(view, videoJson);
        yield* question7English(view, videoJson);
        yield* agriimplementsEnglish(view, videoJson);
        console.log("*****************video is ready to view****************");
      } 
      else if (language_selected === "hi") {
        view.fill("white");
        yield view.add(
          <Audio
            src={
              convertS3ToUsableURL(videoJson.combined_audio_s3_english) ||
              "farmer-with-bgm.mp3"
            }
            play={true}
            time={0}
          />
        );
        if (videoJson.json_response.background_music_volume) {
          yield view.add(
            <Audio src={"bgm.mp3"} play={true} time={0} volume={0.4} />
          );
        }
        yield* question1Hindi(view, videoJson);
        yield* requirementsHindi(view, videoJson);
        yield* question2Hindi(view, videoJson);
        yield* totalProjectCostHindi(view, videoJson);
        yield* question3Hindi(view, videoJson);
        yield* fundingHindi(view, videoJson);
        yield* question4Hindi(view, videoJson);
        yield* machinesHindi(view, videoJson);
        yield* additionalsHindi(view, videoJson);
        yield* question5Hindi(view, videoJson);
        yield* annualSalesHindi(view, videoJson);
        yield* question6Hindi(view, videoJson);
        yield* fixedcostHindi(view, videoJson);
        yield* variablecostHindi(view, videoJson);
        yield* question7Hindi(view, videoJson);
        yield* agriimplementsHindi(view, videoJson);
      }
    }


  } catch (error) {
    console.error("An error occurred:", error);
  }
});