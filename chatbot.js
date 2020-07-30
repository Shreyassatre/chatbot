
var messages = [], 
lastUserMessage = "", 
botMessage = "", 
yourName = 'you',
botName = 'Assistant',
rm1 = '<br><br>press # to return to the previous menu.' 

rm2 = '<br><br>press * to return to the previous menu.'

rm3 = '<br><br>press @ to return to previous menu.'

rm4 = '<br><br>press ! to return to previous menu.'

rm5 = '<br><br>press $ to return to previous menu.'

rm6 = '<br><br>press ~ to return to previous menu.'

m1 ='Please reply with the numbers to the corresponing questions. <br>'+
'1.General IP Queries <br>'+
'2.Learning Path 1  <br>'+
'3.Learning Path 2 <br>'+
'4.Learning Path 3 <br>'+
'5.Live projects'

gq = 'Please reply with the numbers to the corresponing questions. <br>'+
'1.1) What is IP? <br>'+
'1.2) How to IP?  <br>'+
'1.3) Not able to acces bitrix24 account <br>'+
'1.4) What is the job profile? Will we be able to work only in the tech we have chosen for the internship? <br>'+
'1.5) How many workgroups will an intern be a part of? <br>'+
'1.6) Do I need to pass with the certificate in training.<br>'+
'1.7) I am not able to see my tasks.<br>'+
'1.8) What do we do in the work report?<br>'+
'1.9) I have opted for a blockchain internship, can I also learn about AI and do an internship in both? <br>'+
'1.10) Which Browser I should use?<br>'+
'1.11) What to do after completing LP1/ LP2/ LP3? <br>'+
'1.12) The web pages on mobile are not showing properly. <br>'+
'1.13) I am having trouble finding the workgroup ( no workgroup is visible)<br>'+
'1.14) I am not added into my technology workgroup./ actually there are n no of tokens and every token I entered it is showing user no found or redirecting to the same page.<br>'+
'1.15) When does the LP1/ LP2/ LP3 begin dates and deadline/ end date?'

lp1 = "Please reply with the numbers to the corresponing questions. <br>"+
"2.1) Not able to access the LP1 page with my token/ When I put my token it redirects me to the home page/ Getting error while accessing the page- \"User Not Found\”/Website Redirection Issue/Tokens not working.<br>"+
"2.2) Login issues with training/ for every module of LP1/ LP2, do we have to register again for access to the content?<br>"+
"2.3) Tokens not working<br>"+
"2.4) I did follow the instructions given in the video, but still, I'm not able to log in for the LP1 task<br>"+
"2.5) I tried it 3-4 times and have to enter token each time I visit it.<br>"+
"2.6) What do I do after completing the quiz? how to complete the entire lp1<br>"+
"2.7) Do I need to register every time I do different tasks of lp1?<br>"+
"2.8) I have complete one training, I didn't find any options to continue my training.<br>"+
"2.9) I am not getting results of the training.<br>"+
"2.10) I had press finished button of LP1 task but want to resume the task, how to do that?<br>"+
"2.11) Can you help me by telling how can I get to know about my progress of LP 1?<br>"+
"2.12) I am not able to view a page/ I am logged in the training and still the website asks me to login<br>"+
"2.13)  How do I access my quiz?"

lp2 = "Please reply with the numbers to the corresponing questions. <br>"+
"3.1) Unable to access the quiz<br>"+
"3.2) What happens in LP2? What kind of training can we expect? Is it a Basic/Advance level?<br>"+
"3.3) Why only this training for LP2?<br>"+
"3.4) Can I do certification for the training provided in LP2? <br>"+
"3.5) The videos of LP2 are taking too much time to load.<br>"+
"3.6) Will these training be enough for us to complete the LP3 and Live Project. <br>"+
"3.7) I am not getting results of the training."

lp3 = "Please reply with the numbers to the corresponing questions. <br>"+
"4.1) What happens in LP3? What kind of training can we expect? Is it a Basic/Advance level?<br>"+
"4.2) What to do after LP3?<br>"+
"4.3) LP3 has to be submitted individually or it will be a group project? <br>"+
"4.4) Where do we push the code in LP3?<br>"+
"4.5) Where should we share our hacker rank id/ where should we share the link/ anything relate to LP3 assignment submission?<br>"+
"4.6) I am stuck in LP3/ Live project with a technical issue, Is there any technical person who can help in this?<br>"+
"4.7) I have a query with respect to LP3, what should I do and whom should I ask?<br>"+
"4.8) unable to download my LP3 assignment problem statement document shared on LP3 page."

lip = "Please reply with the numbers to the corresponing questions. <br>"+
"5.1) Live Project/ LP3 has to be submitted individually or it will be a group project? <br>"+
"5.2) Will Live Projects have only one technology or a mixture of technologies?<br>"+
"5.3) Will I get Live project of technology other than what I am selected for?<br>"+
"5.4) Do we have to submit the work weekly for live projects? <br>"+
"5.5) Are we free to use any framework of our choice for the font-end?<br>"+
"5.6) Sockets.io is a and it\'s use for socket prgramming so can we use it?"

link1 = '<a href ="https://youtu.be/OnKfrQrEOrk">https://youtu.be/OnKfrQrEOrk</a>'
link2 = '<a href ="https://youtu.be/Hs9npUUIg4I">https://youtu.be/Hs9npUUIg4I</a>'
talking = true; 


function chatbotResponse() {
talking = true;
botMessage = "Please reply with the numbers to the corresponing questions."; //the default message

if (lastUserMessage === 'hi' || lastUserMessage === "hello") {
  const hi = ['hi, I am here to help you!','howdy, how may I help you','hello']
  botMessage = hi[Math.floor(Math.random()*(hi.length))]+"<br>"+m1;;
}

if (lastUserMessage === 'what is your name') {
  botMessage = 'I don\'t have a name,but you can call me your Assistant ';
}

if (lastUserMessage === '1') {
  botMessage = gq+rm1;
}

if (lastUserMessage === '1.1'){
  botMessage = '<br><b>What is IP?</b><br>'+'please refer below link'+"<br>"+link1 +rm2;
}

if (lastUserMessage === '1.2') {
  botMessage = '<br><b>How to IP?</b><br>'+'please refer below link'+"<br>"+link2 +rm2;
}

if (lastUserMessage === '1.3') {
  botMessage = "<br><b>Not able to acces bitrix24 account</b><br>"+"Go to https://cloudcounselage24.bitrix24.com/ On the Login page, In the, ‘Enter the phone number or email’, type in your email id that you have registered with Cloud Counselage and Click ‘Forgot Password’. In case the problem persists, please write a mail to hrsupport@cloudcounselage.in"+rm2;
}

if (lastUserMessage === '1.4') {
  botMessage = '<br><b>What is the job profile? Will we be able to work only in the tech we have chosen for the internship?</b><br>'+"Your job profile is 'Technology - Intern'; if you're in cloud computing technology to update in your LinkedIn or resume, you can write as 'Cloud Computing - Intern'. Yes, you'll only work in the technology you're selected for but you can take the training of other technologies."+rm2;
}

if (lastUserMessage === '1.5') {
  botMessage = "<br><b>How many workgroups will an intern be a part of?</b><br>"+"Every intern should be a part of 2 workgroups.<br>1. '202003-IP'  -- This is a general workgroup. Everyone who is enrolled in IP should be a part of this workgroup.<br>2. '202003-IP-Technology'  -- This is a technology-specific workgroup. You'll be added to the technology you had enrolled for. For example '202003-IP-Python' for students who enrolled for python.<br>If anyone has not been added to any of these workgroups, kindly message 'Cloud Counselage HR'  regarding the same over bitrix24 platform."+rm2;
}

if (lastUserMessage === '1.6') {
  botMessage = "<br><b>Do I need to pass with the certificate in training.</b><br>"+" No, but please ensure you complete the training."+rm2;
}

if (lastUserMessage === '1.7') {
  botMessage = "<br><b>I am not able to see my tasks</b><br>"+" Please remove the default \"In Progress\" from your filter of the task section and try."+rm2;
}

if (lastUserMessage === '1.8') {
  botMessage = "<br><b>What do we do in the work report?</b><br>"+" As mentioned in the video, please write what you have done this week and request approval from your supervisor by clicking on \"send to supervisor\"."+rm2;
}

if (lastUserMessage === '1.9') {
  botMessage = "<br><b>I have opted for a blockchain internship, can I also learn about AI and do an internship in both? </b><br>"+"You can learn both the technologies using Learning Path 2 (LP2) which will begin after the 2nd week of March, but your internship will only be continuing with the one you are selected for."+rm2;
}

if (lastUserMessage === '1.10') {
  botMessage = "<br><b>Which Browser I should use?</b><br>"+"Google Chrome is recommended."+rm2;
}

if (lastUserMessage === '1.11') {
  botMessage = "<br><b>What to do after completing LP1/ LP2/ LP3?</b><br>"+"Mark your task as finished and wait for the next instructions."+rm2;
}

if (lastUserMessage === '1.12') {
  botMessage = "<br><b>The web pages on mobile are not showing properly.</b><br>"+"They are purposefully only configured for Desktops/ Laptops. In an emergency, you can use the \"show as desktop\" mode of your browser."+rm2;
}


if (lastUserMessage === '1.13') {
  botMessage = '<br><b>I am having trouble finding the workgroup ( no workgroup is visible)?</b><br>'+'Please ensure that you have connected to the drive of that workgroup by going to your notification and connecting to the drive of that workgroup. If that is done, please try to search for your workgroup in the search bar at the top of your screen. To search, use the keywords, 202003-IP-TechnologyName. Ex "202003-IP-DevOps". In case there is no invitation to you, please message Cloud Counselage HR. You will be added to 2 groups “202003-IP” which is a general workgroup and the other one is “202003-IP-Technology” which is a technology-specific workgroup.'+rm2;
}

if (lastUserMessage === '1.14') {
  botMessage = "<br><b>I am not added into my technology workgroup./ actually there are n no of tokens and every token I entered it is showing user no found or redirecting to the same page</b><br>"+"Please follow the instructions given in the videos or the one in the Bitrix24 mail (these are the same videos share in the task), the tokens are given to you. Ensure that you are putting the right token on the right page."+rm2;
}

if (lastUserMessage === '1.15') {
  botMessage = "<br><b>When does the LP1/ LP2/ LP3 begin dates and deadline/ end date?</b><br>"+"The dates to begin the learning paths (LP) are: -<br>LP1 - 01/03/2020<br>  LP2 - 18/03/2020<br>LP3 - 02/04/2020 <br> All learning Paths (LP) are expected to be completed by the interns before the first   week of June as Live Projects will begin in that time frame. "+rm2;
}

if (lastUserMessage === '2') {
  botMessage = lp1+rm1;
}

if (lastUserMessage === '2.1') {
  botMessage = "<br><b>Not able to access the LP1 page with my token/ When I put my token it redirects me to the home page/ Getting error while accessing the page- \"User Not Found\”/Website Redirection Issue/Tokens not working.</b><br>"+" Please watch the videos shared with the invite and you should not face any problems in accessing the training. Please follow the protocol shown in the videos."+rm3;
}

if (lastUserMessage === '2.2') {
  botMessage = "<br>Login issues with training/ for every module of LP1/ LP2, do we have to register again for access to the content?<b></b><br>"+" Yes, you need to register for every module of training. Some of you are facing login issues, we have kept the training visible without login. Even then, to post a comment and give a quiz you'll have to login. In case you face difficulty to do so, please try to perform your quiz or post a comment by using a different browser or incognito mode."+rm3;
}

if (lastUserMessage === '2.3') {
  botMessage = "<br><b>Tokens not working</b><br>"+"For each training of LP1, there are different tokens. Please read the tasks or watch the videos again meticulously. Try accessing it in incognito mode."+rm3;
}

if (lastUserMessage === '2.4') {
  botMessage = "<br><b>I did follow the instructions given in the video, but still, I'm not able to log in for the LP1 task</b><br>"+"Ensure you're using the right token"+rm3;
}

if (lastUserMessage === '2.5') {
  botMessage = "<br><b>I tried it 3-4 times and have to enter token each time I visit it.</b><br>"+" We understand that it sometimes becomes tedious to access the training and we highly appreciate your support in making the training possible. We only do this for security reasons and we're trying to find a way to minimise the token use. For now, please note that in LP1 there are 3 types tokens:<br>1. One for each technology, you're a part of.<br>2. The lp1 home page.<br>3. The 6 tokens (one for each step)."+rm3;
}

if (lastUserMessage === '2.6') {
  botMessage = "<br><b>What do I do after completing the quiz? how to complete the entire lp1</b><br>"+"There are tokens for each training in the task, if this learning path is done, please wait for the next learning path to begin and then please try to finish it. If you are done with LP3 please wait for Live Projects to begin."+rm3;
}

if (lastUserMessage === '2.7') {
  botMessage = "<br><b> Do I need to register every time I do different tasks of lp1?</b><br>"+"There are codes in the LP1 assignment, and each time you have to register also, please check your task description."+rm3;
}

if (lastUserMessage === '2.8') {
  botMessage = "<br><b> I have complete one training, I didn't find any options to continue my training.</b><br>"+"Go back to the technology Page. Enter the respective tokens and then work. follow the same process every time."+rm3;
}

if (lastUserMessage === '2.9') {
  botMessage = "<br><b> I am not getting results of the training.</b><br>"+"They are just for your practice and not for our record, so you don't need the results of LP1 and LP2 training."+rm3;
}
 
if (lastUserMessage === '2.10') {
  botMessage = "<br><b> I had press finished button of LP1 task but want to resume the task, how to do that?</b><br>"+"You can go back to that task and then click on 'More' and then 'resume' to restart that task."+rm3;
}

if (lastUserMessage === '2.11') {
  botMessage = "<br><b>Can you help me by telling how can I get to know about my progress of LP 1?</b><br>"+"There is no metric to score your progress in any learning paths as it will be at a different pace for every individual."+rm3;
}

if (lastUserMessage === '2.12') {
  botMessage = "<br><b>I am not able to view a page/ I am logged in the training and still the website asks me to login</b><br>"+"This could be because of some issue in the cookies or extension in your browser. Please try again with a different browser or open the tab with incognito mode. Also, you don't need to record your results, the quizzes are only for your knowledge check and not a metric to score you."+rm3;
}

if (lastUserMessage === '2.13') {
  botMessage = "<br><b> How do I access my quiz?</b><br>"+" As mentioned in the video: -<br>Step1: Go to lp1 module<br>Step2: Select module<br>Step3: Put token (it will direct you to the home screen if the token is correct)<br>Step4: Again go to lp1 module n select that module<br>Step5: You will get the access by now<br>Step6: Register there (each time for every module)<br>Step7: Give the quiz<br>Step8: Logout."+rm3;
}

if (lastUserMessage === '3') {
  botMessage = lp2+rm1;
}

if (lastUserMessage === '3.1') {
  botMessage = "<br><b>Unable to access the quiz.</b><br>"+" Please retry after some time in an incognito window"+rm4;
}

if (lastUserMessage === '3.2') {
  botMessage = "<br><b>What happens in LP2? What kind of training can we expect? Is it a Basic/Advance level?</b><br>"+"The main focus of LP2 is to provide you with a basic foundation of the technology you're interested in. The training is also handpicked in such a way that they enable you to work on LP3 assignments which interim gives you the beginning to start your study for the selected technology and in no terms is the only/ final training you should look into. Please keep learning after your LP2 is complete, that is the only way to grow in your technology of choice."+rm4;
}

if (lastUserMessage === '3.3') {
  botMessage = "<br><b>Why only this training for LP2?</b><br>"+"They are our training partners and we have handpicked this training to cover a certain topic for you. These training cover from the very basic to intermediate level and is the perfect medium for you to have a starting point."+rm4;
}

if (lastUserMessage === '3.4') {
  botMessage = "<br><b>Can I do certification for the training provided in LP2? </b><br>"+"Yes, Cloud Counselage has purposefully partnered with Edureka so as to enable our interns to get the advantage of the corporate benefits at 'no profit no loss' basis for Cloud Counselage, that we receive from the partnership. Being our interns, you can get huge discounts on the certifications you choose to enrol for through Cloud Counselage and Edureka. In case you want to know more about the discounts offered, please reach out to ‘Cloud Counselage HR’ or write to hrsupport@cloudcounselage.in."+rm4;
}

if (lastUserMessage === "3.5") {
  botMessage = "<br><b>The videos of LP2 are taking too much time to load.</b><br>"+"We have uploaded the videos of the highest quality and best resolution which has resulted in some videos being over 1 GB as they are of hours in duration. To experience these high definition videos we request you to wait at least 5 minutes or more; depending on your computer's RAM and internet connection."+rm4;
}

if (lastUserMessage === "3.6") {
  botMessage = "<br><b>Will these training be enough for us to complete the LP3 and Live Project. </b><br>"+"The set of training is not exhaustive and you are required to keep learning about the technology on your own to excel in your Live Project."+rm4;
}

if (lastUserMessage === "3.7") {
  botMessage = "<br><b>I am not getting results of the training.</b><br>"+"They are just for your practice and not for our record, so you don't need the results of LP1 and LP2 training.  "+rm4;
}

if (lastUserMessage === '4') {
  botMessage = lp3+rm1;
}

if (lastUserMessage === "4.1") {
  botMessage = "<br><b>What happens in LP3? What kind of training can we expect? Is it a Basic/Advance level?</b><br>"+" LP3 will be assignment based and its execution and content vary from technology to technology. This assignment will be like a mini-project for all interns in a particular technology which will be verified by Cloud Counselage Project Managers."+rm5;
}

if (lastUserMessage === "4.2") {
  botMessage = "<br><b>What to do after LP3?</b><br>"+"You'll be given preparatory leave (PL) from April to June after that your Live Projects will be given after the first week of June."+rm5;
}

if (lastUserMessage === "4.3") {
  botMessage = "<br><b>LP3 has to be submitted individually or it will be a group project? </b><br>"+"All the LP3/  Live Projects are on an individual scale."+rm5;
}

if (lastUserMessage === "4.4") {
  botMessage = "<br><b>Where do we push the code in LP3?</b><br>"+" Please push you to code in a public repo of your GitHub account if required by your LP3 assignment."+rm5;
}

if (lastUserMessage === "4.5") {
  botMessage = "<br><b>Where should we share our hacker rank id/ where should we share the link/ anything relate to LP3 assignment submission?</b><br>"+"For now, please concentrate on completing the task. We will ask all the interns to submit their work in the first week of June. Ensure you make it up to the mark till then as there would be no extension given that time."+rm5;
}

if (lastUserMessage === "4.6") {
  botMessage = "<br><b>I am stuck in LP3/ Live project with a technical issue, Is there any technical person who can help in this?</b><br>"+"As mentorship/ hand-holding is not part of an internship by definition, we would not provide any technical help. Nevertheless, feel free to ask your doubt in your respective workgroup chat/ in the community or Google it :)"+rm5;
}

if (lastUserMessage === "4.7") {
  botMessage = "<br><b> I have a query with respect to LP3, what should I do and whom should I ask?</b><br>"+" As mentioned in the '202003-IP' workgroup, please ask all queries related to LP3 in your technology workgroup only and tag Jayanth G S  in your message."+rm5;
}

if (lastUserMessage === "4.8") {
  botMessage = "<br><b>unable to download my LP3 assignment problem statement document shared on LP3 page.</b><br>"+"Since some of you are not able to download, please find the same document in your technology drive in the folder LP3. We have made an announcement in your respective technology workgroup as well, please check. "+rm5;
}

if (lastUserMessage === '5') {
  botMessage = lip+rm1;
}

if (lastUserMessage === "5.1") {
  botMessage = "<br><b>Live Project/ LP3 has to be submitted individually or it will be a group project? </b><br>"+"All the LP3/  Live Projects are on an individual scale."+rm6;
}

if (lastUserMessage === "5.2") {
  botMessage = "<br><b>Will Live Projects have only one technology or a mixture of technologies?</b><br>"+"Live Projects will have only your part of technology even if there are multiple technologies that are a part of the project, you will be working only on the part that covers your technology."+rm6;
}

if (lastUserMessage === "5.3") {
  botMessage = "<br><b>Will I get Live project of technology other than what I am selected for?</b><br>"+" No, you will receive Live Projects of your respective technology."+rm6;
}

if (lastUserMessage === "5.4") {
  botMessage = "<br><b>Do we have to submit the work weekly for live projects?</b><br>"+"No, interns have to submit the final work report in 7th week."+rm6;
}

if (lastUserMessage === "5.5") {
  botMessage = "<br><b>Are we free to use any framework of our choice for the font-end?</b><br>"+"Use any framework built on top of Node.js only"+rm6;
}

if (lastUserMessage === "5.6") {
  botMessage = "<br><b>Sockets.io is a and it\'s use for socket prgramming so can we use it?</b><br>"+"Check is it voilates the guidlines mentioned in the the a bove messages and proceed accordingly"+rm6;
}

if (lastUserMessage === '#') {
  botMessage = m1;
}

if (lastUserMessage === '*') {
  botMessage = gq+rm1;
}

if (lastUserMessage === '@') {
  botMessage = lp1+rm1;
}

if (lastUserMessage === '!') {
  botMessage = lp2+rm1;
}

if (lastUserMessage === '$') {
  botMessage = lp3+rm1;
}

if (lastUserMessage === '~') {
  botMessage = lip+rm1;
}
}

function newEntry() {
 
if (document.getElementById("chatbox").value != "") {
  lastUserMessage = document.getElementById("chatbox").value;
  document.getElementById("chatbox").value = "";
  messages.push("<b>" + yourName + ": </b> " + lastUserMessage);
  chatbotResponse();
  messages.push("<b>" + botName + ": </b> " + botMessage);
  Speech(botMessage);
  for (var i = 1; i < 8; i++) {
    if (messages[messages.length - i])
      document.getElementById("chatlog" + i).innerHTML = messages[messages.length - i];
  }
}
}

function Speech(say) {
  if ('speechSynthesi' in window && talking) {
    var utterance = new SpeechSynthesisUtterance(say);
    speechSynthesis.speak(utterance);
  }
  }

document.onkeypress = keyPress;
function keyPress(e) {
var x = e || window.event;
var key = (x.keyCode || x.which);
if (key == 13 || key == 3) {
  newEntry();
}
if (key == 38) {
  console.log('hi')
}
}

function placeHolder() {
document.getElementById("chatbox").placeholder = "";
}