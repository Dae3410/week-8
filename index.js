// Music Artist

// Class Artist
class Artist {
    constructor(name, shows) {
      this.name = name;
      this.shows = shows;
      this.ticketsAvailable = 100;
    }
  
    // Method to purchase tickets
    purchaseTickets(numTickets) {
      if (numTickets <= 0) {
        alert("Please enter a positive number of tickets.");
        return false;
      }
  
      if (numTickets > this.ticketsAvailable) {
        alert(`Sorry, only ${this.ticketsAvailable} tickets are available.`);
        return false;
      }
  
      this.ticketsAvailable -= numTickets;
      alert(`Successfully purchased ${numTickets} tickets for ${this.name}'s show.`);
      return true;
    }
  }
  
  // Class Menu
  class Menu {
    constructor() {
      this.artists = []; // Array of artists
    }
  
    // Show the main menu
    showMainMenu() {
      return prompt(`
        Main Menu:
        ----------------
        0) Exit Menu
        1) Add Artist
        2) Delete Artist
        3) View All Upcoming Shows
        4) Buy Tickets
      `);
    }
  
    // Add a new artist
    addArtist() {
      let artistName = prompt("Enter Artist Name:");
      let artistShows = prompt("Enter Location:");
      this.artists.push(new Artist(artistName, artistShows));
    }
  
    // Buy tickets
    buyTickets() {
      if (this.artists.length === 0) {
        alert("No artists available. Please add an artist first.");
        return;
      }
  
      let artistName = prompt("Enter the name of the artist you want to buy tickets for:");
      let artist = this.artists.find(a => a.name === artistName);
  
      if (!artist) {
        alert("Artist not found.");
        return;
      }
  
      let numTickets = parseInt(prompt(`Enter the number of tickets for ${artistName}:`), 10);
      artist.purchaseTickets(numTickets);
    }
  
    // View upcoming shows
    viewUpcomingShows() {
      let displayShows = '';
  
      for (let i = 0; i < this.artists.length; i++) {
        displayShows += `${this.artists[i].name} - ${this.artists[i].shows} (Tickets available: ${this.artists[i].ticketsAvailable})\n`;
      }
  
      alert(`
        Upcoming Shows:
  
        ${displayShows}
      `);
    }
  
    // Delete an artist
    deleteArtist() {
      if (this.artists.length === 0) {
        alert("No artists available to delete.");
        return;
      }
  
      let artistName = prompt("Enter the name of the artist you want to delete:");
      let index = this.artists.findIndex(a => a.name === artistName);
  
      if (index === -1) {
        alert("Artist not found.");
        return;
      }
  
      this.artists.splice(index, 1); 
      alert(`Artist ${artistName} has been removed.`);
    }
  
    // Start the menu loop
    start() {
      let selection = this.showMainMenu();
      while (selection != 0) {
        switch (selection) {
          case "1":
            this.addArtist();
            break;
          case "2":
            this.deleteArtist();
            break;
          case "3":
            this.viewUpcomingShows();
            break;
          case "4":
            this.buyTickets();
            break;
          default:
            alert("Invalid choice, please try again.");
        }
        selection = this.showMainMenu();
      }
      alert("Exiting Menu");
    }
  }
  
  // Start the menu
  let menu = new Menu();

  menu.start();
  