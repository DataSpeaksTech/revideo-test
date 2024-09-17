import {makeProject} from '@revideo/core';
import axios from 'axios';
import example from './scenes/example?scene';
import { logProgressToConsole } from './render';

import mainproject from "./MainProject/mainproject?scene"


export default makeProject({
  scenes: [mainproject],
  // scenes: [example],
});
