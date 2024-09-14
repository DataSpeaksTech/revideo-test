import {makeProject} from '@revideo/core';
import axios from 'axios';
import example from './scenes/example?scene';
import { logProgressToConsole } from './render';


export default makeProject({
  scenes: [example],
});
