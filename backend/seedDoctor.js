import mongoose from "mongoose";
import doctorModel from "./models/doctorModel.js";
import dotenv from "dotenv";
import bycrypt from "bcrypt";

dotenv.config();

const imageUrls = [
  "https://res.cloudinary.com/dpomrmope/image/upload/v1764440205/doc1_wl7s5x.png",
  "https://res.cloudinary.com/dpomrmope/image/upload/v1764440205/doc2_y4ftoq.png",
  "https://res.cloudinary.com/dpomrmope/image/upload/v1764440205/doc3_wnceh8.png",
  "https://res.cloudinary.com/dpomrmope/image/upload/v1764440205/doc4_bpr7dh.png",
  "https://res.cloudinary.com/dpomrmope/image/upload/v1764440205/doc5_jfpdvk.png",
  "https://res.cloudinary.com/dpomrmope/image/upload/v1764440205/doc6_d15i6v.png",
  "https://res.cloudinary.com/dpomrmope/image/upload/v1764440206/doc7_fje2ks.png",
  "https://res.cloudinary.com/dpomrmope/image/upload/v1764440207/doc8_sj6nlx.png",
  "https://res.cloudinary.com/dpomrmope/image/upload/v1764440206/doc9_vztfeu.png",
  "https://res.cloudinary.com/dpomrmope/image/upload/v1764440206/doc10_vpwv4s.png",
  "https://res.cloudinary.com/dpomrmope/image/upload/v1764440207/doc11_n8ks3l.png",
  "https://res.cloudinary.com/dpomrmope/image/upload/v1764440206/doc12_yvuyjd.png",
  "https://res.cloudinary.com/dpomrmope/image/upload/v1764440207/doc13_rjjc9y.png",
  // fallback: if no doc14 provided, reuse doc13 or any other
  "https://res.cloudinary.com/dpomrmope/image/upload/v1764440207/doc13_rjjc9y.png",
  "https://res.cloudinary.com/dpomrmope/image/upload/v1764440207/doc15_njd9cl.png"
];

const doctorsData = [
    {
        name: 'Dr. Richard James',
        image: imageUrls[0],
        speciality: 'General physician',
        degree: 'MBBS',
        experience: '4 Years',
        about: 'Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies.',
        fees: 50,
        address: { line1: '17th Cross, Richmond', line2: 'Circle, Ring Road, London' },
        email: 'richard@gmail.com',
        password: 'password123',
        available: true,
        date: new Date()
    },
    {
        name: 'Dr. Emily Larson',
        image: imageUrls[1],
        speciality: 'Gynecologist',
        degree: 'MBBS',
        experience: '3 Years',
        about: 'Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies.',
        fees: 60,
        address: { line1: '27th Cross, Richmond', line2: 'Circle, Ring Road, London' },
        email: 'emily@gmail.com',
        password: 'password123',
        available: true,
        date: new Date()
    },
    {
        name: 'Dr. Sarah Patel',
        image: imageUrls[2],
        speciality: 'Dermatologist',
        degree: 'MBBS',
        experience: '1 Years',
        about: 'Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies.',
        fees: 30,
        address: { line1: '37th Cross, Richmond', line2: 'Circle, Ring Road, London' },
        email: 'sarah@gmail.com',
        password: 'password123',
        available: true,
        date: new Date()
    },
    {
        name: 'Dr. Christopher Lee',
        image: imageUrls[3],
        speciality: 'Pediatricians',
        degree: 'MBBS',
        experience: '2 Years',
        about: 'Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies.',
        fees: 40,
        address: { line1: '47th Cross, Richmond', line2: 'Circle, Ring Road, London' },
        email: 'christopher@gmail.com',
        password: 'password123',
        available: true,
        date: new Date()
    },
    {
        name: 'Dr. Jennifer Garcia',
        image: imageUrls[4],
        speciality: 'Neurologist',
        degree: 'MBBS',
        experience: '4 Years',
        about: 'Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies.',
        fees: 50,
        address: { line1: '57th Cross, Richmond', line2: 'Circle, Ring Road, London' },
        email: 'jennifer@gmail.com',
        password: 'password123',
        available: true,
        date: new Date()
    },
    {
        name: 'Dr. Andrew Williams',
        image: imageUrls[5],
        speciality: 'Neurologist',
        degree: 'MBBS',
        experience: '4 Years',
        about: 'Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies.',
        fees: 50,
        address: { line1: '57th Cross, Richmond', line2: 'Circle, Ring Road, London' },
        email: 'andrew@gmail.com',
        password: 'password123',
        available: true,
        date: new Date()
    },
    {
        name: 'Dr. Christopher Davis',
        image: imageUrls[6],
        speciality: 'General physician',
        degree: 'MBBS',
        experience: '4 Years',
        about: 'Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies.',
        fees: 50,
        address: { line1: '17th Cross, Richmond', line2: 'Circle, Ring Road, London' },
        email: 'davis@gmail.com',
        password: 'password123',
        available: true,
        date: new Date()
    },
    {
        name: 'Dr. Timothy White',
        image: imageUrls[7],
        speciality: 'Gynecologist',
        degree: 'MBBS',
        experience: '3 Years',
        about: 'Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies.',
        fees: 60,
        address: { line1: '27th Cross, Richmond', line2: 'Circle, Ring Road, London' },
        email: 'timothy@gmail.com',
        password: 'password123',
        available: true,
        date: new Date()
    },
    {
        name: 'Dr. Ava Mitchell',
        image: imageUrls[8],
        speciality: 'Dermatologist',
        degree: 'MBBS',
        experience: '1 Years',
        about: 'Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies.',
        fees: 30,
        address: { line1: '37th Cross, Richmond', line2: 'Circle, Ring Road, London' },
        email: 'ava@gmail.com',
        password: 'password123',
        available: true,
        date: new Date()
    },
    {
        name: 'Dr. Jeffrey King',
        image: imageUrls[9],
        speciality: 'Pediatricians',
        degree: 'MBBS',
        experience: '2 Years',
        about: 'Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies.',
        fees: 40,
        address: { line1: '47th Cross, Richmond', line2: 'Circle, Ring Road, London' },
        email: 'jeffrey@gmail.com',
        password: 'password123',
        available: true,
        date: new Date()
    },
    {
        name: 'Dr. Zoe Kelly',
        image: imageUrls[10],
        speciality: 'Gastroenterologist',
        degree: 'MBBS',
        experience: '4 Years',
        about: 'Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies.',
        fees: 50,
        address: { line1: '57th Cross, Richmond', line2: 'Circle, Ring Road, London' },
        email: 'zoe@gmail.com',
        password: 'password123',
        available: true,
        date: new Date()
    },
    {
        name: 'Dr. Patrick Harris',
        image: imageUrls[11],
        speciality: 'Neurologist',
        degree: 'MBBS',
        experience: '4 Years',
        about: 'Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies.',
        fees: 50,
        address: { line1: '57th Cross, Richmond', line2: 'Circle, Ring Road, London' },
        email: 'patrick@gmail.com',
        password: 'password123',
        available: true,
        date: new Date()
    },
    {
        name: 'Dr. Chloe Evans',
        image: imageUrls[12],
        speciality: 'General physician',
        degree: 'MBBS',
        experience: '4 Years',
        about: 'Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies.',
        fees: 50,
        address: { line1: '17th Cross, Richmond', line2: 'Circle, Ring Road, London' },
        email: 'chloe@gmail.com',
        password: 'password123',
        available: true,
        date: new Date()
    },
    {
        name: 'Dr. Ryan Martinez',
        image: imageUrls[13],
        speciality: 'Gynecologist',
        degree: 'MBBS',
        experience: '3 Years',
        about: 'Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies.',
        fees: 60,
        address: { line1: '27th Cross, Richmond', line2: 'Circle, Ring Road, London' },
        email: 'ryan@gmail.com',
        password: 'password123',
        available: true,
        date: new Date()
    },
    {
        name: 'Dr. Amelia Hill',
        image: imageUrls[14],
        speciality: 'Dermatologist',
        degree: 'MBBS',
        experience: '1 Years',
        about: 'Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies.',
        fees: 30,
        address: { line1: '37th Cross, Richmond', line2: 'Circle, Ring Road, London' },
        email: 'amelia@gmail.com',
        password: 'password123',
        available: true,
        date: new Date()
    }
];

const seedDoctors = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URI);
        console.log("✅ Connected to MongoDB");

        // Hash passwords
        for (let doctor of doctorsData) {
            const hashedPassword = await bycrypt.hash(doctor.password, 10);
            doctor.password = hashedPassword;
        }

        // Clear existing doctors
        await doctorModel.deleteMany({});
        console.log("🗑️  Cleared existing doctors");

        // Insert new doctors
        await doctorModel.insertMany(doctorsData);
        console.log(`✅ ${doctorsData.length} doctors seeded successfully!`);

        process.exit(0);
    } catch (error) {
        console.error("❌ Error seeding doctors:", error);
        process.exit(1);
    }
};

seedDoctors();