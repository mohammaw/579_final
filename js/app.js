document.addEventListener("DOMContentLoaded", function() {


const quest_defualt = {
    "members": "true",
    "questPoints": "2",
}
    const questData = {
            "quests": [
                {
                 "title": "Zogre Flesh Eaters",
                 "difficulty": "Intermediate",
                 "members": true,
                 "questPoints": 1
                },
                {
                 "title": "Witch's House",
                 "difficulty": "Intermediate",
                 "members": true,
                 "questPoints": 4
                },
                {
                 "title": "What Lies Below",
                 "difficulty": "Intermediate",
                 "members": true,
                 "questPoints": 1
                },
                {
                 "title": "Waterfall Quest",
                 "difficulty": "Intermediate",
                 "members": true,
                 "questPoints": 1
                },
                {
                 "title": "Watchtower",
                 "difficulty": "Intermediate",
                 "members": true,
                 "questPoints": 4
                },
                {
                 "title": "Wanted!",
                 "difficulty": "Intermediate",
                 "members": true,
                 "questPoints": 1
                },
                {
                 "title": "Underground Pass",
                 "difficulty": "Experienced",
                 "members": true,
                 "questPoints": 5
                },
                {
                 "title": "Troll Stronghold",
                 "difficulty": "Intermediate",
                 "members": true,
                 "questPoints": 1
                },
                {
                 "title": "Troll Romance",
                 "difficulty": "Intermediate",
                 "members": true,
                 "questPoints": 2
                },
                {
                 "title": "Tribal Totem",
                 "difficulty": "Intermediate",
                 "members": true,
                 "questPoints": 1
                },
                {
                 "title": "Tree Gnome Village",
                 "difficulty": "Intermediate",
                 "members": true,
                 "questPoints": 2
                },
                {
                 "title": "Tower of Life",
                 "difficulty": "Novice",
                 "members": true,
                 "questPoints": 2
                },
                {
                 "title": "The Tourist Trap",
                 "difficulty": "Intermediate",
                 "members": true,
                 "questPoints": 2
                },
                {
                 "title": "Throne of Miscellania",
                 "difficulty": "Experienced",
                 "members": true,
                 "questPoints": 1
                },
                {
                 "title": "Temple of the Eye",
                 "difficulty": "Intermediate",
                 "members": true,
                 "questPoints": 1
                },
                {
                 "title": "Temple of Ikov",
                 "difficulty": "Intermediate",
                 "members": true,
                 "questPoints": 1
                },
                {
                 "title": "Tears of Guthix",
                 "difficulty": "Intermediate",
                 "members": true,
                 "questPoints": 1
                },
                {
                 "title": "A Taste of Hope",
                 "difficulty": "Experienced",
                 "members": true,
                 "questPoints": 1
                },
                {
                 "title": "Tale of the Righteous",
                 "difficulty": "Intermediate",
                 "members": true,
                 "questPoints": 1
                },
                {
                 "title": "A Tail of Two Cats ",
                 "difficulty": "Intermediate",
                 "members": true,
                 "questPoints": 2
                },
                {
                 "title": "Tai Bwo Wannai Trio",
                 "difficulty": "Intermediate",
                 "members": true,
                 "questPoints": 2
                },
                {
                 "title": "Swan Song",
                 "difficulty": "Master",
                 "members": true,
                 "questPoints": 2
                },
                {
                 "title": "Spirits of the Elid",
                 "difficulty": "Intermediate",
                 "members": true,
                 "questPoints": 2
                },
                {
                 "title": "A Soul's Bane",
                 "difficulty": "Intermediate",
                 "members": true,
                 "questPoints": 1
                },
                {
                 "title": "Song of the Elves",
                 "difficulty": "Grandmaster",
                 "members": true,
                 "questPoints": 4
                },
                {
                 "title": "The Slug Menace",
                 "difficulty": "Intermediate",
                 "members": true,
                 "questPoints": 1
                },
                {
                 "title": "Sleeping Giants",
                 "difficulty": "Intermediate",
                 "members": true,
                 "questPoints": 1
                },
                {
                 "title": "Sins of the Father",
                 "difficulty": "Master",
                 "members": true,
                 "questPoints": 2
                },
                {
                 "title": "Shilo Village",
                 "difficulty": "Intermediate",
                 "members": true,
                 "questPoints": 2
                },
                {
                 "title": "Sheep Herder",
                 "difficulty": "Novice",
                 "members": true,
                 "questPoints": 4
                },
                {
                 "title": "Shadow of the Storm",
                 "difficulty": "Intermediate",
                 "members": true,
                 "questPoints": 1
                },
                {
                 "title": "Shades of Mort'ton",
                 "difficulty": "Intermediate",
                 "members": true,
                 "questPoints": 3
                },
                {
                 "title": "Secrets of the North",
                 "difficulty": "Master",
                 "members": true,
                 "questPoints": 2
                },
                {
                 "title": "Sea Slug",
                 "difficulty": "Intermediate",
                 "members": true,
                 "questPoints": 1
                },
                {
                 "title": "Scorpion Catcher",
                 "difficulty": "Intermediate",
                 "members": true,
                 "questPoints": 1
                },
                {
                 "title": "Rum Deal",
                 "difficulty": "Experienced",
                 "members": true,
                 "questPoints": 2
                },
                {
                 "title": "Royal Trouble",
                 "difficulty": "Experienced",
                 "members": true,
                 "questPoints": 1
                },
                {
                 "title": "Roving Elves",
                 "difficulty": "Experienced",
                 "members": true,
                 "questPoints": 1
                },
                {
                 "title": "Regicide",
                 "difficulty": "Experienced",
                 "members": true,
                 "questPoints": 3
                },
                {
                 "title": "Recruitment Drive",
                 "difficulty": "Novice",
                 "members": true,
                 "questPoints": 1
                },
                {
                 "title": "Recipe for Disaster",
                 "difficulty": "Grandmaster",
                 "members": true,
                 "questPoints": 10
                },
                {
                 "title": "Ratcatchers",
                 "difficulty": "Intermediate",
                 "members": true,
                 "questPoints": 2
                },
                {
                 "title": "Rag and Bone Man II",
                 "difficulty": "Experienced",
                 "members": true,
                 "questPoints": 1
                },
                {
                 "title": "Rag and Bone Man I",
                 "difficulty": "Novice",
                 "members": true,
                 "questPoints": 1
                },
                {
                 "title": "The Queen of Thieves",
                 "difficulty": "Intermediate",
                 "members": true,
                 "questPoints": 1
                },
                {
                 "title": "Priest in Peril",
                 "difficulty": "Novice",
                 "members": true,
                 "questPoints": 1
                },
                {
                 "title": "A Porcine of Interest",
                 "difficulty": "Novice",
                 "members": true,
                 "questPoints": 1
                },
                {
                 "title": "Plague City",
                 "difficulty": "Novice",
                 "members": true,
                 "questPoints": 1
                },
                {
                 "title": "The Path of Glouphrie",
                 "difficulty": "Experienced",
                 "members": true,
                 "questPoints": 2
                },
                {
                 "title": "One Small Favour",
                 "difficulty": "Experienced",
                 "members": true,
                 "questPoints": 2
                },
                {
                 "title": "Olaf's Quest",
                 "difficulty": "Intermediate",
                 "members": true,
                 "questPoints": 1
                },
                {
                 "title": "Observatory Quest",
                 "difficulty": "Intermediate",
                 "members": true,
                 "questPoints": 2
                },
                {
                 "title": "A Night at the Theatre",
                 "difficulty": "Master",
                 "members": true,
                 "questPoints": 2
                },
                {
                 "title": "Nature Spirit",
                 "difficulty": "Intermediate",
                 "members": true,
                 "questPoints": 2
                },
                {
                 "title": "My Arm's Big Adventure",
                 "difficulty": "Experienced",
                 "members": true,
                 "questPoints": 1
                },
                {
                 "title": "Murder Mystery",
                 "difficulty": "Novice",
                 "members": true,
                 "questPoints": 3
                },
                {
                 "title": "Mourning's End Part II",
                 "difficulty": "Master",
                 "members": true,
                 "questPoints": 2
                },
                {
                 "title": "Mourning's End Part I",
                 "difficulty": "Master",
                 "members": true,
                 "questPoints": 2
                },
                {
                 "title": "Mountain Daughter",
                 "difficulty": "Intermediate",
                 "members": true,
                 "questPoints": 2
                },
                {
                 "title": "Monkey Madness II",
                 "difficulty": "Grandmaster",
                 "members": true,
                 "questPoints": 4
                },
                {
                 "title": "Monkey Madness I",
                 "difficulty": "Master",
                 "members": true,
                 "questPoints": 3
                },
                {
                 "title": "Monk's Friend",
                 "difficulty": "Novice",
                 "members": true,
                 "questPoints": 1
                },
                {
                 "title": "Merlin's Crystal",
                 "difficulty": "Intermediate",
                 "members": true,
                 "questPoints": 6
                },
                {
                 "title": "Making History",
                 "difficulty": "Intermediate",
                 "members": true,
                 "questPoints": 3
                },
                {
                 "title": "Making Friends with My Arm",
                 "difficulty": "Master",
                 "members": true,
                 "questPoints": 2
                },
                {
                 "title": "Lunar Diplomacy",
                 "difficulty": "Experienced",
                 "members": true,
                 "questPoints": 2
                },
                {
                 "title": "The Lost Tribe",
                 "difficulty": "Intermediate",
                 "members": true,
                 "questPoints": 1
                },
                {
                 "title": "Lost City",
                 "difficulty": "Intermediate",
                 "members": true,
                 "questPoints": 3
                },
                {
                 "title": "Legends' Quest",
                 "difficulty": "Master",
                 "members": true,
                 "questPoints": 4
                },
                {
                 "title": "Land of the Goblins",
                 "difficulty": "Experienced",
                 "members": true,
                 "questPoints": 2
                },
                {
                 "title": "A Kingdom Divided",
                 "difficulty": "Experienced",
                 "members": true,
                 "questPoints": 2
                },
                {
                 "title": "King's Ransom",
                 "difficulty": "Experienced",
                 "members": true,
                 "questPoints": 1
                },
                {
                 "title": "Jungle Potion",
                 "difficulty": "Novice",
                 "members": true,
                 "questPoints": 1
                },
                {
                 "title": "In Search of the Myreque",
                 "difficulty": "Intermediate",
                 "members": true,
                 "questPoints": 2
                },
                {
                 "title": "In Aid of the Myreque",
                 "difficulty": "Intermediate",
                 "members": true,
                 "questPoints": 2
                },
                {
                 "title": "Icthlarin's Little Helper",
                 "difficulty": "Intermediate",
                 "members": true,
                 "questPoints": 2
                },
                {
                 "title": "Horror from the Deep",
                 "difficulty": "Intermediate",
                 "members": true,
                 "questPoints": 2
                },
                {
                 "title": "Holy Grail",
                 "difficulty": "Intermediate",
                 "members": true,
                 "questPoints": 2
                },
                {
                 "title": "Heroes' Quest",
                 "difficulty": "Experienced",
                 "members": true,
                 "questPoints": 1
                },
                {
                 "title": "Hazeel Cult",
                 "difficulty": "Novice",
                 "members": true,
                 "questPoints": 1
                },
                {
                 "title": "Haunted Mine",
                 "difficulty": "Experienced",
                 "members": true,
                 "questPoints": 2
                },
                {
                 "title": "The Hand in the Sand",
                 "difficulty": "Intermediate",
                 "members": true,
                 "questPoints": 1
                },
                {
                 "title": "Grim Tales",
                 "difficulty": "Master",
                 "members": true,
                 "questPoints": 1
                },
                {
                 "title": "The Great Brain Robbery",
                 "difficulty": "Experienced",
                 "members": true,
                 "questPoints": 2
                },
                {
                 "title": "The Grand Tree",
                 "difficulty": "Intermediate",
                 "members": true,
                 "questPoints": 5
                },
                {
                 "title": "The Golem",
                 "difficulty": "Intermediate",
                 "members": true,
                 "questPoints": 1
                },
                {
                 "title": "The Giant Dwarf",
                 "difficulty": "Intermediate",
                 "members": true,
                 "questPoints": 2
                },
                {
                 "title": "Ghosts Ahoy",
                 "difficulty": "Intermediate",
                 "members": true,
                 "questPoints": 2
                },
                {
                 "title": "Getting Ahead",
                 "difficulty": "Intermediate",
                 "members": true,
                 "questPoints": 1
                },
                {
                 "title": "Gertrude's Cat",
                 "difficulty": "Novice",
                 "members": true,
                 "questPoints": 1
                },
                {
                 "title": "Garden of Tranquillity",
                 "difficulty": "Intermediate",
                 "members": true,
                 "questPoints": 2
                },
                {
                 "title": "The Garden of Death",
                 "difficulty": "Intermediate",
                 "members": true,
                 "questPoints": 1
                },
                {
                 "title": "The Fremennik Trials",
                 "difficulty": "Intermediate",
                 "members": true,
                 "questPoints": 3
                },
                {
                 "title": "The Fremennik Isles",
                 "difficulty": "Experienced",
                 "members": true,
                 "questPoints": 1
                },
                {
                 "title": "The Fremennik Exiles",
                 "difficulty": "Master",
                 "members": true,
                 "questPoints": 2
                },
                {
                 "title": "The Forsaken Tower",
                 "difficulty": "Intermediate",
                 "members": true,
                 "questPoints": 1
                },
                {
                 "title": "Forgettable Tale...",
                 "difficulty": "Intermediate",
                 "members": true,
                 "questPoints": 2
                },
                {
                 "title": "Fishing Contest",
                 "difficulty": "Novice",
                 "members": true,
                 "questPoints": 1
                },
                {
                 "title": "Fight Arena",
                 "difficulty": "Intermediate",
                 "members": true,
                 "questPoints": 2
                },
                {
                 "title": "The Feud",
                 "difficulty": "Intermediate",
                 "members": true,
                 "questPoints": 1
                },
                {
                 "title": "Family Crest",
                 "difficulty": "Experienced",
                 "members": true,
                 "questPoints": 1
                },
                {
                 "title": "Fairytale II - Cure a Queen",
                 "difficulty": "Experienced",
                 "members": true,
                 "questPoints": 2
                },
                {
                 "title": "Fairytale I - Growing Pains",
                 "difficulty": "Intermediate",
                 "members": true,
                 "questPoints": 2
                },
                {
                 "title": "The Eyes of Glouphrie",
                 "difficulty": "Intermediate",
                 "members": true,
                 "questPoints": 2
                },
                {
                 "title": "Enlightened Journey",
                 "difficulty": "Intermediate",
                 "members": true,
                 "questPoints": 1
                },
                {
                 "title": "Enakhra's Lament",
                 "difficulty": "Experienced",
                 "members": true,
                 "questPoints": 2
                },
                {
                 "title": "Elemental Workshop II",
                 "difficulty": "Intermediate",
                 "members": true,
                 "questPoints": 1
                },
                {
                 "title": "Elemental Workshop I",
                 "difficulty": "Novice",
                 "members": true,
                 "questPoints": 1
                },
                {
                 "title": "Eagles' Peak",
                 "difficulty": "Novice",
                 "members": true,
                 "questPoints": 2
                },
                {
                 "title": "Eadgar's Ruse",
                 "difficulty": "Intermediate",
                 "members": true,
                 "questPoints": 1
                },
                {
                 "title": "Dwarf Cannon",
                 "difficulty": "Novice",
                 "members": true,
                 "questPoints": 1
                },
                {
                 "title": "Druidic Ritual",
                 "difficulty": "Novice",
                 "members": true,
                 "questPoints": 4
                },
                {
                 "title": "Dream Mentor",
                 "difficulty": "Master",
                 "members": true,
                 "questPoints": 2
                },
                {
                 "title": "Dragon Slayer II",
                 "difficulty": "Grandmaster",
                 "members": true,
                 "questPoints": 5
                },
                {
                 "title": "The Dig Site",
                 "difficulty": "Intermediate",
                 "members": true,
                 "questPoints": 2
                },
                {
                 "title": "Devious Minds",
                 "difficulty": "Experienced",
                 "members": true,
                 "questPoints": 1
                },
                {
                 "title": "Desert Treasure II - The Fallen Empire",
                 "difficulty": "Grandmaster",
                 "members": true,
                 "questPoints": 5
                },
                {
                 "title": "Desert Treasure I",
                 "difficulty": "Master",
                 "members": true,
                 "questPoints": 3
                },
                {
                 "title": "The Depths of Despair",
                 "difficulty": "Intermediate",
                 "members": true,
                 "questPoints": 1
                },
                {
                 "title": "Defender of Varrock",
                 "difficulty": "Experienced",
                 "members": true,
                 "questPoints": 2
                },
                {
                 "title": "Death to the Dorgeshuun",
                 "difficulty": "Intermediate",
                 "members": true,
                 "questPoints": 1
                },
                {
                 "title": "Death Plateau",
                 "difficulty": "Novice",
                 "members": true,
                 "questPoints": 1
                },
                {
                 "title": "Darkness of Hallowvale",
                 "difficulty": "Experienced",
                 "members": true,
                 "questPoints": 2
                },
                {
                 "title": "Creature of Fenkenstrain",
                 "difficulty": "Intermediate",
                 "members": true,
                 "questPoints": 2
                },
                {
                 "title": "Contact!",
                 "difficulty": "Experienced",
                 "members": true,
                 "questPoints": 1
                },
                {
                 "title": "Cold War",
                 "difficulty": "Intermediate",
                 "members": true,
                 "questPoints": 1
                },
                {
                 "title": "Clock Tower",
                 "difficulty": "Novice",
                 "members": true,
                 "questPoints": 1
                },
                {
                 "title": "Client of Kourend",
                 "difficulty": "Novice",
                 "members": true,
                 "questPoints": 1
                },
                {
                 "title": "Children of the Sun",
                 "difficulty": "Novice",
                 "members": true,
                 "questPoints": 1
                },
                {
                 "title": "Cabin Fever",
                 "difficulty": "Experienced",
                 "members": true,
                 "questPoints": 2
                },
                {
                 "title": "Bone Voyage",
                 "difficulty": "Intermediate",
                 "members": true,
                 "questPoints": 1
                },
                {
                 "title": "Biohazard",
                 "difficulty": "Novice",
                 "members": true,
                 "questPoints": 3
                },
                {
                 "title": "Big Chompy Bird Hunting",
                 "difficulty": "Intermediate",
                 "members": true,
                 "questPoints": 2
                },
                {
                 "title": "Between a Rock...",
                 "difficulty": "Experienced",
                 "members": true,
                 "questPoints": 2
                },
                {
                 "title": "Beneath Cursed Sands",
                 "difficulty": "Master",
                 "members": true,
                 "questPoints": 2
                },
                {
                 "title": "The Ascent of Arceuus",
                 "difficulty": "Intermediate",
                 "members": true,
                 "questPoints": 1
                },
                {
                 "title": "Another Slice of H.A.M.",
                 "difficulty": "Intermediate",
                 "members": true,
                 "questPoints": 1
                },
                {
                 "title": "Animal Magnetism",
                 "difficulty": "Intermediate",
                 "members": true,
                 "questPoints": 1
                },
                {
                 "title": "X Marks the Spot",
                 "difficulty": "Novice",
                 "members": false,
                 "questPoints": 1
                },
                {
                 "title": "Witch's Potion",
                 "difficulty": "Novice",
                 "members": false,
                 "questPoints": 1
                },
                {
                 "title": "Vampyre Slayer",
                 "difficulty": "Intermediate",
                 "members": false,
                 "questPoints": 3
                },
                {
                 "title": "Shield of Arrav",
                 "difficulty": "Novice",
                 "members": false,
                 "questPoints": 1
                },
                {
                 "title": "Sheep Shearer",
                 "difficulty": "Novice",
                 "members": false,
                 "questPoints": 1
                },
                {
                 "title": "Rune Mysteries",
                 "difficulty": "Novice",
                 "members": false,
                 "questPoints": 1
                },
                {
                 "title": "Romeo & Juliet",
                 "difficulty": "Novice",
                 "members": false,
                 "questPoints": 5
                },
                {
                 "title": "The Restless Ghost",
                 "difficulty": "Novice",
                 "members": false,
                 "questPoints": 1
                },
                {
                 "title": "Prince Ali Rescue",
                 "difficulty": "Novice",
                 "members": false,
                 "questPoints": 3
                },
                {
                 "title": "Pirate's Treasure",
                 "difficulty": "Novice",
                 "members": false,
                 "questPoints": 2
                },
                {
                 "title": "Misthalin Mystery",
                 "difficulty": "Novice",
                 "members": false,
                 "questPoints": 1
                },
                {
                 "title": "The Knight's Sword",
                 "difficulty": "Intermediate",
                 "members": false,
                 "questPoints": 1
                },
                {
                 "title": "Imp Catcher",
                 "difficulty": "Novice",
                 "members": false,
                 "questPoints": 1
                },
                {
                 "title": "Goblin Diplomacy",
                 "difficulty": "Novice",
                 "members": false,
                 "questPoints": 5
                },
                {
                 "title": "Ernest the Chicken",
                 "difficulty": "Novice",
                 "members": false,
                 "questPoints": 4
                },
                {
                 "title": "Dragon Slayer I",
                 "difficulty": "Experienced",
                 "members": false,
                 "questPoints": 2
                },
                {
                 "title": "Doric's Quest",
                 "difficulty": "Novice",
                 "members": false,
                 "questPoints": 1
                },
                {
                 "title": "Demon Slayer",
                 "difficulty": "Novice",
                 "members": false,
                 "questPoints": 3
                },
                {
                 "title": "The Corsair Curse",
                 "difficulty": "Intermediate",
                 "members": false,
                 "questPoints": 2
                },
                {
                 "title": "Cook's Assistant",
                 "difficulty": "Novice",
                 "members": false,
                 "questPoints": 1
                },
                {
                 "title": "Black Knights' Fortress",
                 "difficulty": "Intermediate",
                 "members": false,
                 "questPoints": 3
                },
                {
                 "title": "Below Ice Mountain",
                 "difficulty": "Novice",
                 "members": false,
                 "questPoints": 1
                }
               ]
    };

    const questCompletionStatus = JSON.parse(localStorage.getItem('questCompletionStatus')) || {};

    function updateQuestList() {
        const questListElement = document.getElementById('questList');
        const difficultyFilter = document.getElementById('filterDifficulty').value;
        const membersFilter = document.getElementById('filterMembers').value;
        const questPointsFilter = document.getElementById('filterQuestPoints').value;
        const completionFilter = document.getElementById('filterCompletion').value;

        questListElement.innerHTML = '';

        let filteredQuests = questData.quests.filter(quest => {
            const difficultyMatch = difficultyFilter === 'any' || quest.difficulty === difficultyFilter;
            const membersMatch = membersFilter === 'any' || quest.members.toString() === membersFilter;
            let questPointsMatch = questPointsFilter === 'any' || parseInt(quest.questPoints) === parseInt(questPointsFilter);
            if (questPointsFilter === '5+') {
                questPointsMatch = quest.questPoints >= 5;
            }
            const completionMatch = completionFilter === 'any' || (completionFilter === 'completed' && questCompletionStatus[quest.title]) || (completionFilter === 'notCompleted' && !questCompletionStatus[quest.title]);

            return difficultyMatch && membersMatch && questPointsMatch && completionMatch;
        });

        if (questPointsFilter !== 'any') {
            filteredQuests.sort((a, b) => a.questPoints - b.questPoints);
        }

        filteredQuests.forEach(quest => {
            const listItem = document.createElement('li');
            listItem.classList.add('list-group-item');
            if (questCompletionStatus[quest.title]) {
                listItem.classList.add('list-group-item-success');
            }
            listItem.textContent = `${quest.title} - Difficulty: ${quest.difficulty}, Members: ${quest.members ? 'Yes' : 'No'}, Quest Points: ${quest.questPoints}`;
            listItem.addEventListener('click', function() {
                questCompletionStatus[quest.title] = !questCompletionStatus[quest.title];
                listItem.classList.toggle('list-group-item-success', questCompletionStatus[quest.title]);
                localStorage.setItem('questCompletionStatus', JSON.stringify(questCompletionStatus));
            });

            questListElement.appendChild(listItem);
        });
    }

    document.getElementById('applyFilters').addEventListener('click', updateQuestList);

    updateQuestList();
});