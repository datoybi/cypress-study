import {
  Form,
  Link,
  require_jsx_dev_runtime,
  useActionData
} from "/build/_shared/chunk-43ZBSOTS.js";
import {
  __commonJS,
  __toESM
} from "/build/_shared/chunk-5KL4PAQL.js";

// empty-module:../util/validation.server
var require_validation = __commonJS({
  "empty-module:../util/validation.server"(exports, module) {
    module.exports = {};
  }
});

// app/components/Auth.jsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
function Auth({ mode }) {
  const validationData = useActionData();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
    Form,
    {
      method: "post",
      action: `/${mode}`,
      className: "bg-slate-800 px-4 rounded-md my-4 max-w-lg mx-auto p-4",
      children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
            "label",
            {
              htmlFor: "email",
              className: "font-semibold block mb-1 text-slate-400",
              children: "Email"
            },
            void 0,
            false,
            {
              fileName: "app/components/Auth.jsx",
              lineNumber: 13,
              columnNumber: 9
            },
            this
          ),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
            "input",
            {
              type: "email",
              id: "email",
              name: "email",
              className: "mb-2 w-full rounded-sm text-lg px-2 py-1 bg-slate-400 text-slate-900",
              "data-cy": "auth-email"
            },
            void 0,
            false,
            {
              fileName: "app/components/Auth.jsx",
              lineNumber: 19,
              columnNumber: 9
            },
            this
          )
        ] }, void 0, true, {
          fileName: "app/components/Auth.jsx",
          lineNumber: 12,
          columnNumber: 7
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
            "label",
            {
              htmlFor: "password",
              className: "font-semibold block mb-1 text-slate-400",
              children: "Password"
            },
            void 0,
            false,
            {
              fileName: "app/components/Auth.jsx",
              lineNumber: 28,
              columnNumber: 9
            },
            this
          ),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
            "input",
            {
              type: "password",
              id: "password",
              name: "password",
              required: true,
              minLength: 6,
              className: "mb-2 w-full rounded-sm text-lg px-2 py-1 bg-slate-400 text-slate-900",
              "data-cy": "auth-password"
            },
            void 0,
            false,
            {
              fileName: "app/components/Auth.jsx",
              lineNumber: 34,
              columnNumber: 9
            },
            this
          )
        ] }, void 0, true, {
          fileName: "app/components/Auth.jsx",
          lineNumber: 27,
          columnNumber: 7
        }, this),
        validationData && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-pink-300", children: validationData.statusText }, void 0, false, {
          fileName: "app/components/Auth.jsx",
          lineNumber: 44,
          columnNumber: 26
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "flex justify-end mt-2 gap-4 items-center", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
            Link,
            {
              to: mode === "login" ? "/signup" : "/login",
              className: "text-slate-400 hover:text-slate-500",
              children: mode === "login" ? "Create a new account" : "Log in with existing account"
            },
            void 0,
            false,
            {
              fileName: "app/components/Auth.jsx",
              lineNumber: 46,
              columnNumber: 9
            },
            this
          ),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
            "button",
            {
              type: "submit",
              className: "bg-blue-600 px-5 py-1 rounded-sm text-white hover:bg-blue-500",
              "data-cy": "auth-submit",
              children: mode === "login" ? "Login" : "Create Account"
            },
            void 0,
            false,
            {
              fileName: "app/components/Auth.jsx",
              lineNumber: 54,
              columnNumber: 9
            },
            this
          )
        ] }, void 0, true, {
          fileName: "app/components/Auth.jsx",
          lineNumber: 45,
          columnNumber: 7
        }, this)
      ]
    },
    void 0,
    true,
    {
      fileName: "app/components/Auth.jsx",
      lineNumber: 7,
      columnNumber: 5
    },
    this
  );
}
var Auth_default = Auth;

export {
  Auth_default,
  require_validation
};
//# sourceMappingURL=/build/_shared/chunk-6IUAAYPU.js.map
