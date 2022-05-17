import './App.css';
// import { Clock } from './clock/Clock';
// import { ClickEvent } from './clickEvent/ClickEvent';
// import { LoginControl } from './loginControl/LoginControl';
// import { LoopList } from './loopList/LoopList';
// import { Blogs } from './loopList/Blogs';
// import { FlavorForm } from './form/FlavorForm';
// import { Reservation } from './form/Reservation';
// import { Calculator } from './calculator/Calculator';
// import { SignUpDialog } from './signUpDialog/SignUpDialog';
// import { Animate } from './animate/Animate';
import { FilterableProductTable } from './filterableProductTable/FilterableProductTable';

function App() {
  // const posts = [
  //   { id: 1, title: 'Hello World', content: 'Welcome to learning React!' },
  //   { id: 2, title: 'Installation', content: 'You can install React from npm.' }
  // ];
  return (
    <div className="App">
      {/* <Clock /> */}
      {/* <ClickEvent /> */}
      {/* <LoginControl /> */}
      {/* <LoopList /> */}
      {/* <Blogs posts={posts} /> */}
      {/* <FlavorForm /> */}
      {/* <Reservation /> */}
      {/* <Calculator /> */}
      {/* <SignUpDialog /> */}
      {/* <Animate /> */}
      <FilterableProductTable />
    </div>
  );
}

export default App;
