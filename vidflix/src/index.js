import ReactDOM from 'react-dom';
import App from './app';
import {GlobalStyles} from './globalStyles';
import 'normalize.css';

//JSx fragment is used

ReactDOM.render(<>
<GlobalStyles/>
<App/>
</>,
    document.getElementById('root')
);

