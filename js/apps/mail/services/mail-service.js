import { utilService } from "../services/util-service.js";
import { storageService } from "../services/async-storage-service.js";

const EMAILS_KEY = "emailsDB";
_createEmails();
// getUser();

export const mailService = {
  query,
  remove,
  save,
  get,
  getEmptyEmail,
};

function query() {
  return storageService.query(EMAILS_KEY);
}

function remove(emailId) {
  return storageService.remove(EMAILS_KEY, emailId);
}

function save(email) {
  if (email.id) return storageService.put(EMAILS_KEY, email);
  else return storageService.post(EMAILS_KEY, email);
}

function get(emailId) {
  return storageService.get(EMAILS_KEY, emailId);
}

function getEmptyEmail() {
  return { id: "", subject: "", body: "" };
}

function _createEmails() {
  let emails = utilService.loadFromStorage(EMAILS_KEY);
  if (!emails || !emails.length) {
    emails = getEmails();

    utilService.saveToStorage(EMAILS_KEY, emails);
  }
  return emails;
}

function getEmails() {
  const emails = [
    {
      id: "e101",
      from: "Mimi",
      subject: "Miss you!",
      body: "Would love to catch up sometimes",
      isRead: false,
      sentAt: "2022-06-29 10:25",
      to: "momo@momo.com",
    },
    {
      id: "e102",
      from: "Bibi",
      subject: "Hello",
      body: "How Are you?",
      isRead: false,
      sentAt: "2022-06-28 10:26",
      to: "momo@momo.com",
    },
    {
      id: "e103",
      from: "Danny",
      subject: "Hey Man",
      body: "Want Come To Vacation?",
      isRead: false,
      sentAt: "2022-06-27 10:27",
      to: "momo@momo.com",
    },
    {
      id: "e104",
      from: "Rami",
      subject: "Whats Up?",
      body: "You Want To Play Football Today?",
      isRead: false,
      sentAt: "2022-06-26 10:31",
      to: "momo@momo.com",
    },
    {
      id: "e105",
      from: "Shani",
      subject: "Come To Party",
      body: "When We Hung Out?",
      isRead: false,
      sentAt: "2022-06-25 10:40",
      to: "momo@momo.com",
    },
    {
      id: "e106",
      from: "Mani",
      subject: "Hey Friend",
      body: "Want To Play Fifa?",
      isRead: false,
      sentAt: "2022-06-23 10:56",
      to: "momo@momo.com",
    },
  ];
  return emails;
}

// function getUser() {
//   const loggedinUser = {
//     email: "user@appsus.com",
//     fullname,
//   };
//   return loggedinUser;
// }
