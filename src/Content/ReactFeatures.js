import { ArrowBack, ArrowForward, East, Forward, LabelImportant, Minimize, WavingHand } from "@mui/icons-material";
import React from "react";

function ReactFeatures()
{
    return (
      <div>
        <div className="paragraph-Heading">
          <h1>React Features</h1>
        </div>
        <div className="paragraph">
          <li>
            <b>React is an Open Source JavaScript library </b> which is used for
            creating dynamic and interactive user interfaces for mobile and web
            applications.
          </li>
          <li>
            It is highly flexible, declarative, and efficient for developing
            scalable, simple, and fast front-end for web and mobile
            applications.
          </li>
          <li>
            React is only concerned with rendering data to the Document Object
            Model (DOM) and so creating React applications usually requires the
            use of additional libraries for implementing things like state
            management and routing.
          </li>
          <li>
            <b>DOM: </b>Document Object Model is a way to represent the webpage
            in a structured hierarchical way. With DOM, we can easily access and
            manipulate tags, IDs, classes, Attributes, or Elements of HTML using
            commands or methods provided by the Document object. Using DOM,
            JavaScript gets access to HTML as well as CSS of the web page and
            can also add behavior to the HTML elements.
          </li>
          <li>
            <b>Virtual DOM: </b>Virtual DOM is like a lightweight copy of the
            actual DOM. So for every object that exists in the original DOM,
            there is an object for that in React Virtual DOM. It is exactly the
            same, but it does not have the power to directly change the layout
            of the document.
          </li>
          <li>
            Manipulating DOM is slow, but manipulating Virtual DOM is fast as
            nothing gets drawn on the screen.
          </li>
          <li>
            <b>Components: </b>The component is the most basic building block of
            the React Application UI. 
          </li>
          <li>
            <b>One-way data-binding: </b>React JS follows one-way data binding
            or unidirectional data flow that gives better control throughout the
            application.
          </li>
          <li>
            <b>JSX: </b>React uses JSX for building templates instead of regular
            JavaScript. JSX is faster than normal JavaScript as it performs
            optimizations while translating to regular JavaScript.
          </li>
        </div>
      </div>
    );
}

export default ReactFeatures;