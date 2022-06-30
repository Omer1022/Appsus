import { utilService } from "../services/util-service.js";
import { storageService } from "../services/async-storage-service.js";

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
      sentAt: "2022-06-29 12:25",
      to: "momo@momo.com",
    },
    {
      id: "e102",
      from: "Bibi",
      subject: "Hello",
      body: "How Are you?",
      isRead: false,
      sentAt: "2022-06-28 18:11",
      to: "momo@momo.com",
    },
    {
      id: "e103",
      from: "Danny",
      subject: "Hey Man",
      body: "Want come to vacation?",
      isRead: false,
      sentAt: "2022-06-27 22:27",
      to: "momo@momo.com",
    },
    {
      id: "e104",
      from: "Rami",
      subject: "Whats Up?",
      body: "You want to play football today?",
      isRead: false,
      sentAt: "2022-06-26 11:31",
      to: "momo@momo.com",
    },
    {
      id: "e105",
      from: "Shani",
      subject: "Come To Party",
      body: "When we hung out?",
      isRead: false,
      sentAt: "2022-06-25 16:40",
      to: "momo@momo.com",
    },
    {
      id: "e106",
      from: "Mani",
      subject: "Hey Friend",
      body: "Want to play Fifa?",
      isRead: false,
      sentAt: "2022-05-23 01:56",
      to: "momo@momo.com",
    },
    {
      id: "e107",
      from: "Jimmy",
      subject: "Welcome",
      body: "Welcome to your new work",
      isRead: false,
      sentAt: "2022-05-11 19:56",
      to: "momo@momo.com",
    },
    {
      id: "e108",
      from: "Beni",
      subject: "Payment",
      body: "Your payment successful!",
      isRead: false,
      sentAt: "2022-05-01 23:56",
      to: "momo@momo.com",
    },
    {
      id: "e109",
      from: "Harry",
      subject: "Gym",
      body: "Wanna come to the Gym today?",
      isRead: false,
      sentAt: "2022-04-29 20:56",
      to: "momo@momo.com",
    },
    {
      id: "e110",
      from: "Jerry",
      subject: "Job interview",
      body: "We would like to invite you to job interview on sunday",
      isRead: false,
      sentAt: "2022-04-22 09:56",
      to: "momo@momo.com",
    },
    {
      id: "e111",
      from: "Oscar",
      subject: "Class",
      body: "You come on monday to the class?",
      isRead: false,
      sentAt: "2022-04-01 08:56",
      to: "momo@momo.com",
    },
  ];
  return emails;
}
