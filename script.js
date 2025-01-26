// Function to save memory to local storage
function saveMemory(topic, details) {
  const memories = JSON.parse(localStorage.getItem('memories')) || [];
  const newMemory = { topic, details, date: new Date().toLocaleString() };
  memories.push(newMemory);
  localStorage.setItem('memories', JSON.stringify(memories));
}

// Function to load memories from local storage
function loadMemories() {
  const memories = JSON.parse(localStorage.getItem('memories')) || [];
  const memoryContainer = document.getElementById('memories');
  memoryContainer.innerHTML = '';
  memories.forEach(memory => {
    const memoryDiv = document.createElement('div');
    memoryDiv.className = 'memory';
    memoryDiv.innerHTML = `
      <h3>${memory.topic}</h3>
      <small>${memory.date}</small>
      <p>${memory.details}</p>
    `;
    memoryContainer.appendChild(memoryDiv);
  });
}

// Handle form submission
document.getElementById('memoryForm').addEventListener('submit', function (e) {
  e.preventDefault();
  const topic = document.getElementById('topic').value;
  const details = document.getElementById('details').value;

  if (topic && details) {
    saveMemory(topic, details);
    loadMemories();

    // Clear form
    document.getElementById('topic').value = '';
    document.getElementById('details').value = '';
  }
});

// Load memories on page load
loadMemories();
