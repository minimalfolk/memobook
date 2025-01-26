const memoryForm = document.getElementById('memory-form');
const memoriesContainer = document.getElementById('memories');

// Get memories from localStorage or initialize an empty array
let memories = JSON.parse(localStorage.getItem('memories')) || [];

// Function to render memories
function renderMemories() {
  memoriesContainer.innerHTML = '';
  memories.forEach((memory, index) => {
    const memoryCard = document.createElement('div');
    memoryCard.classList.add('memory-card');
    memoryCard.innerHTML = `
      <h3>${memory.topic}</h3>
      <p><strong>Category:</strong> ${memory.category}</p>
      <p><strong>Details:</strong> ${memory.details}</p>
      <p><strong>Tag:</strong> ${memory.tag ? memory.tag : 'N/A'}</p>
    `;
    memoriesContainer.appendChild(memoryCard);
  });
}

// Handle form submission
memoryForm.addEventListener('submit', (e) => {
  e.preventDefault();

  // Get values from the form
  const category = document.getElementById('memory-category').value;
  const topic = document.getElementById('memory-topic').value;
  const details = document.getElementById('memory-details').value;
  const tag = document.getElementById('memory-tag').value;

  // Create a new memory object
  const newMemory = {
    category,
    topic,
    details,
    tag
  };

  // Add new memory to the array
  memories.push(newMemory);

  // Save the updated memories array to localStorage
  localStorage.setItem('memories', JSON.stringify(memories));

  // Clear the form
  memoryForm.reset();

  // Re-render the memories
  renderMemories();
});

// Render memories on page load
renderMemories();
