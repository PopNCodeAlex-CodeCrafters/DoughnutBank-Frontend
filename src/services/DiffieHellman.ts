var CryptoJS = require('crypto-js');
import { Client } from 'diffie-hellman-ts';

export default class DiffieHellman {
    private diffieHellman = new Client();
    publicKey = this.diffieHellman.generatePublicNumber();
    iv = null;
  
  encrypt(otherPartyPublicKey: string, message: string): string {
    var derivedKey = this.computeDerivedKey(otherPartyPublicKey);
    return this.encryptUsingAes(message, derivedKey);
  }

  decrypt(otherPartyPublicKey: string, encryptedMessage: string, iv: string): string {
    var derivedKey = this.computeDerivedKey(otherPartyPublicKey);

    return this.decryptUsingAes(encryptedMessage, derivedKey, iv);
  }

  computeDerivedKey(otherPartyPublicKey: string): string{
    return this.diffieHellman.generateSharedSecret(otherPartyPublicKey);
  }

  encryptUsingAes(message: string, aesKey: string): string{
    this.iv = CryptoJS.enc.Hex.parse("101112131415161718191a1b1c1d1e1f");
    var encrypted = CryptoJS.AES.encrypt(message, aesKey, { iv: this.iv });
    return encrypted;
  }

  decryptUsingAes(encryptedMessage: string, aesKey: string, iv: string): string{
    var decrypted = CryptoJS.AES.decrypt(encryptedMessage, aesKey, { iv: iv });
    return decrypted.toString(CryptoJS.enc.Utf8);
  }
}

