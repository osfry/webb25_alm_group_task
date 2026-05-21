import mongoose from 'mongoose';
import '../test-setup.js';
import { describe, it, expect } from "vitest";
import Accommodation from '../../src/models/accommodation.js';
import User from '../../src/models/User.js';

describe("Accommodation Model", () => {

  it("should create a valid accommodation", async () => {
const user = await User.create({ 
  username: "testuser", 
  email: "test@test.com" 
});    const accommodation = await Accommodation.create({
      adress: "Storgatan",
      city: "Sthlm",
      country: "Swe",
      zip: 12555,
      rent: 10000,
      room: 223,
      userId: user._id
    });
    expect(accommodation.adress).toBe("Storgatan");
    expect(accommodation.city).toBe("Sthlm");
    expect(accommodation.country).toBe("Swe");
    expect(accommodation.zip).toBe(12555);
    expect(accommodation.rent).toBe(10000);
    expect(accommodation.room).toBe(223);
    expect(accommodation.userId.toString()).toBe(user._id.toString());  });

    it("should fail without 'adress'", async () => {
  await expect(
    Accommodation.create({
      city: "Sthlm",
      country: "Swe",
      zip: 12555,
      rent: 10000,
      room: 223,
      userId: new mongoose.Types.ObjectId(),
    })
  ).rejects.toThrow();
});

it("should fail without 'city'", async () => {
  await expect(
    Accommodation.create({
      adress: "Storgatan",
      country: "Swe",
      zip: 12555,
      rent: 10000,
      room: 223,
      userId: new mongoose.Types.ObjectId(),
    })
  ).rejects.toThrow();
});

it("should fail without 'country'", async () => {
  await expect(
    Accommodation.create({
      adress: "Storgatan",
      city: "Sthlm",
      zip: 12555,
      rent: 10000,
      room: 223,
      userId: new mongoose.Types.ObjectId(),
    })
  ).rejects.toThrow();
});

it("should fail without 'zip'", async () => {
  await expect(
    Accommodation.create({
      adress: "Storgatan",
      city: "Sthlm",
      country: "Swe",
      rent: 10000,
      room: 223,
      userId: new mongoose.Types.ObjectId(),
    })
  ).rejects.toThrow();
});

it("should fail without 'rent'", async () => {
  await expect(
    Accommodation.create({
      adress: "Storgatan",
      city: "Sthlm",
      country: "Swe",
      zip: 12555,
      room: 223,
      userId: new mongoose.Types.ObjectId(),
    })
  ).rejects.toThrow();
});

it("should fail without 'room'", async () => {
  await expect(
    Accommodation.create({
      adress: "Storgatan",
      city: "Sthlm",
      country: "Swe",
      zip: 12555,
      rent: 10000,
      userId: new mongoose.Types.ObjectId(),
    })
  ).rejects.toThrow();
});

it("should fail without 'userId'", async () => {
  await expect(
    Accommodation.create({
      adress: "Storgatan",
      city: "Sthlm",
      country: "Swe",
      zip: 12555,
      rent: 10000,
      room: 223,
    })
  ).rejects.toThrow();
});

it("should cascade delete accommodations when user is deleted", async () => {
  const user = await User.create({
    username: "testuser",
    email: "test@test.com",
  });

  const accommodation = await Accommodation.create({
    adress: "Storgatan",
    city: "Sthlm",
    country: "Swe",
    zip: 12555,
    rent: 10000,
    room: 223,
    userId: user._id,
  });

  await User.findByIdAndDelete(user._id);

  const found = await Accommodation.findById(accommodation._id);
  expect(found).toBeNull();
});  
});
