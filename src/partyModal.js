import { rulesState } from "./introModal.js";

export const updateRules = () => ({ ...rulesState });

export const partyModal = (startGameCallback) => {
  const modalContainer = document.createElement("div");
  modalContainer.className = "modal-container-intro";

  const modalContent = document.createElement("div");
  modalContent.className = "modal-content-normal-intro";

  const timedCheckboxDiv = document.createElement("div");
  const timedDiv = document.createElement("div");

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
  modalText.textContent = "Welcome to Wordle: Challenge Edition!";

  // limited guesses text
  const modalTextSelection = document.createElement("p");
  modalTextSelection.textContent =
    "Choose the number of guesses you want to play with!";
  //

  // timed mode

  const timedConfirm = document.createElement("input");
  timedConfirm.type = "checkbox";
  timedConfirm.checked = false;

  const timedSelect = document.createElement("select");
  timedSelect.className = "turn-select";

  const timedOptions = [0.25, 0.5, 0.75, 1, 2, 3];
  timedOptions.forEach((time) => {
    const option = document.createElement("option");
    option.value = time;

    if (time < 0.3) {
      const seconds = time * 60;
      option.textContent = `${seconds} sec (you're crazy)`;
    } else if (time < 1) {
      const seconds = time * 60;
      option.textContent = `${seconds} sec`;
    } else {
      option.textContent = `${time} min`;
    }

    timedSelect.appendChild(option);
  });

  //

  // timed mode text

  const modalTextSelectionTimed = document.createElement("p");
  modalTextSelectionTimed.textContent =
    "Check the box if you want to play with a timer for every turn!";

  //
  // const modalTextSpacer = document.createElement("p");
  const saveButton = document.createElement("button");
  saveButton.className = "modal-close-button-intro";
  saveButton.textContent = "Start Game";

  modalContainer.appendChild(modalContent);
  modalContent.appendChild(modalText);

  modalContent.appendChild(modalTextSelection);
  modalContent.appendChild(turnSelect);

  timedCheckboxDiv.appendChild(modalTextSelectionTimed);
  modalContent.appendChild(timedCheckboxDiv);
  timedCheckboxDiv.appendChild(timedConfirm);
  modalContent.appendChild(timedDiv);
  timedConfirm.addEventListener("change", function () {
    if (timedConfirm.checked) {
      // console.log("Checkbox is checked!");
      timedDiv.appendChild(timedSelect);
    } else {
      // console.log("Checkbox is unchecked.");
      timedDiv.removeChild(timedSelect);
    }
  });
  // timedDiv.appendChild(timedSelect);

  // modalContent.appendChild(modalTextSpacer);
  modalContent.appendChild(saveButtonArea);
  saveButtonArea.appendChild(saveButton);

  saveButton.onclick = () => {
    rulesState.grid[0] = parseInt(turnSelect.value);
    if (timedConfirm.checked) {
      rulesState.timed = parseFloat(timedSelect.value);
    } else {
      rulesState.timed = false;
    }
    document.body.removeChild(modalContainer);
    startGameCallback(rulesState.grid[0], rulesState.timed);
  };

  document.body.appendChild(modalContainer);
};
