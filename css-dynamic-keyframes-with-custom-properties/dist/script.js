import React, {
useRef,
useEffect,
Fragment,
useState } from
'https://cdn.skypack.dev/react';
import Prism from 'https://cdn.skypack.dev/prismjs';
import { Range } from 'https://cdn.skypack.dev/react-range';
import { render } from 'https://cdn.skypack.dev/react-dom';

// const { Prism } = window

const ROOT_NODE = document.querySelector('#app');

const getCode = (x, y) => {
  const result = `
    .box {
      animation: enter 2s;
    }

    .box:first-of-type {
      --x: ${x}%;
      --y: ${y}%;
    }

    .box:last-of-type {
      --x: 0%;
      --y: 200%;
    }
    
    @keyframes enter {
      0% {
        opacity: 0;
        translate: var(--x, 0) var(--y, 0);
      }
    }
  `;

  return result;
};

const getCodeMarkup = code => {
  return Prism.highlight(code, Prism.languages.css, 'css');
};

const App = () => {
  const [fromX, setFromX] = useState(0);
  const [fromY, setFromY] = useState(-200);
  const [replayKey, setReplayKey] = useState(Date.now());
  const cssString = useRef(getCode(fromX, fromY));
  const cssRef = useRef(getCodeMarkup(cssString.current));

  useEffect(() => {
    cssRef.current = getCodeMarkup(getCode(fromX, fromY));
    setReplayKey(Date.now());
  }, [fromX, fromY]);

  const replay = () => {
    setReplayKey(Date.now());
  };

  return /*#__PURE__*/(
    React.createElement("div", { className: "scene" }, /*#__PURE__*/
    React.createElement("button", { className: "replay", title: "Replay", onClick: replay }, /*#__PURE__*/
    React.createElement("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      fill: "none",
      viewBox: "0 0 24 24",
      strokeWidth: 1.5,
      stroke: "currentColor",
      className: "w-6 h-6" }, /*#__PURE__*/

    React.createElement("path", {
      strokeLinecap: "round",
      strokeLinejoin: "round",
      d: "M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99" })), /*#__PURE__*/


    React.createElement("span", { className: "sr-only" }, "Replay")), /*#__PURE__*/

    React.createElement("div", { className: "result" }, /*#__PURE__*/
    React.createElement("pre", null, /*#__PURE__*/
    React.createElement("code", {
      className: "language-css",
      dangerouslySetInnerHTML: { __html: cssRef.current } })), /*#__PURE__*/


    React.createElement("div", { className: "result__render", key: replayKey }, /*#__PURE__*/
    React.createElement("div", {
      className: "box",
      style: { '--x': `${fromX}%`, '--y': `${fromY}%` } }), /*#__PURE__*/

    React.createElement("div", { className: "box" }))), /*#__PURE__*/


    React.createElement("div", { className: "controls" }, /*#__PURE__*/
    React.createElement("label", { htmlFor: "x" }, "Origin X"), /*#__PURE__*/
    React.createElement("input", {
      id: "x",
      type: "range",
      min: "-300",
      max: "300",
      step: "10",
      value: fromX,
      onInput: e => setFromX(e.target.value) }), /*#__PURE__*/

    React.createElement("label", { htmlFor: "y" }, "Origin Y"), /*#__PURE__*/
    React.createElement("input", {
      id: "y",
      type: "range",
      min: "-300",
      max: "300",
      step: "10",
      value: fromY,
      onInput: e => setFromY(e.target.value) }))));




};

render( /*#__PURE__*/React.createElement(App, null), ROOT_NODE);