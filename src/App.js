
import './App.css';
// import Increment_Decrement from "./components/increment_decrement_view"
import Productlist from "./components/Productlist"

import {Provider} from "react-redux"
import {store} from "./redux_folder/store"
import ContactApp from "./components/contact_app/contactApp.fun"
import  ContactAppREdux from "./components/contact_app_redux"

function App() {
  return (
    <div className="App">
       <Provider store = {store}>
          {/* <ContactAppREdux /> */}
          <ContactApp />
       </Provider>
        {/*<Productlist />
        <Increment_Decrement /> 
      */}
      {/* <ContactApp /> */}
      
      
    </div>
  );
}

export default App;
