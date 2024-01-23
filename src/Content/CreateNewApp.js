import React from "react";

export default function CreateNewApp() {
  return (
    <div>
      <div className="paragraph-Heading">
        <h1>Create New React App</h1>
      </div>
      <div className="paragraph">
        <ul>
          <li>
            There are basically two methods for React JS Environment Setup
            <ol>
              <li>
                Using <code>create-react-app</code>
              </li>
              <li>
                Using <code>webpack</code> and <code>babel</code>
              </li>
            </ol>
          </li>
        </ul>
        <ul>
          <li>
            Create React using <code>create-react-app</code>.
          </li>
          <ol>
            <li>
              Install{" "}
              <code>
                <a href="https://nodejs.org/en" target="_blank">
                  Node.js
                </a>
              </code>
            </li>
            <li>
              Execute command on the command prompt :{" "}
              <code>
                npx create-react-app <b>app-name</b>
              </code>
              .
            </li>
            <li>
              If the command is not working, run{" "}
              <code>npm install create-react-app</code>.
            </li>
            <li>
              New app has been created in <code>./app-name</code>.
            </li>
            <li>
              Move to folder{" "}
              <code>
                cd <b>app-name</b>
              </code>
              .
            </li>
            <li>
              Run the command <code>npm install</code> to install all
              dependencies from
              <code>package.json</code>.
            </li>
            <li>
              Run the command <code>npm start</code> to view on the{" "}
              <code>localhost:3000</code> by default.
            </li>
            <li>
              When you’re ready to launch your app, run this command{" "}
              <code>npm run build</code>
              to prepare bundles (artifacts for Production server).
            </li>
            <li>
              This command will build the react app and bundle the app into
              <code>CSS/JS/HTML</code> files and put them in the{" "}
              <code>/build</code> folder
            </li>
          </ol>
        </ul>
        <br />
        <center>
          <h2>
            <b>Change listing default PORT</b>
          </h2>
        </center>

        <ul>
          <li>
            <b>There are two ways to change default listing PORT </b>
          </li>
          <ul>
            <li>
              Update <code>package.Json</code> in <code>scripts</code> tag with
              the below code and run the application{" "}
              <code>"start": "set PORT=5000 && react-scripts start"</code>.
            </li>

            <li>
              Add a <code>.env</code> file in the project root and update the
              file with the below code <code>PORT=5000</code>.
            </li>
          </ul>
        </ul>
      </div>
    </div>
  );
}