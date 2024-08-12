import { rulesState } from "./introModal.js";

export const updateRules = () => ({ ...rulesState });

export const partyModal = (startGameCallback) => {
  const modalContainer = document.createElement("div");
  modalContainer.className = "modal-container-intro";

  const modalContent = document.createElement("div");
  modalContent.className = "modal-content-normal-intro";

  const saveButtonArea = document.createElement("div");
  saveButtonArea.className = "modal-button-normal";

  // limited guesses mode

  const turnSelect = document.createElement("select");
  turnSelect.className = "turn-select";

  const turnOptions = [3, 4, 5, 6];
  turnOptions.forEach((turns) => {
    const option = document.createElement("option");
    option.value = turns;
    option.textContent = `${turns} Guesses`;
    turnSelect.appendChild(option);
  });
  //

  const modalText = document.createElement("p");
  modalText.textContent = "Welcome to Wordle: Party Edition!";

  const saveButton = document.createElement("button");
  saveButton.className = "modal-close-button-intro";
  saveButton.textContent = "Start";

  saveButton.onclick = () => {
    rulesState.grid[0] = parseInt(turnSelect.value);
    document.body.removeChild(modalContainer);
    startGameCallback(rulesState.grid[0]);
  };

  modalContainer.appendChild(modalContent);
  modalContent.appendChild(modalText);
  modalContent.appendChild(turnSelect);
  modalContent.appendChild(saveButton);

  document.body.appendChild(modalContainer);
};
