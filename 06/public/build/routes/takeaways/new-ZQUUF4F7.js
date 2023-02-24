import {
  Form,
  Link,
  require_jsx_dev_runtime,
  useNavigate
} from "/build/_shared/chunk-43ZBSOTS.js";
import {
  __commonJS,
  __toESM
} from "/build/_shared/chunk-5KL4PAQL.js";

// empty-module:../../data/auth.server
var require_auth = __commonJS({
  "empty-module:../../data/auth.server"(exports, module) {
    module.exports = {};
  }
});

// empty-module:../../data/prisma.server
var require_prisma = __commonJS({
  "empty-module:../../data/prisma.server"(exports, module) {
    module.exports = {};
  }
});

// app/components/Modal.jsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
function Modal({ onClose, children }) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
      "div",
      {
        className: "fixed top-0 left-0 h-screen w-screen bg-slate-900 opacity-80",
        onClick: onClose
      },
      void 0,
      false,
      {
        fileName: "app/components/Modal.jsx",
        lineNumber: 4,
        columnNumber: 7
      },
      this
    ),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
      "dialog",
      {
        open: true,
        className: "m-0 fixed top-10 left-[50%] -translate-x-1/2 bg-slate-300 rounded-md p-4 w-96",
        children
      },
      void 0,
      false,
      {
        fileName: "app/components/Modal.jsx",
        lineNumber: 8,
        columnNumber: 7
      },
      this
    )
  ] }, void 0, true, {
    fileName: "app/components/Modal.jsx",
    lineNumber: 3,
    columnNumber: 5
  }, this);
}
var Modal_default = Modal;

// app/routes/takeaways/new.jsx
var import_auth = __toESM(require_auth());
var import_prisma = __toESM(require_prisma());
var import_jsx_dev_runtime2 = __toESM(require_jsx_dev_runtime());
function NewTakewayRoute() {
  const navigate = useNavigate();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Modal_default, { onClose: () => navigate("..", { relative: "path" }), children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Form, { method: "post", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("p", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
        "label",
        {
          htmlFor: "title",
          className: "block mb-1 font-semibold text-slate-600",
          children: "Title"
        },
        void 0,
        false,
        {
          fileName: "app/routes/takeaways/new.jsx",
          lineNumber: 15,
          columnNumber: 11
        },
        this
      ),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
        "input",
        {
          type: "text",
          id: "title",
          name: "title",
          required: true,
          maxLength: 200,
          className: "px-2 py-1 bg-slate-200 w-full",
          "data-cy": "title"
        },
        void 0,
        false,
        {
          fileName: "app/routes/takeaways/new.jsx",
          lineNumber: 21,
          columnNumber: 11
        },
        this
      )
    ] }, void 0, true, {
      fileName: "app/routes/takeaways/new.jsx",
      lineNumber: 14,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("p", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
        "label",
        {
          htmlFor: "body",
          className: "block mb-1 font-semibold text-slate-600",
          children: "Body"
        },
        void 0,
        false,
        {
          fileName: "app/routes/takeaways/new.jsx",
          lineNumber: 32,
          columnNumber: 11
        },
        this
      ),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
        "textarea",
        {
          id: "body",
          name: "body",
          required: true,
          rows: 5,
          className: "px-2 py-1 bg-slate-200 w-full",
          "data-cy": "body"
        },
        void 0,
        false,
        {
          fileName: "app/routes/takeaways/new.jsx",
          lineNumber: 38,
          columnNumber: 11
        },
        this
      )
    ] }, void 0, true, {
      fileName: "app/routes/takeaways/new.jsx",
      lineNumber: 31,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("p", { className: "flex gap-4 justify-end items-center", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Link, { to: "..", className: "text-slate-600 hover:text-slate-500", children: "Cancel" }, void 0, false, {
        fileName: "app/routes/takeaways/new.jsx",
        lineNumber: 48,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
        "button",
        {
          type: "submit",
          className: "bg-blue-500 text-white px-4 py-1 rounded-sm hover:bg-blue-400",
          "data-cy": "create-takeaway",
          children: "Create"
        },
        void 0,
        false,
        {
          fileName: "app/routes/takeaways/new.jsx",
          lineNumber: 51,
          columnNumber: 11
        },
        this
      )
    ] }, void 0, true, {
      fileName: "app/routes/takeaways/new.jsx",
      lineNumber: 47,
      columnNumber: 9
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/takeaways/new.jsx",
    lineNumber: 13,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/routes/takeaways/new.jsx",
    lineNumber: 12,
    columnNumber: 5
  }, this);
}
var new_default = NewTakewayRoute;
export {
  new_default as default
};
//# sourceMappingURL=/build/routes/takeaways/new-ZQUUF4F7.js.map
