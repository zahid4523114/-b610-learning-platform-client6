import React from "react";

const Blog = () => {
  return (
    <div className="container my-4">
      <div className="rounded-2 shadow-lg p-3 my-5">
        <h2>what is `cors`?</h2>
        <p>
          Cross-Origin Resource Sharing (CORS) is a mechanism that uses
          additional HTTPheaders to tell a browser to let a web application
          running at one origin (domain) have permission to access selected
          resources from a server at a different origin.A web application makes
          a cross-origin HTTP request when it requests a resource that has a
          different origin (domain, protocol, and port) than its own origin.
        </p>
      </div>
      <div className="rounded-2 shadow-lg p-3 my-5">
        <h2>Why are you using `firebase`?</h2>
        <p>
          The Firebase Realtime Database lets you build rich, collaborative
          applications by allowing secure access to the database directly from
          client-side code. Data is persisted locally, and even while offline,
          realtime events continue to fire, giving the end user a responsive
          experience.
        </p>
      </div>
      <div className="rounded-2 shadow-lg p-3 my-5">
        <h2>What other options do you have to implement authentication?</h2>
        <p>
          Firebase Authentication provides backend services, easy-to-use SDKs,
          and ready-made UI libraries to authenticate users to your app. It
          supports authentication using passwords, phone numbers, popular
          federated identity providers like Google, Facebook and Twitter, and
          more.
        </p>
      </div>
      <div className="rounded-2 shadow-lg p-3 my-5">
        <h2>How does the private route work?</h2>
        <p>
          The react private route component renders child components ( children
          ) if the user is logged in. If not logged in the user is redirected to
          the /login page with the return url passed in the location state
          property.
        </p>
      </div>
      <div className="rounded-2 shadow-lg p-3 my-5">
        <h2>What is Node? How does Node work?</h2>
        <p>
          Node.js is an open-source backend javascript runtime environment. It
          is a used as backend service where javascript works on the server-side
          of the application. This way javascript is used on both frontend and
          backend. Node.js runs on chrome v8 engine which converts javascript
          code into machine code, it is highly scalable, lightweight, fast, and
          data-intensive. <br />
          <b>Working of Node.js:</b>Node.js accepts the request from the clients
          and sends the response, while working with the request node.js handles
          them with a single thread. To operate I/O operations or requests
          node.js use the concept of threads. Thread is a sequence of
          instructions that the server needs to perform. It runs parallel on the
          server to provide the information to multiple clients. Node.js is an
          event loop single-threaded language. It can handle concurrent requests
          with a single thread without blocking it for one request.
        </p>
      </div>
    </div>
  );
};

export default Blog;
