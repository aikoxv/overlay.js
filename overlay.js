const OVERLAY_CSS = `@import "https://fonts.googleapis.com/css?family=Montserrat:300,400,700";
:root {
  --chatColor: 0;
  --pseudoColor: 0;
  --messageColor: 0;
  --notificationColor: 0;
  --endGameColor: 0;
  --infoColor: 0;
  --topColor: 0;
  --topTextColor: 0;
  --entryColor: 0;
  --notification_color: 0;
}

.sidebar {
  background: var(--chatColor);
}

.sidebar > .chat .log > div .author {
    color: var(--pseudoColor);
    font-weight: bold;
}
.sidebar > .chat .log {
    color: var(--messageColor);
    font-weight: bold;
}
.sidebar > .chat .log .notif{
  background-color: var(--notification_color);
}
.sidebar > .chat .log > div.system {
    color: var(--notificationColor);
    font-weight: bold;
}
.sidebar > .chat .log > div.endGame {
    color: var(--endGameColor);
    font-weight: bold;
}
.sidebar > .chat .log > div.info {
    color: var(--infoColor);
    font-weight: bold;
}

.sidebar > .chat .log > div.version {
  color: #FF0000;
  font-weight: bold;
  background-color: black;
}
.top {
  background: var(--topColor);
  color: var(--topTextColor);
}
.top .volume input[type=range]::-webkit-slider-thumb {
  background: var(--topColor);
}
.rwd-table {
  min-width: 300px;
}

.rwd-table tr {
  border-top: 1px solid #ddd;
  border-bottom: 1px solid #ddd;
}
.rwd-table th {
  display: none;
}
.rwd-table td {
    display: block;
}
.rwd-table td:before {
  content: attr(data-th) ": ";
  font-weight: bold;
  width: 6.5em;
  display: inline-block;
}
@media (min-width: 480px) {
  .rwd-table td:before {
    display: none;
  }
}
.rwd-table th,
.rwd-table td {
  text-align: center;
  vertical-align: middle;
}
@media (min-width: 480px) {
  .rwd-table th,
  .rwd-table td {
    display: table-cell;
    
  }
}

body {
  font-family: Montserrat, sans-serif;
  -webkit-font-smoothing: antialiased;
  text-rendering: optimizeLegibility;
  color: #444;
  background: #eee;
}

h1 {
  font-weight: normal;
  letter-spacing: -1px;
  color: #202020;
}

.rwd-table {
  width: 100%;
  height: 100%;
  border-collapse: collapse;
  background: #202020;
  color: #fff;
  overflow: hidden;
  font-size: 12px;
}

.rwd-table tr {
  border-color: #333;
}
.rwd-table, th, td {
  border: 1px solid #333333;
}
.rwd-table td {
}
@media (min-width: 480px) {

}
.rwd-table th,
.rwd-table td:before {
  color: #7855c7;
}
#names {
    font-size: 12px;
    word-wrap: break-word;
    max-width: 90px;
    border-color: #333;
}

#value {
    word-wrap: break-word;
    max-width: 61px;
    border-color: #333;

}

#publicBot {
  margin-left: 1em;
}

.darkScrollBar::-webkit-scrollbar {
  width: 15px;
  height: 15px;
}

.darkScrollBar::-webkit-scrollbar-thumb {
  background-color: rgba(255,255,255,0.1);
  border: 3px solid transparent;
  background-clip: content-box;
}

.darkScrollBar::-webkit-scrollbar-track {
  background-color: rgba(0,0,0,0.05);
}

.darkScrollBar::-webkit-scrollbar-corner {
  background-color: rgba(255,255,255,0.1);
}

.overlay input, .overlay select {
  background: #202020;
  border: 1px solid #333;
  color: #eee;
  width: 100%;
}
.overlay .range input[type=range] {
  background: transparent;
  border: none;
}
.overlay .range input[type=range] {
  flex: 1;
  -webkit-appearance: none;
  appearance: none;
}

.overlay .range input[type=range]::-webkit-slider-runnable-track {
  background: #333;
  height: 0.5em;
  border-radius: 1em;
}

.overlay .range input[type=range]::-moz-range-track {
  background: #333;
  height: 0.5em;
  border-radius: 1em;
}

.overlay .range input[type=range]::-webkit-slider-thumb {
  -webkit-appearance: none;
  background: #666;
  margin-top: -0.25em;
  width: 1em;
  height: 1em;
  border: 1px solid #888;
  border-radius: 1em;
}

.overlay .range input[type=range]::-moz-range-thumb {
  -webkit-appearance: none;
  background: #666;
  margin-top: -0.25em;
  width: 1em;
  height: 1em;
  border: 1px solid #888;
  border-radius: 1em;
}

.overlay input, .overlay select {
  background: #202020;
  border: 1px solid #333;
  color: #eee;
  width: 100%;
}
.overlay .tutorial header {
  font-weight: bold;
  color: #eee;
  text-transform: uppercase;
  margin-bottom: 1em;
}
.overlay .tutorial {
  padding: 1em;
  background: #262525;
}

.overlay {
  position: initial;
  top: 0;
  overflow-y: hidden;
  z-index: 2;
  right: 0;
  bottom: 0;
  left: 0;
  flex: 1;
  background: #161515;
  color: #aaa;
  text-align: left;
  font-size: smaller;
  overflow-y: auto;
}

.label {
  font-weight: bold;
  cursor: pointer;
  margin-bottom: 0.5em;
  background: rgba(255,255,255,0.2);
  padding: 0.5em;
}
.overlay .field {
  padding: 0 0.5em;
  margin-top: 1em;
}
.overlay .overlaySetting .info {
  font-style: italic;
  color: #999;
  padding: 0 0.5em;
  margin-top: 1em;
}
.overlay .range input[type=number] {
  width: 5em;
  margin-right: 0.5em;
  -moz-appearance: textfield;
}

.overlay .overlaySetting {
  margin-bottom: 1em;
}
.overlay table {
  width: 100%;
}
.overlay th {
  padding-right: 0.5em;
}
.overlay th, .overlay td {
  border: none;
  padding: 0;
  vertical-align: middle;
}
.overlay tr:not(:last-of-type) td {
  padding-bottom: 0.5em;
}
.overlay .range {
  display: flex;
}

.overlay .range input[type=number]::-webkit-outer-spin-button,
.overlay .range input[type=number]::-webkit-inner-spin-button {
  -webkit-appearance: none;
}

.overlay .range input[type=range] {
  flex: 1;
  -webkit-appearance: none;
  appearance: none;
}
#overlay {
  font-weight: bold;
  height: 200px;
  overflow-y: auto;
  overflow-x: hidden;
}
.entry.bombparty {
  background: var(--entryColor);
  width: 97%;
}
.entry .stub {
  width: 3.5em;
  border-left: 2px dashed #7c606082;
  display: flex;
  align-items: center;
  position: relative;
}
.entry .code {
  white-space: nowrap;
  transform: rotate(-90deg);
  font-weight: bold;
  transform-origin: center;
  color: rgba(0,0,0,0.3);
  margin-left: -0.25em;
  background: #5a555321;
  font-family: monospace;
  padding: 0 0.25em;
  font-size: 20px;
}
.entry .playerCount {
  font-size: 0.6em;
  margin-left: 0.5em;
  background: #0000001f;
  padding: 0.25em 0.5em;
  border-radius: 1em;
}
.publicRooms .entry .playing {
  font-size: smaller;
}
.entry .title {
  font-weight: bold;
  font-size: 1.25em;
  display: flex;
  align-items: center;
  margin-bottom: 0.25em;
  display: flex;
}
.entry .title .text {
  white-space: nowrap;
  overflow: hidden;
  font-size: 0.75em;
  text-overflow: ellipsis;
}
.entry .cutout {
  width: 1em;
  height: 2em;
  position: absolute;
  right: -2px;
  border-radius: 1em 0 0 1em;
  background: #161515;
  border: 1px solid #09090960;
  border-right: transparent;
  box-shadow: 0 0 0.5em #161515 inset;
}
.entry .info {
  flex: 1;
  padding: 0.5em;
  overflow: hidden;
  background: rgba(0, 0, 0, 0.05);
  margin: 0.3em;
  border: 2px dashed rgba(0, 0, 0, 0.20);
  border-radius: 0.25em;
  border-right: none;
}

.entry {
  display: flex;
  margin-bottom: 1em;
  border: 1px solid #09090940;
  background: #ffe6a4;
  text-decoration: none;
  color: #3c3733;
  box-shadow: 0 0 0.5em rgba(0,0,0,0.05), 0 0.2em 0.5em rgba(0,0,0,0.05);
}
@media (min-width: 1000px)
.entry:not(:nth-of-type(3n)) {
    margin-right: 1em;
}
.toggle {
position: relative;
display: block;
width: 40px;
top: 5px;
height: 20px;
cursor: pointer;
-webkit-tap-highlight-color: transparent;
transform: translate3d(0, 0, 0);
}
.toggle:before {
content: "";
position: relative;
top: 3px;
left: 3px;
width: 34px;
height: 14px;
display: block;
background: #9A9999;
border-radius: 8px;
transition: background 0.2s ease;
}
.toggle span {
position: absolute;
top: 0;
left: 0;
width: 20px;
height: 20px;
display: block;
background: #8a0404;
border-radius: 10px;
box-shadow: 0 3px 8px rgba(154, 153, 153, 0.5);
transition: all 0.2s ease;
}
.toggle span:before {
content: "";
position: absolute;
display: block;
margin: -18px;
width: 56px;
height: 56px;
background: rgba(79, 46, 220, 0.5);
border-radius: 50%;
transform: scale(0);
opacity: 1;
pointer-events: none;
}

#forceCustomList:checked + .toggle:before {
background: #454444;
}
#forceCustomList:checked + .toggle span {
background: #149a05;
transform: translateX(20px);
transition: all 0.2s cubic-bezier(0.8, 0.4, 0.3, 1.25), background 0.15s ease;
box-shadow: 0 3px 8px rgba(79, 46, 220, 0.2);
}
#forceCustomList:checked + .toggle span:before {
transform: scale(1);
opacity: 0;
transition: all 0.4s ease;
}
#dragOverlay:checked + .toggle:before {
background: #454444; 
}
#dragOverlay:checked + .toggle span {
  background: #149a05;
  transform: translateX(20px);
  transition: all 0.2s cubic-bezier(0.8, 0.4, 0.3, 1.25), background 0.15s ease;
  box-shadow: 0 3px 8px rgba(79, 46, 220, 0.2);
}
#dragOverlay:checked + .toggle span:before {
  transform: scale(1);
  opacity: 0;
  transition: all 0.4s ease;
}
#notificationSoundChat:checked + .toggle:before {
  background: #454444; 
  }
  #notificationSoundChat:checked + .toggle span {
    background: #149a05;
    transform: translateX(20px);
    transition: all 0.2s cubic-bezier(0.8, 0.4, 0.3, 1.25), background 0.15s ease;
    box-shadow: 0 3px 8px rgba(79, 46, 220, 0.2);
  }
  #notificationSoundChat:checked + .toggle span:before {
    transform: scale(1);
    opacity: 0;
    transition: all 0.4s ease;
  }
  #notificationSoundEndGame:checked + .toggle:before {
    background: #454444; 
    }
    #notificationSoundEndGame:checked + .toggle span {
      background: #149a05;
      transform: translateX(20px);
      transition: all 0.2s cubic-bezier(0.8, 0.4, 0.3, 1.25), background 0.15s ease;
      box-shadow: 0 3px 8px rgba(79, 46, 220, 0.2);
    }
    #notificationSoundEndGame:checked + .toggle span:before {
      transform: scale(1);
      opacity: 0;
      transition: all 0.4s ease;
    }

  #miniScreen:checked + .toggle:before {
    background: #454444; 
    }
    #miniScreen:checked + .toggle span {
      background: #149a05;
      transform: translateX(20px);
      transition: all 0.2s cubic-bezier(0.8, 0.4, 0.3, 1.25), background 0.15s ease;
      box-shadow: 0 3px 8px rgba(79, 46, 220, 0.2);
    }
    #miniScreen:checked + .toggle span:before {
      transform: scale(1);
      opacity: 0;
      transition: all 0.4s ease;
    }

    .overlay.darkScrollBar.pane {
      overflow-y: auto;
    }
`
const PANEL_HTML = `
<div class="overlaySetting notifications">
  <div class="label">Notifications</div>
  <div id="notificationsContent" hidden>
    <div class="info">Mots déclenchant une notifications. Chaque mot doit être séparé par une virgule</div>
    <div class="field range">
      <input type="input" name="Notifications" id="notifications" placeholder="${settings.nickname}">
    </div>
    <div class="info">Couleurs des notifications dans le chat</div>
    <div class="field range">
      <input type="color" id="notification_color">
    </div>
    <div class="info" style="display: inline-block;">Notification de mention</div>
    <div style="display: inline-block;">
      <input type="checkbox" class="toggleButton" id="notificationSoundChat" style="display:none" />
      <label for="notificationSoundChat" class="toggle"><span></span></label>
    </div>
    <div class="info" style="display: inline-block;">Notification de fin de partie</div>
    <div style="display: inline-block;">
      <input type="checkbox" class="toggleButton" id="notificationSoundEndGame" style="display:none" />
      <label for="notificationSoundEndGame" class="toggle"><span></span></label>
    </div>
    <div class="info">Son joué lors d'une mention</div>
    <div class="field preset">
      <select id="notificationSoundChatSelector">
        <option value="custom">URL personnalisée</option>
      </select>
    </div>
    <div id="notificationSoundChatBlock" hidden>
      <div class="info">Url du son de mention</div>
      <div class="field range">
        <input type="url" name="Notifications Url" id="notificationSoundChatUrl" placeholder="url">
      </div>
    </div>

    <div class="info">Son joué à la fin de la partie</div>
    <div class="field preset">
      <select id="notificationSoundEndGameSelector">
        <option value="custom">URL personnalisée</option>
      </select>
    </div>
    <div id="notificationSoundEndGameBlock" hidden>
      <div class="info">Url du son de fin de partie</div>
      <div class="field range">
        <input type="url" name="Notifications Url" id="notificationSoundEndGameUrl" placeholder="url">
      </div>
    </div>
  </div>
</div>

<div class="overlaySetting backgroundImage">
  <div class="label">Fond d'écran</div>
  <div id="backgroundImageContent" hidden>
    <div class="info">Quel type de fond veux-tu ?</div>
    <div class="field preset">
      <select id="imageSelector">
        <option value="simpleColor">Couleur simple</option>
        <option value="gradiantColor">Dégradé de couleur</option>
        <option value="onlineImage">Image en ligne</option>
        <option value="localImage">Image locale</option>
      </select>
    </div>
    <div class="field range" id="simpleColorField">
      <input type="color" id="simpleColor">
    </div>
    <div class="field range" id="gradiantColorField" hidden>
      <input type="color" id="gradiantOne">
      <input type="color" id="gradiantTwo">
      <input type="color" id="gradiantThree">
    </div>
    <div class="field range" id="onlineImageField" hidden>
      <input type="url" name="website" id="onlineImage" placeholder="http://exemple.com">
    </div>
    <div class="field range" id="submitImageField">
      <input type="submit" id="submitImage" value="Appliquer">
    </div>
    <div class="field range" id="localImageField" hidden>
      <input type="file" id="localImage" accept=".png,.gif,.jpg,.jpeg"
        style="text-align: center;font-size: initial;display: inline;">
    </div>
  </div>
</div>

<div class="overlaySetting settings">
  <div class="label">Paramètres de l'overlay</div>
  <div id="settingsContent" hidden>
    <div>
      <div class="info" style="display: inline-block;">Décrocher le tableau</div>
      <div style="display: inline-block;">
        <input type="checkbox" class="toggleButton" id="dragOverlay" style="display:none" />
        <label for="dragOverlay" class="toggle"><span></span></label>
      </div>
    </div>
    <div>
      <div class="info" style="display: inline-block;">Petit écran</div>
      <div style="display: inline-block;">
        <input type="checkbox" class="toggleButton" id="miniScreen" style="display:none" />
        <label for="miniScreen" class="toggle"><span></span></label>
      </div>
    </div>
    <div class="info">Petit écran: à cocher si vous avez une petite résolution pour que le chat ne prenne pas trop de
      place</div>
  </div>
</div>

<div class="overlaySetting customList">
  <div class="label">Liste personnalisée</div>
  <div id="customListContent" hidden>
    <div class="tutorial">
      <p>Téléverser votre liste pour un compteur de mot personnalisé en jeu.</p>
      <p>Un mot par ligne, 10000 mots maximum, peu importe la casse</p>
      <p id="notifForceList">Aucun fichier chargé.</p>
    </div>
    <div class="field range">
      <input type="file" id="localList" accept=".txt" style="text-align: center;font-size: initial;display: inline;">
    </div>
    <div class="field range">
      <input type="submit" id="removeList" value="Retirer la liste">
    </div>
  </div>
</div>

<div class="overlaySetting gameMode">
  <div class="label">Mode de jeu</div>
  <div id="gameModeContent" hidden>
    <div class="info" style="display: inline-block;">Liste personnalisée forcée</div>
    <div style="display: inline-block;">
      <input type="checkbox" class="toggleButton" id="forceCustomList" style="display:none" />
      <label for="forceCustomList" class="toggle"><span></span></label>
    </div>
  </div>
</div>

<div class="overlaySetting gameColor">
  <div class="label">Couleurs du chat</div>
  <div id="gameColorContent" hidden>
    <div class="info">Couleur des messages</div>
    <div class="field range">
      <input type="color" id="messageColor" value="#CCCCCC">
    </div>
    <div class="info">Couleur des notifications</div>
    <div class="field range">
      <input type="color" id="notificationColor" value="#88AAAA">
    </div>
    <div class="info">Couleur des pseudos</div>
    <div class="field range">
      <input type="color" id="pseudoColor" value="#CCCCCC">
    </div>
    <div class="info">Couleur du chat</div>
    <div class="field range">
      <input type="color" id="chatColor" value="#202020">
    </div>
    <div class="info">Couleur de la topbar</div>
    <div class="field range">
      <input type="color" id="topColor" value="#7855C7">
    </div>
    <div class="info">Couleur du texte de la topbar</div>
    <div class="field range">
      <input type="color" id="topTextColor" value="#EEEEEE">
    </div>
    <div class="info">Couleur des messages du bot</div>
    <div class="field range">
      <input type="color" id="infoColor" value="#EEEEEE">
    </div>
    <div class="info">Couleur des messages de fin de partie</div>
    <div class="field range">
      <input type="color" id="endGameColor" value="#EEEEEE">
    </div>
    <div class="info">Couleur des tickets bots</div>
    <div class="field range">
      <input type="color" id="entryColor" value="#B7ADAB">
    </div>
  </div>
</div>

<div class="overlaySetting customList">
  <div class="label">Couleurs du jeu</div>
  <div id="customListContent" hidden>
    <div class="info">Couleur des lettres</div>
    <div class="field range">
      <input type="color" id="lettersColor" value="#888888">
      <input type="color" id="lettersColor1" value="#DDBB66">
    </div>
    <div class="info">Couleur des pseudos</div>
    <div class="field range">
      <input type="color" id="onlinePseudoColor" value="#FFFFFF">
      <input type="color" id="offlinePseudoColor" value="#888888">
    </div>
    <div class="info">Couleur des mots</div>
    <div class="field range">
      <input type="color" id="wordColor" value="#FFFFFF">
    </div>
    <div class="info">Couleur des syllables</div>
    <div class="field range">
      <input type="color" id="syllableColor" value="#44DD44">
    </div>
    <div class="info">Emoji vie</div>
    <div class="field range">
      <input type="url" name="website" id="heartEmoji">
    </div>
    <div class="info">Emoji mort</div>
    <div class="field range">
      <input type="url" name="website" id="deathEmoji">
    </div>
    <div class="info">Emoji médaille</div>
    <div class="field range">
      <input type="url" name="website" id="medalEmoji">
    </div>
    <div class="info">Changement en live</div>
    <div class="field range">
      <input type="submit" id="submitChatColor" value="Appliquer">
    </div>
  </div>
</div>

<div class="overlaySetting shortcut">
  <div class="label">Liste de raccourcis</div>
  <div id="shortcutContent">
    <div class="tutorial">

      <p>Delete (Suppr.) en jeu pour perdre une vie</p>
      <p>Alt + Delete (Suppr.) en jeu pour perdre la partie</p>
    </div>
  </div>
</div>
`

let botRooms = [];
let Settings = {};
let RoundTime = Date.now(),
  WordsCount = 0,
  ListCount = 0,
  ServerToLocalNow = 0,
  isForced = false;
let displayTime = false,
  Interval = null,
  isGameStarted = false;
let isLoaded = false
let Chatters = [];
let Milestone = {};
let records = null;
let InfosByPeerId = {};
let SelfPeerId, LeaderPeerId;
let unreadNotifications = false;
let notificationCount = 0, dataSocket = null;
const notificationsUrlListArray = [
  "https://www.dropbox.com/s/frs2zx5kq7uq903/Done%20for%20you.mp3?dl=0",
  "https://www.dropbox.com/s/7lshfv4ek7wy52d/Got%20it%20down.mp3?dl=0",
  "https://www.dropbox.com/s/7ygkxdjcro820ib/Inflicted.mp3?dl=0",
  "https://www.dropbox.com/s/5mm5n9gg49iba0d/Open%20up.mp3?dl=0",
  "https://www.dropbox.com/s/bgn8wkhkn9rc0wr/Ping.mp3?dl=0",
  "https://www.dropbox.com/s/ggoulsrflz2lf4l/Slow%20spring%20board.mp3?dl=0"
]

let notificationsUrlList = {};
notificationsUrlListArray.forEach(x => {
  let link = x.replace("www.dropbox", "dl.dropboxusercontent").replace("?dl=0", "");
  let name = decodeURIComponent(link.substr(link.lastIndexOf("/") + 1).replace(".mp3", ""));

  notificationsUrlList[name] = link;
})

const postMsg = obj => gameWindow.postMessage(obj, "*")


const sendInfo = (style, msg) => {
  let isScrolledToBottom = chatLog.scrollHeight - chatLog.clientHeight - chatLog.scrollTop < 10;
  msg = Autolinker.link(msg, {
    newWindow: true,
    truncate: 30
  });
  let div = document.createElement("div");
  div.className = style;
  const time = new Date();
  const hoursMinutes = `0${time.getHours()}`.slice(-2) + ":" + `0${time.getMinutes()}`.slice(-2) + ":" + `0${time.getSeconds()}`.slice(-2);
  div.innerHTML = `<span class="time">${hoursMinutes}</span> <span class="text">${msg}</span>`
  document.querySelector(".log.darkScrollbar").appendChild(div);
  if (isScrolledToBottom)
    chatLog.scrollTop = chatLog.scrollHeight;
}

const isABotRoom = link => {
  for (let bot in botRooms) {
    for (let l in botRooms[bot]) {
      let a = botRooms[bot]
      if (a[l] == link || !link.indexOf(a[l])) return true;
    }
  }
  return false;
}

setInterval(() => {
  notificationCount = 0;
}, 30000);

let originalTitle = $("head > title").textContent;
// setInterval(() => {
//   if (document.hasFocus() && unreadNotifications) {
//     unreadNotifications = false;
//   }
//   $("head > title").textContent = (!document.hasFocus() && unreadNotifications ? "🔴 " : "") + originalTitle;
// }, 400);
function applyStyleProperties(element, customProperties) {
  for (const property in customProperties) {
    const propertyValue = customProperties[property];
    element.style.setProperty(`--bot-messages-${property}`, propertyValue);
  }
}

const loadAutoLinker = (callback = () => { }) => {
  let autolinker = document.createElement('script');
  autolinker.onload = function () {
    $("head > title").textContent = `[${roomCode}] ${document.querySelector(".roomName").textContent}`
    const chat = (authorProfile, text, customProperties = null) => {
      if (!~window.location.href.indexOf("macadelic") && authorProfile != null && !authorProfile.isBroadcast && ignoredPeerIds.includes(authorProfile.peerId)) return;
      let display = !authorProfile ? false : (authorProfile.peerId == 0 && isABotRoom(window.location.href)) || authorProfile.nickname.includes("Macadelic 🤖")
      if (display) return
      if (sidebar.hidden) $(".sidebarToggle").classList.add("unread");
      chatMessageCount++;
      if (chatMessageCount > maxChatMessageCount) chatLog.removeChild(chatLog.firstChild);
      let isScrolledToBottom = chatLog.scrollHeight - chatLog.clientHeight - chatLog.scrollTop < 10;
      // const logEntry = $make("div", chatLog, { className: authorProfile == null ? "system" : "" });
      const defaultLogEntryClassName = customProperties !== null ? "bot-messages" : "";
      const logEntry = $make("div", chatLog, { className: authorProfile == null ? "system" : defaultLogEntryClassName });
      if (defaultLogEntryClassName === "bot-messages") applyStyleProperties(logEntry, customProperties)

      const time = new Date();
      const hoursMinutes = `0${time.getHours()}`.slice(-2) + ":" + `0${time.getMinutes()}`.slice(-2) + ":" + `0${time.getSeconds()}`.slice(-2);
      $make("span", logEntry, { className: "time", textContent: hoursMinutes });
      $makeText(" ", logEntry);
      let notif = false;
      Settings.notifications.forEach(x => {
        if (~text.toUpperCase().indexOf(x.toUpperCase().trim())) notif = true;
      })
      if (notif) {
        logEntry.classList.add("notif");
        if (!document.hasFocus() && notificationCount < 2) {
          playNotificationSound("chat");
          notificationCount++;
        }
        if (!unreadNotifications && !document.hasFocus()) {
          unreadNotifications = true;
        }
      }
      if (authorProfile != null && authorProfile.isBroadcast) {
        logEntry.classList.add("highlight");
        const broadcast = $make("span", logEntry, { className: "broadcast" });
        $make("span", broadcast, { className: "author", textContent: authorProfile.nickname });
        $makeText(": " + text, broadcast);
      } else {
        if (authorProfile != null) {
          const roles = authorProfile.roles != null ? authorProfile.roles : [];
          const badgesElt = $make("span", logEntry, { className: "badges" });
          for (const role of roles) {
            const badge = badgesByRole[role];
            $make("span", badgesElt, { textContent: badge.icon, title: badge.text });
          }
          const service = authorProfile.auth != null ? authorProfile.auth.service : "guest";
          const link = $make("a", logEntry, { className: `author ${service}`, dataset: { "peerId": authorProfile.peerId }, href: "#" });
          $make("img", link, { className: "service", src: `/images/auth/${service}.png`, alt: "" });
          $makeText(authorProfile.nickname, link);
          $setTooltip(link, getAuthTextFromProfile(authorProfile));

          $makeText(": ", logEntry);
        }
        if (!~window.location.href.indexOf("macadelic") && settings.chatFilter.length > 0) text = text.split(" ").map(x => settings.chatFilter.includes(x.toLowerCase()) ? "•••" : x).join(" ");
        function escape(htmlStr) {
          return htmlStr.replace(/&/g, "&amp;")
            .replace(/</g, "&lt;")
            .replace(/>/g, "&gt;")
            .replace(/"/g, "&quot;")
            .replace(/'/g, "&#39;");

        }
        text = escape(text);
        text = Autolinker.link(text, {
          newWindow: true,
          truncate: 30
        });
        $make("span", logEntry, { className: "text", innerHTML: text });
        if (text.includes(settings.nickname)) logEntry.classList.add("highlight");
        if (document.visibilityState === "hidden" || sidebar.hidden || chatTab.hidden) {
          if (unreadMarkerElt.hidden) {
            chatLog.insertBefore(unreadMarkerElt, logEntry);
            $show(unreadMarkerElt);
          }

          if (logEntry.classList.contains("highlight")) {
            chatUnreadHighlightCount++;
            navigator.setAppBadge(chatUnreadHighlightCount);
            document.title = `(${chatUnreadHighlightCount}) ${documentTitle}`;
            jklmAudio.play("notification");
          }
        }

        if (isScrolledToBottom) chatLog.scrollTop = chatLog.scrollHeight;
      }
      if (socket.listeners) socket.listeners("chat")[0] = chat;
      else socket.eventListeners.chat[0].callback = chat;
      callback();
    }
  }
  autolinker.src = "https://cdnjs.cloudflare.com/ajax/libs/autolinker/3.14.1/Autolinker.js";
  document.head.appendChild(autolinker);
}

const updatePublicBot = links => {
  botRooms = links;
  let s = ``
  for (let bot in links) {
    if (Object.keys(links[bot]).length == 0) continue;
    s += //<div class="overlaySetting customList">
      `<div class="label">${bot}</div>`
    let o = links[bot];
    for (let name in o) {
      let a = o[name]
      if (!a.name) continue;
      let cleanName = a.name.replace(bot, "").replace("🆚", "").trim();
      let temps = ~a.startTime ? convert(Date.now() - a.startTime) : "Pas encore démarré";

      s += ` 
            <a class="entry bombparty" href="https://jklm.macadelic.me/${a.roomCode}" target="_blank" title="${a.players.join("\n")}">
              <div class="info">
                <div class="title">
                  <span class="text" >${cleanName}</span>
                  <span class="playerCount">${a.players.length}</span>
                </div>
                <div class="playing">Temps: ${temps}</div>
                <div class="playing">Mode de jeu: ${a.mode}</div>
              </div>
              <div class="stub ">
                <div class="code">${a.roomCode}</div>
                <div class="cutout"></div>
              </div>
            </a>`
      //a.players, a.link, cleanName, a.mode, temps;
      //s += `<p id="publicBot" title="${a.players.join("\n")}"><a href="${a.link}" title="${a.link}" target="_blank">${cleanName}</a>: Mode: ${a.mode}, temps: ${temps}.</p>`
    }
    //s+=`</div> `
  }
  if (DOM.publicBotPanel)
    DOM.publicBotPanel.innerHTML = s
}

setInterval(() => {
  if (window.location.pathname != "/") updatePublicBot(botRooms);
}, 1000)

const loadLocal = () => {
  if (Settings.imageSelector == "onlineImage" && Settings.onlineImage) {
    postMsg({
      name: "setStyle",
      data: {
        style: {
          "background-image": `url("${Settings.onlineImage}")`,
          "background-position": "center"
        },
        selector: ".main.page"
      }
    })
  } else if (Settings.imageSelector == "simpleColor" && Settings.simpleColor) {
    postMsg({
      name: "setStyle",
      data: {
        style: {
          "background": `${Settings.simpleColor}`,
        },
        selector: ".main.page"
      }
    })
  } else if (Settings.imageSelector == "gradiantColor" && Settings.gradiantColor) {
    postMsg({
      name: "setStyle",
      data: {
        style: {
          "background": `radial-gradient(ellipse, ${Settings.gradiantColor.join(", ")})`,
        },
        selector: ".main.page"
      }
    })
  }
}
formatSeconds = (seconds) => Math.floor(seconds / 3600).toString().padStart(2, "0") + ":" +
  (Math.floor(seconds / 60) % 60).toString().padStart(2, "0") + ":" +
  (seconds % 60).toString().padStart(2, "0")
secondsSince = (startTime) => Math.ceil(Math.max(0, Date.now() - startTime) / 1000)

const messageHandler = data => {
  if (data.name == "player") {
    let { infosByPeerId } = data;

    InfosByPeerId = infosByPeerId;
    //console.log("je recoi ca depuis liframe", InfosByPeerId)
    if (Milestone.name == "round") updateOverlay();
  } else if (data.name == "setup") {
    let { infosByPeerId, selfPeerId, leaderPeerId, milestone } = data;
    InfosByPeerId = infosByPeerId;
    SelfPeerId = selfPeerId;
    LeaderPeerId = leaderPeerId
    Milestone = milestone;
    isGameStarted = Milestone.name == "round";
    isLoaded = true
    DOM.overlay.hidden = false;
    RoundTime = Milestone.startTime;
    WordsCount = milestone.usedWordCount;
    DOM.time.textContent = "Temps: " + formatSeconds(secondsSince(RoundTime + ServerToLocalNow));
    Interval = setInterval(() => {
      if (Milestone.name == "round")
        DOM.time.textContent = "Temps: " + formatSeconds(secondsSince(RoundTime + ServerToLocalNow));
    }, 1000);
    DOM.wordCount.textContent = " Mots: 0";
    if (Settings.fileName != -1)
      DOM.listCount.textContent = " Liste perso: 0 (" + Settings.fileName + ")";
    // records.emit("atJoinRoom", roomCode, settings.nickname, settings.auth ? settings.auth.service + ":" + settings.auth.username : "guest");
    updateOverlay();
    loadList();
    loadLocal();
    sendGameColors();
  } else if (data.name == "serverNow") {
    ServerToLocalNow = data.data;
  } else if (data.name == "end") {
    WordsCount = 0;
    ListCount = 0;
    Milestone.name = "seating"
  } else if (data.name == "start") {
    isGameStarted = true;
    Milestone.name = "round"
    RoundTime = Date.now();
    DOM.overlay.hidden = false;
    DOM.wordCount.hidden = false
    DOM.listCount.hidden = false
    DOM.time.hidden = false;
    WordsCount = 0;
    DOM.wordCount.textContent = " Mots: 0";
    if (Settings.fileName != -1)
      DOM.listCount.textContent = " Liste perso: 0" + " (" + Settings.fileName + ")";
    updateOverlay();
  } else if (data.name == "correctWord") {
    WordsCount++;
    DOM.wordCount.textContent = " Mots: " + WordsCount;
  } else if (data.name == "correctList" && Settings.list != -1) {
    ListCount++;
    if (Settings.fileName != -1)
      DOM.listCount.textContent = " Liste perso: " + ListCount + " (" + Settings.fileName + ")";
  } else if (data.name == "retryStyle") {
    setTimeout(() => {
      postMsg({
        name: "setStyle",
        data: {
          style: data.style,
          selector: data.selector
        }
      })
    }, 100)
  } else if (data.name == "delete") {
    //socket.emit("chat", "SUPP ACTIVÉ: " + data.content)
  } else if (data.name == "gameLoaded") {
    postMsg({ name: "isReady" })
  } else if (data.name == "sendData") {
    let game = JSON.parse(data.game);
    //{players, milestone, rules, minifiedRules}
    if (game) {
      dataSocket && dataSocket.emit("login", a => {
        dataSocket && dataSocket.emit("validate", "DlWpT/BD8dqe+LY0yGLDVEWay6KRTkKT5AnIJn5cumk=", (ae) => {
          socket.emit("getChatterProfiles", c => {
            let user = c.find(x => x.peerId == selfPeerId);
            delete user.picture;
            // console.log("userConnected", roomCode, user, $(".info .room .roomName").textContent, game.milestone, game.players, c, game.minifiedRules);
            dataSocket && dataSocket.emit("userConnected", roomCode, user, $(".info .room .roomName").textContent, game.milestone, game.players, c, game.minifiedRules);
          })
        });
      })

    }
  } else if (data.name == "sendWord") {
    let array = JSON.parse(data.game);
    if (!array) return;
    dataSocket && dataSocket.emit("setWord", ...array);
  } else if (data.name == "setStartGame") {
    let game = JSON.parse(data.game);
    //startTime, rules, players
    socket.emit("getChatterProfiles", chatters => {
      dataSocket && dataSocket.emit("setStartGame", game.startTime, game.rules, $(".info .room .roomName").textContent, game.players, chatters, () => { })
    })
  } else if (data.name == "setGameFinished") {
    dataSocket && dataSocket.emit("setGameFinished", data.sha, data.endTime, () => { });
    if (Settings.notificationSoundEndGame) playNotificationSound("endGame")
    // console.log("setGameFinished");
  }
}

const convert = s => {
  let ms = s % 1000;
  s = (s - ms) / 1000;
  let secs = s % 60;
  s = (s - secs) / 60;
  let mins = s % 60;
  let hrs = (s - mins) / 60;
  return (hrs < 10 ? "0" + hrs : hrs) + ":" + (mins < 10 ? "0" + mins : mins) + ":" + (secs < 10 ? "0" + secs : secs)
}

const updateOverlay = () => {
  if (!isLoaded) return;
  let table = document.querySelector(".rwd-table");
  if (!isGameStarted) {
    DOM.overlay.hidden = true
    DOM.wordCount.hidden = true
    DOM.time.hidden = true;
    DOM.listCount.hidden = true;
    return
  }
  table.innerHTML = ``;
  let str = `
    <tr style="height:4em;font-weight: bold;">
    <th id="names">Username</th>
    <th id="value" >Alpha</th>
    <th id="value" >Vies</th>
    <th id="value" >Morts</th>
    <th id="value" >Mots</th>
    <th id="value" >Longs</th>
    <th id="value" >MC</th>
    <th id="value" >S-M</th>
    </tr>`
  for (let i in InfosByPeerId) {
    let x = InfosByPeerId[i];
    let color = i == SelfPeerId ? (x.death ? `#0a4a13` : `#00ff22`) : (x.death ? `#505050` : `#fff`)
    str += `
        <tr style="height:3em;color:${color};">
        <td id="names" data-th="Username">${x.nickname}</td>
        <td id="value" data-th="Alpha">${x.alpha[0]} (${x.alpha[1]})</td>
        <td id="value" data-th="Lives">${x.vr}</td>
        <td id="value" data-th="Deaths">${x.vp}</td>
        <td id="value" data-th="Mots">${x.mots}</td>
        <td id="value" data-th="Longs">${x.longs}</td>
        <td id="value" data-th="MC">${x.mc}</td>
        <td id="value" data-th="S-M">${~x.sansmort ? convert(x.sansmort) : "-"}</td>
        </tr>`
  }
  table.innerHTML = str;
}


let DOM = {
  //overlay: null,
  wordCount: null,
  goToHome: null,
  settingsPanel: null,
  settingsTab: null,
  publicBotPanel: null,
  publicBotTab: null,
  messageColor: null,
  notificationColor: null,
  infoColor: null,
  endGameColor: null,
  pseudoColor: null,
  chatColor: null,
  entryColor: null,
  topColor: null,
  topTextColor: null,
  gradiantColor: null,
  gradiantOne: null,
  gradiantTwo: null,
  gradiantThree: null,
  forceCustomList: null,
  dragOverlay: null,
  simpleColor: null,
  notifForceList: null,
  listCount: null,
  localList: null,
  imageSelector: null,
  onlineImage: null,
  localImage: null,
  simpleColor: null,
  onlineImageField: null,
  localImageField: null,
  simpleColorField: null,
  gradiantColorField: null,
  submitChatColor: null,
  removeList: null,
  miniScreen: null,
  CSSVariables: document.documentElement,
  topBarInfos: document.querySelector(".info"),
  panelTabs: document.querySelector(".tabs"),
  sideBar: document.querySelector(".sidebar"),
  top: document.querySelector(".top"),
  iframe: document.querySelector("iframe"),
}

let createSettingsOverlayTab = () => {
  DOM.settingsPanel = document.createElement("div");
  DOM.settingsPanel.className = "overlay darkScrollBar pane";
  DOM.settingsPanel.innerHTML = PANEL_HTML
  DOM.settingsPanel.hidden = true;
  DOM.overlay.style["overflow-y"] = "auto";

  DOM.overlay.style["overflow-x"] = "hidden";
  DOM.settingsTab = document.createElement("a");
  DOM.settingsTab.href = "#";
  DOM.settingsTab.className = "overlayTab";
  DOM.settingsTab.title = "Parametres de l'overlay";
  DOM.settingsTab.textContent = "⚙"

  DOM.sideBar.appendChild(DOM.settingsPanel)
  DOM.panelTabs.insertBefore(DOM.settingsTab, DOM.panelTabs.childNodes[DOM.panelTabs.childNodes.length - 2])
}

let createPublicBotTab = () => {
  DOM.publicBotPanel = document.createElement("div");
  DOM.publicBotPanel.className = "overlay darkScrollBar pane";
  DOM.publicBotPanel.id = "publicBotPanel";
  DOM.overlay.style["overflow-y"] = "auto";
  DOM.overlay.style["overflow-x"] = "hidden";
  DOM.publicBotPanel.innerHTML = `
    <div class="overlaySetting customList">
    <div class="label">Salons de Macadelic Bot</div>
        <div class="tutorial">
            <p>Principal: https://jklm.fun/PDAC</p>
        </div>
    </div>`;
  DOM.publicBotPanel.hidden = true;

  DOM.publicBotTab = document.createElement("a");
  DOM.publicBotTab.href = "#";
  DOM.publicBotTab.className = "overlayBotTab";
  DOM.publicBotTab.title = "Bots";
  DOM.publicBotTab.textContent = "🤖"

  DOM.sideBar.appendChild(DOM.publicBotPanel)
  DOM.panelTabs.insertBefore(DOM.publicBotTab, DOM.panelTabs.childNodes[DOM.panelTabs.childNodes.length - 2])
}

const playNotificationSound = (type) => {
  if (type == "chat" && Settings.notificationSoundChat && Settings.notificationSoundChatUrl) (new Audio(Settings.notificationSoundChatUrl)).play();

  if (type == "endGame" && Settings.notificationSoundEndGame && Settings.notificationSoundEndGameUrl) (new Audio(Settings.notificationSoundEndGameUrl)).play();
}

const createOverlay = () => {
  if (!Settings.miniScreen) DOM.sideBar.style.width = "370px"
  else DOM.sideBar.style.width = "300px"
  DOM.overlay = document.createElement("div");
  DOM.overlay.hidden = true;
  DOM.overlay.className = "darkScrollBar";
  DOM.overlay.style["overflow-y"] = "auto";
  DOM.overlay.style["max-height"] = "25%"
  //DOM.overlay.style["height"] = "200px";
  DOM.overlay.innerHTML = `
    <table class="rwd-table">
        <tr style="height:30px;">
            <th id="names">Username</th>
            <th id="value" >Alpha</th>
            <th id="value" >Vies</th>
            <th id="value" >Morts</th>
            <th id="value" >Mots</th>
            <th id="value" >Longs</th>
            <th id="value" >MC</th>
            <th id="value" >S-M</th>
        </tr>
    </table>
    `
  DOM.sideBar.insertBefore(DOM.overlay, DOM.sideBar.childNodes[0])
}

const createTopBar = () => {
  DOM.time = document.createElement("span");
  DOM.time.innerHTML = `<span></span>`
  DOM.time.className = "room";
  DOM.wordCount = document.createElement("span");
  DOM.wordCount.innerHTML = `<span></span>`
  DOM.wordCount.className = "room";
  DOM.listCount = document.createElement("span");
  DOM.listCount.innerHTML = `<span></span>`
  DOM.listCount.className = "room";
  DOM.goToHome = document.createElement("button");
  DOM.goToHome.className = "siderbarToggle";
  DOM.goToHome.title = "Home";
  DOM.goToHome.textContent = "🚪";
  DOM.topBarInfos.appendChild(DOM.time);
  DOM.topBarInfos.appendChild(DOM.wordCount);
  DOM.topBarInfos.appendChild(DOM.listCount);
  DOM.top.insertBefore(DOM.goToHome, DOM.top.childNodes[DOM.top.childNodes.length - 1])
  DOM.goToHome.addEventListener("click", () => {
    window.open(window.location.origin);
  })
}

const loadHTML = () => {
  createOverlay();
  createSettingsOverlayTab()
  createPublicBotTab();

  createTopBar();
  let obj = {
    "title": "head > title",
    "submitImage": "#submitImage",
    "messageColor": "#messageColor",
    "notificationColor": "#notificationColor",
    "infoColor": "#infoColor",
    "endGameColor": "#endGameColor",
    "pseudoColor": "#pseudoColor",
    "chatColor": "#chatColor",
    "topColor": "#topColor",
    "topTextColor": "#topTextColor",
    "gradiantColor": "#gradiantColor",
    "gradiantOne": "#gradiantOne",
    "gradiantTwo": "#gradiantTwo",
    "gradiantThree": "#gradiantThree",
    "forceCustomList": "#forceCustomList",
    "dragOverlay": "#dragOverlay",
    "simpleColor": "#simpleColor",
    "notifForceList": "#notifForceList",
    "localList": "#locallist",
    "imageSelector": "#imageSelector",
    "onlineImage": "#onlineImage",
    "localImage": "#localImage",
    "simpleColor": "#simpleColor",
    "onlineImageField": "#onlineImageField",
    "submitImageField": "#submitImageField",
    "localImageField": "#localImageField",
    "simpleColorField": "#simpleColorField",
    "gradiantColorField": "#gradiantColorField",
    "entryColor": "#entryColor",
    "lettersColor": "#lettersColor",
    "lettersColor1": "#lettersColor1",
    "onlinePseudoColor": "#onlinePseudoColor",
    "offlinePseudoColor": "#offlinePseudoColor",
    "wordColor": "#wordColor",
    "syllableColor": "#syllableColor",
    "heartEmoji": "#heartEmoji",
    "deathEmoji": "#deathEmoji",
    "medalEmoji": "#medalEmoji",
    "submitChatColor": "#submitChatColor",
    "notification_color": "#notification_color",
    "notificationSoundChat": "#notificationSoundChat",
    "notificationSoundChatSelector": "#notificationSoundChatSelector",
    "notificationSoundChatBlock": "#notificationSoundChatBlock",
    "notificationSoundEndGame": "#notificationSoundEndGame",
    "notificationSoundEndGameSelector": "#notificationSoundEndGameSelector",
    "notificationSoundEndGameBlock": "#notificationSoundEndGameBlock",
    "notificationSoundChatUrl": "#notificationSoundChatUrl",
    "notificationSoundEndGameUrl": "#notificationSoundEndGameUrl",
    "removeList": "#removeList",
    "localList": "#localList",
    "notifications": "#notifications",
    "miniScreen": "#miniScreen"
  }
  for (let i in obj)
    obj[i] = document.querySelector(obj[i]);
  Object.assign(DOM, obj);
}

const startSocketListener = () => {
  socket.emit("getChatterProfiles", c => {
    Chatters = c
    dataSocket && dataSocket.emit("setUsers", roomCode, c, () => { });
  })
  socket.on("setPlayerCount", () => {
    socket.emit("getChatterProfiles", c => {
      Chatters = c
      dataSocket && dataSocket.emit("setUsers", roomCode, c, () => { });
    })
  })
  // records = io.connect("http://localhost:8585/", { transports: ['websocket'], secure: true })
  // records = io.connect("https://jklm-records.herokuapp.com/", { transports: ['websocket'], secure: true })
  // records = io.connect("https://records.macadelic.me", { transports: ['websocket'], secure: true })
  // records.on("reconnection", () => {
  //   records.emit("registerOverlay", roomCode, () => {
  //     records.emit("getPublicBot", (c, links) => {
  //       updatePublicBot(links);
  //     })
  //   })
  // }).on("getPublicBot", links => {
  //   updatePublicBot(links);
  // }).on("infoBot", e => {
  //   sendInfo("info", e)
  // }).on("infoEndGame", e => {
  //   sendInfo("endGame", e)
  // }).on("disconnect", () => {

  // }).on("getInfosByPeerId", (callback) => {
  //   // console.log("Le bot records demande a avoir mes données");
  //   callback(InfosByPeerId);
  // }).on("setInfosByPeerId", (nickname, infosByPeerId) => {
  //   // console.log("on recoi des infos la");
  //   sendInfo("version", "Les données de partie ont été reçues de l'overlay de " + nickname)
  //   InfosByPeerId = infosByPeerId;
  //   updateOverlay();

  //   postMsg({
  //     name: "setInfosByPeerId",
  //     data: { InfosByPeerId }
  //   })
  // })


  disconnect = (errorCode) => {
    if (socket != null) {
      // Ensure a disconnect from game socket or a kick reason aren't overridden
      socket.off("disconnect");
      socket.close();
    }
    // records.emit("atLeaveRoom", roomCode, settings.nickname, settings.auth ? settings.auth.service + ":" + settings.auth.username : "guest");
    let reason = errorCode || getText("You were disconnected.", "youWereDisconnected");
    const reasonDiv = $(".disconnected.page .reason");
    reasonDiv.innerHTML = "";

    if (errorCode == "authFailed") {
      reasonDiv.appendChild(document.createTextNode(`Failed to authenticate with ${getAuthServiceName(settings.auth.service)}, if it happens again, try `));
      const logoutLink = $make("a", reasonDiv, { textContent: "logging out", href: "#" });
      reasonDiv.appendChild(document.createTextNode("."));

      logoutLink.addEventListener("click", (event) => {
        event.preventDefault();
        settings.auth = null;
        saveSettings();
        window.location.reload();
      });
    } else {
      switch (errorCode) {
        case "noSuchRoom": reason = getText("Sorry, this room doesn't exist anymore. But there are many others!", errorCode); break;
        case "userTokenInUse": reason = getText("It seems you are already connected elsewhere.", errorCode); break;
        case "nodeOffline": reason = getText("The server hosting this room is offline. You can try again in a few seconds.", errorCode); break;
        case "banned": reason = getText("Sorry, you're banned from this room. But there are many others to play in!", errorCode); break;
      }

      reasonDiv.textContent = reason;
    }

    gameContainer.innerHTML = "";
    $hide(".page:not([hidden])");
    $hide(sidebarToggleButton);
    $show(".disconnected.page");
  }
}




const startMessageListener = () => {
  window.removeEventListener("message", window_onMessageFromGame)
  window.addEventListener("message", (event) => {
    if (event.source !== gameWindow) return;
    switch (event.data.name) {
      case "appendToChat": appendToChat(null, event.data.text); break;
      case "focusChat": focusChat(); break;
      case "focusGame": gameWindow.focus(); break;
      case "setGame": socket.emit("setGame", event.data.gameId); break;
      case "disconnected": disconnect(); break;
      default: messageHandler(event.data); break
    }
  })
}

const sendGameColors = () => {
  postMsg({
    name: "setGameColor",
    data: {
      syllable: Settings.syllableColor,
      word: Settings.wordColor,
      pseudo: Settings.pseudoColors,
      letters: Settings.lettersColors,
      heartEmoji: Settings.heartEmoji,
      deathEmoji: Settings.deathEmoji,
      medalEmoji: Settings.medalEmoji
    }
  })
}

const startDOMListener = () => {
  let isDown = false, mousePosition = [], offset = [0, 0];
  chatTextArea.addEventListener("keydown", (event) => {
    let value = chatTextArea.value;
    if (event.keyCode == 9) {
      event.preventDefault();
      let prev = value.substring(0, value.lastIndexOf("@") - 1).trim();
      let after = value.substring(value.lastIndexOf("@") + 1, chatTextArea.selectionStart).trim()
      let end = value.substring(chatTextArea.selectionStart).trim();
      let find = Chatters.findIndex(x => ~x.nickname.toLowerCase().indexOf(after.toLowerCase()));
      if (!~find) return;
      find = Chatters[find];
      let txt = prev + " " + "@" + find.nickname + " " + end;
      chatTextArea.value = txt.trim();
      chatTextArea.focus();
    }
  });
  DOM.settingsTab.addEventListener("click", (e) => {
    e.preventDefault();

    $(".sidebar .tabs .active").classList.remove("active");
    DOM.settingsTab.classList.add("active");

    $hide(".sidebar > .pane:not([hidden])");
    $show(DOM.settingsPanel);
    let tabSize = DOM.overlay.hidden ? 0 : DOM.overlay.offsetHeight;
    //WTF
    DOM.publicBotPanel.style.height = (DOM.sideBar.offsetHeight - DOM.panelTabs - tabSize) + "px";
  })
  DOM.publicBotTab.addEventListener("click", (e) => {
    e.preventDefault();
    $(".sidebar .tabs .active").classList.remove("active");
    DOM.publicBotTab.classList.add("active");
    $hide(".sidebar > .pane:not([hidden])");
    $show(DOM.publicBotPanel);
    let tabSize = DOM.overlay.hidden ? 0 : DOM.overlay.offsetHeight;
    //WTF
    DOM.publicBotPanel.style.height = (DOM.sideBar.offsetHeight - DOM.panelTabs - tabSize) + "px";
  })
  DOM.imageSelector.addEventListener("change", () => {
    DOM.onlineImageField.hidden = true;
    DOM.localImageField.hidden = true;
    DOM.simpleColorField.hidden = true;
    DOM.gradiantColorField.hidden = true;
    if (imageSelector.value == "localImage") {
      DOM.submitImage.hidden = true;
      DOM.submitImageField.hidden = true;
    } else {
      DOM.submitImage.hidden = false;
      DOM.submitImageField.hidden = false;
    }
    document.querySelector("#" + DOM.imageSelector.value + "Field").hidden = false;
  })

  DOM.notificationSoundChatSelector.addEventListener("change", () => {
    let value = DOM.notificationSoundChatSelector.value;
    // DOM.notification
    DOM.notificationSoundChatBlock.hidden = value !== "custom";
    Settings.notificationSoundChatSelector = value;
    Settings.notificationSoundChatUrl = notificationsUrlList[value];
    updateSettings();
  })

  DOM.notificationSoundEndGameSelector.addEventListener("change", () => {
    let value = DOM.notificationSoundEndGameSelector.value;

    DOM.notificationSoundEndGameBlock.hidden = value !== "custom";
    Settings.notificationSoundEndGameSelector = value;
    Settings.notificationSoundEndGameUrl = notificationsUrlList[value];
    updateSettings();

  })

  DOM.submitImage.addEventListener("click", () => {
    let type = DOM.imageSelector.value;
    if (type == "onlineImage") {
      postMsg({
        name: "setStyle",
        data: {
          style: {
            "background-image": `url("${document.querySelector("#" + type).value}")`,
            "background-size": "auto",
            "background-position": "center"
          },
          selector: ".main.page"
        }
      })
    } else if (type == "simpleColor") {
      postMsg({
        name: "setStyle",
        data: {
          style: {
            "background": `${document.querySelector("#" + type).value}`,
          },
          selector: ".main.page"
        }
      })
    } else if (type == "gradiantColor") {
      Settings.gradiantColor = [
        DOM.gradiantOne.value,
        DOM.gradiantTwo.value,
        DOM.gradiantThree.value
      ]
      postMsg({
        name: "setStyle",
        data: {
          style: {
            "background": `radial-gradient(ellipse, ${Settings.gradiantColor.join(", ")})`,
          },
          selector: ".main.page"
        }
      })
    } else if (type == "localImage") {
      Settings.localImage = `url(${Settings.localImage})`
      postMsg({
        name: "setStyle",
        data: {
          style: {
            "background": `${Settings.localImage}`,
            "background-size": "auto",
            "background-position": "center"
          },
          selector: ".main.page"
        }
      })
    }
    Settings.imageSelector = type;
    if (type != "gradiantColor" && type != "localImage") Settings[type] = document.querySelector("#" + type).value
    updateSettings();
  })
  DOM.forceCustomList.addEventListener("click", () => {
    isForced = !isForced
    postMsg({
      name: "forceMode",
      data: { value: isForced, name: Settings.fileName }
    })
  })

  DOM.dragOverlay.addEventListener("click", () => {
    Settings.dragOverlay = DOM.dragOverlay.checked;
    updateSettings();
    DOM.overlay.style.position = Settings.dragOverlay ? "absolute" : ""
    if (Settings.dragOverlay) {
      DOM.overlay.style.left = Settings.dragLeft;
      DOM.overlay.style.top = Settings.dragTop;
    }
  })
  DOM.miniScreen.addEventListener("click", () => {
    Settings.miniScreen = DOM.miniScreen.checked;
    updateSettings();
    if (Settings.miniScreen) DOM.sideBar.style.width = "300px"
    else DOM.sideBar.style.width = "370px"
  })
  DOM.overlay.addEventListener('mousedown', function (e) {
    isDown = true;
    offset = [DOM.overlay.offsetLeft - e.clientX, DOM.overlay.offsetTop - e.clientY];
  }, true);

  document.addEventListener('mouseup', function () {
    isDown = false;
  }, true);

  document.addEventListener('mousemove', function (event) {
    if (isDown) {
      event.preventDefault();
      mousePosition = [event.clientX, event.clientY];
      Settings.dragLeft = (mousePosition[0] + offset[0]) + 'px'
      Settings.dragTop = (mousePosition[1] + offset[1]) + 'px'
      updateSettings();
      DOM.overlay.style.left = Settings.dragLeft;
      DOM.overlay.style.top = Settings.dragTop;
    }
  }, true);

  DOM.removeList.addEventListener("click", () => {
    Settings.fileName = -1;
    Settings.list = -1
    DOM.notifForceList.textContent = "Aucun fichier chargé."
    DOM.listCount.textContent = ""
    updateSettings();
  })



  DOM.submitChatColor.addEventListener("click", () => {
    Settings.messageColor = DOM.messageColor.value
    Settings.notificationColor = DOM.notificationColor.value
    Settings.infoColor = DOM.infoColor.value
    Settings.endGameColor = DOM.endGameColor.value
    Settings.pseudoColor = DOM.pseudoColor.value
    Settings.chatColor = DOM.chatColor.value
    Settings.entryColor = DOM.entryColor.value
    Settings.topColor = DOM.topColor.value
    Settings.topTextColor = DOM.topTextColor.value
    Settings.lettersColors[0] = DOM.lettersColor.value;
    Settings.lettersColors[1] = DOM.lettersColor1.value;
    Settings.pseudoColors[0] = DOM.onlinePseudoColor.value;
    Settings.pseudoColors[1] = DOM.offlinePseudoColor.value;
    Settings.wordColor = DOM.wordColor.value;
    Settings.syllableColor = DOM.syllableColor.value;
    Settings.heartEmoji = DOM.heartEmoji.value;
    Settings.deathEmoji = DOM.deathEmoji.value;
    Settings.medalEmoji = DOM.medalEmoji.value;
    DOM.CSSVariables.style.setProperty('--messageColor', DOM.messageColor.value);
    DOM.CSSVariables.style.setProperty('--notificationColor', DOM.notificationColor.value);
    DOM.CSSVariables.style.setProperty('--infoColor', DOM.infoColor.value);
    DOM.CSSVariables.style.setProperty('--endGameColor', DOM.endGameColor.value);
    DOM.CSSVariables.style.setProperty('--pseudoColor', DOM.pseudoColor.value);
    DOM.CSSVariables.style.setProperty('--chatColor', DOM.chatColor.value);
    DOM.CSSVariables.style.setProperty('--entryColor', DOM.entryColor.value);
    DOM.CSSVariables.style.setProperty('--topColor', DOM.topColor.value);
    DOM.CSSVariables.style.setProperty('--topTextColor', DOM.topTextColor.value);
    updateSettings();
    sendGameColors();
  })

  DOM.localImage.addEventListener("change", (arg) => {

    var file = arg.target.files[0];
    var reader = new FileReader();
    reader.onloadend = function () {
      postMsg({
        name: "setStyle",
        data: {
          style: {
            "background-image": `url("${reader.result}")`,
            "background-size": "auto",
            "background-position": "center"
          },
          selector: ".main.page"
        }
      })
    }
    if (file) { reader.readAsDataURL(file); } else { }
  });


  DOM.localList.addEventListener("change", (arg) => {
    var file = arg.target.files[0];
    var reader = new FileReader();
    reader.onloadend = function () {
      Settings.fileName = file.name
      DOM.listCount.textContent = " Liste perso: 0" + " (" + Settings.fileName + ")";
      DOM.notifForceList.textContent = "Le fichier " + Settings.fileName + " a été chargé";
      DOM.notifForceList.hidden = false;
      let list = reader.result.toUpperCase().split("\n");
      Settings.list = list.join("|")
      updateSettings();
      //console.log(Settings.list.length, "list")
      postMsg({
        name: "setList",
        data: {
          list: Settings.list.split("|").slice(0, 10000).map(x => {
            if (!x.length || !x) return "";
            let clean = x.match(/[A-Z-']/g);
            clean && (clean = clean.join(""))
            if (!clean || !clean.length) return "";
            return clean.toUpperCase();
          }).filter(x => x.length)
        }
      })
    }
    if (file) {
      reader.readAsText(file);
    } else {
    }
  });

  DOM.notifications.addEventListener("input", event => {
    Settings.notifications = DOM.notifications.value.split(",")
    updateSettings();
  })

  DOM.notificationSoundChat.addEventListener("change", event => {
    Settings.notificationSoundChat = DOM.notificationSoundChat.checked;
    updateSettings();
  })

  DOM.notificationSoundEndGame.addEventListener("change", event => {
    Settings.notificationSoundEndGame = DOM.notificationSoundEndGame.checked;
    updateSettings();
  })

  DOM.notificationSoundChatUrl.addEventListener("change", event => {
    Settings.notificationSoundChatUrl = DOM.notificationSoundChatUrl.value;
    updateSettings();
  })

  DOM["notification_color"].addEventListener("change", event => {
    Settings["notification_color"] = DOM["notification_color"].value + "33";
    DOM.CSSVariables.style.setProperty('--notification_color', DOM["notification_color"].value + "33");
    updateSettings();
  })

  document.querySelectorAll(".label").forEach(x => {
    x.addEventListener("click", (e) => {
      const target = e.target;
      target.parentElement.children[1].hidden = !target.parentElement.children[1].hidden;
    })
  })
}

let updateSettings = () => localStorage.setItem("overlay", JSON.stringify(Settings));
/*
  postMsg({
    name: "setGameColor",
    data: {
      syllable: Settings.syllableColor,
      word: Settings.wordColor,
      pseudo: Settings.pseudoColors,
      letters: Settings.lettersColors,
      heartEmoji: Settings.heartEmoji,
      deathEmoji: Settings.deathEmoji,
      medalEmoji: Settings.medalEmoji
    }
  })

*/
let loadSettings = () => {
  let s;
  const defaultSettings = {
    "gradiantColor": ["#564a42", "#463d36", "#37302b"],
    "onlineImage": "",
    "simpleColor": "",
    "list": "",
    "fileName": -1,
    "imageSelector": "gradiantColor",
    "messageColor": "#cccccc",
    "notificationColor": "#88aaaa",
    "infoColor": "#88aaaa",
    "endGameColor": "#88aaaa",
    "pseudoColor": "#cccccc",
    "chatColor": "#202020",
    "topColor": "#7855c7",
    "entryColor": "#b7adab",
    "topTextColor": "#eeeeee",
    "dragOverlay": false,
    "dragLeft": "0px",
    "dragTop": "0px",
    "lettersColors": ["#888888", "#ddbb66"],
    "pseudoColors": ["#ffffff", "#888888"],
    "wordColor": "#ffffff",
    "syllableColor": "#44dd44",
    "heartEmoji": "❤️",
    "deathEmoji": "☠️",
    "medalEmoji": "🥇",
    "notifications": [settings.nickname],
    "notificationSoundChat": true,
    "notificationSoundChatSelector": Object.keys(notificationsUrlList)[0],
    "notificationSoundEndGameSelector": Object.keys(notificationsUrlList)[1],
    "notificationSoundChatUrl": notificationsUrlList[Object.keys(notificationsUrlList)[0]],
    "notificationSoundEndGameUrl": notificationsUrlList[Object.keys(notificationsUrlList)[1]],
    "notification_color": "#a5131333",
    "miniScreen": false
  }


  if (!(s = localStorage.getItem("overlay"))) {
    Object.assign(Settings, defaultSettings);
    localStorage.setItem("overlay", JSON.stringify(Settings))
    return
  }
  Settings = JSON.parse(s);
  for (const elem in defaultSettings) {
    if (Settings[elem] == null || (typeof Settings[elem] !== "boolean" && !Settings[elem].length)) Settings[elem] = defaultSettings[elem];
  }
  if (!Settings.imageSelector) {
    Settings["gradiantColor"] = ["#564A42", "#463D36", "#37302B"];
    Settings["imageSelector"] = "gradiantColor";
  }
  if (Settings.dragOverlay) {
    DOM.dragOverlay.checked = true;
    DOM.overlay.style.position = "absolute"
    DOM.overlay.style.left = Settings.dragLeft;
    DOM.overlay.style.top = Settings.dragTop;
  }
  if (Settings.miniScreen) {
    DOM.miniScreen.checked = true;
    DOM.sideBar.style.width = "300px";
  }
  DOM.onlineImageField.hidden = true;
  DOM.localImageField.hidden = true;
  DOM.simpleColorField.hidden = true;
  DOM.gradiantColorField.hidden = true;
  DOM.imageSelector.value = Settings.imageSelector;
  DOM.notifForceList.textContent = Settings.fileName != -1 ? "Le fichier " + Settings.fileName + " a été chargé" : "Aucun fichier chargé."
  document.querySelector("#" + Settings.imageSelector + "Field").hidden = false;
  DOM.onlineImage.value = Settings.onlineImage;
  DOM.messageColor.value = Settings.messageColor
  DOM.notificationColor.value = Settings.notificationColor
  DOM.infoColor.value = Settings.infoColor
  DOM.endGameColor.value = Settings.endGameColor
  DOM.pseudoColor.value = Settings.pseudoColor
  DOM.chatColor.value = Settings.chatColor
  DOM.entryColor.value = Settings.entryColor
  DOM.topColor.value = Settings.topColor
  DOM.topTextColor.value = Settings.topTextColor
  DOM.lettersColor.value = Settings.lettersColors[0];
  DOM.lettersColor1.value = Settings.lettersColors[1];
  DOM.onlinePseudoColor.value = Settings.pseudoColors[0];
  DOM.offlinePseudoColor.value = Settings.pseudoColors[1];
  DOM.wordColor.value = Settings.wordColor;
  DOM.syllableColor.value = Settings.syllableColor;
  DOM.heartEmoji.value = Settings.heartEmoji;
  DOM.deathEmoji.value = Settings.deathEmoji;
  DOM.gradiantOne.value = Settings.gradiantColor[0]
  DOM.gradiantTwo.value = Settings.gradiantColor[1]
  DOM.gradiantThree.value = Settings.gradiantColor[2]
  DOM.simpleColor.value = Settings.simpleColor
  DOM.medalEmoji.value = Settings.medalEmoji;
  DOM["notification_color"].value = Settings["notification_color"];

  DOM.notifications.value = Settings.notifications.join(",");

  DOM.CSSVariables.style.setProperty('--messageColor', Settings.messageColor);
  DOM.CSSVariables.style.setProperty('--notificationColor', Settings.notificationColor);
  DOM.CSSVariables.style.setProperty('--infoColor', Settings.infoColor);
  DOM.CSSVariables.style.setProperty('--endGameColor', Settings.endGameColor);
  DOM.CSSVariables.style.setProperty('--pseudoColor', Settings.pseudoColor);
  DOM.CSSVariables.style.setProperty('--chatColor', Settings.chatColor);
  DOM.CSSVariables.style.setProperty('--entryColor', Settings.entryColor);
  DOM.CSSVariables.style.setProperty('--topColor', Settings.topColor);
  DOM.CSSVariables.style.setProperty('--topTextColor', Settings.topTextColor);
  DOM.CSSVariables.style.setProperty('--notification_color', Settings["notification_color"]);



  for (let name in notificationsUrlList) {
    let selectors = ["notificationSoundChatSelector", "notificationSoundEndGameSelector"]
    selectors.forEach(x => {
      let option = document.createElement("option")
      option.setAttribute("value", name);
      option.textContent = name;

      DOM[x].insertBefore(option, DOM[x].firstChild)
    })
  }
  DOM.notificationSoundChatSelector.value = Settings.notificationSoundChatSelector;
  DOM.notificationSoundEndGameSelector.value = Settings.notificationSoundEndGameSelector;

  DOM.notificationSoundChatBlock.hidden = DOM.notificationSoundChatSelector.value !== "custom"
  DOM.notificationSoundEndGameBlock.hidden = DOM.notificationSoundEndGameSelector.value !== "custom"
  DOM.notificationSoundChatUrl.value = Settings.notificationSoundChatUrl;
  DOM.notificationSoundEndGameUrl.value = Settings.notificationSoundEndGameUrl;
  DOM.notificationSoundChat.checked = Settings.notificationSoundChat;
  DOM.notificationSoundEndGame.checked = Settings.notificationSoundEndGame;
  postMsg({
    name: "setGameColor",
    data: {
      syllable: Settings.syllableColor,
      word: Settings.wordColor,
      pseudo: Settings.pseudoColors,
      letters: Settings.lettersColors,
      heartEmoji: Settings.heartEmoji,
      deathEmoji: Settings.deathEmoji,
      medalEmoji: Settings.medalEmoji
    }
  })
}



const addCss = () => {
  let css = document.createElement('style');
  css.type = 'text/css';
  if (css.styleSheet) css.styleSheet.cssText = OVERLAY_CSS; // Support for IE
  else css.appendChild(document.createTextNode(OVERLAY_CSS)); // Support for the rest
  document.getElementsByTagName("head")[0].appendChild(css);
}


let loadList = () => {
  if (Settings.list && Settings.list != -1 && Settings.list.split) {
    postMsg({
      name: "setList",
      data: {
        list: Settings.list.split("|").slice(0, 10000).map(x => {
          if (!x.length || !x) return "";
          let clean = x.match(/[A-Z-']/g);
          clean && (clean = clean.join(""))
          if (!clean || !clean.length) return "";
          return clean.toUpperCase();
        }).filter(x => x.length)
      }
    })
  } else setTimeout(loadList, 250);
}


let startData = () => {
  // dataSocket = io.connect("https://data.macadelic.me/", { transports: ['websocket'], secure: true })
  dataSocket = io.connect("http://localhost:2929/", { transports: ['websocket'], secure: true })
  dataSocket.on("connect", () => {
    //  console.log("co data")
  })
}


let startOverlay = () => {
  addCss()
  loadHTML();
  startSocketListener();
  startMessageListener();
  loadAutoLinker(() => {
    sendInfo("version", "[1.1.0] Les données de jeux sont récupérées via d'autres utilisateurs de l'overlay si vous n'avez pas assisté au début de la partie sur la session courante.")
    sendGameColors();
  })
  //if (!DOM.iframe.src.match(new RegExp(/https:\/\/.*\.jklm.fun\/games\/bombparty/))) return ;
  startDOMListener();
  loadSettings();
  unreadMarkerElt.innerHTML = ""
  //startData();
}

window.addEventListener("beforeunload", function (e) {
  // records.emit("atLeaveRoom", roomCode, settings.nickname, settings.auth ? settings.auth.service + ":" + settings.auth.username : "guest");
});


(load = () => {
  if (window.location.pathname == "/") {
    console.log("main socket")
  }
  else if (document.readyState == 'complete' && socket && gameWindow && gameWindow.postMessage && document.querySelector("body > div.pages > div.main.page > div.game > iframe") && document.querySelector("body > div.pages > div.main.page > div.game > iframe").src) {
    try {
      startOverlay();
      console.log("Overlay room lancé")
      postMsg({ name: "isReady" });
    } catch (e) {
      alert("Erreur, l'overlay ne peut pas demarrer, voir la console pour plus d'info");
      console.log("Erreur, contacter macadelic et lui envoyer ce message d'erreur =>", e)
      console.error(e);
    }
  }
  else setTimeout(load, 250)
})()
