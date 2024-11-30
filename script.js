const chatBox = document.getElementById('chat-box');

// Nama pengirim dan bot
const botName = "Fizzx";
const userName = "You";

// Tampilkan pesan sambutan saat halaman dimuat
window.onload = function () {
  addMessage(`Hello! I'm ${botName}. How can I assist you today?`, 'bot-message');
};

function sendMessage() {
  const userInput = document.getElementById('user-input');
  const message = userInput.value.trim();

  if (message === '') return;

  // Tambahkan pesan pengguna ke chat
  addMessage(`${userName}: ${message}`, 'user-message');

  // Proses respons bot
  const response = getBotResponse(message);
  setTimeout(() => {
    addMessage(`${botName}: ${response}`, 'bot-message');
  }, 500);

  // Bersihkan input field
  userInput.value = '';
}

function addMessage(text, className) {
  const messageElement = document.createElement('div');
  messageElement.className = `message ${className}`;
  messageElement.textContent = text;
  chatBox.appendChild(messageElement);
  chatBox.scrollTop = chatBox.scrollHeight;
}

function getBotResponse(message) {
  const lowerCaseMessage = message.toLowerCase();

  // Array respons
  const responses = [
    { keywords: ['hello', 'hi'], response: 'Hello! How can I assist you today?' },
    { keywords: ['how are you'], response: "I'm doing great! How about you?" },
    { keywords: ['what is your name'], response: 'I am your chatbot assistant.' },
    { keywords: ['bye', 'goodbye'], response: 'Goodbye! Have a wonderful day!' },
    { keywords: ['thank you', 'thanks'], response: "You're welcome!" },
    { keywords: ['time'], response: `The current time is ${new Date().toLocaleTimeString()}.` },
    { keywords: ['date'], response: `Today's date is ${new Date().toLocaleDateString()}.` },
    { keywords: ['weather'], response: 'The weather is looking great today!' },
    { keywords: ['joke'], response: 'Why don’t skeletons fight each other? They don’t have the guts!' },
    { keywords: ['quote'], response: 'Believe in yourself! Every day is a new opportunity.' },
    { keywords: ['love'], response: 'Love is the most beautiful thing in life!' },
    { keywords: ['help'], response: 'Sure! Let me know what you need help with.' },
    { keywords: ['music'], response: 'I love music! Do you have a favorite genre?' },
    { keywords: ['sports'], response: 'I enjoy talking about sports! What is your favorite team?' },
    { keywords: ['movie'], response: 'Movies are awesome! What’s the last movie you watched?' },
    { keywords: ['food'], response: 'I love food too! What’s your favorite dish?' },
    { keywords: ['travel'], response: 'Traveling is so exciting! Where would you like to go?' },
    { keywords: ['book'], response: 'Books are a great source of knowledge! Do you have a favorite book?' },
    { keywords: ['robot'], response: 'Yes, I am a bot! I’m here to assist you.' },
    { keywords: ['programming'], response: 'Programming is fun! What language do you like?' },
    { keywords: ['python'], response: 'Python is a versatile language. Do you want to learn it?' },
    { keywords: ['birthday'], response: 'Happy Birthday! Wishing you a wonderful day!' },
    { keywords: ['holiday'], response: 'Holidays are the best time to relax and recharge!' },
    { keywords: ['family'], response: 'Family is everything. Do you spend a lot of time with yours?' },
    { keywords: ['school'], response: 'School is an important part of life. What’s your favorite subject?' },
    { keywords: ['work'], response: 'Work can be challenging, but rewarding too. What do you do?' },
    { keywords: ['friend'], response: 'Friends make life beautiful. Do you have a best friend?' },
    { keywords: ['hobby'], response: 'Hobbies keep life interesting. What’s yours?' },
    { keywords: ['dream'], response: 'Dream big! What is your dream in life?' },
    { keywords: ['funny'], response: 'Humor is the spice of life! Tell me something funny.' },
    { keywords: ['fact'], response: 'Did you know? Honey never spoils!' },
    { keywords: ['science'], response: 'Science is fascinating! Do you have a favorite topic?' },
    { keywords: ['history'], response: 'History teaches us so much. What era interests you the most?' },
    { keywords: ['art'], response: 'Art is a form of expression. Do you like painting or drawing?' },
    { keywords: ['technology'], response: 'Technology evolves so fast! What’s your favorite gadget?' },
    { keywords: ['pet'], response: 'Pets are adorable! Do you have one?' },
    { keywords: ['game'], response: 'Gaming is so much fun! What’s your favorite game?' },
    { keywords: ['free fire', 'ff', 'epep', 'mobile legends', 'ml', 'emel'], response: 'Wow, thats a really fun game, the owner also plays that game.' },
    { keywords: ['fitness'], response: 'Fitness is important. Do you enjoy working out?' },
    { keywords: ['health'], response: 'Health is wealth. Are you taking care of yourself?' },
    { keywords: ['motivation'], response: 'Stay motivated! You can achieve anything you set your mind to.' },
    { keywords: ['memek', 'pepek', 'kontol', 'kntl', 'mmk', 'puki', 'pusi',], response: 'wow you are so rude bro, are you crazy?' },
    { keywords: ['contact', 'kontak'], response: 'Contact me On Email :fizzx61@gmail.com, Whatsapp :+62857-7656-8948.' },
    { keywords: ['coding', 'programming'], response: 'Coding is a great skill to have. Which language are you learning?' },
    { keywords: ['javascript', 'js'], response: 'JavaScript is awesome for web development. Do you have a specific question?' },
    { keywords: ['php'], response: 'PHP is great for server-side scripting. Are you building something with it?' },
    { keywords: ['css'], response: 'CSS is what makes websites beautiful. Do you need help with a design?' },
    { keywords: ['html'], response: 'HTML is the backbone of web pages. Are you learning the basics?' },
    { keywords: ['react'], response: 'React is a powerful library for building UI. What feature are you working on?' },
    { keywords: ['hobby'], response: 'Hobbies make life enjoyable. What’s yours?' },
    { keywords: ['relationship'], response: 'Relationships are special. How can I help you with that?' },
    { keywords: ['money'], response: 'Money management is important. Are you looking for tips?' },
    { keywords: ['investment'], response: 'Investments can grow your wealth. Are you exploring stocks or crypto?' },
    { keywords: ['crypto', 'bitcoin', 'ethereum'], response: 'Cryptocurrency is a booming topic. Do you have a favorite coin?' },
    { keywords: ['sports', 'football', 'soccer'], response: 'Sports are exciting! Do you support a team?' },
    { keywords: ['cricket'], response: 'Cricket is so thrilling! Who’s your favorite player?' },
    { keywords: ['basketball'], response: 'Basketball is a fast-paced game. Do you play or just watch?' },
    { keywords: ['anime'], response: 'Anime is amazing! What’s your favorite series?' },
    { keywords: ['manga'], response: 'Manga is so creative! Do you have a favorite genre?' },
    { keywords: ['kpop'], response: 'K-Pop is globally popular! Which group do you follow?' },
    { keywords: ['idol'], response: 'Idols inspire us all. Who is your idol?' },
    { keywords: ['music', 'song'], response: 'Music connects everyone. What’s your favorite song right now?' },
    { keywords: ['streaming', 'netflix'], response: 'Streaming platforms are great! Watching anything interesting?' },
    { keywords: ['series', 'tv show'], response: 'Series can be addictive! What’s your recommendation?' },
    { keywords: ['youtube'], response: 'YouTube has everything! What do you usually watch?' },
    { keywords: ['travel'], response: 'Traveling opens up the world! What’s your dream destination?' },
    { keywords: ['vacation'], response: 'Vacations are a time to relax. Any plans soon?' },
    { keywords: ['study', 'learning'], response: 'Learning is a lifelong process. What are you studying?' },
    { keywords: ['career'], response: 'Building a career is exciting. What’s your goal?' },
    { keywords: ['future'], response: 'The future holds great potential. What’s your dream for the future?' },
    { keywords: ['goal'], response: 'Setting goals helps you stay focused. What’s your current goal?' },
    { keywords: ['exercise'], response: 'Exercise keeps us fit. Do you have a favorite workout?' },
    { keywords: ['diet'], response: 'Healthy eating is vital. Are you following any specific diet?' },
    { keywords: ['technology', 'gadget'], response: 'Tech keeps evolving. Got any cool gadgets to share?' },
    { keywords: ['gaming'], response: 'Gaming is life for many! What games are you playing these days?' },
    { keywords: ['mobile legends', 'mlbb'], response: 'Mobile Legends is super popular! Which hero is your favorite?' },
    { keywords: ['pubg'], response: 'PUBG is intense! What’s your favorite map?' },
    { keywords: ['valorant'], response: 'Valorant is a tactical masterpiece. What’s your rank?' },
    { keywords: ['job'], response: 'Jobs are part of life. What’s your dream job?' },
    { keywords: ['freelance'], response: 'Freelancing is flexible and rewarding. Are you working on projects?' },
    { keywords: ['education'], response: 'Education opens doors. What are you passionate about learning?' },
    { keywords: ['motivation'], response: 'Here’s a motivational thought: “The harder you work for something, the greater you’ll feel when you achieve it.”' },
    { keywords: ['quotes'], response: 'Here’s a quote for you: “Dream big, work hard, and make it happen!”' },
    { keywords: ['weather'], response: 'Weather can affect our mood. Is it sunny or rainy there?' },
    { keywords: ['shopping'], response: 'Shopping is fun! Are you an online or offline shopper?' },
    { keywords: ['discount', 'sale'], response: 'Who doesn’t love discounts? Found any good deals lately?' },
    { keywords: ['holiday', 'celebration'], response: 'Holidays bring joy! Do you have a favorite festival?' },
    { keywords: ['fashion'], response: 'Fashion is a form of self-expression. What’s your style?' },
    { keywords: ['pet'], response: 'Pets bring so much joy. What’s your pet’s name?' },
    { keywords: ['advice'], response: 'I’m here to help! What advice do you need?' },
    { keywords: ['health', 'well-being'], response: 'Taking care of yourself is vital. Need tips?' },
        { keywords: ['coding', 'programming'], response: 'Coding is a superpower! Need help with a project?' },
        { keywords: ['python'], response: 'Python is perfect for beginners and experts alike. What are you coding?' },
        { keywords: ['ai', 'artificial intelligence'], response: 'AI is the future! Are you learning or building something with AI?' },
        { keywords: ['startup'], response: 'Startups are exciting and challenging. Do you have an idea to share?' },
        { keywords: ['entrepreneur'], response: 'Entrepreneurship is a journey. What’s your business idea?' },
        { keywords: ['success'], response: 'Success comes with hard work and determination. Keep pushing forward!' },
        { keywords: ['failure'], response: 'Failures are stepping stones to success. Learn and grow!' },
        { keywords: ['adventure'], response: 'Life is an adventure! Where’s your next big journey?' },
        { keywords: ['memories'], response: 'Cherish your memories. They make life special.' },
        { keywords: ['childhood'], response: 'Childhood days are the best. What’s your favorite memory?' },
        { keywords: ['parent'], response: 'Parents are our first teachers. Share something special about yours.' },
        { keywords: ['hope'], response: 'Hope keeps us moving forward. Never lose it!' },
        { keywords: ['nature'], response: 'Nature is so peaceful. Do you enjoy hiking or outdoor adventures?' },
        { keywords: ['photo'], response: 'Photography captures moments forever. Do you have a favorite shot?' },
        { keywords: ['art'], response: 'Art is all around us. What’s your favorite medium?' },
        { keywords: ['life'], response: 'Life is a gift. What are you most grateful for?' },
        { keywords: ['kindness'], response: 'Kindness is contagious. Spread it around!' },
        { keywords: ['happiness'], response: 'Happiness is in the little things. What makes you happy?' },
        { keywords: ['sadness'], response: 'It’s okay to feel sad sometimes. Take your time to heal.' },
        { keywords: ['meditation'], response: 'Meditation brings peace to the mind. Have you tried it?' },
        { keywords: ['exercise'], response: 'Fitness is key to a healthy life. What’s your go-to workout?' },
        { keywords: ['cycling'], response: 'Cycling is a great way to explore and stay fit. Do you enjoy it?' },
        { keywords: ['vacation'], response: 'Vacations recharge our souls. Where’s your dream destination?' },
        { keywords: ['party'], response: 'Parties are great for socializing. What’s your favorite party theme?' },
        { keywords: ['birthday'], response: 'Birthdays are special. How do you usually celebrate?' },
        { keywords: ['new year'], response: 'New Year is about fresh starts. What’s your resolution?' },
        { keywords: ['weekend'], response: 'Weekends are for relaxation. What are your plans?' },
        { keywords: ['goals'], response: 'Setting goals is the first step to achieving them. What’s yours?' },
        { keywords: ['habit'], response: 'Good habits lead to great success. What habit are you working on?' },
        { keywords: ['productivity'], response: 'Staying productive is a skill. Need any tips?' },
        { keywords: ['relaxation'], response: 'Relaxing is essential. How do you unwind?' },
        { keywords: ['festival'], response: 'Festivals bring people together. Do you have a favorite one?' },
        { keywords: ['dream'], response: 'Dream big and chase it. What’s your ultimate dream?' },
        { keywords: ['wish'], response: 'Make a wish and work for it! What’s your wish?' },
        { keywords: ['goal'], response: 'Goals keep us focused. What’s your current focus?' },
        { keywords: ['idea'], response: 'Ideas change the world. Share yours!' },
        { keywords: ['school', 'teacher'], response: 'Teachers shape lives. Do you have a teacher you admire?' },
        { keywords: ['books'], response: 'Books open up new worlds. What are you reading?' },
        { keywords: ['poetry'], response: 'Poetry is the language of emotions. Do you have a favorite poem?' },
        { keywords: ['dance'], response: 'Dancing is pure joy. Do you enjoy dancing?' },
        { keywords: ['holiday'], response: 'Holidays are for making memories. What’s your favorite holiday?' },
        { keywords: ['festival'], response: 'Festivals bring joy. Do you have a special tradition?' },
        { keywords: ['dream'], response: 'Dream big! What’s your vision for the future?' },
        { keywords: ['travel'], response: 'Traveling expands horizons. Where do you want to go next?' },
        { keywords: ['language'], response: 'Languages connect cultures. Are you learning a new one?' },
        { keywords: ['career'], response: 'Your career is your journey. What are your goals?' },
        { keywords: ['food'], response: 'Food is love. What’s your favorite dish?' },
        { keywords: ['recipe'], response: 'Cooking is an art. What’s your favorite recipe?' },
        { keywords: ['pets'], response: 'Pets are part of the family. Do you have one?' },
        { keywords: ['volunteer'], response: 'Volunteering makes a difference. Have you volunteered before?' },
        { keywords: ['change'], response: 'Change is the only constant. What change are you embracing?' }
    
  ];

  // Cari respons berdasarkan kata kunci
  for (let i = 0; i < responses.length; i++) {
    for (let keyword of responses[i].keywords) {
      if (lowerCaseMessage.includes(keyword)) {
        return responses[i].response;
      }
    }
  }

  // Respons default jika tidak ditemukan kecocokan
  return "lol I'm not sure I understand that. Can you rephrase?";
}
