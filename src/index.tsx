import * as ReactDOM from 'react-dom';
import InstantYoutube from './InstantYoutube';
import registerServiceWorker from './registerServiceWorker';
import './index.css';

ReactDOM.render(
  InstantYoutube,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();