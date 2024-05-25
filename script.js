document.addEventListener("DOMContentLoaded", function() {
    // Set a timeout to simulate loading
    setTimeout(function() {
        document.getElementById('loading-screen').style.display = 'none';
        document.getElementById('content').style.display = 'block';
        document.body.style.backgroundColor = 'rgb(124, 253, 91)';
    }, 3000); // Adjust the delay as needed (3000ms = 3 seconds)

    const apps = document.querySelectorAll('.app-item');
    const sections = document.querySelectorAll('section[id]');
    const backButtonAboutMe = document.getElementById('back-button-about-me');
    const backButtonProjects = document.getElementById('back-button-projects');
    const backButtonTerminal = document.getElementById('back-button-terminal');
    const backButtonGames = document.getElementById('back-button-games');
    const mainDesktop = document.getElementById('main-desktop');
    const appsSection = document.getElementById('apps');

    apps.forEach(app => {
        app.addEventListener('click', () => {
            const target = app.getAttribute('data-target');
            showSection(target);
        });
    });

    backButtonAboutMe.addEventListener('click', () => {
        hideAllSections();
        mainDesktop.style.display = 'block';
        appsSection.style.display = 'flex'; // Show the apps section
    });

    backButtonProjects.addEventListener('click', () => {
        hideAllSections();
        mainDesktop.style.display = 'block';
        appsSection.style.display = 'flex'; // Show the apps section
    });

    backButtonTerminal.addEventListener('click', () => {
        hideAllSections();
        mainDesktop.style.display = 'block';
        appsSection.style.display = 'flex'; // Show the apps section
    });


    backButtonGames.addEventListener('click', () => {
        hideAllSections();
        mainDesktop.style.display = 'block';
        appsSection.style.display = 'flex'; // Show the apps section
    });

    function showSection(sectionId) {
        hideAllSections();
        const section = document.getElementById(sectionId);
        if (section) {
            section.style.display = 'block';
        }
    }

    function hideAllSections() {
        sections.forEach(section => {
            section.style.display = 'none';
        });
    }
});







const userInput = document.getElementById('userInput');
const outputDiv = document.querySelector('.output');
const cursor = document.querySelector('.cursor');

let currentInput = '';
let isCommandRunning = false; // Flag to prevent multiple commands at once

document.addEventListener('keydown', (event) => {
  if (isCommandRunning) return; // Prevent input while a command is running

  if (event.key === 'Enter') {
    const command = currentInput.trim();
    currentInput = '';

    if (command) {
      isCommandRunning = true;
      processCommand(command);
    } else {
      // Handle empty input (e.g., just pressing Enter)
      outputDiv.innerHTML += '<br>';
      outputDiv.scrollTop = outputDiv.scrollHeight;
    }
  } else if (event.key === 'Backspace') {
    if (currentInput.length > 0) {
      currentInput = currentInput.substring(0, currentInput.length - 1);
      userInput.textContent = currentInput;
    }
  } else if (event.key.length === 1 && event.ctrlKey !== true && event.metaKey !== true) {
    // Allow typing printable characters
    currentInput += event.key;
    userInput.textContent = currentInput;
  }

  // Update cursor position on every key press
  cursor.style.left = `${userInput.clientWidth}px`;
});

// Update cursor position on every key press
cursor.style.left = `${userInput.clientWidth}px`;

function processCommand(command) {
  let response;
  switch (command.toLowerCase()) {
    case 'about':
      response = '<p>Name: Jeevan Naidu</p><p>First Year Btech CSE</p><p>I\'m a tech student with a burning curiosity for both the present and the past. While I\'m deeply engrossed in the ever-evolving world of technology, my heart holds a special place for the rich treasure of ancient Bharatiya science, literature, and art. From the strategic genius of Arthashastra to the celestial insights of Surya Siddhanta, and the profound philosophies of Advaita and Dvaita Vedanta, these ancient treasures continue to inspire and illuminate.My fascination extends beyond mere knowledge. I see immense potential in bridging the gap between these seemingly disparate fields. I believe that by understanding the wisdom of our ancestors, we can fuel innovation in the present and create a future that is both technologically advanced and deeply rooted in our cultural heritage.</p>';
      break;
    case 'contact me':
      response = getContactInfo();
      break;
    case 'help':
        response = 'Available commands: about, contact me, clear, exit';
        break;      
    case 'exit':
            // Simulate back button click
            const backButton = document.getElementById('back-button-terminal'); // Updated ID
            if (backButton) {
              try {
                backButton.click();
              } catch (error) {
                console.error('Error triggering back button click:', error);
                response = 'Error simulating back button click.';
              }
            } else {
              response = 'Back button element not found.';
            }
        break;
    case 'clear':
      outputDiv.textContent = 'Welcome! Type "help" for a list of commands. Or try "about".';
      break;
    default:
      response = `Command '${command}' Not Found.`;
      outputDiv.innerHTML += `<br><span class="error">${response}</span>`;
  }

  function handleBackButton() {
    hideAllSections(); // Assuming this function hides all sections
    mainDesktop.style.display = 'block';
    appsSection.style.display = 'flex'; // Show the apps section
  }
  
  // Add event listener to the back button (if necessary)
  const backButton = document.getElementById('back-button-terminal');
  if (backButton) {
    backButton.addEventListener('click', handleBackButton);
  } else {
    console.error('Back button element not found.');
  }
  

  // Display command even for errors
  outputDiv.innerHTML += `<br>#${command}<br>${response}`;
  outputDiv.scrollTop = outputDiv.scrollHeight;

  setTimeout(() => {
    isCommandRunning = false;
  }, 1000); // Delay to simulate command execution time
}


  function getContactInfo() {
    let name = prompt('Enter your name:');
    let email = prompt('Enter your email address:');
    let message = prompt('Enter your message:');
  
    if (name && email && message) {
      return `Thank you, ${name}! We will contact you soon at ${email}. Your message: ${message}`;
    } else {
      return 'Please fill in all fields.';
    }
  }


  let initialHeight = window.innerHeight;
  let initialWidth = window.innerWidth;

  // Function to check and update overflow based on window resize
  function checkOverflow() {
      // Get the current width of the window
      let currentHeight = window.innerHeight;
      let currentWidth = window.innerWidth;
  
      // Check if the current width is less than 95% of the initial width
      if (currentHeight < initialHeight * 0.95 || currentWidth < initialWidth * 0.95) {
          // If true, set overflow to 'scroll'
          document.body.style.overflow = 'scroll';
      } else {
          // Otherwise, set overflow to 'hidden'
          document.body.style.overflow = 'hidden';
      }
  }
  
  // Call the checkOverflow function initially
  checkOverflow();
  
  // Add a resize event listener to check for resize
  window.addEventListener('resize', function() {
      // Call the checkOverflow function on resize
      checkOverflow();
  });

  const elementsWithCustomCursor = document.querySelectorAll('.menu, pre, #back-button-about-me');
        elementsWithCustomCursor.forEach(element => {
            element.classList.add('custom-cursor');
        });

// scripts.js

function openModal(element) {
  var modal = document.getElementById('projectModal');
  var modalImage = document.getElementById('modalImage');
  var modalTitle = document.getElementById('modalTitle');
  var modalDescription = document.getElementById('modalDescription');
  var modalTitleHeader = document.getElementById('modalTitleHeader');

  var title = element.parentElement.getAttribute('data-title');
  var description = element.parentElement.getAttribute('data-description');
  var image = element.src;

  modalImage.src = image;
  modalImage.style.width = "200px"; // Set image width
  modalImage.style.height = "200px"; // Set image height
  modalTitle.innerText = title;
  modalDescription.innerText = description;
  modalTitleHeader.innerText = title;

  // Display the modal
  modal.style.display = "flex"; // Use flexbox for centering
  modal.style.justifyContent = "center"; // Center horizontally
  modal.style.alignItems = "center"; // Center vertically

  // Ensure the modal is scrolled to the top when opened
  modal.scrollTop = 0;
}

function closeModal() {
  var modal = document.getElementById('projectModal');
  modal.style.display = "none"; // Hide the modal
}

window.onclick = function(event) {
  var modal = document.getElementById('projectModal');
  if (event.target == modal) {
      closeModal(); // Close the modal if clicked outside of it
  }
}

