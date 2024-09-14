import {renderVideo} from '@revideo/renderer';
import axios from 'axios';
async function render() {
  console.log('Rendering video...');

  // This is the main function that renders the video
  const file = await renderVideo({
    projectFile: './src/project.ts',
    variables: {message: 'Hi!'},
    settings: {logProgress: true},
  });

  console.log(`Rendered video to ${file}`);
}

render();

export function logProgressToConsole(id: number, progress: string): void {
  // Convert progress to a number
  const progressNumber = parseFloat(progress);

  // Check if the progress is a valid number and if the condition is met
  if (!isNaN(progressNumber) && parseFloat((progressNumber * 100).toFixed(1)) % 10 === 0) {
    console.log(`[${id}] Progress: ${(progressNumber * 100).toFixed(1)}%`);

    // Make a POST request to the webhook endpoint
    axios
      .post('https://webhook.site/d2df2b6d-1033-4a8d-9138-3b11392a7aab', {
        id: id,
        progress: (progressNumber * 100).toFixed(1),
      })
      .then((response) => console.log(`Posted data successfully: ${response.data}`))
      .catch((error) => console.error(`Failed to post data: ${error.message}`));
  }
}