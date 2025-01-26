let memories = JSON.parse(localStorage.getItem('memories')) || [];

function renderMemories() {
  const memoryContainer = document.getElementById('memories');
  memoryContainer.innerHTML = '';
  
  memories.forEach((memory, index) => {
    const memoryDiv = document.createElement('div');
    memoryDiv.className = 'memory';
    memoryDiv.innerHTML = `
      <p><strong>Category:</strong> ${memory.category}</p>
      <p><strong>Date:</strong> ${memory.date}</p>
      <p><strong>Topic:</strong> ${memory.topic}</p>
      <p>${memory.details}</p>
      <p><strong>Tag:</strong> ${memory.tag || 'N/A'}</p>
      <button onclick="editMemory(${index})">Edit</button>
      <button onclick="deleteMemory(${index})">Delete</button>
      <button onclick="toggleFavorite(${index})">
        ${memory.favorite ? 'Unfavorite' : 'Favorite'}
      </button>
    `;
    memoryContainer.appendChild(memoryDiv);
  });
}

function saveMemory(memory) {
  memories.push(memory);
  localStorage.setItem('memories', JSON.stringify(memories));
  renderMemories();
}

document.getElementById('memoryForm').addEventListener('submit', function (e) {
  e.preventDefault();
  
  const category = document.getElementById('category').value;
  const topic = document.getElementById('topic').value;
  const details = document.getElementById('details').value;
  const tag = document.getElementById('tag').value;
  
  const memory = {
    category,
    topic,
    details,
    tag,
    date: new Date().toLocaleString(),
    favorite: false,
  };

  saveMemory(memory);
  this.reset();
});

renderMemories();
