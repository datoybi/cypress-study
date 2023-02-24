import {
  require_jsx_dev_runtime
} from "/build/_shared/chunk-43ZBSOTS.js";
import {
  __commonJS,
  __toESM
} from "/build/_shared/chunk-5KL4PAQL.js";

// empty-module:../data/prisma.server
var require_prisma = __commonJS({
  "empty-module:../data/prisma.server"(exports, module) {
    module.exports = {};
  }
});

// app/components/Takeaways.jsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
function Takeaways({ items }) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("ul", { className: "grid grid-cols-2 gap-8 max-w-2xl mx-auto my-12", children: items.map((item) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", { "data-cy": "takeaway-item", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("article", { className: "bg-slate-800 rounded-md p-8", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", { className: "font-bold text-lg mb-2 text-blue-400", children: item.title }, void 0, false, {
      fileName: "app/components/Takeaways.jsx",
      lineNumber: 7,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-slate-400", children: item.body }, void 0, false, {
      fileName: "app/components/Takeaways.jsx",
      lineNumber: 8,
      columnNumber: 13
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/Takeaways.jsx",
    lineNumber: 6,
    columnNumber: 11
  }, this) }, item.id, false, {
    fileName: "app/components/Takeaways.jsx",
    lineNumber: 5,
    columnNumber: 9
  }, this)) }, void 0, false, {
    fileName: "app/components/Takeaways.jsx",
    lineNumber: 3,
    columnNumber: 5
  }, this);
}
var Takeaways_default = Takeaways;

export {
  Takeaways_default,
  require_prisma
};
//# sourceMappingURL=/build/_shared/chunk-VMSJIXDY.js.map
