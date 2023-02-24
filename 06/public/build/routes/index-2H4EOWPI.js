import {
  Takeaways_default,
  require_prisma
} from "/build/_shared/chunk-VMSJIXDY.js";
import {
  Link,
  require_jsx_dev_runtime,
  useLoaderData
} from "/build/_shared/chunk-43ZBSOTS.js";
import {
  __toESM
} from "/build/_shared/chunk-5KL4PAQL.js";

// app/routes/index.jsx
var import_prisma = __toESM(require_prisma());
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
function Index() {
  const takeways = useLoaderData();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("section", { className: "text-center max-w-5xl mx-auto my-4", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", { className: "font-bold text-2xl my-4", children: "Learn Cypress" }, void 0, false, {
        fileName: "app/routes/index.jsx",
        lineNumber: 11,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: "Cypress is an amazing end-to-end testing software and framework." }, void 0, false, {
        fileName: "app/routes/index.jsx",
        lineNumber: 12,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: "Manage your key Cypress takeaways and concepts with our learning app." }, void 0, false, {
        fileName: "app/routes/index.jsx",
        lineNumber: 13,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/index.jsx",
      lineNumber: 10,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("section", { className: "text-center max-w-5xl mx-auto my-4", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Takeaways_default, { items: takeways }, void 0, false, {
      fileName: "app/routes/index.jsx",
      lineNumber: 18,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/routes/index.jsx",
      lineNumber: 17,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("section", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-center", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: "/takeaways/new", className: "bg-blue-700 text-blue-50 rounded-sm px-8 py-4 text-lg hover:bg-blue-600", children: "+ Add a new takeaway" }, void 0, false, {
      fileName: "app/routes/index.jsx",
      lineNumber: 22,
      columnNumber: 11
    }, this) }, void 0, false, {
      fileName: "app/routes/index.jsx",
      lineNumber: 21,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/routes/index.jsx",
      lineNumber: 20,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/index.jsx",
    lineNumber: 9,
    columnNumber: 5
  }, this);
}
export {
  Index as default
};
//# sourceMappingURL=/build/routes/index-2H4EOWPI.js.map
