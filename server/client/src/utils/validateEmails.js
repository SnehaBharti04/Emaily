import React from "react";

const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

export default function validateEmails(emails) {
  const invalidEmails = emails
  .split(",")
  .map((emails) => emails.trim())
  .filter(email => re.test(email)== false)

  if(invalidEmails.length){
    return `Emails are invalid : ${invalidEmails}`
  }
  return
}
