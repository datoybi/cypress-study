import {
  require_auth
} from "/build/_shared/chunk-V2UFASCO.js";
import {
  Takeaways_default,
  require_prisma
} from "/build/_shared/chunk-VMSJIXDY.js";
import {
  Link,
  Outlet,
  require_jsx_dev_runtime,
  useLoaderData
} from "/build/_shared/chunk-43ZBSOTS.js";
import {
  __toESM
} from "/build/_shared/chunk-5KL4PAQL.js";

// app/routes/takeaways.jsx
var import_auth = __toESM(require_auth());
var import_prisma = __toESM(require_prisma());
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
function TakewaysLayoutRoute() {
  const takeaways = useLoaderData();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Outlet, {}, void 0, false, {
      fileName: "app/routes/takeaways.jsx",
      lineNumber: 12,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", { className: "text-center text-3xl font-bold text-slate-400", children: "Your key takeaways" }, void 0, false, {
      fileName: "app/routes/takeaways.jsx",
      lineNumber: 13,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "text-right my-8 max-w-2xl mx-auto", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
      Link,
      {
        to: "/takeaways/new",
        className: "border-blue-300 px-4 py-3 border-2 text-blue-300 hover:bg-blue-300 hover:text-blue-900",
        children: "+ Add a new takeaway"
      },
      void 0,
      false,
      {
        fileName: "app/routes/takeaways.jsx",
        lineNumber: 17,
        columnNumber: 9
      },
      this
    ) }, void 0, false, {
      fileName: "app/routes/takeaways.jsx",
      lineNumber: 16,
      columnNumber: 7
    }, this),
    takeaways.length === 0 && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-center my-16 text-xl", children: "You have no key takeaways yet!" }, void 0, false, {
      fileName: "app/routes/takeaways.jsx",
      lineNumber: 24,
      columnNumber: 34
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Takeaways_default, { items: takeaways }, void 0, false, {
      fileName: "app/routes/takeaways.jsx",
      lineNumber: 25,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/takeaways.jsx",
    lineNumber: 11,
    columnNumber: 5
  }, this);
}
var takeaways_default = TakewaysLayoutRoute;
export {
  takeaways_default as default
};
//# sourceMappingURL=/build/routes/takeaways-KKHZ35OT.js.map
