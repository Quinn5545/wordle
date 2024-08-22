import { partyModal } from "./partyModal.js";

export const rulesState = {
  normal: true,
  grid: [6],
  timed: false,
};
export const updateRules = () => ({ ...rulesState });

const timerAtTop = document.getElementById("timer");

export const introModal = (startGameCallback) => {
  const modalContainer = document.createElement("div");
  modalContainer.className = "modal-container-intro";

  // intro stuff
  const modalContent = document.createElement("div");
  modalContent.className = "modal-content-normal-intro";

  const closeButtonNormal = document.createElement("button");
  closeButtonNormal.className = "modal-close-button-intro";
  closeButtonNormal.textContent = "Normal Mode";

  closeButtonNormal.onclick = () => {
    rulesState.grid[0] = 6;
    rulesState.timed = false;

    document.body.removeChild(modalContainer);
    timerAtTop.classList.add("timer-hidden");
    startGameCallback(true);
  };

  const modalContentOptions = document.createElement("div");
  modalContentOptions.className = "modal-content-party-intro";

  const modalTextOptions = document.createElement("p");
  modalTextOptions.textContent = "Choose to play normally or Challenge Mode!";

  const closeButtonParty = document.createElement("button");
  closeButtonParty.className = "modal-close-button-intro";
  closeButtonParty.textContent = "Challenge Mode";

  closeButtonParty.onclick = () => {
    rulesState.normal = false;
    // document.body.removeChild(modalContent);
    document.body.removeChild(modalContainer);
    // document.body.removeChild(modalContainer);

    partyModal(startGameCallback);
  };
  //

  const modalText = document.createElement("p");
  modalText.textContent = "Welcome to Wordle: Challenge Edition!";

  // const closeButton = document.createElement("button");
  // closeButton.className = "modal-close-button-intro";
  // closeButton.textContent = "Start";

  // closeButton.onclick = () => {
  //   document.body.removeChild(modalContainer);
  //   startGameCallback();
  // };

  modalContent.appendChild(modalText);
  modalContent.appendChild(modalTextOptions);
  modalContent.appendChild(closeButtonNormal);
  modalContainer.appendChild(modalContent);

  modalContent.appendChild(closeButtonParty);

  document.body.appendChild(modalContainer);
};
