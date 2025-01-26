document.getElementById('memoryForm').addEventListener('submit', async function (e) {
  e.preventDefault();

  const memoryText = document.getElementById('memoryText').value;

  if (!memoryText) return;

  // Post memory to the server
  await fetch('/add-memory', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ memory: memoryText }),
  });

  // Fetch updated memories
  loadMemories();

  // Clear textarea
  document.getElementById('memoryText').value = '';
});

async function loadMemories() {
  const res = await fetch('/get-memories');
  const data = await res.json();

  const memoryContainer = document.getElementById('memories');
  memoryContainer.innerHTML = '';

  data.memories.forEach(memory => {
    const memoryDiv = document.createElement('div');
    memoryDiv.className = 'memory';
    memoryDiv.textContent = memory;
    memoryContainer.appendChild(memoryDiv);
  });
}

// Load memories on page load
loadMemories();
