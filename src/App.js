//import logo from "./logo.svg";
import "./App.css";
import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Link,
  Routes,
  NavLink,
} from "react-router-dom";
import "./CSS/Sidebar.css";
import Default from "./Default";
import DemoComponent from "./Props_State/Democomponent";
import Component, { Stateexample } from "./Props_State/Component";
import Employeedetails from "./Props_State/Employeedetails";
import EmployeeComponent from "./Component/EmployeeComponent";
import Parent from "./Props_State/Parent";
import Employee, { Employee1 } from "./Component/Employee";
import Superconstrutor, { Header } from "./Lifecycle/Superconstrutor";
import { Componentlifecycle } from "./Lifecycle/Superconstrutor";
import UseStateHook, { Carinfo, LoginUsingUseStateHook } from "./Hooks/Usestate";
import UseEffectHook, { UseEffectHookforEmployees } from "./Hooks/Useeffect";

function App() {
  
  return (
    <div className="App">
      <header className="App-header">
		
        <Router>
          <div className="sidenav">
            <Link to="fn">Functional Component</Link>
            <Link to="fn1">Functional Component - 1</Link>
            <Link to="clscomp">Class Component</Link>
            <Link to="/props">Props</Link>
            <NavLink to="/props1">Props in Heirarchy</NavLink>
            <NavLink to="/state">State</NavLink>
            <NavLink to="/state1">State 1</NavLink>
            <NavLink to="/state_props">Flow of State and Props</NavLink>
            <NavLink to="/superconstructor">Super() vs Super(props)</NavLink>
            <NavLink to="/componentlifecycle">Component Life Cycle</NavLink>
            <NavLink to="/usestate">Hooks - useState</NavLink>
            <NavLink to="/multiusestate">Hooks - Multiple useState</NavLink>
            <NavLink to="/loginform">Login form useState</NavLink>
            <NavLink to="/useEffectHook">Hooks - useEffect</NavLink>
            <NavLink to="/useEffectHookAPI">Hooks - useEffect with API</NavLink>
          </div>
          <div className="main">
            <Routes>
              <Route path="/" element={<Default />} />
              <Route
                path="/fn"
                element={<Employee name="KP" salary="123456789" />}
              />
              <Route
                path="/fn1"
                element={<Employee1 name="KP" salary="123456789" />}
              />
              <Route
                path="/clscomp"
                element={<EmployeeComponent name="KP" />}
              />
              <Route
                path="/props"
                element={<DemoComponent user="React" />}
              ></Route>
              <Route
                path="/props1"
                element={<Parent Name="12" Location="34" />}
              />
              <Route path="/state1" element={<Component />}></Route>
              <Route path="/state" element={<Stateexample />}></Route>
              <Route
                path="/state_props"
                element={
                  <Employeedetails
                    Id="101"
                    Name="KP"
                    Location="Pune"
                    Salary="50000"
                    BasicSalary="25000"
                    HRA="10000"
                    SpecialAllowance="15000"
                    SalaryBreak="0.1"
                  ></Employeedetails>
                }
              ></Route>
              <Route
                path="/superconstructor"
                element={<Superconstrutor name="KP" />}
              />
              <Route
                path="/componentlifecycle"
                element={<Componentlifecycle color="Red" />}
              />
              <Route path="/usestate" element={<UseStateHook />} />
              <Route path="/multiusestate" element={<Carinfo />} />
              <Route path="/loginform" element={<LoginUsingUseStateHook />} />
              <Route path="/useEffectHook" element={<UseEffectHook />} />
              <Route
                path="/useEffectHookAPI"
                element={<UseEffectHookforEmployees />}
              />
            </Routes>
          </div>
        </Router>
      </header>
    </div>
  );
}

export default App;
