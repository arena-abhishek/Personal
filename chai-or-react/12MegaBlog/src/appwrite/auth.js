import config from "../config/config.js";
import { Client, Account, ID } from "appwrite"; // Import ID from appwrite

export class AuthService {
  Client = new Client();
  account;

  constructor() {
    this.Client.setEndpoint(config.appwriteUrl).setProject(config.appwriteProjectId);
    this.account = new Account(this.Client);
  }

  async createAccount(email, password, name) {
    try {
      // Create a new user account
      const userAccount = await this.account.create(ID.unique(), email, password, name);
      return userAccount; // Return the created user account
    } catch (error) {
      console.error("Error creating account:", error);
      throw error; // Rethrow the error for further handling
    }
  }

  async login(email, password) {
    try {
      const session = await this.account.createEmailSession(email, password); // Await the session creation
      return session; // Return the session if successful
    } catch (error) {
      console.error("Error logging in:", error);
      throw error; // Rethrow the error for further handling
    }
  }

async getAccount() {
    try {
     await this.account.get(); // Get the account details
    
    } catch (error) {
      console.error("Error getting account:", error);
      throw error; // Rethrow the error for further handling
    }
    return null;
  }

  async logout() {
    try {
      await this.account.deleteSession("current"); // Delete the current session
    } catch (error) {
      console.error("Error logging out:", error);
      throw error; // Rethrow the error for further handling
    }
  }
}

const authService = new AuthService();

export default authService;