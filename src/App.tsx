import React, {FC, Fragment} from 'react';
import './assets/styles/App.scss';
import Library from "./Views/Library";

const App: FC = () => {
    return(
        <Fragment>
            <Library />
        </Fragment>
  );
}

export default App;