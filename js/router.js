import homePage from "./pages/home-page.cmp.js";
import bookPage from "./pages/book-page.cmp.js";
import bookDetails from "./apps/book/pages/book-details.cmp.js";
import bookEdit from "./apps/book/pages/book-edit.cmp.js";
import mailPage from "./pages/mail-page.cmp.js";
import mailDetails from "./apps/mail/pages/mail-details.cmp.js";
import keepPage from "./pages/keep-page.cmp.js";
import noteDetails from "./apps/keep/pages/note-details.cmp.js";
import noteEdit from "./apps/keep/pages/note-edit.cmp.js";

const routes = [
  {
    path: "/home",
    component: homePage,
  },
  {
    path: "/mail",
    component: mailPage,
  },
  {
    path: "/email/:emailId",
    component: mailDetails,
  },
  {
    path: "/keep",
    component: keepPage,
  },
  {
    path: "/note/:noteId",
    component: noteDetails,
  },
  {
    path: "/note/edit/:noteId?",
    component: noteEdit,
  },
  {
    path: "/book",
    component: bookPage,
  },
  {
    path: "/book/:bookId",
    component: bookDetails,
  },
  {
    path: "/book/edit/:bookId?",
    component: bookEdit,
  },
];

export const router = VueRouter.createRouter({
  routes,
  history: VueRouter.createWebHashHistory(),
});
