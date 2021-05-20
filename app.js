// selectors
// selectors
// google data
const clicks = document.querySelector(".clicks");
const date = document.querySelector(".date");
const conversation = document.querySelector(".conversation");
const cost = document.querySelector(".cost");
const roas = document.querySelector(".roas");
// facebook data
const fclicks = document.querySelector(".fclicks");
const fdate = document.querySelector(".fdate");
const fconversation = document.querySelector(".fconversation");
const fcost = document.querySelector(".fcost");
const froas = document.querySelector(".froas");

// functions

async function fetchApi(url) {
  const dataFetch = await fetch(url, {
    method: "GET",
    headers: {
      Accept: "application.josn",
    },
  });
  const data = await dataFetch.json();
  return data;
}
// for coloring initial
let clicksValue = 0;
let conversationValue = 0;
let costValue = 0;
let roasValue = 0;
let fclicksValue = 0;
let fconversationValue = 0;
let fcostValue = 0;
let froasValue = 0;
// functions
// it will add data to html
const change = (data) => {
  data.classList.add("green");
  const increment = document.createElement("span");
  increment.innerText = "+10%";
  data.appendChild(increment);
};

async function runm() {
  const data = await fetchApi("data.json");
  console.log(data.results);
  data.results.forEach((u) => {
    // googledata
    const datedata = document.createElement("td");
    const clickdata = document.createElement("td");
    const conversationdata = document.createElement("td");
    const costdata = document.createElement("td");
    const roasdata = document.createElement("td");
    // facebook data
    const fclickdata = document.createElement("td");
    const fconversationdata = document.createElement("td");
    const fcostdata = document.createElement("td");
    const froasdata = document.createElement("td");
    // google
    datedata.innerText = `${u.date}`;
    clickdata.innerText = `${u.google.clicks}`;
    conversationdata.innerText = `${u.google.conversation}`;
    costdata.innerText = `${u.google.cost}$`;
    roasdata.innerText = `${u.google.ROAS}%`;
    // facebook
    fclickdata.innerText = `${u.facebook.clicks}`;
    fconversationdata.innerText = `${u.facebook.conversation}`;
    fcostdata.innerText = `${u.facebook.cost}$`;
    froasdata.innerText = `${u.facebook.ROAS}%`;

    // setting backgroundColor
    // ------------------------------------------------logic---------------------
    // -------click
    if (clicksValue != 0 && u.google.clicks > clicksValue) {
      change(clickdata);
    }
    clicksValue = u.google.clicks;
    // facebook
    if (fclicksValue != 0 && u.facebook.clicks > fclicksValue) {
      change(fclickdata);
    }
    fclicksValue = u.facebook.clicks;
    // ---------conversationDAta
    if (conversationValue != 0 && u.google.conversation > conversationValue) {
      change(conversationdata);
    }

    conversationValue = u.google.conversation;
    // facebok
    if (
      fconversationValue != 0 &&
      u.facebook.conversation > fconversationValue
    ) {
      change(fconversationdata);
    }

    fconversationValue = u.facebook.conversation;
    // ---------costDAta

    if (costValue != 0 && u.google.cost > costValue) {
      change(costdata);
    }
    costValue = u.google.cost;
    // facebook
    if (fcostValue != 0 && u.facebook.cost > fcostValue) {
      change(fcostdata);
    }
    fcostValue = u.facebook.cost;
    // ---------roasDAta

    if (roasValue != 0 && u.google.ROAS > roasValue) {
      change(roasdata);
    }
    roasValue = u.google.ROAS;
    // facebook
    if (froasValue != 0 && u.facebook.ROAS > froasValue) {
      change(froasdata);
    }
    froasValue = u.facebook.ROAS;

    // inserting data
    date.insertBefore(datedata, date.childNodes[2]);
    clicks.insertBefore(clickdata, clicks.childNodes[2]);
    conversation.insertBefore(conversationdata, conversation.childNodes[2]);
    cost.insertBefore(costdata, cost.childNodes[2]);
    roas.insertBefore(roasdata, roas.childNodes[2]);
    date.insertBefore(datedata, date.childNodes[2]);
    fclicks.insertBefore(fclickdata, fclicks.childNodes[2]);
    fconversation.insertBefore(fconversationdata, fconversation.childNodes[2]);
    fcost.insertBefore(fcostdata, fcost.childNodes[2]);
    froas.insertBefore(froasdata, froas.childNodes[2]);
  });
}

runm();
