import creatBtn from './content/creat_button';
import generate from './content/generate';
chrome.extension.onMessage.addListener((msg, sender, sendResponse) => {
  if (msg.action == 'INIT_BUTTON') {
    creatBtn();
    generate();
  }
});
