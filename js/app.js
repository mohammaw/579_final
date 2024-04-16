// Constants and State Variables
const questCompletionStatus = JSON.parse(localStorage.getItem('questCompletionStatus')) || {};
const baseQuestGuideURL = "https://oldschool.runescape.wiki/w/";
let currentPage = 1;
const questsPerPage = 12;

// Utility Functions
const generateQuestGuideURL = questTitle => baseQuestGuideURL + questTitle.replace(/ /g, "_");

const updateCheckmarkIcon = (card, isCompleted) => {
    let checkIcon = card.querySelector('.bi-check-lg');
    if (isCompleted) {
        if (!checkIcon) {
            checkIcon = document.createElement('i');
            checkIcon.classList.add('bi', 'bi-check-lg', 'checkmark-icon');
            card.appendChild(checkIcon);
        }
    } else if (checkIcon) {
        card.removeChild(checkIcon);
    }
};

const updateQuestCompletionProgressBar = () => {
    const totalQuests = questData.quests.length;
    const completedQuests = questData.quests.filter(quest => questCompletionStatus[quest.title]).length;
    const completionPercentage = (completedQuests / totalQuests) * 100;
    const progressBar = document.querySelector('#questCompletionProgressBar');

    progressBar.style.width = `${completionPercentage.toFixed(2)}%`;
    progressBar.setAttribute('aria-valuenow', completionPercentage.toFixed(2));
    progressBar.textContent = completionPercentage > 4 ? `${completionPercentage.toFixed(2)}%` : '';

    if (completionPercentage >= 100) {
        showCongratulationsOverlay();
    }
};

const showCongratulationsOverlay = () => {
    document.querySelector('#congratulationsOverlay').style.display = 'block';
}

const hideOverlay = () => {
    document.querySelector('#congratulationsOverlay').style.display = 'none';
}

// Initializes the quest card with completion status and visual icon
const initializeQuestCard = (card, quest) => {
    if (questCompletionStatus[quest.title]) {
        card.classList.add('border-success');
    } else {
        card.classList.remove('border-success');
    }
    updateCheckmarkIcon(card, questCompletionStatus[quest.title]);
};

// Event Handlers
const handleQuestCardClick = (card, quest) => {
    card.addEventListener('click', () => {
        questCompletionStatus[quest.title] = !questCompletionStatus[quest.title];
        localStorage.setItem('questCompletionStatus', JSON.stringify(questCompletionStatus));
        initializeQuestCard(card, quest);
        updateQuestCompletionProgressBar();
    });
};

const handleFilterChange = () => {
    document.querySelector('#applyFilters').addEventListener('click', () => {
        currentPage = 1;
        updateQuestList();
    });
    document.querySelector('#searchInput').addEventListener('input', () => {
        currentPage = 1;
        updateQuestList();
    });
    document.querySelector('#clearFilters').addEventListener('click', () => {
        document.querySelectorAll('.form-control').forEach(select => select.value = 'any');
        document.querySelector('#searchInput').value = '';
        Object.keys(questCompletionStatus).forEach(key => questCompletionStatus[key] = false);
        localStorage.setItem('questCompletionStatus', JSON.stringify(questCompletionStatus));
        currentPage = 1;
        updateQuestList();
        updateQuestCompletionProgressBar();
    });
};

const handlePagination = () => {
    document.querySelector('#prevPage').addEventListener('click', () => {
        if (currentPage > 1) {
            currentPage--;
            updateQuestList();
        }
    });
    document.querySelector('#nextPage').addEventListener('click', () => {
        if (currentPage * questsPerPage < questData.quests.length) {
            currentPage++;
            updateQuestList();
        }
    });
};

// Main Function to Update the Quest List
const updateQuestList = () => {
    const questListElement = document.querySelector('#questList');
    questListElement.innerHTML = '';

    const filters = {
        difficultyFilter: document.querySelector('#filterDifficulty').value,
        membersFilter: document.querySelector('#filterMembers').value,
        questPointsFilter: document.querySelector('#filterQuestPoints').value,
        completionFilter: document.querySelector('#filterCompletion').value,
        searchInput: document.querySelector('#searchInput').value.toLowerCase()
    };

    let filteredQuests = questData.quests.filter(quest => {
        const { difficultyFilter, membersFilter, questPointsFilter, completionFilter, searchInput } = filters;
        const difficultyMatch = difficultyFilter === 'any' || quest.difficulty === difficultyFilter;
        const membersMatch = membersFilter === 'any' || quest.members.toString() === membersFilter;
        let questPointsMatch = questPointsFilter === 'any' || parseInt(quest.questPoints) === parseInt(questPointsFilter);
        if (questPointsFilter === '5+') {
            questPointsMatch = quest.questPoints >= 5;
        }
        const completionMatch = completionFilter === 'any' || (completionFilter === 'completed' && questCompletionStatus[quest.title]) || (completionFilter === 'notCompleted' && !questCompletionStatus[quest.title]);
        const searchMatch = quest.title.toLowerCase().includes(searchInput);
        return difficultyMatch && membersMatch && questPointsMatch && completionMatch && searchMatch;
    });

    filteredQuests.slice((currentPage - 1) * questsPerPage, currentPage * questsPerPage).forEach(quest => createQuestCard(questListElement, quest));
    updatePaginationControls(filteredQuests.length);
};

const updatePaginationControls = (totalQuests) => {
    const totalPages = Math.ceil(totalQuests / questsPerPage);
    const pageInfo = document.querySelector('#pageInfo');
    const prevButton = document.querySelector('#prevPage');
    const nextPage = document.querySelector('#nextPage');

    pageInfo.textContent = `Page ${currentPage} of ${totalPages}`;
    prevButton.disabled = currentPage === 1;
    nextPage.disabled = currentPage === totalPages || totalPages === 0;
};

// Create and Display Each Quest Card
const createQuestCard = (questListElement, quest) => {
    const colDiv = document.createElement('div');
    colDiv.className = 'col-lg-4 col-md-6 mb-4';

    const card = document.createElement('div');
    card.className = 'card h-100';
    initializeQuestCard(card, quest);

    const cardBody = document.createElement('div');
    cardBody.className = 'card-body';

    const questTitleText = document.createElement('h5');
    questTitleText.className = 'card-title';
    questTitleText.textContent = quest.title;

    const questDetails = document.createElement('p');
    questDetails.className = 'card-text';
    questDetails.innerHTML = `Difficulty: ${quest.difficulty}<br>Members: ${quest.members ? 'Yes' : 'No'}<br>Quest Points: ${quest.questPoints}`;

    const guideButton = createGuideButton(quest);
    const buttonContainer = document.createElement('div');
    buttonContainer.className = 'd-flex align-items-center';
    buttonContainer.appendChild(guideButton);

    cardBody.appendChild(questTitleText);
    cardBody.appendChild(questDetails);
    cardBody.appendChild(buttonContainer);
    card.appendChild(cardBody);
    colDiv.appendChild(card);
    questListElement.appendChild(colDiv);

    handleQuestCardClick(card, quest);
};

// Create Guide Button for Each Quest
const createGuideButton = (quest) => {
    const guideButton = document.createElement('button');
    guideButton.className = 'btn btn-primary mt-2';
    guideButton.textContent = " Link to Guide";

    // Creating and appending the icon to the button
    const icon = document.createElement('img');
    icon.src = 'images/quest_icon.webp';
    icon.alt = 'Link Icon';
    icon.style.width = '20px';
    icon.style.marginRight = '5px';

    guideButton.prepend(icon);

    guideButton.addEventListener('click', function(event) {
        event.stopPropagation();
        window.open(generateQuestGuideURL(quest.title), '_blank');
    });

    return guideButton;
};


    handleFilterChange();
    handlePagination();
    updateQuestList();
