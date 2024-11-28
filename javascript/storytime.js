// Story Data (You can expand or replace these with more stories)
const stories = {
    1: {
        title: "The Lion and the Mouse",
        content: "Once upon a time, a lion was sleeping in the forest when a little mouse accidentally ran over his paw. The lion woke up and grabbed the mouse. The mouse begged the lion to let him go, and the lion, feeling kind, let the mouse go. Later, the lion was caught in a hunter’s net, and the mouse heard him. The mouse chewed the ropes and freed the lion. The lion thanked the mouse and promised to always remember his kindness."
    },
    2: {
        title: "The Tortoise and the Hare",
        content: "Once upon a time, there was a hare who was very proud of how fast he could run. He challenged a tortoise to a race, and the tortoise agreed. The hare raced ahead and, feeling confident, took a nap. The tortoise kept going at a steady pace and passed the sleeping hare. When the hare woke up, it was too late – the tortoise had already crossed the finish line. The moral of the story: Slow and steady wins the race."
    },
    3: {
        title: "The Boy Who Cried Wolf",
        content: "There once was a boy who was hired to watch over a flock of sheep. He decided to trick the villagers by crying out that a wolf was attacking the sheep, even though there was no wolf. The villagers rushed to help, only to find out it was a false alarm. The boy laughed at the villagers. Later, when a wolf actually came and the boy cried for help, the villagers didn’t believe him. The wolf attacked the sheep. The moral of the story: Don’t lie, or people will stop believing you."
    }
};

// Function to display the selected story
function displayStory(storyId) {
    const story = stories[storyId];
    const storyContent = document.getElementById("story-content");

    storyContent.innerHTML = `
        <h3>${story.title}</h3>
        <p>${story.content}</p>
    `;
}

// Event listener for story titles
const storyTitles = document.querySelectorAll(".story-title");
storyTitles.forEach(title => {
    title.addEventListener("click", () => {
        const storyId = title.getAttribute("data-id");
        displayStory(storyId);
    });
});
