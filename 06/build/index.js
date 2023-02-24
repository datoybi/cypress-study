var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf, __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: !0 });
}, __copyProps = (to, from, except, desc) => {
  if (from && typeof from == "object" || typeof from == "function")
    for (let key of __getOwnPropNames(from))
      !__hasOwnProp.call(to, key) && key !== except && __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: !0 }) : target,
  mod
)), __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: !0 }), mod);

// <stdin>
var stdin_exports = {};
__export(stdin_exports, {
  assets: () => assets_manifest_default,
  assetsBuildDirectory: () => assetsBuildDirectory,
  entry: () => entry,
  future: () => future,
  publicPath: () => publicPath,
  routes: () => routes
});
module.exports = __toCommonJS(stdin_exports);

// app/entry.server.jsx
var entry_server_exports = {};
__export(entry_server_exports, {
  default: () => handleRequest
});
var import_stream = require("stream"), import_node = require("@remix-run/node"), import_react = require("@remix-run/react"), import_isbot = __toESM(require("isbot")), import_server = require("react-dom/server"), import_jsx_dev_runtime = require("react/jsx-dev-runtime"), ABORT_DELAY = 5e3;
function handleRequest(request, responseStatusCode, responseHeaders, remixContext) {
  return (0, import_isbot.default)(request.headers.get("user-agent")) ? handleBotRequest(
    request,
    responseStatusCode,
    responseHeaders,
    remixContext
  ) : handleBrowserRequest(
    request,
    responseStatusCode,
    responseHeaders,
    remixContext
  );
}
function handleBotRequest(request, responseStatusCode, responseHeaders, remixContext) {
  return new Promise((resolve, reject) => {
    let didError = !1, { pipe, abort } = (0, import_server.renderToPipeableStream)(
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react.RemixServer, { context: remixContext, url: request.url }, void 0, !1, {
        fileName: "app/entry.server.jsx",
        lineNumber: 41,
        columnNumber: 7
      }, this),
      {
        onAllReady() {
          let body = new import_stream.PassThrough();
          responseHeaders.set("Content-Type", "text/html"), resolve(
            new import_node.Response(body, {
              headers: responseHeaders,
              status: didError ? 500 : responseStatusCode
            })
          ), pipe(body);
        },
        onShellError(error) {
          reject(error);
        },
        onError(error) {
          didError = !0, console.error(error);
        }
      }
    );
    setTimeout(abort, ABORT_DELAY);
  });
}
function handleBrowserRequest(request, responseStatusCode, responseHeaders, remixContext) {
  return new Promise((resolve, reject) => {
    let didError = !1, { pipe, abort } = (0, import_server.renderToPipeableStream)(
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react.RemixServer, { context: remixContext, url: request.url }, void 0, !1, {
        fileName: "app/entry.server.jsx",
        lineNumber: 82,
        columnNumber: 7
      }, this),
      {
        onShellReady() {
          let body = new import_stream.PassThrough();
          responseHeaders.set("Content-Type", "text/html"), resolve(
            new import_node.Response(body, {
              headers: responseHeaders,
              status: didError ? 500 : responseStatusCode
            })
          ), pipe(body);
        },
        onShellError(err) {
          reject(err);
        },
        onError(error) {
          didError = !0, console.error(error);
        }
      }
    );
    setTimeout(abort, ABORT_DELAY);
  });
}

// app/root.jsx
var root_exports = {};
__export(root_exports, {
  default: () => App,
  links: () => links,
  loader: () => loader,
  meta: () => meta
});
var import_react4 = require("@remix-run/react");

// app/components/Layout.jsx
var import_react3 = require("@remix-run/react");

// app/components/NewsletterSignup.jsx
var import_react2 = require("@remix-run/react"), import_jsx_dev_runtime2 = require("react/jsx-dev-runtime");
function NewsletterSignup() {
  let fetcher = (0, import_react2.useFetcher)(), isSubmitting = fetcher.state === "submitting", result;
  return fetcher.data && fetcher.data.status !== 201 && (result = "error"), fetcher.data && fetcher.data.status === 201 && (result = "success"), /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { children: [
    result !== "success" && /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(fetcher.Form, { method: "post", action: "/newsletter", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("p", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
          "input",
          {
            type: "email",
            name: "email",
            placeholder: "email@example.com",
            className: "px-2 py-1 rounded-l-sm text-slate-900",
            "data-cy": "newsletter-email"
          },
          void 0,
          !1,
          {
            fileName: "app/components/NewsletterSignup.jsx",
            lineNumber: 22,
            columnNumber: 13
          },
          this
        ),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
          "button",
          {
            type: "submit",
            disabled: isSubmitting,
            className: "px-3 py-1 text-white bg-blue-500 rounded-r-sm",
            "data-cy": "newsletter-submit",
            children: isSubmitting ? /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("span", { className: "loader" }, void 0, !1, {
              fileName: "app/components/NewsletterSignup.jsx",
              lineNumber: 35,
              columnNumber: 31
            }, this) : "Sign up"
          },
          void 0,
          !1,
          {
            fileName: "app/components/NewsletterSignup.jsx",
            lineNumber: 29,
            columnNumber: 13
          },
          this
        )
      ] }, void 0, !0, {
        fileName: "app/components/NewsletterSignup.jsx",
        lineNumber: 21,
        columnNumber: 11
      }, this),
      result === "error" && /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("p", { className: "mt-2 text-slate-400", children: fetcher.data.message || "Something went wrong" }, void 0, !1, {
        fileName: "app/components/NewsletterSignup.jsx",
        lineNumber: 39,
        columnNumber: 13
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/NewsletterSignup.jsx",
      lineNumber: 20,
      columnNumber: 9
    }, this),
    result === "success" && /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("p", { children: "Thanks for signing up!" }, void 0, !1, {
      fileName: "app/components/NewsletterSignup.jsx",
      lineNumber: 45,
      columnNumber: 32
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/NewsletterSignup.jsx",
    lineNumber: 18,
    columnNumber: 5
  }, this);
}
var NewsletterSignup_default = NewsletterSignup;

// app/components/Layout.jsx
var import_jsx_dev_runtime3 = require("react/jsx-dev-runtime");
function Layout({ isLoggedIn, children }) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_jsx_dev_runtime3.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("header", { className: "flex justify-between max-w-5xl mx-auto p-8 items-center", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "text-3xl font-mono", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_react3.Link, { to: "/", children: "LearnCypress" }, void 0, !1, {
        fileName: "app/components/Layout.jsx",
        lineNumber: 9,
        columnNumber: 11
      }, this) }, void 0, !1, {
        fileName: "app/components/Layout.jsx",
        lineNumber: 8,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("nav", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("ul", { className: "flex gap-6 items-center", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(
          import_react3.Link,
          {
            to: "/takeaways",
            className: "text-slate-300 hover:text-slate-200",
            children: "Takeaways"
          },
          void 0,
          !1,
          {
            fileName: "app/components/Layout.jsx",
            lineNumber: 14,
            columnNumber: 15
          },
          this
        ) }, void 0, !1, {
          fileName: "app/components/Layout.jsx",
          lineNumber: 13,
          columnNumber: 13
        }, this),
        !isLoggedIn && /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(
          import_react3.Link,
          {
            to: "/login",
            className: "bg-blue-700 px-4 py-1 rounded-sm hover:bg-blue-600 border-2 border-blue-700 hover:border-blue-600",
            children: "Login"
          },
          void 0,
          !1,
          {
            fileName: "app/components/Layout.jsx",
            lineNumber: 23,
            columnNumber: 17
          },
          this
        ) }, void 0, !1, {
          fileName: "app/components/Layout.jsx",
          lineNumber: 22,
          columnNumber: 15
        }, this),
        isLoggedIn && /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_react3.Form, { method: "post", action: "/logout", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("button", { className: "bg-blue-700 px-4 py-1 rounded-sm hover:bg-blue-600", children: "Logout" }, void 0, !1, {
          fileName: "app/components/Layout.jsx",
          lineNumber: 34,
          columnNumber: 19
        }, this) }, void 0, !1, {
          fileName: "app/components/Layout.jsx",
          lineNumber: 33,
          columnNumber: 17
        }, this) }, void 0, !1, {
          fileName: "app/components/Layout.jsx",
          lineNumber: 32,
          columnNumber: 15
        }, this)
      ] }, void 0, !0, {
        fileName: "app/components/Layout.jsx",
        lineNumber: 12,
        columnNumber: 11
      }, this) }, void 0, !1, {
        fileName: "app/components/Layout.jsx",
        lineNumber: 11,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/Layout.jsx",
      lineNumber: 7,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("main", { children }, void 0, !1, {
      fileName: "app/components/Layout.jsx",
      lineNumber: 43,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("footer", { className: "mt-16 text-center", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(NewsletterSignup_default, {}, void 0, !1, {
      fileName: "app/components/Layout.jsx",
      lineNumber: 45,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/components/Layout.jsx",
      lineNumber: 44,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/Layout.jsx",
    lineNumber: 6,
    columnNumber: 5
  }, this);
}
var Layout_default = Layout;

// app/data/auth.server.js
var import_bcryptjs = require("bcryptjs"), import_node2 = require("@remix-run/node");

// app/data/prisma.server.js
var import_client = require("@prisma/client"), prisma;
global.__db || (global.__db = new import_client.PrismaClient(), global.__db.$connect()), prisma = global.__db;

// app/data/auth.server.js
var SESSION_SECRET = process.env.SESSION_SECRET, sessionStorage = (0, import_node2.createCookieSessionStorage)({
  cookie: {
    secure: !1,
    secrets: [SESSION_SECRET],
    sameSite: "lax",
    maxAge: 30 * 24 * 60 * 60,
    httpOnly: !0
  }
});
async function createUserSession(userId, redirectPath) {
  let session = await sessionStorage.getSession();
  return session.set("userId", userId), (0, import_node2.redirect)(redirectPath, {
    headers: {
      "Set-Cookie": await sessionStorage.commitSession(session)
    }
  });
}
async function getUserFromSession(request) {
  let userId = (await sessionStorage.getSession(
    request.headers.get("Cookie")
  )).get("userId");
  return userId || null;
}
async function destroyUserSession(request) {
  let session = await sessionStorage.getSession(
    request.headers.get("Cookie")
  );
  return (0, import_node2.redirect)("/", {
    headers: {
      "Set-Cookie": await sessionStorage.destroySession(session)
    }
  });
}
async function requireUserSession(request) {
  let userId = await getUserFromSession(request);
  if (!userId)
    throw (0, import_node2.redirect)("/login");
  return userId;
}
async function signup({ email, password }) {
  if (await prisma.user.findFirst({ where: { email } }))
    return (0, import_node2.json)({ status: 409, statusText: "User exists already." });
  let passwordHash = await (0, import_bcryptjs.hash)(password, 12), user = await prisma.user.create({
    data: { email, password: passwordHash }
  });
  return createUserSession(user.id, "/takeaways");
}
async function login({ email, password }) {
  let existingUser = await prisma.user.findFirst({ where: { email } });
  return existingUser ? await (0, import_bcryptjs.compare)(password, existingUser.password) ? createUserSession(existingUser.id, "/takeaways") : (0, import_node2.json)({ status: 400, statusText: "Invalid credentials (pw)." }) : (0, import_node2.json)({ status: 400, statusText: "Invalid credentials." });
}

// app/styles/main.css
var main_default = "/build/_assets/main-5TQMAH3L.css";

// app/styles/tailwind.css
var tailwind_default = "/build/_assets/tailwind-HIM4HGLW.css";

// app/root.jsx
var import_jsx_dev_runtime4 = require("react/jsx-dev-runtime"), meta = () => ({
  charset: "utf-8",
  title: "Cypress Requests",
  viewport: "width=device-width,initial-scale=1"
}), links = () => [
  { rel: "stylesheet", href: tailwind_default },
  { rel: "stylesheet", href: main_default },
  { rel: "icon", href: "/favicon.ico" }
];
function App() {
  let isLoggedIn = (0, import_react4.useLoaderData)();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("html", { lang: "en", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("head", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(import_react4.Meta, {}, void 0, !1, {
        fileName: "app/root.jsx",
        lineNumber: 34,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(import_react4.Links, {}, void 0, !1, {
        fileName: "app/root.jsx",
        lineNumber: 35,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/root.jsx",
      lineNumber: 33,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("body", { className: "bg-gradient-to-br from-slate-900 to-slate-800 h-screen text-slate-300", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Layout_default, { isLoggedIn, children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(import_react4.Outlet, {}, void 0, !1, {
        fileName: "app/root.jsx",
        lineNumber: 39,
        columnNumber: 11
      }, this) }, void 0, !1, {
        fileName: "app/root.jsx",
        lineNumber: 38,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(import_react4.ScrollRestoration, {}, void 0, !1, {
        fileName: "app/root.jsx",
        lineNumber: 41,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(import_react4.Scripts, {}, void 0, !1, {
        fileName: "app/root.jsx",
        lineNumber: 42,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(import_react4.LiveReload, {}, void 0, !1, {
        fileName: "app/root.jsx",
        lineNumber: 43,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/root.jsx",
      lineNumber: 37,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/root.jsx",
    lineNumber: 32,
    columnNumber: 5
  }, this);
}
async function loader({ request }) {
  return !!await getUserFromSession(request);
}

// app/routes/newsletter.js
var newsletter_exports = {};
__export(newsletter_exports, {
  action: () => action,
  loader: () => loader2
});
var import_node3 = require("@remix-run/node");

// app/util/validation.server.js
function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}
function isValidPassword(password) {
  return password.length >= 6;
}

// app/util/wait.js
function wait(time) {
  return new Promise((resolve) => {
    setTimeout(resolve, time);
  });
}

// app/data/newsletter.server.js
async function addNewsletterContact(email) {
  if (!isValidEmail(email))
    throw new Error("Invalid email address.");
  let existingContact = await prisma.newsletterSignup.findUnique({
    where: {
      email
    }
  });
  if (await wait(2e3), existingContact)
    throw new Error("This email is already subscribed.");
  await prisma.newsletterSignup.create({
    data: {
      email
    }
  });
}

// app/util/errors.js
var BadRequestErrorResponse = class extends Response {
  constructor(message, statusText = "Bad request") {
    super(JSON.stringify({ status: 400, message }), {
      headers: {
        "Content-Type": "application/json"
      },
      status: 400,
      statusText
    });
  }
};

// app/routes/newsletter.js
async function action({ request }) {
  if (request.method !== "POST")
    return new BadRequestErrorResponse("HTTP method not allowed.");
  let email = (await request.formData()).get("email");
  try {
    await addNewsletterContact(email);
  } catch (error) {
    return (0, import_node3.json)(
      { message: error.message },
      {
        status: 400,
        statusText: "Failed to create contact"
      }
    );
  }
  return (0, import_node3.json)(
    { status: 201 },
    {
      status: 201,
      statusText: "Added newsletter contact."
    }
  );
}
function loader2() {
  throw new BadRequestErrorResponse("HTTP method not allowed.");
}

// app/routes/takeaways.jsx
var takeaways_exports = {};
__export(takeaways_exports, {
  default: () => takeaways_default,
  loader: () => loader3
});
var import_react5 = require("@remix-run/react");

// app/components/Takeaways.jsx
var import_jsx_dev_runtime5 = require("react/jsx-dev-runtime");
function Takeaways({ items }) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("ul", { className: "grid grid-cols-2 gap-8 max-w-2xl mx-auto my-12", children: items.map((item) => /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("li", { "data-cy": "takeaway-item", children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("article", { className: "bg-slate-800 rounded-md p-8", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("h3", { className: "font-bold text-lg mb-2 text-blue-400", children: item.title }, void 0, !1, {
      fileName: "app/components/Takeaways.jsx",
      lineNumber: 7,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("p", { className: "text-slate-400", children: item.body }, void 0, !1, {
      fileName: "app/components/Takeaways.jsx",
      lineNumber: 8,
      columnNumber: 13
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/Takeaways.jsx",
    lineNumber: 6,
    columnNumber: 11
  }, this) }, item.id, !1, {
    fileName: "app/components/Takeaways.jsx",
    lineNumber: 5,
    columnNumber: 9
  }, this)) }, void 0, !1, {
    fileName: "app/components/Takeaways.jsx",
    lineNumber: 3,
    columnNumber: 5
  }, this);
}
var Takeaways_default = Takeaways;

// app/routes/takeaways.jsx
var import_jsx_dev_runtime6 = require("react/jsx-dev-runtime");
function TakewaysLayoutRoute() {
  let takeaways = (0, import_react5.useLoaderData)();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(import_jsx_dev_runtime6.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(import_react5.Outlet, {}, void 0, !1, {
      fileName: "app/routes/takeaways.jsx",
      lineNumber: 12,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("h1", { className: "text-center text-3xl font-bold text-slate-400", children: "Your key takeaways" }, void 0, !1, {
      fileName: "app/routes/takeaways.jsx",
      lineNumber: 13,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("div", { className: "text-right my-8 max-w-2xl mx-auto", children: /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(
      import_react5.Link,
      {
        to: "/takeaways/new",
        className: "border-blue-300 px-4 py-3 border-2 text-blue-300 hover:bg-blue-300 hover:text-blue-900",
        children: "+ Add a new takeaway"
      },
      void 0,
      !1,
      {
        fileName: "app/routes/takeaways.jsx",
        lineNumber: 17,
        columnNumber: 9
      },
      this
    ) }, void 0, !1, {
      fileName: "app/routes/takeaways.jsx",
      lineNumber: 16,
      columnNumber: 7
    }, this),
    takeaways.length === 0 && /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("p", { className: "text-center my-16 text-xl", children: "You have no key takeaways yet!" }, void 0, !1, {
      fileName: "app/routes/takeaways.jsx",
      lineNumber: 24,
      columnNumber: 34
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(Takeaways_default, { items: takeaways }, void 0, !1, {
      fileName: "app/routes/takeaways.jsx",
      lineNumber: 25,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/takeaways.jsx",
    lineNumber: 11,
    columnNumber: 5
  }, this);
}
var takeaways_default = TakewaysLayoutRoute;
async function loader3({ request }) {
  return await requireUserSession(request), prisma.takeaway.findMany();
}

// app/routes/takeaways/new.jsx
var new_exports = {};
__export(new_exports, {
  action: () => action2,
  default: () => new_default,
  loader: () => loader4
});
var import_node4 = require("@remix-run/node"), import_react6 = require("@remix-run/react");

// app/components/Modal.jsx
var import_jsx_dev_runtime7 = require("react/jsx-dev-runtime");
function Modal({ onClose, children }) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(import_jsx_dev_runtime7.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(
      "div",
      {
        className: "fixed top-0 left-0 h-screen w-screen bg-slate-900 opacity-80",
        onClick: onClose
      },
      void 0,
      !1,
      {
        fileName: "app/components/Modal.jsx",
        lineNumber: 4,
        columnNumber: 7
      },
      this
    ),
    /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(
      "dialog",
      {
        open: !0,
        className: "m-0 fixed top-10 left-[50%] -translate-x-1/2 bg-slate-300 rounded-md p-4 w-96",
        children
      },
      void 0,
      !1,
      {
        fileName: "app/components/Modal.jsx",
        lineNumber: 8,
        columnNumber: 7
      },
      this
    )
  ] }, void 0, !0, {
    fileName: "app/components/Modal.jsx",
    lineNumber: 3,
    columnNumber: 5
  }, this);
}
var Modal_default = Modal;

// app/routes/takeaways/new.jsx
var import_jsx_dev_runtime8 = require("react/jsx-dev-runtime");
function NewTakewayRoute() {
  let navigate = (0, import_react6.useNavigate)();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(Modal_default, { onClose: () => navigate("..", { relative: "path" }), children: /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(import_react6.Form, { method: "post", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("p", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(
        "label",
        {
          htmlFor: "title",
          className: "block mb-1 font-semibold text-slate-600",
          children: "Title"
        },
        void 0,
        !1,
        {
          fileName: "app/routes/takeaways/new.jsx",
          lineNumber: 15,
          columnNumber: 11
        },
        this
      ),
      /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(
        "input",
        {
          type: "text",
          id: "title",
          name: "title",
          required: !0,
          maxLength: 200,
          className: "px-2 py-1 bg-slate-200 w-full",
          "data-cy": "title"
        },
        void 0,
        !1,
        {
          fileName: "app/routes/takeaways/new.jsx",
          lineNumber: 21,
          columnNumber: 11
        },
        this
      )
    ] }, void 0, !0, {
      fileName: "app/routes/takeaways/new.jsx",
      lineNumber: 14,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("p", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(
        "label",
        {
          htmlFor: "body",
          className: "block mb-1 font-semibold text-slate-600",
          children: "Body"
        },
        void 0,
        !1,
        {
          fileName: "app/routes/takeaways/new.jsx",
          lineNumber: 32,
          columnNumber: 11
        },
        this
      ),
      /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(
        "textarea",
        {
          id: "body",
          name: "body",
          required: !0,
          rows: 5,
          className: "px-2 py-1 bg-slate-200 w-full",
          "data-cy": "body"
        },
        void 0,
        !1,
        {
          fileName: "app/routes/takeaways/new.jsx",
          lineNumber: 38,
          columnNumber: 11
        },
        this
      )
    ] }, void 0, !0, {
      fileName: "app/routes/takeaways/new.jsx",
      lineNumber: 31,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("p", { className: "flex gap-4 justify-end items-center", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(import_react6.Link, { to: "..", className: "text-slate-600 hover:text-slate-500", children: "Cancel" }, void 0, !1, {
        fileName: "app/routes/takeaways/new.jsx",
        lineNumber: 48,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(
        "button",
        {
          type: "submit",
          className: "bg-blue-500 text-white px-4 py-1 rounded-sm hover:bg-blue-400",
          "data-cy": "create-takeaway",
          children: "Create"
        },
        void 0,
        !1,
        {
          fileName: "app/routes/takeaways/new.jsx",
          lineNumber: 51,
          columnNumber: 11
        },
        this
      )
    ] }, void 0, !0, {
      fileName: "app/routes/takeaways/new.jsx",
      lineNumber: 47,
      columnNumber: 9
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/takeaways/new.jsx",
    lineNumber: 13,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/routes/takeaways/new.jsx",
    lineNumber: 12,
    columnNumber: 5
  }, this);
}
var new_default = NewTakewayRoute;
function loader4({ request }) {
  return requireUserSession(request);
}
async function action2({ request }) {
  let fd = await request.formData(), title = fd.get("title"), body = fd.get("body");
  return !title || !body ? (0, import_node4.json)({ message: "Title and body are required." }, { status: 400 }) : (await prisma.takeaway.create({
    data: {
      title,
      body
    }
  }), (0, import_node4.redirect)("/takeaways"));
}

// app/routes/logout.js
var logout_exports = {};
__export(logout_exports, {
  action: () => action3
});
function action3({ request }) {
  if (request.method !== "POST")
    throw new BadRequestErrorResponse("HTTP method not allowed.");
  return destroyUserSession(request);
}

// app/routes/signup.jsx
var signup_exports = {};
__export(signup_exports, {
  action: () => action4,
  default: () => signup_default
});
var import_node5 = require("@remix-run/node");

// app/components/Auth.jsx
var import_react7 = require("@remix-run/react"), import_jsx_dev_runtime9 = require("react/jsx-dev-runtime");
function Auth({ mode }) {
  let validationData = (0, import_react7.useActionData)();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(
    import_react7.Form,
    {
      method: "post",
      action: `/${mode}`,
      className: "bg-slate-800 px-4 rounded-md my-4 max-w-lg mx-auto p-4",
      children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("p", { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(
            "label",
            {
              htmlFor: "email",
              className: "font-semibold block mb-1 text-slate-400",
              children: "Email"
            },
            void 0,
            !1,
            {
              fileName: "app/components/Auth.jsx",
              lineNumber: 13,
              columnNumber: 9
            },
            this
          ),
          /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(
            "input",
            {
              type: "email",
              id: "email",
              name: "email",
              className: "mb-2 w-full rounded-sm text-lg px-2 py-1 bg-slate-400 text-slate-900",
              "data-cy": "auth-email"
            },
            void 0,
            !1,
            {
              fileName: "app/components/Auth.jsx",
              lineNumber: 19,
              columnNumber: 9
            },
            this
          )
        ] }, void 0, !0, {
          fileName: "app/components/Auth.jsx",
          lineNumber: 12,
          columnNumber: 7
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("p", { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(
            "label",
            {
              htmlFor: "password",
              className: "font-semibold block mb-1 text-slate-400",
              children: "Password"
            },
            void 0,
            !1,
            {
              fileName: "app/components/Auth.jsx",
              lineNumber: 28,
              columnNumber: 9
            },
            this
          ),
          /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(
            "input",
            {
              type: "password",
              id: "password",
              name: "password",
              required: !0,
              minLength: 6,
              className: "mb-2 w-full rounded-sm text-lg px-2 py-1 bg-slate-400 text-slate-900",
              "data-cy": "auth-password"
            },
            void 0,
            !1,
            {
              fileName: "app/components/Auth.jsx",
              lineNumber: 34,
              columnNumber: 9
            },
            this
          )
        ] }, void 0, !0, {
          fileName: "app/components/Auth.jsx",
          lineNumber: 27,
          columnNumber: 7
        }, this),
        validationData && /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("p", { className: "text-pink-300", children: validationData.statusText }, void 0, !1, {
          fileName: "app/components/Auth.jsx",
          lineNumber: 44,
          columnNumber: 26
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("p", { className: "flex justify-end mt-2 gap-4 items-center", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(
            import_react7.Link,
            {
              to: mode === "login" ? "/signup" : "/login",
              className: "text-slate-400 hover:text-slate-500",
              children: mode === "login" ? "Create a new account" : "Log in with existing account"
            },
            void 0,
            !1,
            {
              fileName: "app/components/Auth.jsx",
              lineNumber: 46,
              columnNumber: 9
            },
            this
          ),
          /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(
            "button",
            {
              type: "submit",
              className: "bg-blue-600 px-5 py-1 rounded-sm text-white hover:bg-blue-500",
              "data-cy": "auth-submit",
              children: mode === "login" ? "Login" : "Create Account"
            },
            void 0,
            !1,
            {
              fileName: "app/components/Auth.jsx",
              lineNumber: 54,
              columnNumber: 9
            },
            this
          )
        ] }, void 0, !0, {
          fileName: "app/components/Auth.jsx",
          lineNumber: 45,
          columnNumber: 7
        }, this)
      ]
    },
    void 0,
    !0,
    {
      fileName: "app/components/Auth.jsx",
      lineNumber: 7,
      columnNumber: 5
    },
    this
  );
}
var Auth_default = Auth;

// app/routes/signup.jsx
var import_jsx_dev_runtime10 = require("react/jsx-dev-runtime");
function SignupRoute() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(Auth_default, { mode: "signup" }, void 0, !1, {
    fileName: "app/routes/signup.jsx",
    lineNumber: 8,
    columnNumber: 10
  }, this);
}
var signup_default = SignupRoute;
async function action4({ request }) {
  let formData = await request.formData(), credentials = Object.fromEntries(formData);
  return !isValidEmail(credentials.email) || !isValidPassword(credentials.password) ? (0, import_node5.json)({ message: "Invalid credentials entered." }, { status: 400 }) : signup(credentials);
}

// app/routes/index.jsx
var routes_exports = {};
__export(routes_exports, {
  default: () => Index,
  loader: () => loader5
});
var import_react8 = require("@remix-run/react");
var import_jsx_dev_runtime11 = require("react/jsx-dev-runtime");
function Index() {
  let takeways = (0, import_react8.useLoaderData)();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(import_jsx_dev_runtime11.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("section", { className: "text-center max-w-5xl mx-auto my-4", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("h1", { className: "font-bold text-2xl my-4", children: "Learn Cypress" }, void 0, !1, {
        fileName: "app/routes/index.jsx",
        lineNumber: 11,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("p", { children: "Cypress is an amazing end-to-end testing software and framework." }, void 0, !1, {
        fileName: "app/routes/index.jsx",
        lineNumber: 12,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("p", { children: "Manage your key Cypress takeaways and concepts with our learning app." }, void 0, !1, {
        fileName: "app/routes/index.jsx",
        lineNumber: 13,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/index.jsx",
      lineNumber: 10,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("section", { className: "text-center max-w-5xl mx-auto my-4", children: /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(Takeaways_default, { items: takeways }, void 0, !1, {
      fileName: "app/routes/index.jsx",
      lineNumber: 18,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/routes/index.jsx",
      lineNumber: 17,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("section", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("p", { className: "text-center", children: /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(import_react8.Link, { to: "/takeaways/new", className: "bg-blue-700 text-blue-50 rounded-sm px-8 py-4 text-lg hover:bg-blue-600", children: "+ Add a new takeaway" }, void 0, !1, {
      fileName: "app/routes/index.jsx",
      lineNumber: 22,
      columnNumber: 11
    }, this) }, void 0, !1, {
      fileName: "app/routes/index.jsx",
      lineNumber: 21,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/routes/index.jsx",
      lineNumber: 20,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/index.jsx",
    lineNumber: 9,
    columnNumber: 5
  }, this);
}
function loader5() {
  return prisma.takeaway.findMany({ take: 2 });
}

// app/routes/login.jsx
var login_exports = {};
__export(login_exports, {
  action: () => action5,
  default: () => login_default
});
var import_node6 = require("@remix-run/node");
var import_jsx_dev_runtime12 = require("react/jsx-dev-runtime");
function LoginRoute() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(Auth_default, { mode: "login" }, void 0, !1, {
    fileName: "app/routes/login.jsx",
    lineNumber: 8,
    columnNumber: 10
  }, this);
}
var login_default = LoginRoute;
async function action5({ request }) {
  let formData = await request.formData(), credentials = Object.fromEntries(formData);
  return !isValidEmail(credentials.email) || !isValidPassword(credentials.password) ? (0, import_node6.json)({ message: "Invalid credentials entered." }, { status: 400 }) : login(credentials);
}

// server-assets-manifest:@remix-run/dev/assets-manifest
var assets_manifest_default = { version: "86b800e7", entry: { module: "/build/entry.client-IKI6GPC2.js", imports: ["/build/_shared/chunk-43ZBSOTS.js", "/build/_shared/chunk-5KL4PAQL.js"] }, routes: { root: { id: "root", parentId: void 0, path: "", index: void 0, caseSensitive: void 0, module: "/build/root-GTRVCR7R.js", imports: void 0, hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/index": { id: "routes/index", parentId: "root", path: void 0, index: !0, caseSensitive: void 0, module: "/build/routes/index-2H4EOWPI.js", imports: ["/build/_shared/chunk-VMSJIXDY.js"], hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/login": { id: "routes/login", parentId: "root", path: "login", index: void 0, caseSensitive: void 0, module: "/build/routes/login-GCGVO4SD.js", imports: ["/build/_shared/chunk-6IUAAYPU.js", "/build/_shared/chunk-V2UFASCO.js"], hasAction: !0, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/logout": { id: "routes/logout", parentId: "root", path: "logout", index: void 0, caseSensitive: void 0, module: "/build/routes/logout-TIVGJ7SQ.js", imports: void 0, hasAction: !0, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/newsletter": { id: "routes/newsletter", parentId: "root", path: "newsletter", index: void 0, caseSensitive: void 0, module: "/build/routes/newsletter-XNDP5GXC.js", imports: void 0, hasAction: !0, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/signup": { id: "routes/signup", parentId: "root", path: "signup", index: void 0, caseSensitive: void 0, module: "/build/routes/signup-PJUQXPQM.js", imports: ["/build/_shared/chunk-6IUAAYPU.js", "/build/_shared/chunk-V2UFASCO.js"], hasAction: !0, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/takeaways": { id: "routes/takeaways", parentId: "root", path: "takeaways", index: void 0, caseSensitive: void 0, module: "/build/routes/takeaways-KKHZ35OT.js", imports: ["/build/_shared/chunk-V2UFASCO.js", "/build/_shared/chunk-VMSJIXDY.js"], hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/takeaways/new": { id: "routes/takeaways/new", parentId: "routes/takeaways", path: "new", index: void 0, caseSensitive: void 0, module: "/build/routes/takeaways/new-ZQUUF4F7.js", imports: void 0, hasAction: !0, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 } }, cssBundleHref: void 0, url: "/build/manifest-86B800E7.js" };

// server-entry-module:@remix-run/dev/server-build
var assetsBuildDirectory = "public\\build", future = { unstable_cssModules: !1, unstable_cssSideEffectImports: !1, unstable_dev: !1, unstable_postcss: !1, unstable_tailwind: !1, unstable_vanillaExtract: !1, v2_errorBoundary: !1, v2_meta: !1, v2_routeConvention: !1 }, publicPath = "/build/", entry = { module: entry_server_exports }, routes = {
  root: {
    id: "root",
    parentId: void 0,
    path: "",
    index: void 0,
    caseSensitive: void 0,
    module: root_exports
  },
  "routes/newsletter": {
    id: "routes/newsletter",
    parentId: "root",
    path: "newsletter",
    index: void 0,
    caseSensitive: void 0,
    module: newsletter_exports
  },
  "routes/takeaways": {
    id: "routes/takeaways",
    parentId: "root",
    path: "takeaways",
    index: void 0,
    caseSensitive: void 0,
    module: takeaways_exports
  },
  "routes/takeaways/new": {
    id: "routes/takeaways/new",
    parentId: "routes/takeaways",
    path: "new",
    index: void 0,
    caseSensitive: void 0,
    module: new_exports
  },
  "routes/logout": {
    id: "routes/logout",
    parentId: "root",
    path: "logout",
    index: void 0,
    caseSensitive: void 0,
    module: logout_exports
  },
  "routes/signup": {
    id: "routes/signup",
    parentId: "root",
    path: "signup",
    index: void 0,
    caseSensitive: void 0,
    module: signup_exports
  },
  "routes/index": {
    id: "routes/index",
    parentId: "root",
    path: void 0,
    index: !0,
    caseSensitive: void 0,
    module: routes_exports
  },
  "routes/login": {
    id: "routes/login",
    parentId: "root",
    path: "login",
    index: void 0,
    caseSensitive: void 0,
    module: login_exports
  }
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  assets,
  assetsBuildDirectory,
  entry,
  future,
  publicPath,
  routes
});
//# sourceMappingURL=index.js.map
