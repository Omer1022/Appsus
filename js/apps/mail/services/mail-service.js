import { utilService } from "../services/util-service.js";
import { storageService } from "../services/async-storage-service.js";

export const emailsArray = [
  {
    id: "e101",
    from: "Mimi",
    subject: "Miss you!",
    body: "Would love to catch up sometimes",
    isRead: false,
    sentAt: "29 Jun",
    time: "12:25",
    to: "momo@momo.com",
  },
  {
    id: "e102",
    from: "David",
    subject: "Hello",
    body: "How Are you?",
    isRead: false,
    sentAt: "23 Jun",
    time: "18:11",
    to: "momo@momo.com",
  },
  {
    id: "e103",
    from: "Danny",
    subject: "Hey Man",
    body: "Want come to vacation?",
    isRead: false,
    sentAt: "21 Jun",
    time: "22:27",
    to: "momo@momo.com",
  },
  {
    id: "e104",
    from: "Rami",
    subject: "Whats Up?",
    body: "You want to play football today?",
    isRead: false,
    sentAt: "15 Jun",
    time: "11:31",
    to: "momo@momo.com",
  },
  {
    id: "e105",
    from: "Shani",
    subject: "Come To Party",
    body: "When we hung out?",
    isRead: false,
    sentAt: "12 Jun",
    time: "16:40",
    to: "momo@momo.com",
  },
  {
    id: "e106",
    from: "Mani",
    subject: "Hey Friend",
    body: "Want to play Fifa?",
    isRead: false,
    sentAt: "5 Jun",
    time: "01:56",
    to: "momo@momo.com",
  },
  {
    id: "e107",
    from: "Jimmy",
    subject: "Welcome",
    body: "Welcome to your new work",
    isRead: false,
    sentAt: "27 May",
    time: "19:56",
    to: "momo@momo.com",
  },
  {
    id: "e108",
    from: "Beni",
    subject: "Payment",
    body: "Your payment successful!",
    isRead: false,
    sentAt: "20 May",
    time: "23:56",
    to: "momo@momo.com",
  },
  {
    id: "e109",
    from: "Harry",
    subject: "Gym",
    body: "Wanna come to the Gym today?",
    isRead: false,
    sentAt: "16 May",
    time: "20:56",
    to: "momo@momo.com",
  },
  {
    id: "e110",
    from: "Jerry",
    subject: "Job interview",
    body: "We would like to invite you to job interview on sunday",
    isRead: false,
    sentAt: "7 May",
    time: "09:56",
    to: "momo@momo.com",
  },
  {
    id: "e111",
    from: "Oscar",
    subject: "Class",
    body: "You come on monday to the class?",
    isRead: false,
    sentAt: "26 Apr",
    time: "08:56",
    to: "momo@momo.com",
  },
];

const EMAILS_KEY = "emailsDB";
_createEmails();

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
  return { id: "", from: "", subject: "", body: "", isRead: false };
}

function _createEmails() {
  let emails = utilService.loadFromStorage(EMAILS_KEY);
  if (!emails || !emails.length) {
    emails = emailsArray;

    utilService.saveToStorage(EMAILS_KEY, emails);
  }
  return emails;
}

function getEmails() {
  return emails;
}
