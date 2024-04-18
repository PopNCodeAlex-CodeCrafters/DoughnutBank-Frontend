import DiffieHellman from '../../../services/DiffieHellman';

it.each([['Simple message'], ['Only if there was a way']])(
  'encrypts and decrypts correctly',
  (messageToEncrypt) => {
    //arrange
    const alice = new DiffieHellman();
    const bob = new DiffieHellman();
    
    //act
    const messageEncryptedByAlice = alice.encrypt(bob.publicKey, messageToEncrypt);
    const messageDecryptedByBob = bob.decrypt(alice.publicKey, messageEncryptedByAlice, alice.iv);
    
    //assert
    expect(messageDecryptedByBob).toBe(messageToEncrypt);
  }
);
