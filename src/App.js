//import logo from "./logo.svg";
import "./App.css";
import "./CSS/SidebarCSS.css";
import React from "react";
import {
  HashRouter as Router,
  Route,
  Link,
  Routes,
} from "react-router-dom";

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
import UsecontextHook from "./Hooks/Usecontext";
import { UpdateStateUsecontextHook } from "./Hooks/Usecontext"; 
import UserefHook from "./Hooks/Useref";
import UsereducerHook from "./Hooks/Usereducer";
import CustomHooksWithAPI from "./Hooks/Customehook";
import NPMCustomHook from "./Hooks/NPMcustomHooks";
import ReactFeatures from "./Content/ReactFeatures";
import { Sidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import JSX from "./Content/JSX";
import CreateNewApp from "./Content/CreateNewApp";

function App() {
  
  return (
    <div className="App">
      <header>
        <Router>
          <div className="sidenav" style={{ display: "flex", height: "100vh" }}>
            <Sidebar>
              <Menu>
                <MenuItem className="menuHeader" component={<Link to="/" />}>
                  <center>
                    <h2>React JS</h2>
                  </center>
                </MenuItem>
                <MenuItem
                  className="menuItem"
                  component={<Link to="/ReactFeatures" />}
                >
                  React Features
                </MenuItem>
                <MenuItem className="menuItem" component={<Link to="/JSX" />}>
                  JSX
                </MenuItem>
                <MenuItem
                  className="menuItem"
                  component={<Link to="/Create-New-App" />}
                >
                  Create New App
                </MenuItem>
                <MenuItem
                  className="menuItem"
                  component={<Link to="/fn/fn1" />}
                >
                  Functional Component
                </MenuItem>
                <MenuItem
                  className="menuItem"
                  component={<Link to="/fn/fn2" />}
                >
                  Functional Component
                </MenuItem>

                <MenuItem
                  className="menuItem"
                  component={<Link to="/Class-Component" />}
                >
                  Class Component
                </MenuItem>
                <SubMenu
                  label="Props & State"
                  className="menuItem"
                  component={<Link to="/Props" />}
                >
                  <MenuItem component={<Link to="/Props/props" />}>
                    Props
                  </MenuItem>
                  <MenuItem
                    component={<Link to="/Props/props-in-multilevelclass" />}
                  >
                    Props in Heirarchy{" "}
                  </MenuItem>
                  <MenuItem component={<Link to="/State/state" />}>
                    State
                  </MenuItem>
                  <MenuItem component={<Link to="/State/state&counter" />}>
                    State 1
                  </MenuItem>
                  <MenuItem
                    component={<Link to="/State/Flow of State and Props" />}
                  >
                    Flow of State and Props
                  </MenuItem>
                </SubMenu>
                <MenuItem
                  className="menuItem"
                  component={<Link to="/Component-LifeCycle/Constructor" />}
                >
                  Constructor
                </MenuItem>
                <MenuItem
                  className="menuItem"
                  component={
                    <Link to="/Component-LifeCycle/Life-Cycle-Phases" />
                  }
                >
                  Component's Life Cycle
                </MenuItem>
                <SubMenu
                  label="React Hooks"
                  className="menuItem"
                  component={<Link to="/Hooks" />}
                >
                  <MenuItem component={<Link to="/Hooks-useState/useState" />}>
                    useState
                  </MenuItem>
                  <MenuItem
                    component={<Link to="/Hooks-useState/multiuseEffect" />}
                  >
                    useEffect
                  </MenuItem>
                  <MenuItem
                    component={
                      <Link to="/Hooks-useState/Login-form-useState" />
                    }
                  >
                    Login using useState
                  </MenuItem>
                  <MenuItem
                    component={<Link to="/Hooks-useEffect/useEffect" />}
                  >
                    useEffect
                  </MenuItem>
                  <MenuItem
                    component={<Link to="/Hooks-useEffect/useEffectInAPI" />}
                  >
                    useEffectInAPI
                  </MenuItem>
                </SubMenu>
                <SubMenu
                  label="Custom Hooks"
                  className="menuItem"
                  component={<Link to="/CustomHooks" />}
                >
                  <MenuItem component={<Link to="/customhooks/customhooks" />}>
                    Custom Hooks
                  </MenuItem>
                  <MenuItem
                    component={<Link to="/customhooks/NPM-custom-hook" />}
                  >
                    NPM Custom Hooks
                  </MenuItem>
                </SubMenu>
              </Menu>
            </Sidebar>
          </div>

          <div className="App-header">
            <Routes>
              <Route path="/" element={<Default />} />
              <Route path="/ReactFeatures" element={<ReactFeatures />} />
              <Route path="/JSX" element={<JSX />} />
              <Route path="/Create-New-App" element={<CreateNewApp />} />
              <Route
                path="/fn/fn1"
                element={<Employee name="KP" salary="123456789" />}
              />
              <Route
                path="/fn/fn2"
                element={<Employee1 name="KP" salary="123456789" />}
              />
              <Route
                path="/Class-Component"
                element={<EmployeeComponent name="KP" />}
              />
              <Route
                path="/Props/props"
                element={<DemoComponent user="React" />}
              ></Route>
              <Route
                path="/Props/props-in-multilevelclass"
                element={<Parent Name="12" Location="34" warn="true" />}
              />
              <Route path="/State/state" element={<Stateexample />}></Route>
              <Route
                path="/State/state&counter"
                element={<Component />}
              ></Route>
              <Route
                path="/State/Flow of State and Props"
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
                path="/Component-LifeCycle/Constructor"
                element={<Superconstrutor name="KP" />}
              />
              <Route
                path="/Component-LifeCycle/Life-Cycle-Phases"
                element={<Componentlifecycle color="Red" />}
              />
              <Route
                path="/Hooks-useState/useState"
                element={<UseStateHook />}
              />
              <Route
                path="/Hooks-useState/multiuseEffect"
                element={<Carinfo />}
              />
              <Route
                path="/Hooks-useState/Login-form-useState"
                element={<LoginUsingUseStateHook />}
              />
              <Route
                path="/Hooks-useEffect/useEffect"
                element={<UseEffectHook />}
              />
              <Route
                path="/Hooks-useEffect/useEffectInAPI"
                element={
                    <UseEffectHookforEmployees />
                }
              />
              <Route
                path="/Hooks-usecontext/usecontext"
                element={<UsecontextHook />}
              />
              <Route
                path="/Hooks-useContext/updtae-state-with-useContext"
                element={<UpdateStateUsecontextHook />}
              />
              <Route path="/Hooks-useRef/useRef" element={<UserefHook />} />
              <Route
                path="/Hooks-useReducer/useReducer"
                element={<UsereducerHook />}
              />
              <Route
                path="/customhooks/customhooks"
                element={<CustomHooksWithAPI />}
              />
              <Route
                path="/customhooks/NPM-custom-hook"
                element={<NPMCustomHook />}
              />
            </Routes>
          </div>
        </Router>
      </header>
    </div>
  );
}

export default App;
