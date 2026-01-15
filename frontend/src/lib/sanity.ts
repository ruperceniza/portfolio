import { createClient } from '@sanity/client'

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET!
const apiVersion = process.env.NEXT_PUBLIC_SANITY_API_VERSION || '2024-01-01'
const token = process.env.NEXT_PUBLIC_SANITY_TOKEN

export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: false,
  token: process.env.NEXT_PUBLIC_SANITY_TOKEN,
})

export async function getProjects() {
  return client.fetch(`*[_type == "project"] | order(_createdAt desc)`)
}

export async function getSkills() {
  return client.fetch(`*[_type == "skill"] | order(order asc) {
    _id,
    label,
    category,
    color,
    logo,
    textColor,
    order,
    level
  }`)
}

export async function getSocialLinks() {
  return client.fetch(`*[_type == "social"] | order(order asc)`)
}

export async function getPhotos() {
  return client.fetch(`*[_type == "photo"] | order(order asc)`)
}

export async function getAbout() {
  return client.fetch(`*[_type == "about"][0] {
    _id,
    name,
    location,
    photo,
    bio,
    age,
    nationality,
    interests,
    study,
    employment,
    email,
    linkedin,
    github
  }`)
}

export async function getEducation() {
  return client.fetch(`*[_type == "education"] | order(order asc) {
    _id,
    date,
    location,
    title,
    content,
    order
  }`)
}

export async function getExperience() {
  return client.fetch(`*[_type == "experience"] | order(order asc) {
    _id,
    date,
    location,
    title,
    content,
    order
  }`)
}
