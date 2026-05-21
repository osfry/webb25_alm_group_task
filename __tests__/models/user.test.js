import "../test-setup";
import { describe, it, expect, beforeAll } from "vitest";
import User from "../../src/models/User";

beforeAll(async () => {
  await User.syncIndexes();
});

describe("User Model", () => {
  it("should create a user", async () => {
    const user = await User.create({
      username: "testuser",
      email: "test@test.com",
    });

    expect(user).toBeDefined();
    expect(user.username).toBe("testuser");
    expect(user.email).toBe("test@test.com");
  });

  // TODO: Test that email must be unique
    it('requires a unique email', async() =>{
      await User.create({ username: 'user1', email: "test@mail.com"})
      await expect(User.create({ username: "user2", email: "test@mail.com"})
      ).rejects.toMatchObject({ code: 11000})
      })
      
      // TODO: Test that username must be unique
      it('requires a unique username', async () => {
        await User.create({ username: 'dupuser', email: 'dup1@example.com' })
        await expect(User.create({ username: 'dupuser', email: 'dup2@example.com' })).rejects.toMatchObject({
          code: 11000
        })
        // TODO: Test that email format is validated
        // TODO: Test that profileImage is a valid URL
      })
});
