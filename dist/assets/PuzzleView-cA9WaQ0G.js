import { r as w, o as d, c as f, a as l, F as m, b as y, n as I, u as b, d as x } from "./index-DvKEOBNP.js"; function _(r) { var t, s, e = ""; if (typeof r == "string" || typeof r == "number") e += r; else if (typeof r == "object") if (Array.isArray(r)) { var n = r.length; for (t = 0; t < n; t++)r[t] && (s = _(r[t])) && (e && (e += " "), e += s) } else for (s in r) r[s] && (e && (e += " "), e += s); return e } function k() { for (var r, t, s = 0, e = "", n = arguments.length; s < n; s++)(r = arguments[s]) && (t = _(r)) && (e && (e += " "), e += t); return e } const z = { class: "flex flex-col items-center" }, C = { class: "grid grid-cols-3 grid-rows-3 size-auto gap-2 rounded-xl bg-green-900 p-1 pointer-events-none", id: "imgGrid" }, S = ["src", "onClick"], B = l("option", { selected: "", disabled: "" }, "Choose shuffle amount", -1), N = l("option", { value: "3" }, "3", -1), J = l("option", { value: "30" }, "30", -1), O = [B, N, J], E = l("div", { class: "absolute w-screen h-screen bg-black bg-opacity-50 flex justify-center items-center z-10 hidden overlay" }, [l("div", { class: "bg-zinc-900 rounded-xl w-80 h-40 text-center z-20 flex flex-col justify-center items-center" }, [l("h1", { class: "text-4xl text" }, "You Won"), l("h3", { class: "text-xl" }, "Press f5 to play again")])], -1), L = { __name: "EightPuzzle", setup(r) { const t = w([{ source: "/src/assets/Image1/2.png", col: 2, row: 1 }, { source: "/src/assets/Image1/3.png", col: 3, row: 1 }, { source: "/src/assets/Image1/4.png", col: 1, row: 2 }, { source: "/src/assets/Image1/5.png", col: 2, row: 2 }, { source: "/src/assets/Image1/6.png", col: 3, row: 2 }, { source: "/src/assets/Image1/7.png", col: 1, row: 3 }, { source: "/src/assets/Image1/8.png", col: 2, row: 3 }, { source: "/src/assets/Image1/9.png", col: 3, row: 3 }]), s = w([{ source: "/src/assets/Image1/2.png", col: 2, row: 1 }, { source: "/src/assets/Image1/3.png", col: 3, row: 1 }, { source: "/src/assets/Image1/4.png", col: 1, row: 2 }, { source: "/src/assets/Image1/5.png", col: 2, row: 2 }, { source: "/src/assets/Image1/6.png", col: 3, row: 2 }, { source: "/src/assets/Image1/7.png", col: 1, row: 3 }, { source: "/src/assets/Image1/8.png", col: 2, row: 3 }, { source: "/src/assets/Image1/9.png", col: 3, row: 3 }]), e = { source: "", col: 1, row: 1 }; function n(a) { let c = { ...a }; if (c.row === e.row && (c.col === e.col - 1 || c.col === e.col + 1) || c.col === e.col && (c.row === e.row - 1 || c.row === e.row + 1)) { let o = { ...e }; a.col = o.col, a.row = o.row, e.col = c.col, e.row = c.row } p() } function p() { JSON.stringify(s.value) === JSON.stringify(t.value) && document.querySelector(".overlay").classList.toggle("hidden") } function h(a) { const c = parseInt(a.target.value, 10); function o(u) { if (u > 0) { const g = s.value.filter(i => i.row === e.row && (i.col === e.col - 1 || i.col === e.col + 1) || i.col === e.col && (i.row === e.row - 1 || i.row === e.row + 1)), v = g[Math.floor(Math.random() * g.length)]; n(v), JSON.stringify(s.value) === JSON.stringify(t.value) ? o(c) : setTimeout(() => o(u - 1), 300) } else JSON.stringify(s.value) === JSON.stringify(t.value) ? o(c) : (document.getElementById("imgGrid").classList.remove("pointer-events-none"), p()) } o(c), document.getElementById("select").classList.add("hidden"), document.getElementById("imgGrid").classList.remove("pointer-events-none") } return (a, c) => (d(), f(m, null, [l("div", z, [l("div", C, [(d(!0), f(m, null, y(s.value, (o, u) => (d(), f("img", { key: u, src: o.source, class: I(b(k)("rounded-lg", { "row-start-1": o.row === 1, "row-start-2": o.row === 2, "row-start-3": o.row === 3 }, { "col-start-1": o.col === 1, "col-start-2": o.col === 2, "col-start-3": o.col === 3 })), onClick: g => n(o) }, null, 10, S))), 128))]), l("select", { id: "select", class: "mt-5 py-3 px-4 pe-9 block w-full bg-gray-100 border-transparent rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-700 dark:border-transparent dark:text-neutral-400 dark:focus:ring-neutral-600", onChange: h }, O, 32)]), E], 64)) } }, T = { __name: "PuzzleView", setup(r) { return (t, s) => (d(), x(L)) } }; export { T as default };